# Stile: Doodle (scarabocchi e appunti a margine)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "doodle" di Awesome Design (licenza MIT), riscritto:
l'originale aveva la descrizione ("scarabocchi, schizzi, font scritti
a mano, linee imperfette") e i colori azzurro `#49B6E5` (testo bianco
sopra solo 2.3:1) e blu notte `#263D5B`, tenuto come colore del testo.
Il font Delius Swash Caps era usato anche per il testo: qui solo
titoli. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il quaderno di chi pensa.** Interfaccia pulita con sopra
scarabocchi fatti a mano: frecce che indicano, cerchi intorno alle
parole importanti, sottolineature storte, stelline, appunti a margine.
Informale, spontaneo, umano.

**Adatto a**: creativi, formatori, blog personali, workshop, podcast,
agenzie piccole, prodotti "fatti da persone".
**Poco adatto a**: lusso, finanza, sanità.

**Differenza con i vicini** *(mio)*:
- **sketch**: tutta l'interfaccia sembra disegnata a matita (bordi
  tratteggiati, ombre a matita); doodle è interfaccia pulita **più**
  scarabocchi sopra.
- **creative**: illustrazioni colorate e personaggi; doodle è tratto
  a penna, monocromatico o quasi.
- **friendly**: pastelli e arrotondato, senza segni a mano.

**Dalla ricerca** *(ricerca: Scope)*: i font scritti a mano o
decorativi hanno forme irregolari e costringono a "decifrare" le
lettere; il corsivo e il tutto maiuscolo peggiorano la lettura,
soprattutto per chi ha la dislessia. Quindi: **scritto a mano solo nei
titoli brevi**, testo corrente sempre in un font regolare.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile doodle |
| --- | --- |
| Niente SVG decorativi improvvisati | **Scarabocchi ammessi**, ma da una **libreria d'autore** o disegnati dall'utente (non inventati dall'AI) |
| Font display solo se giustificato | **Scritto a mano** nei titoli e nelle note brevi |
| Linee precise | **Linee imperfette** per sottolineature e cerchi decorativi |


## 3. Tipografia

- Titoli e note a margine: font scritto a mano leggibile.
- Testo: sans rotondo regolare, 17px.
- Direzioni possibili *(mio, da verificare)*: titoli Delius Swash Caps
  (dall'originale), Caveat, Kalam, Patrick Hand; testo Nunito, Delius
  (versione regolare), Figtree. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fffdf6` | |
| `--surface` | `#ffffff` | |
| `--text` | `#263d5b` | blu notte dall'originale: 10.9:1 |
| `--text-muted` | `#56647a` | 5.9:1 |
| `--border-control` | `#8a93a3` | 3.04:1 |
| `--accent` | `#16618a` | blu penna: 6.6:1; testo bianco sopra 6.75:1 |
| Azzurro (dall'originale) | `#49b6e5` | **solo scarabocchi ed evidenziature**; testo blu notte sopra 4.79:1 |


## 5. Layout

- Griglia pulita; gli scarabocchi rompono i bordi (una freccia che
  esce dalla colonna, un cerchio su una parola).
- Note a margine su schermi larghi, sotto il paragrafo su telefono.
- 1-2 scarabocchi per schermata, non di più.


## 6. Componenti

- Parola evidenziata: sottolineatura a mano in SVG dietro al testo
  (il testo resta testo vero).
- Bottoni normali (leggibili), con al massimo una freccia disegnata
  che li indica.
- Scarabocchi con `aria-hidden="true"`: se dicono qualcosa
  d'importante, va scritto anche nel testo.


## 7. Movimento

Livello "misurata": uno scarabocchio che "si disegna" una volta
(`stroke-dashoffset`) quando entra in vista; fermo con "Riduci
movimento".


## 8. Immagini

Foto normali con scarabocchi sopra (cerchi, frecce, note); schizzi
veri scansionati.


## 9. Trappole

- Scritto a mano nel testo lungo o nei campi dei form.
- Troppi scarabocchi: sembra un quaderno di scuola.
- Scarabocchi generati dall'AI: si vede.
- Azzurro come colore del testo.


## 10. Controllo dello stile

- [ ] Scritto a mano solo nei titoli e note brevi.
- [ ] Scarabocchi d'autore, nascosti ai lettori di schermo.
- [ ] Massimo 1-2 per schermata.


## Fonti

- [Accessibilità e leggibilità dei font](https://business.scope.org.uk/font-accessibility-and-readability-the-basics/) (Scope)
- [stroke-dashoffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-dashoffset) (MDN)
- Stile "doodle" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
