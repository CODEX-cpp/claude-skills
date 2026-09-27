# Stile: Creative (illustrato, con personaggi)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "creative" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "cerative style for landing pages" (con errore
di battitura), il font fumettistico Bangers per tutto e la palette
blu/viola generica. Legenda: *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

**Illustrazioni e personaggi raccontano il marchio.** Un'illustrazione
d'autore (o una mascotte) guida il visitatore, i colori sono allegri,
i titoli hanno carattere, il tono è giocoso. Sembra un albo illustrato
o una campagna creativa.

**Adatto a**: prodotti per bambini e famiglie, giochi, app divertenti,
eventi, landing di prodotti creativi.
**Poco adatto a**: servizi seri, B2B, sanità.

**Differenza con i vicini** *(mio)*:
- **expressive**: la personalità sta nella tipografia; in creative
  sta nelle illustrazioni.
- **doodle** e **sketch**: disegnato a mano, a matita; creative usa
  illustrazioni pulite e colorate.
- **fiction**: stile libro per bambini con tinte calde; creative è più
  "campagna pubblicitaria".


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile creative |
| --- | --- |
| Niente illustrazioni improvvisate | **Illustrazioni al centro**, ma **d'autore** (fornite dall'utente o da un illustratore), mai disegnate "a mano" in SVG dall'AI |
| Font display solo se giustificato | **Font fumettistico o display per i titoli** ammesso, mai per il testo |
| Un solo accento | **Una palette di 3-4 colori allegri** per le illustrazioni e gli sfondi, più un colore per le azioni |
| Emoji vietate | Restano vietate al posto delle icone; ammesse solo nel testo se l'utente lo vuole |


## 3. Tipografia

- Titoli: un display con personalità (l'originale usava Bangers, stile
  fumetto: solo per titoli brevi).
- Testo: un sans rotondo e leggibile.
- Direzioni possibili *(mio, da verificare)*: titoli Bangers, Luckiest
  Guy, Chewy; testo Nunito, Baloo 2, Figtree. **Niente lista nera.**
- Verifica le lettere accentate: molti font "da fumetto" non hanno
  tutte le lettere italiane.


## 4. Colore

Base, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fffdf7` | bianco appena caldo |
| `--surface` | `#ffffff` | |
| `--text` | `#1c1a24` | 16.9:1 |
| `--text-muted` | `#57546a` | 7.2:1 |
| `--border-control` | `#87849a` | 3.6:1 |
| `--accent` (azioni) | `#0e6b52` | verde: 6.4:1; testo bianco sopra 6.5:1 |

Colori per illustrazioni e sfondi (testo scuro `#1c1a24` sopra):

| Colore | Valore | Testo scuro sopra |
| --- | --- | --- |
| Giallo sole | `#ffd23f` | 11.9:1 |
| Rosa | `#ff8fab` | 8.0:1 |
| Azzurro | `#7bdff2` | 11.2:1 |


## 5. Layout

- L'illustrazione occupa l'hero e ritorna nelle sezioni (lo stesso
  personaggio in pose diverse).
- Fasce colorate morbide, forme arrotondate.
- Ordine di lettura chiaro nonostante la giocosità.


## 6. Componenti

- Bottoni grandi, arrotondati, con un'ombra "a blocco" leggera
  ammessa se coerente.
- Card con angoli molto arrotondati (16-24px).
- Icone arrotondate e piene (Phosphor "fill" o "duotone").


## 7. Movimento

Livello "misurata" o "ricca": il personaggio può muoversi una volta
(saluto, entrata). Niente animazioni infinite; "Riduci movimento" lo
ferma.


## 8. Immagini

Illustrazioni d'autore in uno stile unico, in SVG o WebP. Se non ci
sono ancora: **segnaposto dichiarati** e l'elenco delle illustrazioni
da commissionare (vedi `immagini.md`).


## 9. Trappole

- Illustrazioni disegnate dall'AI in SVG: sembrano clip-art.
- Font fumetto per testi lunghi.
- Giocosità che nasconde le informazioni pratiche (prezzi, date,
  contatti).


## 10. Controllo dello stile

- [ ] Illustrazioni d'autore o segnaposto dichiarati.
- [ ] Display solo nei titoli, con lettere accentate verificate.
- [ ] Informazioni pratiche facili da trovare.


## Fonti

- [Le 4 dimensioni del tono di voce](https://www.nngroup.com/articles/tone-of-voice-dimensions/) (Nielsen Norman Group)
- Stile "creative" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
