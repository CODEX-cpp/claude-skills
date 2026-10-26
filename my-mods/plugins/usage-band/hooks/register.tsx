import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import type { Day, Store, View } from '../types'
import { CHAT_META } from './chatmeta'
import { SEED, SEED_KEY } from './seed'

const PANE = 'usage'
const store = atom({ plugin: 'usage-band', key: 'store' } as const, null)
const range = atom({ plugin: 'usage-band', key: 'range' } as const, 'mese')

const FONT = "system-ui, 'Segoe UI', sans-serif"
const A = '#d97757'
const A_TODAY = '#e8957a'
const BLUE = '#5b8def'
const GREEN = '#3fb27f'
const AMBER = '#e0a03a'
const TXT = '#f0eee6'
const SEC = '#a6a39a'
const MUTED = '#8c8a82'
const FAINT = '#6f6c64'
const BTN_ROOM = 100

const MONTHS = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
const DOW = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
const DOW_MON = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom']

const pad = (n: number) => String(n).padStart(2, '0')
const dkey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const monthKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`
const tokens = (n: number) =>
  n >= 1e9 ? `${+(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `${+(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${+(n / 1e3).toFixed(1)}k` : String(Math.round(n))
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const tw = (s: string, px: number) => s.length * px * 0.56
const prettyModel = (id: string) => {
  const parts = id.replace(/^claude-/, '').split('-').filter(Boolean)
  const name = parts.filter(x => !/^\d/.test(x)).join(' ')
  const ver = parts.filter(x => /^\d/.test(x) && x.length < 3).join('.')
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}${ver ? ` ${ver}` : ''}`
}
const clip = (s: string, max: number) => (s.length > max ? `${s.slice(0, Math.max(1, max - 1))}…` : s)

const text = (x: number, y: number, s: string, o: { size?: number; fill?: string; weight?: number; anchor?: string; ls?: number } = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size ?? 12}" fill="${o.fill ?? TXT}" font-weight="${o.weight ?? 400}"${o.anchor ? ` text-anchor="${o.anchor}"` : ''}${o.ls ? ` letter-spacing="${o.ls}"` : ''}>${esc(s)}</text>`
const rect = (x: number, y: number, w: number, h: number, fill: string, rx = 0, op = 1) =>
  `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${Math.max(0, w).toFixed(2)}" height="${Math.max(0, h).toFixed(2)}" rx="${rx}" fill="${fill}"${op < 1 ? ` fill-opacity="${op}"` : ''}/>`
const wh = (x: number, y: number, w: number, h: number, rx: number, op: number) => rect(x, y, w, h, '#fff', rx, op)

// Nome della chat: cartella di lavoro; per cartelle generiche (src, src-tauri...) aggiunge quella sopra.
const GENERIC = /^(src|src-tauri|app|apps|lib|server|client|frontend|backend|web|dist|build|public|docs?|tests?)$/i
const chatName = (cwd: string) => {
  const p = cwd.split(/[\\/]/).filter(Boolean)
  const last = p.pop() ?? cwd
  return GENERIC.test(last) && p.length ? `${p[p.length - 1]} / ${last}` : last
}
// Le chat senza cartella hanno una cartella temporanea "scratch-AAAA-MM-GG-xxxx".
const prettyChat = (n: string) => {
  const m = /^scratch-\d{4}-(\d{2})-(\d{2})-/.exec(n)
  return m ? `Chat senza cartella · ${m[2]}/${m[1]}` : n
}

const top = <T,>(o: Record<string, T>, n: number, f: (v: T) => number) =>
  Object.entries(o).sort((a, b) => f(b[1]) - f(a[1])).slice(0, n)

type Seg = { v: number; c: string }
type PillData = {
  width: number
  pct: number
  used: number
  max: number
  segs: Seg[]
  buffer: number
  legend: { c: string; label: string; v: number }[]
  meters: { label: string; pct: number; note: string }[]
}

function pillSvg(d: PillData) {
  const W = d.width
  const H = 56
  const x0 = 2
  const x1 = W - 2
  const out: string[] = []
  out.push(text(x0, 13.5, 'Contesto', { size: 11.5, fill: MUTED }))
  const px = x0 + tw('Contesto', 11.5) + 14
  out.push(
    `<text x="${px}" y="13.5" font-family="${FONT}" font-size="11.5" fill="${TXT}" font-weight="600">${Math.round(d.pct)}% <tspan fill="${FAINT}" font-weight="400">${esc(`${tokens(d.used)} / ${tokens(d.max)}`)}</tspan></text>`,
  )
  let cur = x1 - BTN_ROOM - 14
  d.meters.slice().reverse().forEach((m, i) => {
    const wn = tw(m.note, 11.5)
    const wp = tw(`${Math.round(m.pct)}%`, 12)
    const wl = tw(m.label, 11.5)
    const noteX = cur - wn
    const pctX = noteX - 7 - wp
    const barX = pctX - 7 - 48
    const lblX = barX - 7 - wl
    out.push(text(lblX, 13.5, m.label, { size: 11.5, fill: MUTED }))
    out.push(wh(barX, 7.5, 48, 4, 2, 0.08))
    out.push(rect(barX, 7.5, (48 * Math.min(100, m.pct)) / 100, 4, A, 2))
    out.push(text(pctX, 13.5, `${Math.round(m.pct)}%`, { size: 12 }))
    out.push(text(noteX, 13.5, m.note, { size: 11.5, fill: FAINT }))
    cur = lblX - 14
    if (i === 0) {
      out.push(wh(cur - 0.5, 2.5, 1, 14, 0, 0.08))
      cur -= 15
    }
  })
  const bw = x1 - x0
  out.push(wh(x0, 26, bw, 5, 3, 0.07))
  let sx = x0
  d.segs.forEach(s => {
    const w = Math.max(2, (s.v / d.max) * bw - 2)
    out.push(rect(sx, 26, w, 5, s.c, 2))
    sx += w + 2
  })
  if (d.buffer > 0) {
    const w = Math.max(2, (d.buffer / d.max) * bw)
    out.push(`<rect x="${sx}" y="26" width="${w}" height="5" rx="2" fill="url(#hatch)"/>`)
  }
  let lx = x0
  d.legend.forEach(l => {
    out.push(rect(lx, 44, 7, 7, l.c, 2))
    const s = `${l.label} ${tokens(l.v)}`
    out.push(text(lx + 12, 51.5, s, { size: 11, fill: MUTED }))
    lx += 12 + tw(s, 11) + 14
  })
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><pattern id="hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="2" height="4" fill="#5a5853"/></pattern></defs>${out.join('')}</svg>`
}

type DashData = {
  m: View
  now: Date
  mode: 'mese' | '7g'
  dates: Date[]
  prevTotal: number
  nDays: number
}

function dashSvg({ m, now, mode, dates, prevTotal, nDays }: DashData) {
  const W = 560
  const P = 18
  const IW = W - P * 2
  const o: string[] = []
  let y = 16
  const total = m.input + m.output + m.cacheWrite + m.cacheRead
  const sections = (label: string, note: string, noteFill = A) => {
    o.push(text(P, y + 9, label.toUpperCase(), { size: 11, fill: SEC, weight: 600, ls: 0.77 }))
    if (note) o.push(text(W - P, y + 9, note, { size: 11, fill: noteFill, weight: noteFill === A ? 500 : 400, anchor: 'end' }))
    y += 20
  }
  const axis = (labels: string[]) => {
    o.push(wh(P, y, IW, 1, 0, 0.08))
    labels.forEach((l, i) => {
      const anchor = i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle'
      const x = P + (IW * i) / (labels.length - 1)
      o.push(text(x, y + 16, l, { size: 10.5, fill: FAINT, anchor }))
    })
    y += 21
  }
  const bars = (vals: number[], h: number, gap: number, op: (i: number, peak: boolean) => number, fillOf: (i: number, peak: boolean) => string, label?: (i: number) => string, showVal?: (i: number, v: number) => boolean) => {
    const mx = Math.max(0, ...vals)
    const bw = (IW - gap * (vals.length - 1)) / vals.length
    const head = showVal ? 13 : 0 // spazio per il valore sopra la colonna più alta
    // valori da scrivere: dal più alto, saltando quelli troppo vicini a uno già scritto
    const shown = new Set<number>()
    if (showVal) {
      const minDist = 34
      vals
        .map((v, i) => ({ v, i }))
        .filter(c => c.v > 0 && showVal(c.i, c.v))
        .sort((a, b) => b.v - a.v)
        .forEach(c => {
          const cx = c.i * (bw + gap)
          if ([...shown].every(j => Math.abs(j * (bw + gap) - cx) >= minDist)) shown.add(c.i)
        })
    }
    vals.forEach((v, i) => {
      const bh = mx ? Math.max(v > 0 ? 2 : 0, (v / mx) * (h - head)) : 0
      const peak = mx > 0 && v === mx
      const x0 = P + i * (bw + gap)
      o.push(`<g class="b"><title>${esc(label ? label(i) : tokens(v))}</title><rect x="${x0.toFixed(2)}" y="${y}" width="${bw.toFixed(2)}" height="${h}" fill="#000" fill-opacity="0"/>`)
      if (bh === 0) {
        o.push(wh(P + i * (bw + gap), y + h - 2, bw, 2, 1, 0.07))
      } else {
        o.push(`<path d="M${(P + i * (bw + gap)).toFixed(2)} ${y + h} v${-Math.max(0, bh - 2)} q0 -2 2 -2 h${Math.max(0, bw - 4).toFixed(2)} q2 0 2 2 v${Math.max(0, bh - 2)} z" fill="${fillOf(i, peak)}" fill-opacity="${op(i, peak)}"/>`)
        if (shown.has(i)) o.push(text(x0 + bw / 2, y + h - bh - 4, tokens(v), { size: 9, fill: peak ? A : MUTED, weight: peak ? 600 : 400, anchor: 'middle' }))
      }
      o.push('</g>')
    })
    y += h
  }

  const dayKeys = Object.keys(m.days).filter(k => m.days[k] > 0)
  const fmt = (d: Date) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`
  o.push(text(P, y + 14, mode === 'mese' ? `${MONTHS[now.getMonth()]} ${now.getFullYear()}` : 'Settimana in corso', { size: 16, weight: 600 }))
  o.push(text(P, y + 32, `${fmt(dates[0])} – ${fmt(mode === '7g' ? dates[6] : now)} · ${dayKeys.length} ${dayKeys.length === 1 ? 'giorno con dati' : 'giorni con dati'}`, { size: 12, fill: MUTED }))
  y += 46

  o.push(text(P, y + 10, 'Token totali', { size: 12, fill: MUTED }))
  y += 40
  const big = tokens(total)
  o.push(text(P, y, big, { size: 34, weight: 600, ls: -0.68 }))
  if (prevTotal > 0) {
    const dl = Math.round(((total - prevTotal) / prevTotal) * 100)
    o.push(text(P + tw(big, 34) + 14, y - 4, `${dl >= 0 ? '▲' : '▼'} ${Math.abs(dl)}% vs periodo prec.`, { size: 12, fill: dl >= 0 ? GREEN : A }))
  }
  y += 14
  const comp = [
    { l: 'Input', v: m.input, c: GREEN },
    { l: 'Output', v: m.output, c: AMBER },
    { l: 'Cache write', v: m.cacheWrite, c: A },
    { l: 'Cache read', v: m.cacheRead, c: BLUE },
  ]
  let cx = P
  comp.forEach(c => {
    const w = total ? Math.max(3, (c.v / total) * (IW - 6)) : IW / 4
    o.push(rect(cx, y, w, 8, c.c, 4))
    cx += w + 2
  })
  y += 24
  let lx = P
  comp.forEach(c => {
    o.push(rect(lx, y - 8, 7, 7, c.c, 2))
    const s = `${c.l} ${tokens(c.v)}`
    o.push(text(lx + 12, y, s, { size: 11.5, fill: SEC }))
    lx += 12 + tw(s, 11.5) + 14
  })
  y += 32

  const projects = new Set(Object.values(m.chats).map(c => c.name)).size
  const cacheDen = m.cacheRead + m.cacheWrite + m.input
  const kpis = [
    ['Turni', m.turns.toLocaleString('it-IT'), `${Math.round(m.turns / nDays)} / giorno`],
    ['Media per turno', tokens(m.turns ? total / m.turns : 0), 'token / turno'],
    ['Sessioni', String(Object.keys(m.chats).length), `${projects} ${projects === 1 ? 'progetto' : 'progetti'}`],
    ['Costo stimato', `$${m.cost >= 100 ? Math.round(m.cost) : m.cost.toFixed(2)}`, 'da /cost'],
    ['Cache hit', `${cacheDen ? Math.round((m.cacheRead / cacheDen) * 100) : 0}%`, `${tokens(m.cacheRead)} letti`],
    ['Compattazioni', String(m.compactions), ' '],
  ]
  const cw = (IW - 2) / 3
  const ch = 70
  o.push(`<clipPath id="kc"><rect x="${P}" y="${y}" width="${IW}" height="${ch * 2 + 1}" rx="9"/></clipPath>`)
  o.push(`<g clip-path="url(#kc)">${wh(P, y, IW, ch * 2 + 1, 0, 0.06)}`)
  kpis.forEach((k, i) => {
    const cx_ = P + (i % 3) * (cw + 1)
    const cy_ = y + Math.floor(i / 3) * (ch + 1)
    o.push(rect(cx_, cy_, cw, ch, '#262624'))
    o.push(text(cx_ + 12, cy_ + 21, k[0], { size: 11, fill: MUTED }))
    o.push(text(cx_ + 12, cy_ + 42, k[1], { size: 17, weight: 600 }))
    o.push(text(cx_ + 12, cy_ + 58, k[2], { size: 10.5, fill: FAINT }))
  })
  o.push('</g>')
  y += ch * 2 + 1 + 28

  const list = dates.map(d => ({ v: m.days[dkey(d)] ?? 0, d }))
  const L = list.length
  const todayIdx = list.findIndex(l => dkey(l.d) === dkey(now))
  const dmax = Math.max(0, ...list.map(l => l.v))
  const peakDay = list.find(l => l.v === dmax && dmax > 0)
  const activeDays = list.filter(l => l.v > 0)
  const avgDay = activeDays.length ? activeDays.reduce((a, l) => a + l.v, 0) / activeDays.length : 0
  sections(mode === 'mese' ? 'Per giorno · mese' : 'Per giorno · settimana', peakDay ? `picco ${DOW[peakDay.d.getDay()]} ${pad(peakDay.d.getDate())}/${pad(peakDay.d.getMonth() + 1)} · ${tokens(dmax)}` : '')
  bars(list.map(l => l.v), 96, 3, (i, p) => (p || i === todayIdx ? 1 : 0.42), (i, p) => (p ? A : i === todayIdx ? A_TODAY : A), i => `${DOW[list[i].d.getDay()]} ${pad(list[i].d.getDate())}/${pad(list[i].d.getMonth() + 1)} · ${tokens(list[i].v)}`, (i, v) => mode === '7g' || i === todayIdx || v === dmax || v > avgDay)
  const at = (f: number) => fmt(list[Math.round((L - 1) * f)].d)
  axis(mode === '7g' ? ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'] : [at(0), at(0.25), at(0.5), at(0.75), at(1)])
  y += 7

  const hv = Array.from({ length: 24 }, (_, h) => m.hours[pad(h)] ?? 0)
  const hmax = Math.max(0, ...hv)
  const hp = hv.indexOf(hmax)
  const hTop3 = [...hv].sort((a, b) => b - a)[2] ?? 0
  const hsum = hv.reduce((a, b) => a + b, 0) || 1
  sections('Ore del giorno', hmax ? `punta ${pad(hp)}:00 – ${pad((hp + 1) % 24)}:00 · ${Math.round((hmax / hsum) * 100)}% del totale` : '')
  bars(hv, 64, 3, (i, p) => (p ? 1 : 0.42), () => A, i => `${pad(i)}:00 – ${pad((i + 1) % 24)}:00 · ${tokens(hv[i])}`, (i, v) => v >= hTop3)
  axis(['00', '06', '12', '18', '23'])
  y += 7

  let hot = { d: 0, h: 0, v: 0 }
  Object.entries(m.heat).forEach(([k, v]) => {
    const [dd, hh] = k.split('-').map(Number)
    if (v > hot.v) hot = { d: dd, h: hh, v }
  })
  const part = hot.h < 12 ? 'mattina' : hot.h < 18 ? 'pomeriggio' : 'sera'
  sections('Settimana × ora', hot.v ? `più intenso: ${DOW_MON[hot.d]} ${part}` : '', FAINT)
  const hmaxCell = hot.v || 1
  const cell = (IW - 26 - 2 * 23) / 24
  DOW_MON.forEach((dn, di) => {
    o.push(text(P, y + 10, dn, { size: 10, fill: FAINT }))
    for (let h = 0; h < 24; h++) {
      const k = (m.heat[`${di}-${h}`] ?? 0) / hmaxCell
      const cxx = P + 26 + h * (cell + 2)
      o.push(k < 0.05 ? wh(cxx, y, cell, 13, 2, 0.04) : rect(cxx, y, cell, 13, A, 2, +(0.1 + k * 0.9).toFixed(2)))
    }
    y += 15
  })
  y += 21

  sections('Chat più pesanti · mese', '', SEC)
  const chats = top(m.chats, 5, c => c.tokens)
  chats.forEach(([, c], i) => {
    const topModel = Object.entries(c.models).sort((a, b) => b[1] - a[1])[0]?.[0] ?? ''
    const short = topModel ? prettyModel(topModel) : ''
    const meta = `${c.turns} turni${short ? ` · ${short}` : ''}`
    const avail = IW - 22 - tw(meta, 11) - 8 - 52 - 8
    o.push(text(P, y + 10, String(i + 1), { size: 12.5, fill: FAINT }))
    o.push(text(P + 22, y + 10, clip(prettyChat(c.name), Math.floor(avail / (12.5 * 0.56))), { size: 12.5 }))
    o.push(text(W - P - 52 - 8, y + 10, meta, { size: 11, fill: FAINT, anchor: 'end' }))
    o.push(text(W - P, y + 10, tokens(c.tokens), { size: 12.5, weight: 600, anchor: 'end' }))
    o.push(wh(P + 22, y + 17, IW - 22, 3, 2, 0.06))
    o.push(rect(P + 22, y + 17, ((IW - 22) * c.tokens) / (chats[0][1].tokens || 1), 3, A, 2))
    y += 33
  })
  if (!chats.length) {
    for (let i = 0; i < 3; i++) {
      o.push(wh(P, y + 2, 10, 10, 2, 0.06))
      o.push(wh(P + 22, y + 4, 150 - i * 25, 6, 3, 0.06))
      o.push(wh(P + 22, y + 17, IW - 22, 3, 2, 0.04))
      y += 33
    }
    o.push(text(W / 2, y - 6, 'Nessun dato ancora · si riempie a ogni turno', { size: 11, fill: FAINT, anchor: 'middle' }))
    y += 8
  }
  y += 12

  const colW = (IW - 22) / 2
  const modelsList = top(m.models, 4, v => v.tokens)
  const mTot = modelsList.reduce((a, [, v]) => a + v.tokens, 0) || 1
  const mc = [A, BLUE, GREEN, AMBER]
  const y0 = y
  o.push(text(P, y + 9, 'MODELLI', { size: 11, fill: SEC, weight: 600, ls: 0.77 }))
  let mx_ = P
  modelsList.forEach(([, v], i) => {
    const w = Math.max(3, (v.tokens / mTot) * (colW - 2 * (modelsList.length - 1)))
    o.push(rect(mx_, y + 28, w, 8, mc[i], 4))
    mx_ += w + 2
  })
  if (!modelsList.length) {
    o.push(wh(P, y + 28, colW, 8, 4, 0.06))
    o.push(text(P, y + 58, 'Nessun dato ancora', { size: 12, fill: FAINT }))
  }
  let ry = y + 56
  modelsList.forEach(([name, v], i) => {
    o.push(rect(P, ry - 8, 7, 7, mc[i], 2))
    o.push(text(P + 14, ry, clip(prettyModel(name), 16), { size: 12 }))
    o.push(text(P + colW - 40, ry, tokens(v.tokens), { size: 12, fill: MUTED, anchor: 'end' }))
    o.push(text(P + colW, ry, `${Math.round((v.tokens / mTot) * 100)}%`, { size: 12, weight: 600, anchor: 'end' }))
    ry += 22
  })
  const tx2 = P + colW + 22
  const toolsList = top(m.tools, 5, v => v)
  o.push(text(tx2, y0 + 9, 'STRUMENTI', { size: 11, fill: SEC, weight: 600, ls: 0.77 }))
  let ty = y0 + 36
  toolsList.forEach(([name, n]) => {
    o.push(text(tx2, ty, clip(name, 10), { size: 12 }))
    o.push(wh(tx2 + 72, ty - 6, colW - 72 - 42, 3, 2, 0.06))
    o.push(rect(tx2 + 72, ty - 6, ((colW - 72 - 42) * n) / (toolsList[0][1] || 1), 3, SEC, 2))
    o.push(text(tx2 + colW, ty, tokens(n), { size: 12, fill: MUTED, anchor: 'end' }))
    ty += 22
  })
  if (!toolsList.length) o.push(text(tx2, ty, 'Nessun dato ancora', { size: 12, fill: FAINT }))
  y = Math.max(ry, ty + 22, y0 + 90) + 8

  const H = Math.ceil(y + 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><style>.b:hover path{fill-opacity:1}.b:hover{cursor:default}</style>${rect(0, 0, W, H, '#1f1e1d')}${o.join('')}</svg>`
}

const emptyDay = (): Day => ({
  turns: 0, input: 0, output: 0, cacheWrite: 0, cacheRead: 0, cost: 0, compactions: 0,
  hours: {}, heat: {}, chats: {}, models: {}, tools: {},
})

async function loadDays($: any, key: string): Promise<Record<string, Day>> {
  return ((await $.store.get(`v3:${key}`)) as Record<string, Day> | undefined) ?? {}
}

const withDay = (st: Store, k: string, f: (d: Day) => Day): Store => ({
  key: st.key,
  days: { ...st.days, [k]: f(st.days[k] ?? emptyDay()) },
})

const view = (all: Record<string, Day>, dates: Date[], titles: Record<string, string> = {}): View => {
  const v: View = { turns: 0, input: 0, output: 0, cacheWrite: 0, cacheRead: 0, cost: 0, compactions: 0, days: {}, hours: {}, heat: {}, chats: {}, models: {}, tools: {} }
  const addTo = (o: Record<string, number>, k: string, n: number) => (o[k] = (o[k] ?? 0) + n)
  dates.forEach(d => {
    const k = dkey(d)
    const x = all[k]
    if (!x) return
    v.turns += x.turns; v.input += x.input; v.output += x.output
    v.cacheWrite += x.cacheWrite; v.cacheRead += x.cacheRead
    v.cost += x.cost; v.compactions += x.compactions
    v.days[k] = x.input + x.output + x.cacheWrite + x.cacheRead
    Object.entries(x.hours).forEach(([h, n]) => addTo(v.hours, h, n))
    Object.entries(x.heat).forEach(([h, n]) => addTo(v.heat, h, n))
    Object.entries(x.tools).forEach(([h, n]) => addTo(v.tools, h, n))
    Object.entries(x.models).forEach(([name, mm]) => {
      const c = v.models[name] ?? { tokens: 0, turns: 0 }
      v.models[name] = { tokens: c.tokens + mm.tokens, turns: c.turns + mm.turns }
    })
    // Una chat dell'app può avere più sessioni (ripresa, riavvio, cambio cartella): le unisco per chat di
    // origine e uso il titolo che la chat ha nell'app. Sessioni nuove: stesso titolo = stessa chat.
    Object.entries(x.chats).forEach(([id, c]) => {
      const id8 = id.slice(0, 8)
      const meta = CHAT_META[id8]
      const title = titles[id8] || meta?.[1] || ''
      const key = title ? `t:${title}` : meta ? meta[0] : id
      const cur = v.chats[key] ?? { name: title || c.name, tokens: 0, turns: 0, models: {} }
      const models = { ...cur.models }
      Object.entries(c.models).forEach(([name, n]) => addTo(models, name, n))
      v.chats[key] = { name: cur.name, tokens: cur.tokens + c.tokens, turns: cur.turns + c.turns, models }
    })
  })
  return v
}

const sumOf = (v: View) => v.input + v.output + v.cacheWrite + v.cacheRead

export const register: Register = on => {
  let lastCost = -1
  let refresh: any = null

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'dashboard', description: 'Show the monthly token dashboard' })
    const now = new Date(await $.clock.now())
    const key = monthKey(now)
    await update($, store, () => ({ key, days: {} }))
    const days = await loadDays($, key)
    if (key === SEED_KEY) {
      let changed = false
      for (const [dk, d] of Object.entries(SEED)) {
        if (!days[dk] || d.turns > days[dk].turns) {
          days[dk] = d as Day
          changed = true
        }
      }
      if (changed) await $.store.set(`v3:${key}`, days)
    }
    await update($, store, () => ({ key, days }))
    lastCost = (await $.session.usage()).cost?.usd ?? -1

    // Dashboard aperta: ridisegno ogni 10 minuti con i dati dell'archivio. Chiusa: niente.
    try {
      await refresh?.cancel?.()
    } catch {}
    refresh = $.clock.every(10 * 60 * 1000, async () => {
      const panes = await $.ui.panes()
      if (panes.some(p => p.id === PANE && p.isPlaced)) $.ui.invalidate('ui.render')
    })
    return next(e)
  })

  on('classic.UserPromptSubmit', async ($, e, next) => {
    // mai bloccare l'invio del messaggio: qualunque errore qui viene ignorato
    try {
      const title = (e as any).session_title as string | undefined
      if (title) {
        const id8 = (await $.session.id()).slice(0, 8)
        const cur = ((await $.store.get('titles')) as Record<string, string> | undefined) ?? {}
        if (cur[id8] !== title) await $.store.set('titles', { ...cur, [id8]: title })
      }
    } catch {}
    return next(e)
  })

  on('command.run', { command: 'dashboard' }, async $ => {
    await $.ui.open({ id: PANE, title: 'Utilizzo token', columns: 120, rows: 40 })
    return { text: 'Dashboard aperta.' }
  })

  on('tool.call', async ($, e, next) => {
    const now = new Date(await $.clock.now())
    const key = monthKey(now)
    let st = await read($, store)
    st = { key, days: await loadDays($, key) } // sempre dall'archivio: ogni chat ha una sua copia in memoria
    const name = e.tool.startsWith('mcp__') ? 'MCP' : e.tool
    const n = withDay(st, dkey(now), d => ({ ...d, tools: { ...d.tools, [name]: (d.tools[name] ?? 0) + 1 } }))
    await $.store.set(`v3:${key}`, n.days)
    await update($, store, () => n)
    return next(e)
  })

  on('session.compact', async ($, e, next) => {
    const now = new Date(await $.clock.now())
    const key = monthKey(now)
    let st = await read($, store)
    st = { key, days: await loadDays($, key) } // sempre dall'archivio: ogni chat ha una sua copia in memoria
    const n = withDay(st, dkey(now), d => ({ ...d, compactions: d.compactions + 1 }))
    await $.store.set(`v3:${key}`, n.days)
    await update($, store, () => n)
    const done = await next(e)
    $.ui.invalidate('ui.render')
    return done
  })

  on('session.measure', ($, e, next) => {
    $.ui.invalidate('ui.render')
    return next(e)
  })

  on('turn.complete', async ($, e, next) => {
    const u = e.usage
    if (u) {
      const now = new Date(await $.clock.now())
      const key = monthKey(now)
      let st = await read($, store)
      st = { key, days: await loadDays($, key) } // sempre dall'archivio: ogni chat ha una sua copia in memoria
      const cwd = await $.session.cwd()
      const id = await $.session.id()
      const cost = (await $.session.usage()).cost?.usd ?? -1
      const dCost = cost >= 0 && lastCost >= 0 ? Math.max(0, cost - lastCost) : 0
      lastCost = cost
      const total = u.input_tokens + u.output_tokens + u.cache_read_input_tokens + u.cache_creation_input_tokens
      const add = (o: Record<string, number>, k: string) => ({ ...o, [k]: (o[k] ?? 0) + total })
      const dow = (now.getDay() + 6) % 7
      const name = chatName(cwd)
      const n = withDay(st, dkey(now), d => {
        const chat = d.chats[id] ?? { name, tokens: 0, turns: 0, models: {} }
        const mod = d.models[u.model] ?? { tokens: 0, turns: 0 }
        return {
          ...d,
          turns: d.turns + 1,
          input: d.input + u.input_tokens,
          output: d.output + u.output_tokens,
          cacheWrite: d.cacheWrite + u.cache_creation_input_tokens,
          cacheRead: d.cacheRead + u.cache_read_input_tokens,
          cost: d.cost + dCost,
          hours: add(d.hours, pad(now.getHours())),
          heat: add(d.heat, `${dow}-${now.getHours()}`),
          chats: { ...d.chats, [id]: { name, tokens: chat.tokens + total, turns: chat.turns + 1, models: add(chat.models, u.model) } },
          models: { ...d.models, [u.model]: { tokens: mod.tokens + total, turns: mod.turns + 1 } },
        }
      })
      await $.store.set(`v3:${key}`, n.days)
      await update($, store, () => n)
    }
    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) return next(e)

    // Altre mod possono disegnare nella stessa fascia (es. agent-modes): le compongo sopra la pillola.
    const below = await next(e)

    const els = $.ui.resolve(e) as any
    const { Box, Button, Svg, Text } = els
    if (!Svg) return <Text dimColor>usage-band: Svg non disponibile (surface: {String(e.surface)})</Text>

    let usage
    try {
      usage = await $.session.usage({ breakdown: 'summary' })
    } catch (err) {
      return <Text dimColor>usage-band: usage() fallita: {String(err)}</Text>
    }
    const { context, rateLimits } = usage
    const cats = context.breakdown?.categories ?? []
    const used = cats.filter(c => c.kind === 'used')
    const sum = (f: (n: string) => boolean) => used.filter(c => f(c.name)).reduce((a, c) => a + c.tokens, 0)
    const messages = sum(n => /messag/i.test(n))
    const mcp = sum(n => /mcp/i.test(n))
    const skills = sum(n => /skill/i.test(n))
    const tools = used.reduce((a, c) => a + c.tokens, 0) - messages - mcp - skills
    const buffer = cats.filter(c => c.kind === 'buffer').reduce((a, c) => a + c.tokens, 0)
    const max = context.breakdown?.rawMaxTokens ?? context.window
    const usedTokens = context.tokens ?? context.breakdown?.totalTokens ?? 0
    const pct = context.percent ?? (max ? (usedTokens / max) * 100 : 0)
    if (!max) return <Text dimColor>usage-band: finestra contesto sconosciuta</Text>

    const reset = (kind: string, iso?: string) => {
      if (!iso) return ''
      const d = new Date(iso)
      const mins = Math.max(0, Math.round((d.getTime() - Date.now()) / 60000))
      return kind === 'five_hour' ? `${Math.floor(mins / 60)}h ${mins % 60}m` : `${DOW[d.getDay()]} ${pad(d.getHours())}:${pad(d.getMinutes())}`
    }
    const names: Record<string, string> = { five_hour: 'Sessione', seven_day: 'Settimana', spend_limit: 'Spesa' }
    const meters = rateLimits.map(r => ({ label: names[r.kind] ?? r.kind, pct: r.percentUsed, note: reset(r.kind, r.resetsAt) }))
    const source = pillSvg({
      width: 736,
      pct,
      used: usedTokens,
      max,
      segs: [
        { v: messages, c: BLUE },
        { v: tools, c: A },
        { v: mcp, c: GREEN },
        { v: skills, c: AMBER },
      ].filter(s => s.v > 0),
      buffer,
      legend: [
        { c: BLUE, label: 'Messaggi', v: messages },
        { c: A, label: 'Tools', v: tools },
        { c: GREEN, label: 'MCP', v: mcp },
      ],
      meters,
    })

    return (
      <Box flexDirection="column">
      <Box flexDirection="column">
        <Svg source={source} alt="Utilizzo contesto e limiti del piano" width={736} />
        <Box position="absolute" top={0} right={0}>
          <Button key="dash" label="Dashboard ↗" onPress={() => $.ui.open({ id: PANE, title: 'Utilizzo token', columns: 120, rows: 40 })} />
        </Box>
        <Box position="absolute" top={2} right={0}>
          <Button
            key="compact"
            label={'  Comprimi  '}
            onPress={async () => {
              try {
                await $.command.run({ command: 'compact' })
              } catch (err) {
                $.ui.toast(`Comando /compact non eseguito: ${String(err)}`)
              }
              $.ui.invalidate('ui.render')
            }}
          />
        </Box>
      </Box>
        {below}
      </Box>
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const els = $.ui.resolve(e) as any
    const { Box, Text, Svg, Button } = els
    if (!Svg) return <Text dimColor>La dashboard richiede l'app desktop.</Text>

    const now = new Date(await $.clock.now())
    const mode = await read($, range)
    const key = monthKey(now)
    const cur = await read($, store)
    void cur // letto solo per ridisegnare quando questa chat aggiorna i dati
    const curDays = await loadDays($, key)
    const pm = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const prevDays = await loadDays($, monthKey(pm))
    const all = { ...prevDays, ...curDays }

    const day = (back: number) => new Date(now.getFullYear(), now.getMonth(), now.getDate() - back)
    let dates: Date[]
    let before: Date[]
    const dow = (now.getDay() + 6) % 7 // 0 = lunedì
    if (mode === '7g') {
      // settimana di calendario: lunedì - domenica (i giorni futuri restano vuoti)
      dates = Array.from({ length: 7 }, (_, i) => day(dow - i))
      before = Array.from({ length: dow + 1 }, (_, i) => day(dow + 7 - i))
    } else {
      dates = Array.from({ length: now.getDate() }, (_, i) => new Date(now.getFullYear(), now.getMonth(), i + 1))
      before = Array.from({ length: now.getDate() }, (_, i) => new Date(now.getFullYear(), now.getMonth() - 1, i + 1))
    }
    const titles = (((await $.store.get('titles')) as Record<string, string> | undefined) ?? {})
    const m = view(all, dates, titles)
    const prevTotal = sumOf(view(all, before, titles))
    const svg = dashSvg({ m, now, mode, dates, prevTotal, nDays: mode === '7g' ? dow + 1 : now.getDate() })

    return (
      <Box flexDirection="column">
        <Svg source={svg} alt="Dashboard utilizzo token" width={900} />
        <Box position="absolute" top={1} right={2} gap={1}>
          <Button key="r7" label="Sett." variant={mode === '7g' ? 'primary' : 'secondary'} onPress={() => update($, range, () => '7g')} />
          <Button key="rm" label="Mese" variant={mode === 'mese' ? 'primary' : 'secondary'} onPress={() => update($, range, () => 'mese')} />
        </Box>
      </Box>
    )
  })
}
