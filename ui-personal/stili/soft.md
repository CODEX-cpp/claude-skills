# Stile: Soft (raffinato, "da agenzia")

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: skill "high-end-visual-design" di Taste, ripulita dai tic
che non fanno parte dell'estetica, più ricerca e ragionamento.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

Un sito che sembra **costoso e curato**: calmo, arioso, preciso nei
dettagli. Il lusso non viene dalla decorazione ma dalla **misura**:
tanto spazio, pochi elementi, tipografia e foto di qualità,
allineamenti perfetti. *(ricerca: Webwavers)*

**Adatto a**: prodotti di fascia alta, studi professionali, architetti,
design, benessere, portfolio curati, SaaS "premium".
**Poco adatto a**: gestionali densi, siti istituzionali, prezzi bassi e
promozioni.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile soft |
| --- | --- |
| Spazi tra sezioni `--space-8`/`--space-9` | Anche di più: fino a 8-10rem su desktop |
| Una scala di arrotondamenti a scelta | Arrotondamenti **morbidi e generosi** (card 20-28px, bottoni a pillola) |
| Ombre minime | Ombre **molto diffuse e leggere** per dare profondità |
| Animazione: livello scelto con l'utente | Consigliato "misurato" con transizioni lente e morbide |

Tutto il resto delle regole base resta valido.


## 3. Tipografia

- **Un sans raffinato** per tutto, con molti pesi, oppure un sans per
  il testo e un **serif elegante** per i titoli nei progetti di moda,
  arredo, ospitalità (motivo scritto nel mini-piano).
- Direzioni possibili *(mio, da verificare con i controlli di
  `tipografia.md`)*: sans come Hanken Grotesk, Figtree, Onest,
  General Sans; serif come Source Serif 4, Literata, Cormorant.
  **Niente font della lista nera.**
- Titoli **grandi ma leggeri** (peso 400-500) con tracking leggermente
  negativo; il contrasto viene dalla dimensione, non dal grassetto.
- Testo corrente 17-18px, interlinea 1.6-1.7, righe corte (55-65
  caratteri).
- **Nessuna etichetta a pillola sopra i titoli** (l'originale la
  imponeva: è un tic, non parte dello stile).


## 4. Colore

- **Neutri chiari e freddi o neutri puri** come base (grigio argento,
  bianco), **non crema/beige** (resta il divieto di `colore.md`).
- Un accento **profondo e poco saturo** (verde petrolio, blu notte,
  bordeaux scuro, antracite), usato pochissimo.
- Palette di partenza, contrasti già verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#eef0f2` | grigio argento |
| `--surface` | `#ffffff` | card |
| `--text` | `#1c2126` | 14.2:1 su `--bg` |
| `--text-muted` | `#5a626b` | 5.4:1 su `--bg`, 6.2:1 su bianco |
| `--accent` | `#2f5d62` | verde petrolio; testo bianco sopra 7.3:1 |

- **Ombre**: grandi, sfocate, poco scure, tinte con il colore dello
  sfondo; esempio `0 20px 40px -20px rgb(28 33 38 / 0.12)`.


## 5. Layout

- **Molto spazio**: sezioni che respirano, un contenuto principale per
  schermata.
- **Asimmetria calma**: testo da una parte, immagine grande dall'altra;
  griglie con celle di dimensioni diverse.
- **Allineamenti perfetti**: in questo stile un disallineamento di
  pochi pixel si nota più che altrove. *(ricerca: Webwavers)*
- **Card con doppia cornice** (una cornice sottile esterna e il
  contenuto dentro, con angoli concentrici): ammessa **solo per
  pochi elementi chiave** (un prodotto, un'immagine), mai per tutte le
  card (l'originale la imponeva ovunque: diventa "card dentro card").
- Navigazione **staccata dal bordo** (una "pillola" flottante) ammessa,
  purché non copra contenuti e focus.
- Su telefono: una colonna, niente rotazioni o sovrapposizioni.


## 6. Componenti

- **Bottoni a pillola**, generosi (almeno 44px di altezza), testo
  medio. Freccia nel bottone solo se l'azione è "vai avanti/apri".
- **Campi** con bordi sottili ma con contrasto 3:1 (`--border-control`).
- Hover: cambio di sfondo morbido e, se il livello di animazione lo
  prevede, un leggerissimo spostamento. Premuto: `scale(0.98)`.
- Icone con **tratto sottile** (Phosphor "light"), coerenti.


## 7. Movimento

- Curve morbide (`--ease-out`), durate un po' più lunghe della media
  per gli elementi grandi (entro `--duration-slow`).
- Il momento curato può essere l'entrata dell'hero con una dissolvenza
  e un leggero spostamento o sfocatura che si risolve.
- **Non tutti gli elementi entrano animati**: l'originale lo imponeva
  (è il tic più riconoscibile delle pagine generate).
- Con "Riduci movimento": solo dissolvenze.


## 8. Immagini

- **Foto di altissima qualità**, luce morbida, tanto spazio nella foto
  stessa; coerenti tra loro. Mai stock generiche.
- Grandi, a volte a tutta larghezza.
- Grana leggera ammessa **solo** su un livello fisso e poco visibile.


## 9. Trappole

- Grigio chiaro su bianco "perché è elegante": il contrasto resta 4.5:1.
- Tanto spazio vuoto che nasconde le informazioni: il visitatore deve
  capire cosa si offre nella prima schermata.
- Vetro smerigliato e aloni luminosi "per fare premium": sono i tic
  dell'originale, restano vietati.
- Siti lenti per foto troppo pesanti: il lusso è anche velocità.


## 10. Controllo dello stile

- [ ] Sembra calmo e costoso anche senza animazioni.
- [ ] Nessuna crema/beige, nessun alone, nessuna etichetta sopra i titoli.
- [ ] Contrasti verificati (anche i grigi "eleganti").
- [ ] Doppia cornice solo su pochi elementi.


## Fonti

- [Cosa rende un sito "costoso"](https://webwavers.de/en/blog/website-design-elemente-premium) (Webwavers)
- Skill "high-end-visual-design" di [Taste Skill](https://github.com/Leonxlnx/taste-skill) (licenza MIT)
