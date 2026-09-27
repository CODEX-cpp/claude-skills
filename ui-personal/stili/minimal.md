# Stile: Minimal (editoriale, "tipo Notion")

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: skill "minimalist-ui" di Taste, ripulita e corretta (alcuni
colori originali non superavano il contrasto minimo), più ricerca e
ragionamento. Legenda: *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

Interfacce **pulite, piatte, da documento**: tanto bianco, tipografia
che fa tutto il lavoro, colore quasi assente e usato solo per dare
significato. Il riferimento sono gli strumenti di lavoro e di scrittura
ben fatti (Notion, Linear).

**Adatto a**: strumenti, documentazione, blog, portfolio di sviluppo,
SaaS sobri, gestionali (è lo stile più adatto alla modalità
"strumento").
**Poco adatto a**: prodotti emozionali, moda, intrattenimento.

**Attenzione** *(ricerca: NN/g)*: il minimalismo toglie elementi, e
se ne toglie troppi l'utente non capisce più cosa è cliccabile, dove
si trova la navigazione o cosa offre il sito. "Togliere finché non si
rompe" va fatto **fermandosi prima di rompere**.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile minimal |
| --- | --- |
| Ombre minime | **Niente ombre** (o quasi invisibili); la separazione la fanno linee sottili e spazio |
| Arrotondamenti a scelta | **Piccoli**: 4-8px, mai pillole su contenitori o bottoni principali |
| Colore d'accento | Anche **nessun accento**: nero come colore delle azioni, più tinte pastello per le etichette |
| Etichette tutte maiuscole: no | Ammesse **solo** nei piccoli badge di stato, brevi e con spaziatura larga |

Tutto il resto delle regole base resta valido.


## 3. Tipografia

- **Un sans neutro ma con carattere** per tutto; opzionale un **serif**
  per titoli e citazioni nei progetti di scrittura.
- Direzioni possibili *(mio, da verificare con i controlli di
  `tipografia.md`)*: sans come Public Sans, IBM Plex Sans, Hanken
  Grotesk; serif come Source Serif 4, Newsreader (non in corsivo nei
  titoli hero); mono come IBM Plex Mono, JetBrains Mono.
  **Niente font della lista nera** (l'originale suggeriva Instrument
  Serif e Geist, che nella nostra skill sono in lista nera).
- Gerarchia fatta con **dimensione e peso**, non con il colore.
- Testo corrente 16px, interlinea 1.6; titoli con tracking leggermente
  negativo e interlinea 1.1-1.2.
- Monospazio per codici, scorciatoie da tastiera (`<kbd>`) e dati.


## 4. Colore

Palette di partenza, contrasti già verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f7f7f6` | superfici leggermente distinte |
| `--text` | `#1f2328` | 15.8:1 |
| `--text-muted` | `#6b6a66` | 5.4:1 su bianco (l'originale usava `#787774`: 4.48:1, **non passava**) |
| `--border` | `#e6e6e6` | solo divisori decorativi |
| `--border-control` | `#8c8c8c` | bordi dei campi, 3.4:1 |
| `--accent` / `--btn-pri-bg` | `#1f2328` | bottone principale quasi nero, testo bianco 15.8:1 |

Tinte per etichette e badge (sfondo pastello + testo scuro della stessa
tinta), tutte sopra 4.5:1:

| Tinta | Sfondo | Testo | Contrasto |
| --- | --- | --- | --- |
| Rosso | `#fdebec` | `#9f2f2d` | 6.3:1 |
| Blu | `#e1f3fe` | `#1f6c9f` | 5.0:1 |
| Verde | `#edf3ec` | `#346538` | 6.1:1 |
| Giallo | `#fbf3db` | `#956400` | 4.6:1 |

- Niente gradienti, niente neon, niente sezioni a colore pieno.
- **Il colore ha sempre un significato** (stato, categoria), mai
  decorativo.


## 5. Layout

- Colonna di contenuto contenuta (circa 720-1000px per le pagine di
  lettura), tanto spazio verticale tra le sezioni.
- **Divisori sottili** e spazio al posto dei riquadri; card solo con
  bordo 1px, senza ombra.
- Griglie a celle di dimensioni diverse con bordi sottili ammesse per
  presentare funzioni.
- **Navigazione sempre visibile su desktop**: niente menu a
  "hamburger" nascosti se ci sono poche voci. *(ricerca: NN/g)*
- **Segnali di cliccabilità**: link sottolineati, bottoni con forma
  riconoscibile, hover evidente. Nel design piatto è la prima cosa che
  si perde. *(ricerca: NN/g)*


## 6. Componenti

- **Bottone principale**: sfondo quasi nero, testo bianco, angoli 4-6px,
  niente ombra. Hover: leggermente più chiaro. Premuto: `scale(0.98)`.
- **Bottone secondario**: bordo `--border-control`, sfondo trasparente.
- **Badge**: piccoli, a pillola, testo breve, tinte pastello della
  tabella sopra.
- **Domande frequenti**: `<details>` con solo una linea sotto ogni voce
  e un segno + / − chiaro.
- **Scorciatoie da tastiera**: `<kbd>` con bordo sottile e font mono.
- **Icone**: tratto regolare o pieno (Phosphor "regular" o "bold"),
  mai sottilissime.
- **Niente finestre finte del Mac** per mostrare un software
  (l'originale le prevedeva): screenshot veri.


## 7. Movimento

- Quasi invisibile: consigliato il livello "nessuna" o "misurata".
- Transizioni brevi su hover e aperture; nessuna entrata animata
  delle sezioni (l'originale le metteva su tutti i blocchi).


## 8. Immagini

- Foto desaturate e coerenti, oppure screenshot veri del prodotto.
- Illustrazioni solo se d'autore e in un solo stile (es. tratto a
  inchiostro monocromatico).
- **Niente macchie di luce o sfondi "per non lasciare vuoto"**: in
  questo stile lo spazio vuoto è voluto (l'originale li suggeriva).


## 9. Trappole

- Grigi troppo chiari: il testo secondario deve comunque fare 4.5:1.
- Tutto uguale: senza colore e ombre, la gerarchia la devono fare
  dimensione, peso e spazio. Prova dello strizzare gli occhi.
- Minimalismo che nasconde: funzioni importanti dietro menu o icone
  senza testo.


## 10. Controllo dello stile

- [ ] Si capisce cosa è cliccabile senza passarci sopra col mouse.
- [ ] Navigazione visibile, gerarchia chiara senza colore.
- [ ] Tutti i grigi e i badge verificati per il contrasto.
- [ ] Nessuna decorazione aggiunta "per riempire".


## Fonti

- [Caratteristiche del design minimalista](https://www.nngroup.com/articles/characteristics-minimalism/) (Nielsen Norman Group)
- Skill "minimalist-ui" di [Taste Skill](https://github.com/Leonxlnx/taste-skill) (licenza MIT)
