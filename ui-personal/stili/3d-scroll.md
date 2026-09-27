# Stile: 3D Scroll (scena 3D che si muove con lo scorrimento)

Si apre solo quando l'utente sceglie il livello di animazione
**"3D immersiva"** (vedi `processo.md`, domanda 4) o lo chiede in modo
esplicito ("sito 3D", "immersivo", "stile Awwwards"). Se dice solo
"sito animato", **si chiede** se intende tante animazioni (livello
"ricca", senza librerie) o una scena 3D (questo stile).

Quando è attivo **scavalca le regole di gusto e la regola "niente
librerie"** dove indicato qui sotto, ma **mai `accessibilita.md`**. I
valori vanno nel `tokens.css`, la scelta dello stile e le versioni
delle librerie nelle Linee guida (sezione 22).

Origine: metodo, esempi e regole tecniche da **awwwards-3d** (licenza
MIT); API da **GSAP Skills** (ufficiali, licenza MIT) e **Three.js
Skills** (licenza MIT). Le parti che contraddicevano ui-personal sono
state decise con Ivan (tabella della sezione 2). Materiale originale
completo in `stili/3d-scroll/` (in inglese, da aprire solo quando
serve). Legenda: *(dalle skill: …)*; *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

**Il sito come un piccolo film.** Una scena 3D (un oggetto, una
stanza, un paesaggio) sta dietro ai contenuti; scorrendo, la camera
si muove, l'oggetto ruota, la luce cambia. Tutto è morbido: nessun
valore cambia di colpo. I testi restano HTML vero sopra la scena.

**I sei schemi collaudati** *(dalle skill: awwwards-3d)*. Se ne sceglie
**uno** e ci si impegna:

| Schema | Cosa succede scorrendo | Esempio tipico |
| --- | --- | --- |
| Oggetto in vetrina | La camera gira e si avvicina a un solo oggetto | Pagina prodotto |
| Visita di una stanza | La camera percorre un interno | Portfolio, showroom |
| Tunnel | La camera avanza in una geometria infinita | Evento, musica |
| Discesa verticale | Scorrere = scendere o salire tra strati | Racconto a capitoli |
| Sorvolo | La camera attraversa un paesaggio | Turismo, territorio |
| Campo di particelle | Migliaia di punti reagiscono a scroll e mouse | Tecnologia, astratto |

**Adatto a**: lanci di prodotto, portfolio creativi, eventi, marchi
che vogliono stupire, agenzie.
**Poco adatto a**: siti da consultare (orari, servizi, prezzi),
gestionali, pubblico anziano, siti dove la velocità conta più
dell'effetto.

**Differenza con i vicini** *(mio)*:
- **storytelling**: racconto a capitoli senza librerie; 3D scroll è una
  scena 3D vera.
- **immersive**: mostra interattiva piatta su tela colorata; qui c'è
  profondità reale.
- **perspective**: card e screenshot inclinati con CSS; qui è WebGL.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile 3D scroll | Deciso |
| --- | --- | --- |
| Niente librerie | **Three.js** (scena 3D), **GSAP** con ScrollTrigger (animazioni legate allo scroll) e **Lenis** (scorrimento morbido) ammesse | con Ivan |
| Nessun framework | Resta: **niente React**, HTML, CSS e JS puri | con Ivan |
| File separati | **Restano separati**: gli esempi a file unico si smontano (sezione 3) | con Ivan (A) |
| Font e risorse in locale | **Anche le librerie in locale**, in `js/vendor/`, mai da CDN | con Ivan (A) |
| Niente scrolljacking | **Scorrimento morbido solo su computer**, spento su telefono e con "Riduci movimento" | con Ivan (B) |
| Cursore del sistema | **Resta**: niente cursori personalizzati | con Ivan (A) |
| Livelli di animazione | Quarto livello: **"3D immersiva"** | con Ivan |
| `accessibilita.md` | **Non si tocca**: "Riduci movimento" obbligatorio (sezione 5) | regola fissa |


## 3. Tecnologia

### Versioni *(dalle skill: awwwards-3d; ricerca: utsubo)*

Si usano le versioni **provate insieme** dagli esempi:

| Libreria | Versione | A cosa serve |
| --- | --- | --- |
| three | 0.170.0 | Disegnare la scena 3D |
| gsap (+ ScrollTrigger) | 3.12.5 | Animazioni e legame con lo scroll |
| lenis | 1.1.0 | Scorrimento morbido (solo computer) |

- A settembre 2026 Three.js è alla r186. Tra la 170 e la 186 sono
  cambiate cose (per esempio `Clock` sostituito da `Timer`, il
  post-processing WebGPU rinominato). **Non si aggiorna a metà
  progetto**: le versioni si scrivono nelle Linee guida e si cambiano
  solo tutte insieme, provando ogni pagina. Aggiornare gli esempi alla
  versione nuova è **da fare dopo**.
- **Licenza di GSAP** *(ricerca: GSAP)*: dal 2025 è gratuito, anche
  per uso commerciale e per tutti i plugin, ma **non è open source**:
  unica restrizione, non usarlo per costruire strumenti di animazione
  "senza codice" in concorrenza con Webflow. Per un sito non cambia
  niente.

### Struttura dei file *(mio, dalle decisioni)*

```
progetto/
├── index.html
├── css/
│   ├── tokens.css       come sempre, per primo
│   ├── base.css
│   ├── main.css
│   ├── scena.css        tela 3D, livelli sopra la scena
│   └── <sezione>.css
├── js/
│   ├── vendor/          three, gsap, lenis scaricati (non si modificano)
│   ├── scena.js         renderer, camera, luci, oggetti
│   ├── scroll.js        ScrollTrigger, Lenis (solo computer)
│   ├── movimento.js     rilevazione di "Riduci movimento", telefono, pausa
│   └── main.js          avvio: controlla il supporto, carica il resto
├── modelli/             file .glb compressi
├── hdri/                illuminazione ambientale
└── img/
    └── fotogramma.webp  il "fotogramma di riposo" (sezione 5)
```

- Le librerie si collegano con un **importmap** (un piccolo elenco
  nell'HTML che dice al browser "quando il codice chiede `three`,
  prendi questo file") che punta ai file in `js/vendor/`, non a
  internet.
- **I colori della scena vengono dal `tokens.css`**: il JavaScript li
  legge con `getComputedStyle(document.documentElement)
  .getPropertyValue('--accent')`. Così scena e pagina non divergono.
- **Serve un server locale**: questo tipo di JavaScript (moduli) non
  parte aprendo il file con doppio clic. Si apre con un piccolo server
  sul PC (comando di Python o estensione "Live Server" di VS Code).
  Spiegazione passo passo all'utente: **da fare dopo**, alla prima
  occasione.


## 4. Il metodo in 5 passi *(dalle skill: awwwards-3d; adattato)*

1. **Scegliere lo schema** (sezione 1). Se l'utente non l'ha detto, si
   chiede; non se ne inventa uno nuovo.
2. **Scegliere le risorse**, dalla più economica:
   - forme di base di Three.js (sfere, tori, blocchi): la maggior parte
     dei siti premiati usa queste;
   - un modello fatto su misura in Blender (dall'utente o da un
     grafico), esportato in `.glb` compresso;
   - Polyhaven per l'illuminazione (HDRI) e le texture, gratuite (CC0);
   - Sketchfab solo come ultima scelta, controllando peso e licenza.
3. **Partire da un esempio** in `stili/3d-scroll/esempi/` (scena vuota,
   moneta che ruota, stanza, prodotto in vetro), **smontandolo** nella
   struttura della sezione 3.
4. **Rifinire in quest'ordine**: illuminazione ambientale (HDRI) →
   tone mapping cinematografico (`ACESFilmicToneMapping`) → una luce
   direzionale per le ombre → post-processing leggero (bagliore,
   vignetta) → scorrimento morbido (solo computer) → timeline di GSAP
   legata allo scroll → grana finale leggera.
5. **Controllo delle prestazioni** (sezione 6) e di accessibilità
   (sezione 5).

**Principi estetici** *(dalle skill: awwwards-3d)*:
- **Luce prima della geometria**: un cubo semplice con una buona luce
  batte un modello pesantissimo illuminato male.
- **Tutto è smorzato**: posizione della camera, rotazioni, mouse
  passano per un'interpolazione (fattore 0.06-0.1), calcolata sul
  tempo trascorso e non sui fotogrammi, così è uguale su schermi a 60
  e a 144 Hz.
- **Metalli e vetro solo con un'illuminazione ambientale**: senza,
  diventano macchie nere.


## 5. Accessibilità: obbligatoria *(ricerca: W3C, Goss, GSAP; mio)*

### Il contenuto è HTML, la scena è decorazione

- Titoli, testi, bottoni e link sono **HTML vero sopra la scena**:
  leggibili dai lettori di schermo, dai motori di ricerca, traducibili.
  Mai testo disegnato dentro il 3D.
- La tela 3D (`<canvas>`) ha `aria-hidden="true"`: per chi usa un
  lettore di schermo non esiste. Se la scena mostra qualcosa di
  importante (il prodotto), lo si descrive nel testo della pagina.
- Il testo sopra la scena ha il **contrasto misurato nel punto più
  chiaro** della scena che gli passa dietro, lungo tutto lo scroll; se
  serve, una velatura sotto il testo.

### Il fotogramma di riposo *(mio)*

Un'unica immagine statica, la scena nella sua inquadratura più bella,
salvata in `img/fotogramma.webp`. Serve tre volte:
1. **Subito al caricamento**: è l'immagine principale della pagina
   (buona per l'LCP), mentre la scena 3D si carica dopo.
2. **Con "Riduci movimento"**: la scena non si muove, resta il
   fotogramma (o la scena ferma su quell'inquadratura). Il testo scorre
   normalmente; niente camera che vola, niente parallasse.
3. **Senza WebGL** (browser vecchi, schede grafiche bloccate,
   risparmio energetico): si vede il fotogramma e il sito funziona.

### Movimento

- `prefers-reduced-motion: reduce` si controlla **sia in CSS sia in
  JS**; con GSAP si usa `gsap.matchMedia()`, che annulla da solo le
  animazioni quando la condizione cambia *(dalle skill: GSAP)*.
- **Pausa** *(ricerca: WCAG 2.2.2)*: se qualcosa si muove da solo per
  più di 5 secondi (un oggetto che ruota, particelle), serve un bottone
  visibile "Ferma animazione", raggiungibile da tastiera, che ricorda
  la scelta.
- **Niente lampeggi** (più di 3 al secondo) e niente bagliori che
  pulsano *(ricerca: WCAG 2.3.1)*.
- **Movimenti di camera lenti** e senza cambi di direzione bruschi: il
  movimento ampio di tutto lo schermo è quello che dà più nausea.

### Scorrimento morbido: solo computer (decisione B)

Lenis si attiva **solo se** tutte queste condizioni sono vere:
`(hover: hover) and (pointer: fine)` (c'è un mouse) e **non**
`(prefers-reduced-motion: reduce)`. Altrimenti lo scroll resta quello
del sistema. Mai cambi di direzione (scroll verticale che muove in
orizzontale) *(ricerca: NN/g)*.

### Resto

- Focus da tastiera visibile anche sopra la scena.
- Nessun contenuto raggiungibile solo muovendo il mouse sulla scena.
- Audio: mai automatico; solo dopo un clic, con un bottone muto sempre
  visibile, spento di default *(dalle skill: awwwards-3d)*.


## 6. Prestazioni *(dalle skill: awwwards-3d, GSAP; mio)*

| Controllo | Valore |
| --- | --- |
| Risoluzione della scena | `Math.min(devicePixelRatio, 2)`, mai di più |
| Fluidità | 60 fps su computer, almeno 30 su un telefono medio |
| LCP | entro 2,5 s (requisito di `verifica.md`), grazie al fotogramma di riposo |
| Modelli | `.glb` compressi (Draco); texture WebP/JPG, KTX2 solo se tante e grandi |
| Post-processing | dimezzato su telefono; se lento, si tolgono prima gli effetti, poi la geometria |

- **La scena si ferma quando non si vede**: pausa del disegno con la
  scheda nascosta (`visibilitychange`) e quando la tela esce dallo
  schermo (`IntersectionObserver`). Risparmia batteria.
- **La scena si carica dopo il contenuto**: prima HTML, CSS e
  fotogramma, poi le librerie e i modelli.
- Animazioni basate sul tempo trascorso, mai sul numero di fotogrammi.
- Nessun `console.log` nel ciclo di disegno.
- In GSAP si animano `transform` e opacità (`x`, `y`, `scale`,
  `autoAlpha`), non proprietà che ricalcolano il layout.


## 7. Tipografia e colore

- Stesse regole della skill e dello stile grafico eventualmente
  abbinato (per esempio 3D scroll + dramatic): il 3D è il **livello di
  movimento**, non sostituisce le scelte di font e colore.
- Titoli grandi sopra la scena, poche parole; testi lunghi nelle
  sezioni senza scena o su fondo pieno.
- La palette della scena viene dal `tokens.css` (sezione 3).


## 8. Cosa non si fa mai *(dalle skill: awwwards-3d; decisioni con Ivan)*

1. Scatti: ogni cambiamento passa per un'interpolazione o un'ease.
2. Metalli senza illuminazione ambientale.
3. Risoluzione della scena non limitata.
4. Modelli `.glb` non compressi.
5. Audio automatico.
6. `console.log` nel ciclo di disegno.
7. Scroll gestito in due modi insieme: se Lenis è attivo,
   `scroll-behavior: smooth` va tolto dal CSS.
8. `OrbitControls` (la camera che si gira col mouse) nel sito finito:
   è per le prove.
9. Shader senza precisione dichiarata (`precision mediump float;`).
10. Controllare i clic su tutta la scena a ogni fotogramma: solo sugli
    oggetti interattivi.
11. Cursore personalizzato (decisione con Ivan).
12. Librerie da CDN nel sito finito (decisione con Ivan).
13. React o altri framework (decisione con Ivan).


## 9. Controllo dello stile

- [ ] Uno schema scelto tra i sei e scritto nel mini-piano.
- [ ] Librerie in `js/vendor/`, versioni scritte nelle Linee guida.
- [ ] Tutto il contenuto in HTML; tela con `aria-hidden="true"`.
- [ ] Fotogramma di riposo: al caricamento, con "Riduci movimento",
      senza WebGL.
- [ ] Bottone "Ferma animazione" se c'è movimento continuo.
- [ ] Scorrimento morbido solo con mouse e senza "Riduci movimento".
- [ ] Contrasto del testo sopra la scena misurato lungo tutto lo
      scroll.
- [ ] 30 fps su un telefono medio (simulato nei DevTools).
- [ ] La scena si ferma con la scheda nascosta e fuori schermo.


## Fonti

- [awwwards-3d](https://github.com/tsogjavklann/awwwards-3d) (licenza MIT): metodo, esempi, regole
- [GSAP Skills](https://github.com/greensock/gsap-skills) (ufficiali, licenza MIT)
- [Three.js Skills](https://github.com/cloudai-x/threejs-skills) (licenza MIT)
- [Licenza standard di GSAP](https://gsap.com/community/standard-license/) (GSAP)
- [Novità di Three.js nel 2026](https://www.utsubo.com/blog/threejs-2026-what-changed) (utsubo)
- [WebGL accessibile](https://annekagoss.medium.com/accessible-webgl-43d15f9caa21) (Anneka Goss)
- [Pause, Stop, Hide, WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) (W3C)
- [Three Flashes, WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) (W3C)
- [Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/) (Nielsen Norman Group)
