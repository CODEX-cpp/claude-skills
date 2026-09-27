# Stile: Cosmic (spazio profondo)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "cosmic" di Awesome Design (licenza MIT), riscritto:
l'originale descriveva "tema scuro, accenti neon, elementi spaziali
immersivi" ma aveva i colori di default **chiari** (fondo bianco, blu,
viola) e Audiowide per tutto. Qui palette davvero spaziale. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Guardare il cielo di notte.** Blu notte profondo, stelle e nebulose
come sfondo, un azzurro "stella" come accento, un tocco di magenta
nebulosa. Senso di vastità e meraviglia, pannelli come oblò.

**Adatto a**: astronomia, planetari, divulgazione scientifica, eventi
notturni, giochi, musica elettronica, prodotti con nomi "spaziali".
**Poco adatto a**: servizi quotidiani, testi lunghi.

**Differenza con i vicini** *(mio)*:
- **futuristic**: tecnologia da laboratorio, chiaro e preciso; cosmic è
  notte e meraviglia.
- **neon**: colori elettrici e bagliori urbani; cosmic è più profondo e
  silenzioso.
- **dramatic**: nero teatrale con rosso; cosmic è blu notte.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile cosmic |
| --- | --- |
| Tema scelto dal contesto | **Scuro** (blu notte) |
| Niente aloni radiali decorativi | **Nebulose** (sfumature radiali morbide) ammesse **sullo sfondo**, mai dietro al testo |
| Niente texture | **Campo di stelle** leggero (immagine piccola o CSS) ammesso sullo sfondo |


## 3. Tipografia

- Titoli: display tecnico e largo (Audiowide dall'originale, solo
  titoli brevi) o un sans geometrico largo.
- Testo: sans pulito, peso 400 (non sottile sul fondo scuro).
- Direzioni possibili *(mio, da verificare)*: titoli Audiowide, Orbitron
  (solo titoli), Unbounded; testo Exo 2, Figtree. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#0b0d1a` | blu notte |
| `--surface` | `#151a2e` | |
| `--text` | `#e6e8f2` | 15.8:1 (non bianco puro: meno alone) |
| `--text-muted` | `#a3a8c3` | 8.2:1 |
| `--border-control` | `#6d7394` | 4.2:1 (3.7 su `--surface`) |
| `--accent` | `#7cc4ff` | azzurro stella: 10.3:1; testo scuro sopra 10.3:1 |
| Magenta nebulosa | `#ff7ad9` | 8.3:1, secondo accento raro |

- `color-scheme: dark` nel `tokens.css`.


## 5. Layout

- Sezioni come "tappe" di un viaggio (dalla Terra alle stelle).
- Pannelli con bordo sottile luminoso (1px, `--border-control`).
- Tanto spazio nero-blu intorno ai contenuti.


## 6. Componenti

- Bottoni pieni azzurri con testo scuro, o con bordo.
- Card come "oblò" (angoli molto arrotondati o cerchi per le immagini).
- Focus: anello azzurro 3px.


## 7. Movimento

Livello "misurata" o "ricca": stelle che si muovono **lentissime** o
ferme; niente sfondi che scorrono veloci (danno nausea); tutto fermo
con "Riduci movimento".


## 8. Immagini

Foto astronomiche vere: le immagini NASA in genere non sono coperte da
copyright negli USA e si usano citando la fonte, senza far sembrare
che NASA approvi il sito e senza il suo logo *(ricerca: NASA)*; ESA
ha regole sue da controllare, illustrazioni di pianeti
d'autore.


## 9. Trappole

- Nebulose dietro al testo: contrasto variabile.
- Viola-blu "da AI": qui le tinte vengono dal cielo vero (blu notte,
  azzurro, un tocco di magenta), non dal cliché.
- Campo di stelle animato pesante.


## 10. Controllo dello stile

- [ ] Testo mai sopra nebulose.
- [ ] Animazioni di sfondo lente o ferme, disattivabili.
- [ ] Crediti delle foto astronomiche.


## Fonti

- [Quando la modalità scura diventa difficile da leggere](https://a11ywithdiana.substack.com/p/when-dark-mode-becomes-hard-to-read) (a11y with Diana)
- [Linee guida uso immagini NASA](https://www.nasa.gov/nasa-brand-center/images-and-media/) (NASA)
- Stile "cosmic" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
