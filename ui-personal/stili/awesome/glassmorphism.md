# Stile: Glassmorphism (vetro smerigliato)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "glassmorphism" di Awesome Design (licenza MIT),
riscritto: l'originale aveva una descrizione di un'app di messaggistica
(non dello stile), il blu `#1856FF` (tenuto: col testo bianco fa
5.5:1) e Plus Jakarta Sans (in lista nera). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Pannelli di vetro smerigliato sopra un fondo colorato.** I pannelli
lasciano intravedere, sfocato, quello che c'è dietro (una sfumatura,
una foto); un bordo chiaro sottile ne disegna il profilo. Dà
profondità e leggerezza, stile "Liquid Glass" di Apple.

**Adatto a**: app e prodotti digitali, pagine di presentazione,
widget, musica, meteo, dashboard "da vetrina".
**Poco adatto a**: testi lunghi, form complessi, siti con molte
informazioni.

**Differenza con i vicini** *(mio)*:
- **gradient**: sfumature da sole; glassmorphism mette vetro sopra.
- **neumorphism**: rilievi della stessa materia del fondo; glass è
  trasparente.
- **cosmic**: fondo scuro e spaziale; glass può stare su fondi chiari
  o scuri.

**Dalla ricerca** *(ricerca: NN/g; Chrome for Developers)*:
- Il testo sul vetro cade su **colori diversi** a seconda di cosa c'è
  dietro: il contrasto va garantito nel caso peggiore.
- **Più sfocatura è meglio**, soprattutto su foto e video: una
  sfocatura leggera lascia vedere dettagli che disturbano.
- **Usarlo con parsimonia**: se tutto è vetro, la profondità sparisce.
- Esiste `prefers-reduced-transparency` (chi chiede meno trasparenze
  nel sistema): supporto ancora parziale, va usato come aggiunta, non
  come unica protezione.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile glassmorphism |
| --- | --- |
| Superfici piene | **Pannelli semitrasparenti** con `backdrop-filter: blur()` |
| Fondo neutro | **Fondo colorato** (sfumatura o foto) sotto i pannelli |
| Bordi a scelta | **Bordo chiaro 1px** semitrasparente sul vetro |


## 3. Tipografia

- Sans pulito, pesi 400-600 (il testo sottile sul vetro sparisce).
- Direzioni possibili *(mio, da verificare)*: Onest, Figtree, Manrope.
  **Niente lista nera** (l'originale usava Plus Jakarta Sans).


## 4. Colore e vetro

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#eef1f6` | (sotto la sfumatura o la foto) |
| `--surface` | `#ffffff` | versione **piena** del vetro (per il ripiego) |
| `--text` | `#141414` | 16.3:1 |
| `--text-muted` | `#50566a` | 6.4:1 |
| `--border-control` | `#6b7080` | più scuro del solito: regge anche sul vetro |
| `--accent` | `#1846d9` | 6.4:1; testo bianco sopra 7.2:1 |

Il vetro *(mio, calcolato)*: pannello bianco al 72% sopra un fondo
scuro `#1a1a2e` diventa circa `#bfbfc4`: il testo principale regge
(10.1:1) ma il **testo secondario scende a 3.98:1**, sotto il minimo.
Al **85%** diventa `#dddde0`: testo 13.6:1, secondario 5.4:1,
accento 5.3:1, bordo dei campi `#6b7080` 3.6:1. Quindi:
- pannelli **con testo**: opacità **almeno 85%**, sfocatura 16-24px;
- pannelli decorativi senza testo: opacità libera;
- **ripiego pieno**: `@supports not (backdrop-filter: blur(1px))` e
  `@media (prefers-reduced-transparency: reduce)` → `--surface`
  pieno; lo stesso con `forced-colors: active`.


## 5. Layout

- Fondo con una sfumatura (vedi `gradient.md`: `in oklch`, colori
  vicini) o una foto semplice.
- 1-3 pannelli di vetro per schermata; il resto del contenuto su fondo
  pieno.
- Testi lunghi e form su pannelli pieni, non su vetro.


## 6. Componenti

- Pannello: `background: rgb(255 255 255 / .85)`, `backdrop-filter:
  blur(20px)`, bordo `rgb(255 255 255 / .6)`, angoli 16-24px, ombra
  morbida.
- Bottoni pieni (non di vetro) per le azioni principali.
- Barra di navigazione di vetro fissa in alto: ammessa, con opacità
  alta.


## 7. Movimento

Livello "misurata". Mai sfondi animati sotto il vetro: la sfocatura
ricalcolata a ogni fotogramma pesa molto sulla scheda grafica,
soprattutto sui telefoni economici.


## 8. Immagini

Foto o sfumature dietro al vetro, semplici e con pochi dettagli. Mai
video sotto pannelli con testo.


## 9. Trappole

- Opacità bassa con testo: contrasto variabile e insufficiente.
- Vetro dappertutto: niente gerarchia.
- `backdrop-filter` su molti elementi o su aree enormi: pagina lenta.
- Nessun ripiego pieno.


## 10. Controllo dello stile

- [ ] Pannelli con testo all'85% o più, testati sul punto più scuro.
- [ ] Ripiego pieno con `@supports` e `prefers-reduced-transparency`.
- [ ] Massimo 3 pannelli di vetro per schermata.


## Fonti

- [Glassmorphism: definizione e buone pratiche](https://www.nngroup.com/articles/glassmorphism/) (Nielsen Norman Group)
- [prefers-reduced-transparency](https://developer.chrome.com/en/blog/css-prefers-reduced-transparency) (Chrome for Developers)
- [prefers-reduced-transparency, stato attuale](https://modern-css.davecross.co.uk/2026/09/04/prefers-reduced-transparency/) (Modern CSS Daily)
- Stile "glassmorphism" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
