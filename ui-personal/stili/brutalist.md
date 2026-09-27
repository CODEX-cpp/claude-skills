# Stile: Brutalist (industriale, svizzero, terminale)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: skill "industrial-brutalist-ui" di Taste, ripulita e corretta
(il rosso originale non superava il contrasto minimo sul testo), più
ricerca e ragionamento. Legenda: *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

Interfacce **crude, funzionali, meccaniche**: griglie rigide e
visibili, tipografia enorme contro testo minuscolo, un solo colore
forte, angoli vivi. Unisce la **grafica svizzera** anni '50-'60
(griglia, asimmetria, sans-serif, chiarezza) con l'estetica dei
**manuali tecnici e dei terminali**.

Due varianti, **se ne sceglie una sola** per progetto:

- **Stampa svizzera** (chiara): carta, inchiostro, rosso.
- **Terminale** (scura): fondo spento, testo chiaro, monospazio.

**Adatto a**: portfolio di designer e sviluppatori, studi creativi,
editoria sperimentale, dashboard tecniche, eventi culturali.
**Poco adatto a**: pubblico ampio poco abituato al digitale, servizi
dove serve rassicurare (banche, sanità).

**Attenzione** *(ricerca: NN/g)*: il brutalismo come **aspetto** va
bene; l'"antidesign" (volutamente brutto, confuso, difficile) funziona
solo per pubblici di designer o per l'intrattenimento. **L'aspetto può
essere crudo, l'uso deve restare facile**: gerarchia chiara,
navigazione chiara, tutto accessibile.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile brutalist |
| --- | --- |
| Etichette tutte maiuscole: no | **Sì**, per metadati, navigazione ed etichette, brevi e con spaziatura larga (0.05-0.1em) |
| Monospazio solo per codice e dati | Monospazio anche per **navigazione e metadati** (non per il testo corrente) |
| Arrotondamenti a scelta | **Zero**, ovunque (tranne pallini di stato) |
| Ombre, sfumature, trasparenze | **Niente** |
| Tracking minimo -0.04em sui titoli | Fino a **-0.06em** sui titoli enormi, se le lettere non si toccano |
| Inter in lista nera | Resta in lista nera (l'originale lo consigliava): si usano altri grotesk pesanti |
| Numeri di sezione solo per sequenze | **Ammessi** come elemento strutturale della griglia, con coerenza |
| Grana/texture solo se lo stile la prevede | Ammesse **retinatura, scanline, rumore**, con misura (sezione 8) |

Tutto il resto delle regole base resta valido.


## 3. Tipografia

- **Titoli**: grotesk pesante (neretto o nero), **enormi**, spesso in
  maiuscolo, interlinea compressa (0.9-1). Scala fluida con `clamp()`
  rispettando la regola del **massimo 2.5 volte il minimo** e la parte
  in `rem` (vedi `tipografia.md`): anche i titoli enormi devono
  ingrandirsi con lo zoom.
- **Metadati e navigazione**: monospazio piccolo (13-14px, mai sotto
  12px), maiuscolo, spaziatura larga.
- **Testo corrente**: sans leggibile, 16px, interlinea 1.5, **non in
  maiuscolo e non in monospazio**.
- Direzioni possibili *(mio, da verificare con i controlli di
  `tipografia.md`)*: grotesk pesanti come Archivo (Black), Anton,
  Bebas Neue per i titoli; mono come JetBrains Mono, IBM Plex Mono,
  Space Mono. **Niente font della lista nera.**
- **Allineamento a sinistra**, bordo destro irregolare (come nella
  grafica svizzera). *(ricerca: Print Magazine)*


## 4. Colore

Palette di partenza, contrasti già verificati *(mio)*:

**Variante stampa svizzera (chiara)**

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f2f2ee` | carta grigia (non crema) |
| `--text` | `#111111` | 16.8:1 |
| `--text-muted` | `#5c5c58` | 6.0:1 |
| `--accent` | `#d21a1a` | rosso segnale: 4.8:1 come testo (l'originale `#e61919` fa 4.1:1, **non passa** per il testo normale) |
| `--text-on-accent` | `#ffffff` | 5.4:1 su rosso |

**Variante terminale (scura)**

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#0e0e0e` | schermo spento, non nero puro |
| `--text` | `#eaeaea` | 16.1:1 |
| `--text-muted` | `#a3a3a3` | 7.7:1 |
| `--accent` | `#ff4a3d` | rosso: 5.8:1 |
| Verde terminale | `#4af626` | **opzionale**, per **un solo** elemento (un indicatore) |

- **Un solo colore d'accento**, il rosso, usato per cose importanti:
  linee strutturali spesse, dati critici, barrature.
- **Mai mescolare** le due varianti nella stessa interfaccia.


## 5. Layout

- **Griglia rigida e visibile**: linee di 1-2px che dividono le zone.
  Trucco: `display: grid; gap: 1px;` con lo sfondo del contenitore
  colorato crea divisori perfetti. *(dalle skill: Taste)*
- **Asimmetria**: grandi vuoti accanto a blocchi di testo enorme; zone
  molto dense (dati, metadati) alternate a zone vuote.
- **Angoli a 90 gradi.**
- Numeri o lettere giganti che escono dalla griglia come elemento
  grafico (senza causare scroll orizzontale: `overflow: clip` sul
  contenitore).
- Su telefono: la griglia diventa una colonna, i divisori restano.


## 6. Componenti

- **Bottoni**: rettangoli pieni o con bordo spesso, testo maiuscolo
  mono, niente ombre. Hover: inversione dei colori (sfondo e testo si
  scambiano). Focus: anello ben visibile (in questo stile anche un
  bordo spesso di 3px nel colore d'accento).
- **Ombre "a blocco"** (`box-shadow: 4px 4px 0`): ammesse solo nella
  variante stampa e con coerenza; vietate come default fuori da questo
  stile.
- **Cornici di testo** come elemento grafico: `[ SEZIONE ]`, `>>>`,
  `///`. Con misura, e **mai al posto dei nomi veri** di link e bottoni
  (il lettore di schermo legge anche i simboli: se decorativi,
  `aria-hidden="true"`).
- **Dati**: tabelle dense con monospazio e cifre tabellari, elementi
  HTML semantici (`<data>`, `<kbd>`, `<samp>`, `<dl>`).
- **Stringhe finte** di aspetto tecnico ("REV 2.6", "UNIT / D-01"):
  solo se hanno un senso nel progetto; dati inventati spacciati per
  veri restano vietati (vedi `testi.md`).


## 7. Movimento

- Poco e secco: cambi netti o brevissimi (`--duration-instant`),
  curve lineari o a gradini (`steps()`) ammesse per l'effetto
  "meccanico".
- Effetto "macchina da scrivere" o cursore lampeggiante solo nella
  variante terminale e **una volta**, con "Riduci movimento" che lo
  disattiva. Mai lampeggi oltre 3 al secondo.


## 8. Texture ed effetti

- **Retinatura / puntinatura** sulle foto e sui titoli serif (effetto
  stampa): meglio preparata sull'immagine che calcolata dal browser.
- **Scanline** (righe orizzontali) nella variante terminale: con
  `repeating-linear-gradient` su un livello fisso, `pointer-events:
  none`, molto leggere.
- **Rumore** leggero su tutta la pagina: su un livello fisso, mai su
  elementi che scorrono.
- Gli effetti **non devono ridurre il contrasto del testo** sotto i
  minimi: si misurano con l'effetto attivo.


## 9. Trappole

- Scambiare il brutalismo per "fatto male": la griglia deve essere
  precisissima, è quella che fa lo stile.
- Troppo maiuscolo e troppo monospazio: il testo corrente resta
  normale e leggibile.
- Rosso acceso usato come testo piccolo senza controllare il
  contrasto.
- Titoli enormi che su telefono escono dallo schermo.
- Navigazione "creativa" incomprensibile: resta convenzionale.


## 10. Controllo dello stile

- [ ] Una sola variante (chiara o scura), un solo accento.
- [ ] Griglia coerente e allineata; angoli vivi ovunque.
- [ ] Testo corrente in sans normale, non maiuscolo.
- [ ] Contrasti misurati con effetti e texture attivi.
- [ ] Titoli enormi che si ingrandiscono con lo zoom e non escono
      dallo schermo a 320px.
- [ ] Pagina usabile solo con la tastiera.


## Fonti

- [Brutalismo e antidesign](https://www.nngroup.com/articles/brutalism-antidesign/) (Nielsen Norman Group)
- [Stile svizzero: principi e caratteri](https://www.printmag.com/featured/swiss-style-principles-typefaces-designers/) (Print Magazine)
- Skill "industrial-brutalist-ui" di [Taste Skill](https://github.com/Leonxlnx/taste-skill) (licenza MIT)
