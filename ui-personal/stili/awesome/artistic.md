# Stile: Artistic (manifesto d'arte contemporanea)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "artistic" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "alto contrasto, tipografia creativa, colori
audaci", il font Limelight e i colori di default blu/viola. Qui l'idea
è resa concreta: il linguaggio dei manifesti e delle gallerie d'arte
contemporanea. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Un manifesto di una mostra.** Composizioni tipografiche audaci
(testo come immagine), colori primari pieni (rosso, blu oltremare,
giallo), molto bianco, griglie rotte con intenzione. Ogni pagina è
una composizione.

**Adatto a**: gallerie, artisti, festival, teatri, fondazioni, scuole
d'arte e design, studi creativi.
**Poco adatto a**: servizi pratici, e-commerce, gestionali.

**Differenza con i vicini** *(mio)*:
- **expressive**: personalità tipografica in un'interfaccia normale;
  artistic è composizione da manifesto.
- **brutalist** (stile principale): griglia a vista e aria tecnica;
  artistic è più colore e composizione.
- **geometric**: forme geometriche ordinate; artistic è più libero.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile artistic |
| --- | --- |
| Titoli al massimo 6rem | Resta 6rem per i titoli HTML; composizioni più grandi ammesse **solo** come SVG con testo vero dentro o con `aria-label` |
| Composizioni ordinate | **Griglie rotte**, testo ruotato (90°) per etichette brevi |
| Un solo accento | **Tre primari** (rosso, blu, giallo) a blocchi |


## 3. Tipografia

- Titoli: display con forte carattere (l'originale usava Limelight,
  art déco), o un grottesco pesante usato in modo espressivo.
- Testo: sans neutro e leggibile, per contrasto.
- Direzioni possibili *(mio, da verificare)*: titoli Limelight,
  Bricolage Grotesque, Syne, Unbounded; testo Public Sans, Archivo.
  **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f5f3ee` | |
| `--surface` | `#ffffff` | |
| `--text` | `#0d0d0d` | 17.5:1 |
| `--text-muted` | `#55534e` | 6.9:1 |
| `--border-control` | `#87847d` | 3.37:1 |
| `--accent` | `#c8102e` | rosso: 5.3:1; testo bianco sopra 5.9:1 |
| Blu oltremare | `#1b2fbf` | blocchi con testo bianco 9.5:1 |
| Giallo | `#ffcc00` | blocchi con testo nero 12.9:1 |

- Il rosso sul giallo fa solo 3.9:1: niente testo rosso sui blocchi
  gialli (va bene solo per titoli molto grandi, con 3:1).


## 5. Layout

- Composizioni asimmetriche su griglia a 12 colonne, con elementi che
  la attraversano.
- Testo ruotato solo per etichette brevi (`writing-mode:
  vertical-rl`), mai per contenuti da leggere.
- Ordine nel codice logico anche se la composizione visiva è libera.
- Su telefono la composizione si semplifica in colonna.


## 6. Componenti

- Bottoni rettangolari pieni o con bordo 2px nero.
- Elenco mostre/eventi come lista tipografica (data, titolo, luogo),
  non card.
- Link sottolineati spessi.


## 7. Movimento

Livello "misurata": entrate di blocchi colorati, cambi netti. Niente
effetti continui.


## 8. Immagini

Opere e foto d'arte a colori fedeli, grandi, con didascalia completa
(autore, titolo, anno, tecnica, crediti fotografici).


## 9. Trappole

- Testo dentro immagini (manifesti come JPG): invisibile per lettori
  di schermo e motori di ricerca.
- Composizione che confonde l'ordine di lettura.
- Troppi colori pieni insieme: un blocco dominante per schermata.


## 10. Controllo dello stile

- [ ] Testo sempre vero (HTML o SVG con testo).
- [ ] Ordine di lettura logico nel codice.
- [ ] Didascalie complete delle opere.


## Fonti

- [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) (MDN)
- [Immagini di testo, WCAG 1.4.5](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) (W3C)
- Stile "artistic" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
