# Stile: Immersive (mostra interattiva su tela verde)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "immersive" di Awesome Design (licenza MIT), riscritto
tenendo la sua descrizione, che era già dettagliata: un'unica tela
verde scuro `#00592B` per tutta la pagina, card bianche con bordo nero
spesso e ombra "a blocco", titoli condensati (Oswald), bottoni bianchi
inclinati, blocchi decorativi blu cobalto e rosa. Aggiunte le regole
di contrasto e di movimento. Legenda: *(ricerca: …)* = fonti in
fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Visitare una mostra, non un sito.** Un'unica tela di colore da
cima a fondo, "cartelli" bianchi che saltano fuori, titoli come
manifesti, piccoli momenti di gioco (scoprire, cliccare, collezionare)
che premiano la curiosità.

**Adatto a**: musei, mostre, festival, campagne culturali, lanci
giocosi, progetti educativi per ragazzi.
**Poco adatto a**: servizi pratici, e-commerce, testi lunghi.

**Differenza con i vicini** *(mio)*:
- **storytelling**: capitoli con toni diversi; immersive ha una sola
  tela e più gioco.
- **neobrutalism**: stessi bordi neri e ombre a blocco, ma su fondi
  chiari e pastello; immersive su un colore di marca pieno.
- **dramatic**: nero e teatrale; immersive è colorato e giocoso.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile immersive |
| --- | --- |
| Sezioni su fondi neutri | **Una sola tela colorata** per tutta la pagina, niente alternanza |
| Ombre morbide | **Ombre a blocco** nette (`6px 6px 0 #111`) |
| Niente forme decorative | **Blocchi geometrici** blu e rosa dietro le card, decorativi |
| Bottoni dritti | **Bottoni inclinati** (`transform: skew(-6deg)`, testo raddrizzato dentro) |
| Font display solo se giustificato | **Condensato in maiuscolo** per i titoli |


## 3. Tipografia

- Titoli: condensato pesante, maiuscolo, grande (Oswald
  dall'originale).
- Testo: un sans leggibile non condensato (il condensato nel testo
  lungo stanca).
- Direzioni possibili *(mio, da verificare)*: titoli Oswald, Anton,
  Big Shoulders Display; testo Figtree, Archivo. **Niente lista nera.**


## 4. Colore

Sulla tela il testo è chiaro; dentro le card è scuro. Contrasti
verificati *(mio)*:

| Dove | Colore | Nota |
| --- | --- | --- |
| Tela (`--bg`) | `#00592b` | verde scuro dall'originale |
| Testo sulla tela | `#ffffff` | 8.5:1 |
| Testo secondario sulla tela | `#cfe6d8` | 6.5:1 |
| Card (`--surface`) | `#ffffff` | |
| Testo nelle card | `#111111` | 18.9:1 |
| Focus e link sulla tela | `#ffd84d` | giallo: 6.2:1 |
| Blocchi decorativi | `#0023d1` blu, `#ff4fa3` rosa | **solo decorativi**: il blu sul verde fa 1.1:1, il rosa 2.8:1 |

- Bottoni: bianchi con testo nero e bordo nero (18.9:1); il bordo nero
  sul verde fa solo 2.2:1, ma il bottone si distingue grazie al
  bianco pieno (8.5:1 sul verde).
- Mai testo sopra i blocchi decorativi.


## 5. Layout

- Card bianche come "pannelli" della mostra, disposte in modo
  irregolare, con i blocchi colorati dietro, sfalsati.
- Percorso chiaro: sale/tappe numerate, indice sempre raggiungibile.
- Su telefono: una colonna, blocchi decorativi ridotti.


## 6. Componenti

- Card con bordo nero 3px e ombra a blocco.
- Bottoni inclinati: al passaggio l'ombra cresce (da 4px a 8px);
  premuto, l'ombra si azzera (il bottone "si abbassa").
- Momenti di gioco (quiz, "trova l'oggetto", collezione di badge):
  sempre usabili da tastiera, con istruzioni scritte, e **saltabili**.
- Punteggi e progressi annunciati ai lettori di schermo
  (`aria-live="polite"`).


## 7. Movimento

Livello "ricca" (da confermare): pannelli che entrano, piccole
reazioni ai clic. Mai scrolljacking; mai animazioni infinite; con
"Riduci movimento" niente inclinazioni animate né entrate.


## 8. Immagini

Foto scontornate o ritagliate nelle card, illustrazioni d'autore,
oggetti della mostra in alta qualità. Segnaposto dichiarati se
mancano.


## 9. Trappole

- Testo sui blocchi decorativi o sulla tela in colori scuri.
- Gioco obbligatorio per arrivare alle informazioni.
- Oswald nel testo corrente.
- Inclinazione applicata anche al testo (si legge peggio).


## 10. Controllo dello stile

- [ ] Una sola tela, testo chiaro sulla tela e scuro nelle card.
- [ ] Blocchi colorati solo decorativi (`aria-hidden="true"`).
- [ ] Giochi usabili da tastiera e saltabili.
- [ ] Focus giallo ben visibile sulla tela.


## Fonti

- [Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/) (Nielsen Norman Group)
- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- Stile "immersive" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
