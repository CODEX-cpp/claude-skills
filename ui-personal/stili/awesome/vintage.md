# Stile: Vintage (computer anni '90, finestre e pixel)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "vintage" di Awesome Design (licenza MIT), riscritto:
l'originale diceva "nostalgia 1950-1990" ma i suoi valori erano
chiaramente quelli di un desktop anni '90 (verde acqua `#008080`,
grigio argento `#C0C0C0`, font pixel Silkscreen). Qui lo stile è
dichiarato così. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Un desktop del 1995.** Fondo verde acqua, finestre grigie con
bordi in rilievo (chiaro in alto a sinistra, scuro in basso a
destra), barra del titolo blu, bottoni che si "premono", font a pixel
nei titoli. Ironico e nostalgico.

**Adatto a**: portfolio creativi, progetti ironici, giochi, musica,
eventi a tema, siti personali.
**Poco adatto a**: quasi tutto il resto: è uno stile "a tema".

**Differenza con i vicini** *(mio)*:
- **retro**: grafica stampata anni '70; vintage è interfaccia da
  computer.
- **dithered**: retinatura a punti; vintage è l'intera interfaccia
  d'epoca (può usare immagini retinate).
- **skeumorphism**: realistico; vintage è il rilievo semplice a 2
  colori dei sistemi operativi di allora.

**Dalla ricerca** *(ricerca: 98.css)*: esiste una libreria CSS (98.css,
licenza MIT) che ricrea questo aspetto usando **HTML semantico vero**
(`<button>`, `<label>`, `aria-label`) e senza JavaScript: è la
prova che lo stile può restare accessibile. Si può usare come
riferimento, non come dipendenza (il resto va comunque nel nostro
`tokens.css`).


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile vintage |
| --- | --- |
| Ombre morbide | **Bordi in rilievo** a due colori (`box-shadow` inset) |
| Angoli a scelta | **Angoli a 0** |
| Font a scelta | **Font a pixel** per titoli e barre, **mai** per il testo lungo |
| Fondo neutro | **Fondo verde acqua** (il "desktop") |
| Niente nero puro `#000000` | **Nero puro ammesso** nel testo e nei bordi delle finestre (fedeltà all'epoca: i fondi sono grigio argento, non bianchi) |


## 3. Tipografia

- Titoli, barre, etichette corte: font a pixel (Silkscreen
  dall'originale, Pixelify Sans, VT323), a dimensioni multiple della
  sua griglia per restare nitido.
- Testo: un sans semplice di sistema, 16px (l'effetto d'epoca non vale
  un testo illeggibile).
- **Niente lista nera.** Controlla le lettere accentate: molti font a
  pixel non le hanno.


## 4. Colore

Contrasti verificati *(mio)*:

| Dove | Valore | Nota |
| --- | --- | --- |
| Desktop (`--bg`) | `#008080` | testo bianco sopra 4.77:1 (solo etichette brevi) |
| Finestra (`--surface`) | `#c0c0c0` | |
| Testo nella finestra | `#000000` | 11.5:1 |
| Testo secondario | `#404040` | 5.7:1 |
| Barra del titolo | `#000080` | testo bianco 16.0:1 |
| Link | `#000080` | 8.8:1 sull'argento, sottolineato |
| Campi | fondo `#ffffff`, testo `#000000` | 21:1 |

- Il rilievo usa `#ffffff` (luce) e `#808080` (ombra, solo 2.17:1
  sull'argento) più un **bordo esterno nero** (11.5:1): è il nero che
  rende riconoscibili bottoni e campi (3:1 garantito).


## 5. Layout

- Contenuti dentro "finestre" con barra del titolo; niente finestre
  trascinabili obbligatorie (se ci sono, anche da tastiera).
- Barra delle applicazioni in basso come menu, ammessa se resta un
  vero `<nav>`.
- Su telefono: finestre a tutta larghezza, una sotto l'altra.


## 6. Componenti

- Bottoni in rilievo: premuti, il rilievo si inverte.
- Focus: rettangolo tratteggiato (come allora) **più** contrasto 3:1,
  spessore almeno 2px.
- Campi "incassati" (rilievo invertito) con `<label>` vera.
- Icone in pixel art d'autore, con testo accanto.


## 7. Movimento

Livello "nessuna": allora le finestre apparivano di colpo. Al massimo
una clessidra di attesa.


## 8. Immagini

Immagini retinate (vedi `dithered.md`) o pixel art, con
`image-rendering: pixelated` per non sfocarle.


## 9. Trappole

- Font a pixel nel testo corrente o a dimensioni non multiple: sfocato.
- Interfaccia "finta" (finestre, menu) che non funziona da tastiera.
- Copiare loghi e icone di sistemi operativi veri: sono marchi. Solo
  lo stile, con elementi propri.


## 10. Controllo dello stile

- [ ] Bordo esterno scuro su bottoni e campi (3:1).
- [ ] Font a pixel solo nei titoli, con accenti verificati.
- [ ] Nessun logo o icona di sistemi operativi reali.
- [ ] Tutto usabile da tastiera.


## Fonti

- [98.css](https://jdan.github.io/98.css/) (licenza MIT)
- [image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering) (MDN)
- Stile "vintage" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
