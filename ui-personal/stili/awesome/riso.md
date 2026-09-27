# Stile: Riso (stampa risograph a due colori)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "riso" di Awesome Design (licenza MIT), riscritto
tenendo la sua idea: carta avorio unica, rosa fluorescente `#F237A1`
per le interazioni, blu "federal" `#2C40A7` per titoli e ombre
sfalsate. Il rosa fluo sulla carta fa solo 3.19:1: non regge come
testo, quindi per link e bottoni serve un rosa più profondo. Tolto
Space Grotesk (in lista nera). Legenda: *(ricerca: …)* = fonti in
fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Una fanzine stampata in risograph.** La risograph è una
stampatrice a matrici che stampa un colore alla volta, con inchiostri
"spot" vivaci (rosa fluo, blu, giallo): i colori si sovrappongono e si
mescolano, i passaggi non combaciano mai perfettamente, la grana si
vede. Sul web: 2 inchiostri, sovrapposizioni, piccoli sfalsamenti,
grana leggera.

**Adatto a**: editoria indipendente, fanzine, musica, festival,
librerie, laboratori, stamperie, progetti culturali giovani.
**Poco adatto a**: aziende, finanza, sanità, tutto ciò che deve
sembrare preciso.

**Differenza con i vicini** *(mio)*:
- **paper**: carta sobria e un solo inchiostro; riso è colorato e
  imperfetto.
- **dithered**: retinatura digitale a pixel; riso è stampa analogica.
- **neobrutalism**: ombre a blocco nere; in riso l'ombra è un secondo
  inchiostro sfalsato.

**Dalla ricerca** *(ricerca: Design Lexicon; fluoro-riso)*:
2-3 inchiostri al massimo, sfalsamento di 1-3px, grana al 4-10%,
sovrapposizione con `mix-blend-mode: multiply`. Non mescolare con
elementi digitali "lucidi": il contrasto di linguaggio rovina entrambi.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile riso |
| --- | --- |
| Un solo accento | **Due inchiostri**: rosa (azioni) e blu (titoli, ombre) |
| Niente texture | **Grana** leggera ammessa sul fondo e sulle immagini |
| Ombre morbide | **Ombra = secondo inchiostro sfalsato** (`4px 4px 0 #2c40a7`) |
| Tutto allineato | **Piccoli sfalsamenti** (1-3px) voluti su titoli e immagini, mai sul testo corrente |


## 3. Tipografia

- Titoli: sans pesante o grottesco con carattere, nel blu.
- Testo: sans leggibile, nero-blu, 17px.
- Direzioni possibili *(mio, da verificare)*: titoli Rubik Mono One,
  Archivo Black, Bricolage Grotesque; testo Work Sans, Karla; mono
  Overpass Mono (dall'originale). **Niente lista nera** (l'originale
  usava Space Grotesk).


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f7f1e3` | carta avorio |
| `--surface` | `#fffaf0` | |
| `--text` | `#1d1d2b` | 14.8:1 |
| `--text-muted` | `#55546a` | 6.5:1 |
| `--border-control` | `#8a8898` | 3.08:1 |
| `--accent` | `#b8156f` | rosa profondo per link e bottoni: 5.5:1; testo bianco sopra 6.2:1 |
| Blu inchiostro | `#2c40a7` | titoli: 7.8:1 sulla carta |
| Rosa fluo | `#f237a1` | **solo forme e fondi**: 3.19:1 sulla carta (va bene per forme, non per testo); testo scuro sopra 4.6:1 |
| Giallo (terzo, facoltativo) | `#ffd23f` | fondi con testo scuro 11.5:1 |

- Sovrapposizioni rosa + blu con `mix-blend-mode: multiply` solo su
  forme e immagini, mai sotto il testo.


## 5. Layout

- Una sola carta per tutta la pagina (niente fondi alternati).
- Forme piene nei due inchiostri, un po' storte (`rotate(-2deg)`),
  come ritagli.
- Griglia semplice, un po' "fatta a mano": elementi leggermente
  ruotati, ma testo sempre dritto.


## 6. Componenti

- Bottone principale pieno rosa profondo, testo bianco, ombra blu
  sfalsata; premuto, l'ombra si azzera.
- Card con bordo blu 2px e ombra blu.
- Etichette tipo "edizione" (numero di copie, data) in mono.
- Focus: anello blu 3px (7.8:1 sulla carta).


## 7. Movimento

Livello "nessuna" o "misurata": al passaggio lo sfalsamento cambia di
1-2px (effetto "registro"). Niente tremolii continui.


## 8. Immagini

Foto trasformate in **due tinte** (bicromia) con retino, preparate
prima (file già elaborati) o con filtri SVG semplici; sfalsamento
leggero fra i due colori. Grana 4-10%.


## 9. Trappole

- Rosa fluo usato come colore del testo o dei link: 3.19:1.
- Sfalsamento sul testo corrente: sembra un errore e stanca.
- Troppi inchiostri: con 4-5 colori non è più riso.
- Filtri pesanti applicati dal vivo su tante immagini: lenti.


## 10. Controllo dello stile

- [ ] Due inchiostri (tre al massimo).
- [ ] Rosa fluo solo per forme; link e bottoni nel rosa profondo.
- [ ] Testo sempre dritto e non sfalsato.
- [ ] Grana leggera, tolta in contrasto forzato.


## Fonti

- [Estetica risograph](https://freedesignmd.com/lexicon/risograph) (Design Lexicon)
- [fluoro-riso, risograph nel browser](https://github.com/yafira/fluoro-riso) (GitHub)
- [Grainy gradients](https://css-tricks.com/grainy-gradients/) (CSS-Tricks)
- Stile "riso" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
