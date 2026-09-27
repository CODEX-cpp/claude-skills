# Stile: Cafe (accogliente come un caffè)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "cafe" di Awesome Design (licenza MIT), riscritto
tenendo la sua palette, che era già buona e leggibile: marrone caffè
`#5D4432`, crema `#E9E3DD`, fondo `#F9F7F5`, testo `#3E2B1E`.
Sostituito Poppins (molto usato, geometrico e freddo per l'idea) con
proposte più calde. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Sedersi in un bel caffè.** Toni del caffè e del latte, tipografia
morbida, layout pulito e rilassato, foto calde. Niente fretta,
niente urla: si sfoglia con piacere.

**Adatto a**: bar, caffetterie, pasticcerie, panetterie, torrefazioni,
librerie-caffè, bed & breakfast.
**Poco adatto a**: tecnologia, eventi energici.

**Differenza con i vicini** *(mio)*:
- **terracotta**: editoriale e luminoso con rosso mattone; cafe è più
  marrone, raccolto, da locale.
- **soft** (stile principale): neutro e morbido per qualsiasi settore;
  cafe è caldo e a tema.
- **paper**: carta e inchiostro; cafe è legno e ceramica.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile cafe |
| --- | --- |
| Neutri a scelta | **Neutri caldi** (latte, crema, caffè), mai grigi freddi |
| Un solo accento | Resta uno: il **marrone caffè** |
| Contenuti vari | Contenuti pratici **sempre in vista**: orari, indirizzo, menu |


## 3. Tipografia

- Titoli: serif morbido o sans umanista caldo.
- Testo: sans umanista 17px.
- Direzioni possibili *(mio, da verificare)*: titoli Young Serif,
  Gloock, Bricolage Grotesque; testo Karla, Nunito Sans, Mulish.
  **Niente lista nera** (Fraunces, spesso usato per questo genere, è
  in lista nera).
- Il menu in una tabella o lista vera, con prezzi allineati a destra
  (`tabular-nums`).


## 4. Colore

Palette dall'originale, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f9f7f5` | |
| `--surface` | `#ffffff` | |
| `--text` | `#3e2b1e` | 12.5:1 |
| `--text-muted` | `#6b5a4d` | 6.15:1 |
| `--border-control` | `#9a8a7e` | 3.11:1 |
| `--accent` | `#5d4432` | caffè: 8.4:1; testo bianco sopra 9.0:1 |
| Fascia latte | `#e9e3dd` | testo 10.5:1, testo secondario 5.2:1 |


## 5. Layout

- In alto (o subito sotto la foto): **orari di oggi, indirizzo,
  telefono**. È quello che cercano quasi tutti.
- Menu in sezioni (caffetteria, dolci, pranzo) con prezzi.
- Galleria di foto del locale, mappa (link a Google Maps, niente mappa
  incorporata pesante in cima).


## 6. Componenti

- Bottoni morbidi (angoli 8-12px) pieni caffè: "Prenota",
  "Chiama" (`tel:`), "Indicazioni".
- Card menu su crema con bordo sottile.
- Orari in `<table>` o `<dl>`, con il giorno corrente evidenziato.


## 7. Movimento

Livello "nessuna" o "misurata".


## 8. Immagini

Foto vere del locale e dei prodotti, luce naturale calda, dettagli
(tazze, mani, banco). Mai foto stock di "caffè generico".


## 9. Trappole

- Orari e indirizzo nascosti nel footer.
- Menu in PDF o in immagine: non si legge sul telefono e non si
  trova su Google *(ricerca: NN/g, i PDF costringono a zoomare,
  scaricano lenti e disorientano)*.
- Marrone su marrone: controlla il contrasto su ogni fascia.


## 10. Controllo dello stile

- [ ] Orari, indirizzo e telefono visibili subito.
- [ ] Menu in HTML vero con prezzi allineati.
- [ ] Foto vere del locale.


## Fonti

- [PDF: ancora inadatti alla lettura online](https://www.nngroup.com/articles/pdf-unfit-for-human-consumption/) (Nielsen Norman Group)
- Stile "cafe" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
