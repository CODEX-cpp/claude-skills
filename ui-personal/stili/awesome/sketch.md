# Stile: Sketch (interfaccia disegnata a matita)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "sketch" di Awesome Design (licenza MIT), riscritto
tenendo la sua descrizione: carta crema `#F4EDE0`, verde acqua
`#1DAD97`, titoli scritti a mano, controlli a pillola, bordi
tratteggiati e ombre "a matita" sfalsate. Il verde acqua originale col
testo bianco fa 2.8:1: scurito per i bottoni. Il font Delicious
Handrawn era usato anche per il testo: qui solo titoli. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Un'interfaccia che sembra uno schizzo.** Bordi tratteggiati o
tremolanti, ombre piene sfalsate come tratteggi a matita, carta
crema, un verde acqua come unico colore. Amichevole, artigianale,
"work in progress" voluto.

**Adatto a**: prodotti creativi, strumenti per disegnatori, app per
appunti, scuole, laboratori, siti personali.
**Poco adatto a**: servizi seri, lusso, contenuti lunghi.

**Differenza con i vicini** *(mio)*:
- **doodle**: interfaccia pulita con scarabocchi sopra; in sketch è
  l'interfaccia stessa a sembrare disegnata.
- **paper**: carta sobria e precisa; sketch è carta con tratti a mano.
- **neobrutalism**: ombre a blocco nere nette; sketch ha ombre più
  morbide e tratteggiate.

**Dalla ricerca** *(ricerca: Scope)*: i font scritti a mano o
decorativi hanno forme irregolari e costringono a "decifrare" le
lettere; il corsivo e il tutto maiuscolo peggiorano la lettura,
soprattutto per chi ha la dislessia. Quindi: **scritto a mano solo nei
titoli brevi**, testo corrente sempre in un font regolare.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile sketch |
| --- | --- |
| Bordi continui | **Bordi tratteggiati** (`border-style: dashed`) sulle card, **continui** sui campi |
| Ombre morbide | **Ombre piene sfalsate** (`4px 4px 0`) nel colore del testo o a righe |
| Font display solo se giustificato | **Scritto a mano** nei titoli |


## 3. Tipografia

- Titoli: scritto a mano (Delicious Handrawn dall'originale, Gochi
  Hand, Architects Daughter).
- Testo: sans regolare e rotondo, 17px.
- Direzioni possibili *(mio, da verificare)*: testo Nunito, Andika,
  Figtree. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f4ede0` | carta crema dall'originale |
| `--surface` | `#fbf7ef` | |
| `--text` | `#2a2a2a` | grafite: 12.3:1 |
| `--text-muted` | `#5d5a54` | 5.9:1 |
| `--border-control` | `#8d887e` | 3.03:1 |
| `--accent` | `#0f6e61` | verde acqua scuro: 5.3:1; testo bianco sopra 6.1:1 |
| Verde acqua originale | `#1dad97` | fondi ed evidenziature con testo grafite sopra 5.1:1 |


## 5. Layout

- Card con bordo tratteggiato 2px e ombra sfalsata.
- Elementi appena ruotati (±1°) ammessi per card e immagini, mai per
  campi e testi lunghi.
- Tanto spazio: lo schizzo ha bisogno d'aria.


## 6. Componenti

- Bottoni a pillola pieni verde scuro, con ombra a matita; premuti,
  l'ombra si azzera.
- **Campi con bordo continuo** 3:1 (il tratteggio sui campi li fa
  sembrare disattivati).
- Focus: anello 3px grafite.
- Icone a tratto irregolare (set d'autore).


## 7. Movimento

Livello "misurata": piccoli spostamenti al passaggio; tratti che si
disegnano una volta.


## 8. Immagini

Illustrazioni a matita d'autore, foto con cornice tratteggiata.
Segnaposto dichiarati se mancano.


## 9. Trappole

- Bordi tratteggiati sui campi: sembrano disabilitati.
- Scritto a mano nel testo e nei bottoni lunghi.
- Verde acqua chiaro con testo bianco.


## 10. Controllo dello stile

- [ ] Campi con bordo continuo; tratteggio solo su card.
- [ ] Testo bianco solo sul verde scuro.
- [ ] Scritto a mano solo nei titoli.


## Fonti

- [Accessibilità e leggibilità dei font](https://business.scope.org.uk/font-accessibility-and-readability-the-basics/) (Scope)
- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- Stile "sketch" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
