#!/usr/bin/env python3
"""Estrae dalla trascrizione di una chat di Claude Code i turni con orario locale.

  extract.py outline [--session ID|PATH]
  extract.py show [--session ID|PATH] [--day today|YYYY-MM-DD|all] [--part morning|afternoon]
                  [--from HH:MM] [--to HH:MM] [--from-n N] [--to-n N]
Senza --session usa la chat piu' recente della cartella di lavoro corrente."""
import argparse, glob, json, os, re, sys
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')
U, A = 700, 900  # limiti di caratteri per messaggio utente / risposta finale


def find_session(arg):
    if arg and os.path.isfile(arg):
        return arg
    base = os.path.join(os.path.expanduser('~'), '.claude', 'projects')
    if arg:
        hits = glob.glob(os.path.join(base, '*', arg + '*.jsonl'))
        if hits:
            return hits[0]
        sys.exit('sessione non trovata: ' + arg)
    d = os.path.join(base, re.sub(r'[^A-Za-z0-9]', '-', os.getcwd()))
    files = glob.glob(os.path.join(d, '*.jsonl'))
    if not files:
        sys.exit('nessuna chat trovata per ' + os.getcwd())
    return max(files, key=os.path.getmtime)


def gather():
    """Chat piu' recente piu' le sessioni precedenti della stessa cartella che la precedono
    di meno di 24 ore (una chat ripresa in un'altra sessione): unite, senza doppioni, in ordine di orario."""
    d = os.path.join(os.path.expanduser('~'), '.claude', 'projects', re.sub(r'[^A-Za-z0-9]', '-', os.getcwd()))
    files = sorted(glob.glob(os.path.join(d, '*.jsonl')), key=os.path.getmtime, reverse=True)[:20]
    if not files:
        sys.exit('nessuna chat trovata per ' + os.getcwd())
    turns, names = load(files[0]), [os.path.basename(files[0])]
    for f in files[1:]:
        older = load(f)
        if not older or not turns:
            continue
        start = min(t['at'] for t in turns)
        if (start - max(t['at'] for t in older)).total_seconds() <= 86400:
            turns, names = turns + older, names + [os.path.basename(f)]
    seen, out = set(), []
    for t in sorted(turns, key=lambda t: t['at']):
        k = (t['at'], t['user'][:80])
        if k not in seen:
            seen.add(k)
            out.append(t)
    return out, names


def local(ts):
    return datetime.fromisoformat(ts.replace('Z', '+00:00')).astimezone()


def text_of(content):
    if isinstance(content, str):
        return content
    return '\n'.join(b.get('text', '') for b in content if isinstance(b, dict) and b.get('type') == 'text')


def load(path):
    turns, last, msgs = [], None, {}
    for line in open(path, encoding='utf-8', errors='ignore'):
        try:
            d = json.loads(line)
        except Exception:
            continue
        ts, t = d.get('timestamp'), d.get('type')
        if not ts or d.get('isSidechain'):
            continue
        if t == 'user' and not d.get('isMeta'):
            c = (d.get('message') or {}).get('content')
            if isinstance(c, list) and any(isinstance(b, dict) and b.get('type') == 'tool_result' for b in c):
                continue
            txt = text_of(c).strip()
            if not txt or txt.startswith(('<command-', '<local-command', '<system-reminder', '[Request interrupted')):
                continue
            last = dict(at=local(ts), user=txt, reply='', tools={}, files=[], sess=os.path.basename(path)[:8])
            turns.append(last)
        elif t == 'assistant' and last is not None:
            m = d.get('message') or {}
            for b in m.get('content') or []:
                if not isinstance(b, dict):
                    continue
                if b.get('type') == 'text' and b.get('text', '').strip():
                    last['reply'] = b['text'].strip()
                elif b.get('type') == 'tool_use':
                    key = (m.get('id'), b.get('id'))
                    if key in msgs:
                        continue
                    msgs[key] = 1
                    n = b.get('name', '?')
                    last['tools'][n] = last['tools'].get(n, 0) + 1
                    fp = (b.get('input') or {}).get('file_path')
                    if fp and n in ('Edit', 'Write', 'NotebookEdit'):
                        base = re.split(r'[/\\]', fp)[-1]
                        if base not in last['files']:
                            last['files'].append(base)
    return turns


def clip(s, n):
    s = re.sub(r'\n{3,}', '\n\n', s)
    return s if len(s) <= n else s[:n].rstrip() + ' [...]'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('cmd', choices=['outline', 'show'])
    ap.add_argument('--session')
    ap.add_argument('--day', default='all')
    ap.add_argument('--part', choices=['morning', 'afternoon'])
    ap.add_argument('--from', dest='frm')
    ap.add_argument('--to')
    ap.add_argument('--from-n', type=int)
    ap.add_argument('--to-n', type=int)
    a = ap.parse_args()
    if a.session:
        path = find_session(a.session)
        turns, names = load(path), [os.path.basename(path)]
    else:
        turns, names = gather()
    path = names[0]
    for i, t in enumerate(turns, 1):
        t['n'] = i
    if not turns:
        sys.exit('nessun messaggio nella chat')
    if a.cmd == 'outline':
        print('sessioni unite:', len(names), '(' + ', '.join(n[:8] for n in names) + ') | messaggi:', len(turns))
        prev = None
        for t in turns:
            if prev is None or (t['at'] - prev).total_seconds() > 2700 or t['at'].date() != prev.date():
                print('\n--- blocco dalle', t['at'].strftime('%Y-%m-%d %H:%M'))
            print('%3d  %s  [%s] %s' % (t['n'], t['at'].strftime('%H:%M'), t['sess'], re.sub(r'\s+', ' ', t['user'])[:80]))
            prev = t['at']
        return
    sel = turns
    if a.day != 'all':
        day = datetime.now().date() if a.day == 'today' else datetime.strptime(a.day, '%Y-%m-%d').date()
        sel = [t for t in sel if t['at'].date() == day]
    if a.part == 'morning':
        sel = [t for t in sel if t['at'].hour < 13]
    if a.part == 'afternoon':
        sel = [t for t in sel if t['at'].hour >= 13]
    hm = lambda s: tuple(int(x) for x in s.split(':'))
    if a.frm:
        sel = [t for t in sel if (t['at'].hour, t['at'].minute) >= hm(a.frm)]
    if a.to:
        sel = [t for t in sel if (t['at'].hour, t['at'].minute) <= hm(a.to)]
    if a.from_n:
        sel = [t for t in sel if t['n'] >= a.from_n]
    if a.to_n:
        sel = [t for t in sel if t['n'] <= a.to_n]
    print('messaggi selezionati: %d | dal %s al %s' % (len(sel), sel[0]['at'].strftime('%d/%m %H:%M') if sel else '-', sel[-1]['at'].strftime('%d/%m %H:%M') if sel else '-'))
    for t in sel:
        print('\n[%s] UTENTE: %s' % (t['at'].strftime('%d/%m %H:%M'), clip(t['user'], U)))
        if t['reply']:
            print('  CLAUDE: ' + clip(t['reply'], A).replace('\n', '\n  '))
        if t['tools']:
            print('  strumenti: ' + ', '.join('%s x%d' % kv for kv in t['tools'].items()))
        if t['files']:
            print('  file modificati: ' + ', '.join(t['files']))


main()
