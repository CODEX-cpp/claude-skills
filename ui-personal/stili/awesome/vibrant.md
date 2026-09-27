# Stile: Vibrant (caldo ed energico)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "vibrant" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "Vibrant style" come descrizione, un viola
`#7C61D4` con pesca e il font Fascinate per i titoli.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Energia e calore.** Un colore caldo e acceso (arancio bruciato,
corallo) in coppia con un colore freddo complementare (verde acqua),
titoli grandi e pieni di carattere, un tono diretto e allegro.

**Adatto a**: ristoranti e street food, sport e fitness, eventi,
festival, marchi giovani, app di consumo.
**Poco adatto a**: servizi sanitari, finanza, lusso sobrio.

**Differenza con i vicini** *(mio)*:
- **colorful**: 5 colori con un ruolo; vibrant ne usa 2 forti.
- **pulse**: monocromatico arancio con bordi spessi e forme
  geometriche; vibrant è più morbido e fotografico.
- **bold**: su fondo scuro e tipografia pesantissima; vibrant è chiaro
  e caldo.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile vibrant |
| --- | --- |
| Un solo accento, usato poco | **Due colori** (caldo per le azioni, freddo per i dettagli) e più presenza di colore (fasce, sfondi di sezione) |
| Font display solo se il soggetto lo giustifica | **Font display espressivo per i titoli** ammesso |


## 3. Tipografia

- Titoli: un display pieno di carattere, pesante e compatto.
- Testo: un sans semplice e leggibile.
- Direzioni possibili *(mio, da verificare)*: titoli Bricolage
  Grotesque, Archivo (Black / Expanded), Anton; testo Rubik, Figtree.
  **Niente lista nera.**
- Titoli grandi e brevi; il display **solo** nei titoli.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fffaf5` | bianco caldo leggerissimo (non crema: quasi bianco) |
| `--surface` | `#ffffff` | |
| `--text` | `#221a14` | 16.5:1 |
| `--text-muted` | `#5e5249` | 7.3:1 |
| `--border-control` | `#8f8177` | 3.6:1 |
| `--accent` | `#c2410c` | arancio bruciato: 5.0:1 come testo; testo bianco sopra 5.2:1 |
| `--accent-2` | `#0d6e6e` | verde acqua: 5.8:1; testo bianco sopra 6.1:1 |

- L'arancio acceso "puro" (tipo `#f97316`) con testo bianco non passa:
  qui è già scurito apposta.
- Fasce di sezione nei colori tenui (`color-mix` al 12-15% col bianco)
  con testo scuro.


## 5. Layout

- Composizioni dinamiche: foto grandi, titoli che si sovrappongono
  leggermente alle immagini (con contrasto verificato), griglie
  asimmetriche.
- Una o due fasce a colore pieno per pagina (es. invito all'azione
  finale).


## 6. Componenti

- Bottoni pieni arancio, grandi, arrotondati (8-12px o pillola).
- Etichette e piccoli elementi nel verde acqua.
- Testi dei bottoni diretti e con energia, ma chiari ("Prenota un
  tavolo").


## 7. Movimento

Livello "misurata" o "ricca": entrate decise ma brevi, hover con
cambio di colore. Niente rimbalzi.


## 8. Immagini

Foto luminose, colori caldi, persone e prodotti in azione.


## 9. Trappole

- Arancio chiaro con testo bianco (contrasto insufficiente).
- Troppe fasce di colore: diventa stancante.
- Display usato anche nel testo corrente.


## 10. Controllo dello stile

- [ ] Due colori, ruoli chiari (azioni / dettagli).
- [ ] Contrasti verificati su tutti i bottoni.
- [ ] Display solo nei titoli.


## Fonti

- [Le 4 dimensioni del tono di voce](https://www.nngroup.com/articles/tone-of-voice-dimensions/) (Nielsen Norman Group)
- Stile "vibrant" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
