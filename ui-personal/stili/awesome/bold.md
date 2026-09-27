# Stile: Bold (tipografia pesante su fondo scuro)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "bold" di Awesome Design (licenza MIT), riscritto:
l'originale non aveva descrizione, solo il font Archivo Black, fondo
`#111111` e i colori blu `#0077BC` e verde `#009866` (il blu sul
fondo scuro fa 3.9:1 e non basta per il testo; il verde fa 5.1:1). Legenda:
*(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Presenza forte.** Tipografia pesantissima e grande, fondo scuro, due
colori pieni e luminosi, composizioni che "comandano". Dice le cose in
poche parole, a voce alta.

**Adatto a**: sport, palestre, musica, eventi, lanci di prodotto,
campagne, marchi sicuri di sé.
**Poco adatto a**: testi lunghi da leggere, servizi delicati, pubblico
anziano.

**Differenza con i vicini** *(mio)*:
- **dramatic**: teatrale, con immagini immersive e composizioni
  insolite; bold è più diretto e tipografico.
- **vibrant**: caldo, chiaro e fotografico; bold è scuro e grafico.
- **brutalist** (stile principale): griglie visibili e aria da
  manuale tecnico; bold è più pulito e "sportivo".


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile bold |
| --- | --- |
| Tema scelto dal contesto | **Scuro** |
| Titoli al massimo 6rem | Titoli fino a 6rem (il massimo resta), sempre molto pesanti (800-900) |
| Maiuscolo solo per testi brevi | **Titoli in maiuscolo** ammessi (sono brevi per definizione in questo stile) |
| Un solo accento | **Due colori** (blu e verde) |


## 3. Tipografia

- Titoli: un sans pesantissimo e compatto, spesso in maiuscolo,
  interlinea 0.95-1.05, tracking leggermente negativo.
- Testo: un sans normale e leggibile, 16-17px, peso 400-500 (sul fondo
  scuro un filo più pesante del solito).
- Direzioni possibili *(mio, da verificare)*: titoli Archivo Black
  (dall'originale), Anton, Bebas Neue; testo Archivo, Figtree.
  **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#111111` | |
| `--surface` | `#1c1c1c` | |
| `--text` | `#f5f5f5` | 17.3:1 |
| `--text-muted` | `#b3b3b3` | 9.0:1 |
| `--border-control` | `#7a7a7a` | 4.0:1 anche su `--surface` |
| `--accent` | `#3aa0ff` | blu luminoso: 6.9:1; testo scuro sopra 6.9:1 |
| `--accent-2` | `#2ec27e` | verde: 8.2:1; testo scuro sopra 8.2:1 |

- Sui colori accesi il testo dei bottoni è **scuro**, non bianco.
- `color-scheme: dark` nel `tokens.css`.


## 5. Layout

- Sezioni corte, un messaggio ciascuna, titoli enormi.
- Contrasto forte di scala: titolo gigante accanto a testo piccolo.
- Blocchi di colore pieno (verde o blu) per l'invito all'azione.


## 6. Componenti

- Bottoni rettangolari grandi, pieni, testo maiuscolo pesante.
- Numeri grandi (risultati, date) come elementi grafici, con dati veri.
- Focus molto visibile (sul fondo scuro l'anello va nel colore
  d'accento, spesso 3px).


## 7. Movimento

Livello "misurata" o "ricca": entrate rapide e decise, mai
lente. Niente rimbalzi, niente bagliori.


## 8. Immagini

Foto ad alto contrasto, spesso in bianco e nero con un colore
d'accento; persone in azione.


## 9. Trappole

- Testo lungo in maiuscolo o in font pesante: illeggibile.
- Colori accesi "al neon" con bagliori: vietati.
- Pagine con troppe urla: se tutto è grande, niente lo è.


## 10. Controllo dello stile

- [ ] Titoli pesanti solo nei titoli; testo leggibile.
- [ ] Testo scuro sui bottoni colorati.
- [ ] Contrasti verificati sul fondo scuro.


## Fonti

- [Dark mode, buone pratiche](https://atmos.style/blog/dark-mode-ui-best-practices) (Atmos)
- Stile "bold" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
