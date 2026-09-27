# Stile: Flat (piatto, ma con i segnali giusti)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "flat" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("elementi bidimensionali, colori
vivaci, tipografia pulita, niente ombre, sfumature e texture").
L'arancio `#F2673C` col testo bianco fa 3.1:1: scurito. Tolti Inter
(lista nera) e il viola di default. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Tutto piatto, colori pieni, niente effetti.** Forme semplici,
colori vivaci a campiture piene, icone semplici, tipografia pulita.
Leggero e veloce. Ma con i **segnali di cliccabilità** al loro posto:
il piatto "puro" confonde (vedi sotto).

**Adatto a**: siti informativi, app semplici, infografiche,
servizi, prodotti per un pubblico ampio.
**Poco adatto a**: lusso, siti che vogliono profondità ed emozione.

**Differenza con i vicini** *(mio)*:
- **minimal** (stile principale): toglie anche il colore; flat usa
  colori vivaci.
- **colorful**: palette larga e festosa; flat è più sobrio e
  funzionale.
- **geometric**: griglia e forme precise, neutro; flat è colorato.

**Dalla ricerca** *(ricerca: NN/g)*: le interfacce "ultra piatte"
rendono gli utenti **meno efficienti**: non capiscono cosa è
cliccabile, guardano più a lungo, cliccano meno. La soluzione è il
**"flat 2.0"** (semi-piatto): aspetto piatto con leggeri segnali
(ombre minime, bordi, sottolineature) dove servono.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile flat |
| --- | --- |
| Ombre sobrie | **Nessuna ombra** decorativa; ammessa solo un'ombra minima dove serve a dire "cliccabile" o "sopra" (menu, finestre) |
| Un solo accento | **3-4 colori vivaci** per categorie e grafici, uno per le azioni |


## 3. Tipografia

- Sans geometrico o grottesco, pesi 400-700.
- Direzioni possibili *(mio, da verificare)*: Rubik, Work Sans, Public
  Sans, Lexend. **Niente lista nera** (l'originale usava Inter).


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f3f4f6` | |
| `--text` | `#111827` | 17.7:1 |
| `--text-muted` | `#4b5563` | 7.6:1 |
| `--border-control` | `#80868f` | 3.67:1 |
| `--accent` | `#c2410c` | arancio scuro: 5.2:1 (4.71 su `--surface`); testo bianco sopra 5.2:1 |
| Blu (categorie) | `#1d5fbf` | testo bianco sopra 6.1:1 |
| Verde (categorie) | `#15803d` | testo bianco sopra 5.0:1 |


## 5. Layout

- Griglia semplice, sezioni ben separate da spazio e fondi pieni.
- Layout e schemi **convenzionali** (menu in alto, schede standard):
  lo stile è già "povero" di segnali, non va aggiunta confusione.


## 6. Componenti *(ricerca: NN/g)*

- **Bottoni che sembrano bottoni**: pieni, con angoli e padding
  chiari; niente bottoni "fantasma" (solo bordo) per le azioni
  principali.
- **Link diversi dal testo** normale: colore **e** sottolineatura.
- Icone standard con **testo accanto**.
- Schede (tab) con lo stato attivo evidente (bordo, colore, peso).
- Se icona, immagine e titolo di una card rimandano alla stessa
  pagina, **tutti** sono cliccabili.


## 7. Movimento

Livello "nessuna" o "misurata": transizioni di colore brevi.


## 8. Immagini

Illustrazioni piatte d'autore o icone; foto semplici con colori in
armonia. Leggere (è uno stile "veloce").


## 9. Trappole

- Bottoni e testo indistinguibili.
- Grigio chiaro su grigio (contrasti bassi "eleganti").
- Arancio chiaro originale con testo bianco.


## 10. Controllo dello stile

- [ ] Ogni elemento cliccabile si riconosce senza passarci sopra.
- [ ] Link sottolineati.
- [ ] Icone con testo.


## Fonti

- [Flat design: origini, problemi e flat 2.0](https://www.nngroup.com/articles/flat-design/) (Nielsen Norman Group)
- [Buone pratiche del flat design](https://www.nngroup.com/articles/flat-design-best-practices/) (Nielsen Norman Group)
- [Gli elementi piatti attirano meno attenzione](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/) (Nielsen Norman Group)
- Stile "flat" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
