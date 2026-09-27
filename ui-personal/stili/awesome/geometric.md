# Stile: Geometric (griglia precisa e forme pure)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "geometric" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo la descrizione ("strutturato, tipografia pulita,
colori neutri, forme precise, layout intuitivi che non si mettono in
mezzo"), Inter (lista nera) e i colori di default blu/viola. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Ordine svizzero.** Griglia rigorosa, forme pure (cerchio, quadrato,
triangolo) come elementi grafici, neutri con un solo colore, tipografia
geometrica. Tutto è allineato e misurato; l'interfaccia "non si mette
in mezzo".

**Adatto a**: studi di architettura e ingegneria, design, prodotti
tecnici, consulenza, portfolio.
**Poco adatto a**: marchi caldi e affettuosi, bambini.

**Differenza con i vicini** *(mio)*:
- **pulse**: forme geometriche calde e arancio; geometric è neutro.
- **artistic**: griglie rotte e colori primari; geometric è ordinato.
- **square**: angoli a 0 e interfaccia; geometric aggiunge forme
  grafiche e griglia a vista.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile geometric |
| --- | --- |
| Niente forme decorative | **Forme pure** (cerchi, quadrati, triangoli) ammesse come elementi grafici semplici |
| Griglia a scelta | **Griglia rigorosa**: tutto su multipli della stessa unità (8px) |
| Font a scelta | **Sans geometrico** |


## 3. Tipografia

- Sans geometrico (lettere costruite su cerchi e rette), titoli
  grandi e allineati alla griglia.
- Direzioni possibili *(mio, da verificare)*: Jost (ispirato a
  Futura), Outfit, Urbanist, Lexend. **Niente lista nera**.
- Attenzione: i geometrici puri hanno "a" e "o" simili a piccole
  dimensioni; per il testo lungo scegli quelli con aperture ampie.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fafafa` | |
| `--surface` | `#ffffff` | |
| `--text` | `#121212` | 17.95:1 |
| `--text-muted` | `#535353` | 7.4:1 |
| `--border-control` | `#868686` | 3.49:1 |
| `--accent` | `#2b50aa` | blu cobalto: 7.1:1; testo bianco sopra 7.4:1 |


## 5. Layout

- Griglia a 12 colonne con righe di base (8px); moduli quadrati.
- Una forma geometrica grande per sezione, allineata alla griglia,
  decorativa (`aria-hidden="true"`).
- Molto spazio negativo, allineamenti a sinistra netti.


## 6. Componenti

- Bottoni rettangolari (angoli 0-4px), pieni cobalto o con bordo.
- Icone lineari geometriche (Lucide, Phosphor "regular").
- Numeri e indici (01, 02) allineati alla griglia.


## 7. Movimento

Livello "nessuna" o "misurata": forme che entrano lungo gli assi della
griglia, senza curve.


## 8. Immagini

Fotografia architettonica, simmetrie, linee; ritagli quadrati o
circolari.


## 9. Trappole

- Rigidità che diventa freddezza: un tocco di colore e foto vere.
- Forme usate a caso, non allineate alla griglia.
- Font geometrici poco leggibili nel testo corrente.


## 10. Controllo dello stile

- [ ] Tutte le misure multiple dell'unità di base.
- [ ] Forme decorative allineate e nascoste ai lettori di schermo.
- [ ] Un solo colore.


## Fonti

- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) (MDN)
- Stile "geometric" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
