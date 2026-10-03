# claude-skills

Skill personali di Ivan per Claude Code.

| Skill | A cosa serve |
| --- | --- |
| `ui-personal` | Regole di design per siti e interfacce in HTML, CSS e JavaScript puri |
| `debug-personal` | Correggere gli errori trovando prima la causa vera |
| `verifica-personal` | Non dire mai "fatto" senza una prova appena eseguita |

## Installazione

**Le tre skill di questo repository** si caricano nell'account
claude.ai (Impostazioni > Competenze > Aggiungi, uno zip per skill con
dentro la cartella). Da lì si sincronizzano su tutti i PC e funzionano
anche nelle chat e da telefono.

**Le skill tecniche** (solo per Claude Code) si installano su ogni PC
con [`installa-skill.bat`](installa-skill.bat) (pulsante "Download raw
file", poi doppio clic):

- le skill ufficiali di [GSAP](https://github.com/greensock/gsap-skills)
  (senza quelle per React e altri framework);
- le skill di [Three.js](https://github.com/cloudai-x/threejs-skills);
- [code-review](https://github.com/anthroos/claude-code-review-skill);
- [claude-council](https://github.com/amgadelgamal/claude-council): consiglio di sotto-agenti Claude, parte **solo** con `/claude-council` (costa molti token);
- i plugin [ponytail](https://github.com/DietrichGebert/ponytail) (meno codice, piu' semplice) e [i-have-adhd](https://github.com/ayghri/i-have-adhd) (risposte con l'azione per prima, **sempre attiva**: per spegnerla cancella `~/.claude/.i-have-adhd-always`), installati a livello utente con `claude plugin`. I plugin non si sincronizzano con l'account: su ogni PC si rilancia lo script.

Lo script toglie anche le vecchie skill fuse in `ui-personal` (Taste,
Web Design Guidelines, Frontend Design) e le eventuali copie locali
delle tre skill di questo repository. Per aggiornare, basta rilanciarlo.

Su Mac o Linux: copia le cartelle in `~/.claude/skills/`.

## Crediti

Le regole sono state scritte confrontando e adattando skill pubbliche:
Taste (tasteskill.dev), Frontend Design (Anthropic), Web Design
Guidelines (Vercel), Impeccable (Paul Bakaus), Awesome Design Skills
(bergside, MIT), gstack (Garry Tan, MIT), awwwards-3d (MIT),
Superpowers (Jesse Vincent, MIT). Dove il materiale è ripreso in modo
diretto, il testo della licenza originale è nella cartella
corrispondente (`LICENSE`).
