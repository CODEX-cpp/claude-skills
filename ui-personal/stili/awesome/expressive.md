# Stile: Expressive (tipografia come grafica)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "expressive" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("colori forti, grafica giocosa, layout
dinamici con una struttura chiara") e dai suoi colori (magenta e blu),
resi accessibili. Legenda: *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

**La personalità sta nella tipografia e nella composizione.** Titoli
enormi, spezzati, a volte in monospazio; layout che rompono la
simmetria; due colori pieni e decisi. Creativo e riconoscibile, ma
**con una struttura chiara sotto**.

**Adatto a**: studi creativi, portfolio, festival, riviste
indipendenti, marchi che vogliono farsi notare.
**Poco adatto a**: servizi pratici e gestionali.

**Differenza con i vicini** *(mio)*:
- **creative**: illustrazioni e personaggi; expressive usa soprattutto
  la tipografia.
- **brutalist** (stile principale): crudo, a griglia rigida;
  expressive è libero e colorato.
- **bold**: tipografia pesantissima su fondo scuro; expressive gioca
  più con composizione e colore.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile expressive |
| --- | --- |
| Monospazio solo per codice e dati | **Monospazio ammesso per titoli ed etichette** (l'originale era tutto in IBM Plex Mono), mai per il testo corrente |
| Titolo hero massimo 2 righe | Il titolo può essere un **elemento grafico** su più righe, se è corto (poche parole grandi, non una frase lunga) |
| Un solo accento | **Due colori** pieni (magenta e blu) |
| Layout non centrato, una sezione per schema | Composizioni **asimmetriche e sovrapposte** ammesse, con regole (sezione 5) |


## 3. Tipografia

- Titoli: un grotesk o un mono di grande carattere, a dimensioni molto
  grandi (scala fluida, massimo 2.5 volte il minimo).
- Testo: un sans leggibile, 16-17px.
- Direzioni possibili *(mio, da verificare)*: titoli IBM Plex Mono,
  Bricolage Grotesque, Syne; testo IBM Plex Sans, Figtree.
  **Niente lista nera.**
- Giochi tipografici ammessi: parole su righe diverse, allineamenti
  misti, dimensioni contrastanti. **Mai** testo spezzato con `<br>`
  che su telefono si rompe: si usano elementi a blocco e `clamp()`.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f4f4f6` | |
| `--text` | `#141418` | 18.4:1 |
| `--text-muted` | `#55555e` | 7.4:1 |
| `--border-control` | `#85858e` | 3.3:1 anche su `--surface` |
| `--accent` | `#b0175f` | magenta profondo: 6.7:1; testo bianco sopra 6.7:1 |
| `--accent-2` | `#1d4ed8` | blu: 6.7:1; testo bianco sopra 6.7:1 |

- Colori **pieni**, mai sfumati tra loro (la sfumatura magenta-blu è
  il cliché "da AI").


## 5. Layout

- Griglia a 12 colonne come base, poi la si rompe **volutamente**:
  elementi che scavalcano colonne, titoli che escono dal margine.
- Sovrapposizioni: mai testo su testo, contrasto sempre verificato.
- Su telefono tutto torna a una colonna ordinata.
- L'ordine dell'HTML segue la lettura, anche se lo schermo è
  "scomposto".


## 6. Componenti

- Bottoni rettangolari o a pillola, pieni nei due colori, testo mono
  maiuscolo ammesso se breve.
- Link sottolineati con sottolineature spesse nel colore d'accento.


## 7. Movimento

Livello "misurata" o "ricca": il momento curato può essere
tipografico (lettere o parole che si compongono), con "Riduci
movimento" che lo rende statico.


## 8. Immagini

Foto ritagliate in modo deciso, grafiche d'autore, collage coerenti.
Niente illustrazioni SVG improvvisate.


## 9. Trappole

- Creatività che nasconde la navigazione: il menu resta convenzionale.
- Titoli enormi che su telefono escono dallo schermo.
- Troppi esperimenti nella stessa pagina: uno o due momenti forti,
  il resto ordinato.


## 10. Controllo dello stile

- [ ] Sotto la composizione libera c'è una griglia coerente.
- [ ] Titoli che si ingrandiscono con lo zoom e stanno a 320px.
- [ ] Colori pieni, contrasti verificati.


## Fonti

- [Fluid type e accessibilità](https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/) (Smashing Magazine)
- Stile "expressive" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
