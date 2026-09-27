# Stile: Editorial (rivista su schermo)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "editorial" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo la descrizione ("impaginazione da rivista,
serif raffinati, griglie strutturate"), il font Gelasio e una palette
nero/grigio generica. Tenuti il serif e il nero; aggiunto un rosso da
testata. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* =
ragionamento mio.


## 1. L'idea

**Leggere come su una bella rivista.** Titoli serif grandi, testo
comodo, griglia a colonne visibile nella composizione, filetti
(linee sottili) che separano, occhielli e sommari, foto grandi con
didascalie. Il contenuto comanda, la grafica lo impagina.

**Adatto a**: riviste online, blog curati, magazine aziendali,
giornalismo, portfolio di scrittori, case editrici.
**Poco adatto a**: gestionali, app, e-commerce con molti prodotti.

**Differenza con i vicini** *(mio)*:
- **paper**: imita il foglio fisico (grana, carta); editorial imita
  l'impaginazione, su fondo pulito.
- **terracotta**: editoriale caldo e terroso; editorial è bianco e
  nero con un rosso.
- **basic**: stampa "da libro e report", più sobria; editorial è più
  da rivista, con gerarchie forti.

**Dalla ricerca** *(ricerca: Chrome for Developers)*: il capolettera
oggi si fa con `initial-letter` (Chrome 110+, Safari con prefisso
`-webkit-`); Firefox non lo supporta ancora, quindi va dentro
`@supports (initial-letter: 1 1)` e senza supporto resta una lettera
normale (niente trucchi con `float`).


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile editorial |
| --- | --- |
| Font a scelta | **Serif per titoli e testo lungo** (o serif titoli + sans testo) |
| Decorazioni ridotte | **Filetti, occhielli, capolettera, citazioni grandi** ammessi: sono strumenti della tipografia editoriale |
| Griglia semplice | **Griglia a 12 colonne** con composizioni asimmetriche (testo su 7, immagine su 5) |
| Maiuscolo solo breve | Maiuscoletto (`font-variant-caps: all-small-caps`) per occhielli e firme |
| Niente etichette maiuscole sopra i titoli | **Occhiello ammesso** sopra il titolo degli articoli: nel giornalismo è un'informazione vera (la sezione), non una decorazione. Mai sopra i titoli delle sezioni di pagina |


## 3. Tipografia

- Titoli: serif da titolazione, contrasto marcato, pesi 600-800,
  interlinea 1.05-1.15.
- Testo: serif da lettura 18-20px, interlinea 1.6-1.7, colonna
  60-70 caratteri (`--measure`).
- `text-wrap: balance` sui titoli, `text-wrap: pretty` sui
  paragrafi (evita l'ultima riga con una parola sola).
- Numeri in stile testo (`font-variant-numeric: oldstyle-nums`) nel
  corpo, allineati (`lining-nums tabular-nums`) nelle tabelle.
- Direzioni possibili *(mio, da verificare)*: Gelasio (dall'originale),
  Source Serif 4, Newsreader, Literata; sans di appoggio Source Sans 3,
  Public Sans. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fbfaf7` | bianco appena caldo |
| `--surface` | `#ffffff` | |
| `--text` | `#111111` | 18.1:1 |
| `--text-muted` | `#5a5750` | 6.9:1 |
| `--border-control` | `#8c887f` | 3.39:1 (3.53 su `--surface`) |
| `--accent` | `#9b1c1c` | rosso testata: 7.8:1; testo bianco sopra 8.1:1 |

- Il rosso si usa **poco**: occhielli, capolettera, link, un filetto.
- Il resto è bianco e nero: le foto portano il colore.


## 5. Layout

- Griglia a 12 colonne; testo lungo sempre in una colonna di lettura
  (mai su 12 colonne piene).
- Aperture di articolo diverse fra loro (foto a tutta larghezza,
  titolo sopra la foto, titolo a fianco): varietà "da rivista".
- Filetti orizzontali (1px testo, o 3-4px per aprire le sezioni)
  al posto delle card.
- Note e didascalie a margine su schermi larghi, sotto il paragrafo
  su telefono.


## 6. Componenti

- Occhiello (categoria) in maiuscoletto rosso sopra il titolo.
- Sommario (sottotitolo) in corsivo o in peso leggero, più grande del
  testo.
- Citazione grande (`<blockquote>` con `<cite>`) che interrompe la
  colonna.
- Firma e data (`<time datetime>`) sotto il titolo.
- Indice articoli in lista con filetti, non in card.
- Link nel testo sottolineati (`text-underline-offset: 0.15em`).


## 7. Movimento

Livello "nessuna" o "misurata": al massimo una comparsa leggera delle
immagini. Si legge, non si guarda uno spettacolo.


## 8. Immagini

Fotografia di qualità, grande, sempre con **didascalia** (`<figure>` +
`<figcaption>`) e credito dell'autore. Tagli coraggiosi (verticali,
panoramici) purché coerenti.


## 9. Trappole

- Capolettera fatto con `float` e misure a occhio: si rompe con i
  font diversi. Usa `initial-letter` con `@supports`.
- Colonne di testo troppo larghe per "riempire" la griglia.
- Troppi elementi editoriali insieme (occhiello + sommario + citazione
  + capolettera nella stessa schermata).
- Serif sottili a 16px su schermi normali: il testo sparisce.


## 10. Controllo dello stile

- [ ] Colonna di lettura 60-70 caratteri, testo 18px o più.
- [ ] Rosso usato solo per pochi accenti.
- [ ] Ogni foto ha didascalia e credito.
- [ ] Capolettera (se c'è) dentro `@supports`.


## Fonti

- [Capolettera con initial-letter](https://developer.chrome.com/blog/control-your-drop-caps-with-css-initial-letter) (Chrome for Developers)
- [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) (MDN)
- Stile "editorial" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
