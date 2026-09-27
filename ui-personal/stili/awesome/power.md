# Stile: Power (nero assoluto, titoli enormi)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "power" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "estetica scura di fascia alta, titoli
audaci, palette monocromatica", nero `#000000`, bianco `#FFFFFF` e
Oswald. Tenuto il bianco e nero; il testo corrente passa a bianco
sporco per l'alone. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Potenza e lusso in bianco e nero.** Nero pieno, titoli bianchi
enormi e condensati, pochissimo testo, foto di prodotto spettacolari.
Nessun colore: la forza viene dalla scala e dal contrasto.

**Adatto a**: auto e moto, orologi, attrezzatura sportiva di fascia
alta, moda maschile, lanci di prodotto premium.
**Poco adatto a**: servizi, testi lunghi, marchi caldi.

**Differenza con i vicini** *(mio)*:
- **bold**: scuro con due colori sportivi; power è solo bianco e nero.
- **dramatic**: teatrale con rosso e composizioni fuori asse; power è
  frontale e massiccio.
- **premium**: lusso chiaro e raffinato; power è lusso scuro e muscolare.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile power |
| --- | --- |
| Tema scelto dal contesto | **Nero** |
| Niente nero puro `#000000` | **Nero puro ammesso come fondo** (è la firma dello stile); il testo resta `#ededed` |
| Un accento | **Nessun colore**: bianco come "accento" |
| Titoli al massimo 6rem | Resta 6rem, in condensato pesante (occupa tanto spazio in altezza, poco in larghezza) |
| Maiuscolo solo breve | Titoli in maiuscolo condensato ammessi |


## 3. Tipografia

- Titoli: condensato pesante maiuscolo (Oswald dall'originale), tracking
  leggermente largo.
- Testo: sans pulito, peso 400, 17px.
- Direzioni possibili *(mio, da verificare)*: titoli Oswald, Anton,
  Big Shoulders Display; testo Archivo, Figtree. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#000000` | |
| `--surface` | `#111111` | |
| `--text` | `#ededed` | 17.9:1 (non bianco puro nel testo) |
| `--text-muted` | `#a3a3a3` | 8.3:1 |
| `--border-control` | `#737373` | 4.4:1 |
| `--accent` | `#fafafa` | bottoni bianchi, testo nero sopra 20.1:1 |

- Il bianco quasi puro va bene nei **titoli grandi**; nel testo
  corrente usa `--text`.


## 5. Layout

- Hero a tutto schermo: foto e un titolo enorme.
- Sezioni corte, un messaggio ciascuna, tanto nero.
- Specifiche tecniche in tabella essenziale.


## 6. Componenti

- Bottoni bianchi pieni, rettangolari, testo nero maiuscolo; secondario
  con bordo bianco.
- Focus: anello bianco 3px con distacco (ben visibile sul nero).
- Numeri grandi (prestazioni) con dati veri e unità.


## 7. Movimento

Livello "misurata": entrate decise e brevi, foto che si rivelano.


## 8. Immagini

Foto di prodotto su nero, luce radente, alta qualità. È lo stile dove
le foto contano di più: senza foto buone non funziona.


## 9. Trappole

- Bianco puro su nero puro nei paragrafi.
- Titoli enormi su telefono che vanno a capo parola per parola:
  controlla con `clamp()`.
- Foto scure sul nero senza stacco.


## 10. Controllo dello stile

- [ ] Nessun colore oltre bianco, nero, grigi.
- [ ] Testo corrente `#ededed`, non `#fff`.
- [ ] Foto di qualità disponibili (se no, segnalarlo).


## Fonti

- [Quando la modalità scura diventa difficile da leggere](https://a11ywithdiana.substack.com/p/when-dark-mode-becomes-hard-to-read) (a11y with Diana)
- Stile "power" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
