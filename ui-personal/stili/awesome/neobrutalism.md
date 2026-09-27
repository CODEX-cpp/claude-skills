# Stile: Neobrutalism (bordi neri, ombre a blocco, colori pieni)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "neobrutalism" di Awesome Design (licenza MIT),
riscritto: l'originale aveva solo la descrizione ("bordi forti,
accenti vivaci, layout crudi ad alto contrasto su superfici calde"), i
colori giallo `#FDC800` (tenuto), indaco `#432DD7`, fondo `#FBFBF9`
e testo `#1C293C` (tenuti), e il font Inter (in lista nera). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il brutalismo diventato simpatico.** Bordi neri spessi, ombre
nere piene sfalsate (senza sfocatura), colori pieni e allegri (giallo,
rosa, azzurro, verde), angoli piccoli, tipografia robusta. Diretto,
onesto, un po' "fatto a mano".

**Adatto a**: startup, strumenti per creativi, newsletter, podcast,
eventi, portfolio, prodotti giovani.
**Poco adatto a**: lusso, sanità, istituzioni.

**Differenza con i vicini** *(mio)*:
- **brutalist** (stile principale): austero, griglie a vista, pochi
  colori; neobrutalism è colorato e giocoso.
- **fiction**: contorni neri ma forme tonde e infantili, niente ombre.
- **immersive**: stessi bordi e ombre, ma su una tela di colore unica.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile neobrutalism |
| --- | --- |
| Ombre morbide | **Ombre piene nere sfalsate** (`4px 4px 0 #000`) |
| Bordi sottili | **Bordi neri 2-3px** su card, bottoni, campi, immagini |
| Niente nero puro `#000000` | **Nero puro ammesso** per bordi e ombre (non per il testo) |
| Un solo accento | **3-4 colori pieni** per blocchi e bottoni, tutti con testo scuro |


## 3. Tipografia

- Sans robusto e grottesco, titoli pesanti.
- Direzioni possibili *(mio, da verificare)*: Archivo, Public Sans,
  Rubik, Lexend Mega (titoli brevi). **Niente lista nera**
  (l'originale usava Inter).


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fbfbf9` | dall'originale |
| `--surface` | `#ffffff` | |
| `--text` | `#1c293c` | dall'originale: 14.2:1 |
| `--text-muted` | `#4d5868` | 7.0:1 |
| Bordi | `#000000` | 20.3:1 |
| `--accent` (bottoni) | `#fdc800` | giallo dall'originale, **testo scuro** sopra 9.4:1 |
| Link | `#1c293c` | colore del testo, **sottolineati** spessi |

Blocchi colorati (testo `#1c293c` sopra):

| Colore | Valore | Contrasto |
| --- | --- | --- |
| Rosa | `#ff90c8` | 7.0:1 |
| Azzurro | `#8fb8ff` | 7.3:1 |
| Verde | `#7ee0a1` | 9.1:1 |


## 5. Layout

- Blocchi con bordo nero e ombra, griglia chiara, un po' di
  "disordine" controllato (un blocco ruotato di 1-2°).
- Fondi dei blocchi alternati nei colori pieni.


## 6. Componenti

- Bottoni gialli con bordo nero e ombra; al passaggio l'ombra cresce,
  premuti si spostano sull'ombra (`translate(4px, 4px)`, ombra 0).
- Campi con bordo nero 2px e fondo bianco.
- Etichette colorate con bordo.
- Focus: anello nero 3px con distacco (`outline-offset: 3px`).


## 7. Movimento

Livello "misurata": movimenti netti e brevi (spostamenti di pochi px),
niente dissolvenze lente.


## 8. Immagini

Foto e illustrazioni con bordo nero e ombra, ritagli netti.


## 9. Trappole

- Testo bianco sui colori pieni: sempre testo scuro.
- Troppi colori nella stessa schermata: sembra un volantino.
- Ombre sfocate: non è più neobrutalism.


## 10. Controllo dello stile

- [ ] Testo scuro su tutti i colori.
- [ ] Bordi e ombre coerenti (stesso spessore e sfalsamento).
- [ ] Massimo 2-3 colori pieni per schermata.


## Fonti

- [Neumorphism, glassmorphism e neubrutalism a confronto](https://www.cccreative.design/blogs/differences-in-ui-design-trends-neumorphism-glassmorphism-and-neubrutalism) (CC Creative)
- Stile "neobrutalism" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
