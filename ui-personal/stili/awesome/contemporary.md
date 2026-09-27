# Stile: Contemporary (il web di oggi, fatto bene)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "contemporary" di Awesome Design (licenza MIT),
riscritto partendo dalla sua descrizione ("minimalista, accessibile,
veloce, griglie bento, modalità scura"); tenuto Jost; il magenta
`#C800DF` col testo bianco fa 4.64:1 ma sul grigio di superficie non
basta come testo: scurito. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il meglio del web attuale, senza mode passeggere.** Tipografia
grande e pulita, griglie bento per i contenuti, tema chiaro e scuro,
un colore vivace come firma, pagine veloci e accessibili. Moderno ma
senza gli effetti che invecchiano in un anno.

**Adatto a**: startup, prodotti digitali, agenzie, portfolio, siti
aziendali giovani.
**Poco adatto a**: settori tradizionali che vogliono sembrare
"storici".

**Differenza con i vicini** *(mio)*:
- **modern**: moderno sobrio e neutro; contemporary ha un colore
  deciso e il bento.
- **bento**: la griglia a riquadri da sola; contemporary è uno stile
  completo che la usa.
- **minimal** (stile principale): toglie; contemporary aggiunge un
  po' di colore e gioco.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile contemporary |
| --- | --- |
| Un tema | **Chiaro e scuro** entrambi, con scelta dell'utente e `prefers-color-scheme` |
| Card uniformi | **Sezioni bento** ammesse (vedi `bento.md`) |


## 3. Tipografia

- Sans geometrico, titoli grandi, pesi 400-700.
- Direzioni possibili *(mio, da verificare)*: Jost (dall'originale),
  Outfit, Onest. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f4f4f5` | |
| `--text` | `#111827` | 17.7:1 |
| `--text-muted` | `#52525b` | 7.7:1 |
| `--border-control` | `#82828b` | 3.81:1 |
| `--accent` | `#a3009e` | magenta: 6.9:1 (6.3 su `--surface`); testo bianco sopra 6.9:1 |

Tema scuro (`:root.tema-alt`): fondo `#0f0f12`, testo `#ececf0`
(16.2:1), accento `#f07cf0` (8.1:1) con testo scuro sopra.


## 5. Layout

- Hero con titolo grande e poco testo; sezioni bento per le funzioni;
  prove e prezzi in sezioni semplici.
- Container queries per i componenti, `clamp()` per i titoli.
- Selettore di tema (chiaro, scuro, automatico) in alto, ricordato.


## 6. Componenti

- Bottoni pillola pieni magenta, secondari con bordo.
- Card bento arrotondate 20-24px.
- Icone lineari (Lucide, Phosphor).


## 7. Movimento

Livello "misurata": View Transitions tra le pagine (con `@supports`),
entrate brevi.


## 8. Immagini

Screenshot del prodotto in entrambi i temi, AVIF/WebP, dimensioni
dichiarate.


## 9. Trappole

- Rincorrere le mode dell'anno (vetro, aloni, testo sfumato).
- Tema scuro fatto invertendo i colori: va progettato.
- Magenta originale come testo sul grigio.


## 10. Controllo dello stile

- [ ] Entrambi i temi verificati.
- [ ] Magenta scuro per testo e bottoni.
- [ ] Core Web Vitals nei limiti.


## Fonti

- [View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) (MDN)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) (MDN)
- Stile "contemporary" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
