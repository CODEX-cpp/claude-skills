# Stile: Premium (prodotto di fascia alta al centro)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "premium" di Awesome Design (licenza MIT), riscritto:
l'originale si dichiarava "Apple design style" con font Inter.
Qui è uno stile generico, senza imitare un marchio.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il prodotto è il protagonista.** Foto enormi e perfette del
prodotto, titoli sans grandi e sicuri, poche parole, tanto spazio,
precisione assoluta. Ogni sezione mostra una cosa sola.

**Adatto a**: prodotti fisici o digitali di fascia alta (elettronica,
design, auto, orologi), lanci di prodotto.
**Poco adatto a**: servizi senza un prodotto da mostrare, siti con
molto testo.

**Differenza con i vicini** *(mio)*:
- **soft** (stile principale): calmo e morbido, per servizi;
  premium è netto e centrato sull'oggetto.
- **sleek**: per interfacce software; premium è una vetrina.

**Dalla ricerca** *(ricerca: Webwavers)*: ciò che fa sembrare
"costoso" un sito sono tipografia curata, spazio, palette trattenuta,
foto di qualità (mai stock generiche), animazioni sobrie e
allineamenti perfetti.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile premium |
| --- | --- |
| Titolo hero massimo 2 righe | Titolo hero **corto (2-5 parole)** e molto grande |
| Hero con testo a sinistra, non centrato | **Centrato ammesso**: prodotto al centro, titolo sopra o sotto |
| Tema scelto dal contesto | Chiaro o scuro; lo scuro valorizza prodotti lucidi e metallici |


## 3. Tipografia

- Un sans grotesk moderno con pesi dal 400 al 700.
- Direzioni possibili *(mio, da verificare)*: Satoshi (Fontshare),
  General Sans, Schibsted Grotesk. **Niente lista nera** (l'originale
  usava Inter).
- Titoli 600-700 con tracking leggermente negativo; testo 17px.
- Frasi brevissime: una riga per il titolo, una o due per il
  sottotitolo.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Chiaro | Scuro | Nota |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | `#0b0b0c` | |
| `--surface` | `#f5f5f7` | `#161618` | |
| `--text` | `#111112` | `#f2f2f3` | oltre 16:1 |
| `--text-muted` | `#5f5f66` | `#a0a0a8` | oltre 5.8:1 |
| `--border-control` | `#8c8c94` | `#6e6e76` | oltre 3:1 |
| `--accent` | `#0a58c2` | `#5aa2ff` | blu, solo per link e bottoni; oltre 6:1 |

- I colori veri sono quelli **del prodotto** nelle foto; l'interfaccia
  resta neutra.
- Un solo tema per pagina (niente alternanza bianco/nero sezione per
  sezione).


## 5. Layout

- Una sezione = un messaggio + una grande immagine.
- Contenitore ampio per le immagini, stretto per il testo.
- Molto spazio verticale (fino a `--space-9` e oltre su desktop).
- Caratteristiche tecniche in una griglia ordinata con numeri grandi
  (dati veri).


## 6. Componenti

- Bottoni a pillola o arrotondati, un primario e al massimo un link
  secondario ("Scopri di più" solo se accompagnato dal nome del
  prodotto: "Scopri la serie X").
- Navigazione sottile, fissa in alto, poche voci.
- Confronto modelli in tabella chiara.


## 7. Movimento

Livello "misurata" o "ricca": il momento curato è il prodotto (una
rotazione, un'entrata), sempre con "Riduci movimento" che lo rende
statico.


## 8. Immagini

- **Foto di prodotto professionali**, sfondo pulito, alta risoluzione,
  in AVIF/WebP e `srcset` (sono pesanti: vedi `immagini.md`).
- Video brevi del prodotto con pausa e immagine di riserva.


## 9. Trappole

- Pagine lentissime per immagini enormi: il lusso è anche velocità.
- Poco testo che diventa nessuna informazione: prezzo e
  caratteristiche vanno trovati facilmente.
- Imitare un marchio famoso: lo stile è generico.


## 10. Controllo dello stile

- [ ] Ogni sezione ha un solo messaggio e un'immagine vera.
- [ ] Immagini ottimizzate, LCP entro 2.5 s.
- [ ] Prezzo e caratteristiche facili da trovare.


## Fonti

- [Cosa rende un sito "costoso"](https://webwavers.de/en/blog/website-design-elemente-premium) (Webwavers)
- Stile "premium" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
