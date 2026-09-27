# Stile: Terracotta (editoriale caldo e terroso)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "terracotta" di Awesome Design (licenza MIT), riscritto
tenendo la sua descrizione: superfici crema, titoli marrone inchiostro
in serif display, un solo accento terracotta, pensato per la lettura
lunga. Il terracotta originale `#C56A3C` col testo bianco fa 3.8:1:
scurito. L'originale usava DM Serif Display anche per il testo (è un
font da titoli): separato. Legenda: *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

**Cotto al sole.** Crema, sabbia, marrone inchiostro e un rosso
mattone: colori della terra, caldi e umani. Impaginazione editoriale,
serif da titolo, tanto spazio per leggere.

**Adatto a**: blog, ristoranti, agriturismi, cantine, ceramisti,
architettura, viaggi, food, racconti.
**Poco adatto a**: tecnologia, finanza, prodotti "freddi".

**Differenza con i vicini** *(mio)*:
- **editorial**: bianco e nero con rosso da testata; terracotta è
  caldo in ogni superficie.
- **cafe**: accogliente e da locale, più marrone scuro; terracotta è
  più luminoso ed editoriale.
- **vintage**: invecchiato e d'epoca; terracotta è contemporaneo.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile terracotta |
| --- | --- |
| Default da evitare: "crema + terracotta" (`colore.md`) | **Ammesso**: è proprio questo stile, scelto dall'utente. Proprio per questo va curato di più: foto vere e tipografia scelta, per non sembrare il sito "artigianale" di serie |
| Fondo neutro | **Fondo crema**, fasce sabbia |
| Font a scelta | **Serif display per i titoli**, serif o sans da lettura per il testo |
| Neutri grigi | **Neutri caldi** (marroni), mai grigi freddi |


## 3. Tipografia

- Titoli: DM Serif Display (dall'originale) o simile, grande.
- Testo: serif da lettura 18px o sans umanista, interlinea 1.65.
- Direzioni possibili *(mio, da verificare)*: titoli DM Serif Display,
  Young Serif; testo Lora, Source Serif 4, Karla. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f6eee1` | crema |
| `--surface` | `#fffaf2` | |
| `--text` | `#2b1d14` | marrone inchiostro: 14.2:1 |
| `--text-muted` | `#6a5646` | 6.0:1 |
| `--border-control` | `#9a8472` | 3.08:1 |
| `--accent` | `#a4492a` | terracotta scuro: 5.1:1; testo bianco sopra 5.9:1 |
| Fascia sabbia | `#ecdcc4` | testo `#2b1d14` sopra 12.1:1 |
| Verde salvia (facoltativo) | `#4f6b4a` | 5.2:1 sulla crema, per etichette |

- Sulla fascia sabbia il terracotta come testo fa solo 4.38:1: lì i
  link vanno nel colore del testo, sottolineati.


## 5. Layout

- Una colonna di lettura larga 65ch; immagini più larghe della
  colonna.
- Fasce sabbia per le sezioni di servizio (menu, orari, contatti).
- Tanto spazio verticale.


## 6. Componenti

- Bottoni pieni terracotta, angoli 6-8px o pillola (a scelta, uguali).
- Card crema chiaro con bordo sottile caldo, ombre quasi assenti.
- Citazioni in serif corsivo grande.
- Icone a tratto sottile in marrone.


## 7. Movimento

Livello "nessuna" o "misurata": comparse morbide delle immagini.


## 8. Immagini

Luce calda naturale, materiali (argilla, legno, lino), cibo,
paesaggi. Correzione colore coerente, tendente al caldo, senza filtri
esagerati.


## 9. Trappole

- Terracotta chiaro con testo bianco: non basta.
- Crema troppo giallo: sembra vecchio.
- Grigi freddi mescolati ai caldi.
- Serif display nel testo corrente.


## 10. Controllo dello stile

- [ ] Neutri tutti caldi.
- [ ] Display solo nei titoli.
- [ ] Link sulla fascia sabbia nel colore del testo.


## Fonti

- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) (MDN)
- Stile "terracotta" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
