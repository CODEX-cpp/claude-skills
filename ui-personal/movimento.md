# Movimento

Leggi questo file prima di aggiungere animazioni o transizioni.
Il **livello di animazione si decide con l'utente** a inizio progetto
(nessuna, misurata, ricca: vedi `processo.md`) ed è scritto nel
`tokens.css`. Questo file dice come farle bene, qualunque sia il
livello.

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa.


## 1. A cosa serve un'animazione

Un'animazione è giustificata solo se fa una di queste cose:

1. **Conferma un'azione** (il bottone si abbassa, la spunta appare).
2. **Spiega un cambiamento** (un pannello si apre *da* dove hai
   cliccato, un elemento eliminato scompare invece di sparire di colpo).
3. **Mantiene l'orientamento** (passando da una lista al dettaglio si
   capisce da dove si arriva).
4. **Richiama l'attenzione** su una cosa che conta davvero, una volta.
5. **Dà carattere** al progetto, nel "momento curato" scelto con
   l'utente.

**"È bello" non è un motivo.** Se non riesci a dire in una frase cosa
comunica, togli l'animazione.

**Prova** *(dalle skill: Impeccable)*: se tolgo questa animazione, si
perde un'informazione o il carattere del progetto? Se si perde solo
"decorazione", va tolta.


## 2. I livelli

| Livello | Cosa si anima |
| --- | --- |
| **Nessuna** | Solo hover, focus, premuto e stati dei controlli, con transizioni brevi (`--duration-instant` / `--duration-fast`) |
| **Misurata** (consigliata) | Come sopra, più **un solo momento curato** (di solito l'entrata dell'hero) e le transizioni di aperture/chiusure (menu, pannelli) |
| **Ricca** | Come sopra, più alcune animazioni legate allo scroll o al passaggio tra pagine. Ognuna con un motivo, e mai "tutte le sezioni che entrano uguali" |
| **3D immersiva** | Una scena 3D guidata dallo scroll, con Three.js e GSAP: regole a parte in `stili/3d-scroll.md` (le uniche librerie ammesse, solo in questo livello) |

In tutti i livelli: **il contenuto è visibile anche senza JavaScript e
senza animazioni** **[auto]**. Un testo che parte da `opacity: 0` e
aspetta uno script per comparire, se lo script non parte resta
invisibile. Lo stato iniziale "nascosto" si imposta dal JavaScript
stesso, oppure con CSS che lo applica solo quando le animazioni sono
attive. *(dalle skill: Impeccable)*


## 3. Durate *(ricerca: NN/g)*

Dal `tokens.css`, mai numeri scritti a mano **[auto]**.

| Token | Durata | Per cosa |
| --- | --- | --- |
| `--duration-instant` | 120ms | Conferma immediata: premuto, spunta, interruttore |
| `--duration-fast` | 200ms | Hover, piccoli cambi di stato |
| `--duration-base` | 300ms | Aperture di menu, pannelli, finestre |
| `--duration-slow` | 600ms | Solo il momento curato |

- **Le animazioni troppo lunghe sono molto più comuni di quelle troppo
  brevi.** Oltre i 500ms l'interfaccia sembra lenta (tranne il momento
  curato, che si vede una volta).
- **L'uscita è più veloce dell'entrata** (es. apre in 300ms, chiude in
  200ms): chi chiude ha già deciso.
- **Più lontano va un elemento, più tempo serve**; più è piccolo, meno
  ne serve.
- **Nelle interfacce strumento le transizioni sono brevi**: chi lavora
  8 ore non deve aspettare nessuna animazione.
- **Mai far aspettare**: un'animazione non blocca mai un clic.
  L'utente deve poter interrompere (cliccare di nuovo, chiudere a metà).
  *(ricerca: Vercel)*


## 4. Curve *(ricerca: NN/g)*

Il movimento lineare sembra meccanico. Nei token:

- `--ease-out` (parte veloce, rallenta): **per le entrate** e la
  maggior parte dei casi. Dà una sensazione di prontezza.
- `--ease-in` (parte piano, accelera): **per le uscite**.
- `--ease-in-out`: per spostamenti da un punto a un altro dello
  schermo.
- **Mai rimbalzi o effetti elastici** di default **[auto]**: sembrano
  datati. Gli oggetti veri rallentano morbidamente.


## 5. Cosa animare

- **Di preferenza `transform` e `opacity`**: sono le proprietà che il
  browser anima senza fatica.
- **Mai `width`, `height`, `top`, `left`, `margin`, `padding`** **[auto]**:
  ricalcolano l'impaginazione a ogni fotogramma e scattano. Per far
  "crescere" un pannello: `grid-template-rows: 0fr → 1fr`, oppure
  `transform: scale`. Per spostare: `translate`.
- **Mai `transition: all`** **[auto]**: anima anche cose che non
  dovrebbero e rallenta. Si elencano le proprietà:
  `transition: opacity var(--duration-fast) var(--ease-out), transform …`.
- **Oltre transform e opacity**, con misura e solo su aree piccole:
  `filter: blur`, `clip-path`, `mask`, colore, ombra. Danno effetti più
  ricchi del solito "sale e sfuma". *(dalle skill: Impeccable)*
- `transform-origin` corretto: un menu che si apre da un bottone
  cresce **da** quel bottone. *(ricerca: Vercel)*
- `will-change` solo durante l'animazione, non fisso nel CSS.


## 6. Strumenti

Nell'ordine, dal più semplice:

1. **Transizioni CSS** per hover, focus, aperture: bastano nel 90% dei
   casi.
2. **`@keyframes`** per sequenze brevi (il momento curato).
3. **`@starting-style`** *(mio)*: per animare un elemento che
   **compare** (un `<dialog>`, un popover, un elemento aggiunto) senza
   JavaScript: si dichiara da che stato parte.
4. **View Transitions** *(ricerca: MDN)*: transizione fluida tra due
   stati della pagina (`document.startViewTransition`) o **tra due
   pagine diverse** del sito con una riga di CSS
   (`@view-transition { navigation: auto; }`). Se il browser non la
   supporta, la pagina cambia normalmente: nessun danno.
5. **IntersectionObserver** in JavaScript per far partire
   un'animazione quando un elemento entra nello schermo.
   **Mai `addEventListener('scroll')`** **[auto]**: gira a ogni pixel
   di scroll e appesantisce la pagina.
6. **Animazioni guidate dallo scroll** (`animation-timeline: view()`):
   *(ricerca: MDN)* non funzionano ancora in Firefox. Solo come
   miglioramento dentro `@supports (animation-timeline: view())`, con
   la pagina che funziona benissimo anche senza.
7. **Librerie** (GSAP e simili) solo se l'utente le chiede per un
   effetto che il CSS non sa fare.


## 7. Accessibilità del movimento *(ricerca: W3C)*

Il movimento può far stare male davvero: persone con disturbi
dell'equilibrio (vestibolari) possono avere **vertigini, nausea, mal
di testa** anche per ore, a causa di parallasse, zoom e animazioni che
partono scorrendo.

- **Rispetta sempre "Riduci movimento"** del sistema
  (`prefers-reduced-motion: reduce`) **[auto]**. Il `tokens.css` azzera
  già `--motion-distance`: se le animazioni usano quel token per gli
  spostamenti, si adeguano da sole.
- **Meno movimento, non zero riscontro**: con "Riduci movimento" si
  tolgono spostamenti, zoom e parallasse; restano dissolvenze brevi e
  cambi di colore che confermano le azioni.
- **Parallasse, zoom legati allo scroll, "scroll hijacking"** (la pagina
  che scorre in modo diverso da come muovi la rotella): da evitare. Se
  il livello "ricco" li prevede, devono sparire con "Riduci movimento".
- **Niente che lampeggi più di 3 volte al secondo** **[auto]**: può
  scatenare crisi epilettiche. *(ricerca: WCAG 2.3.1)*
- **Movimento automatico che dura più di 5 secondi** (caroselli, testo
  che scorre, video di sfondo): serve un bottone per metterlo in pausa.
  *(ricerca: WCAG 2.2.2, Vercel)*
- Anche in JavaScript:
  `matchMedia('(prefers-reduced-motion: reduce)').matches` prima di
  avviare un'animazione.
- **Prova**: in Chrome, strumenti per sviluppatori → "Rendering" →
  "Emulate CSS media feature prefers-reduced-motion".


## 8. Cose da non fare

- **Ogni sezione che entra sfumando dal basso** mentre si scorre: è il
  segno più riconoscibile di una pagina generata. *(dalle skill:
  Frontend Design, Impeccable)*
- **Animazioni continue** senza motivo: pallini che pulsano, icone che
  fluttuano, gradienti che si muovono. Il pallino pulsante solo per
  dati davvero in tempo reale **[auto]**.
- **Immagini che si ingrandiscono** al passaggio del mouse come effetto
  standard su tutte le card **[auto]**.
- **Testo o loghi che scorrono all'infinito** (marquee) **[auto]**.
- **Cursore che lampeggia** in un titolo per simulare qualcuno che
  scrive **[auto]**.
- **Cursori del mouse personalizzati** **[auto]**.
- **Contatori che "salgono"** fino al numero (0 → 1.250 clienti)
  *(mio)*: fanno aspettare per leggere un numero.
- **Sequenze di caricamento iniziale** (splash, logo animato) prima di
  mostrare la pagina.


## 9. Il momento curato *(dalle skill: Impeccable; mio)*

Nel livello "misurato" c'è **un** momento con carattere. Deve:

- nascere **dal soggetto del progetto**, non essere un effetto generico
  (un generico "sale e sfuma" non è un momento curato);
- durare poco (entro `--duration-slow`, al massimo una breve sequenza);
- succedere **una volta** (all'apertura, o alla prima interazione);
- non ritardare la lettura: il testo principale è leggibile subito.

Esempi: il titolo che si compone parola per parola in un sito di
tipografia; il prodotto che ruota una volta nell'hero di un negozio;
una linea che disegna il percorso in un sito di logistica.


## 10. Prima di consegnare

- [ ] Ogni animazione ha un motivo scritto in una frase.
- [ ] Durate e curve solo dai token; niente `transition: all`.
- [ ] Solo `transform`/`opacity` (o motivi precisi per altro).
- [ ] Provato con "Riduci movimento" attivo.
- [ ] Contenuto visibile con JavaScript disattivato.
- [ ] Nessun lampeggio, movimento lungo con pausa.
- [ ] Le animazioni si possono interrompere e non bloccano i clic.


## Fonti della ricerca

- [Durata delle animazioni](https://www.nngroup.com/articles/animation-duration/) (Nielsen Norman Group)
- [Animazioni dalle interazioni, WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) (W3C)
- [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) (MDN)
- [Animazioni guidate dallo scroll](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) (MDN)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) (Vercel)
