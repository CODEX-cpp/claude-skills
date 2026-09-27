# Stile: Mono (terminale, monospaziato, "hacker")

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "mono" di Awesome Design (licenza MIT), riscritto:
l'originale aveva la stessa descrizione di "neumorphism" (un club
sull'AI), il verde matrix `#37F712` su fondo chiaro `#E7E5E4` (dove
fa 1.16:1) e il testo `#78716B` (3.82:1, insufficiente). Qui
portato su fondo scuro, dove il verde funziona. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il terminale di uno sviluppatore.** Monospaziato per titoli ed
etichette, fondo scuro, verde fosforo come accento, righe e colonne
allineate a caratteri, prompt (`>`, `$`) e cursori. Denso, tecnico,
"hacker-chic".

**Adatto a**: strumenti per sviluppatori, documentazione tecnica,
CLI, community tech, portfolio di programmatori, sicurezza
informatica.
**Poco adatto a**: pubblico non tecnico, testi lunghi narrativi.

**Differenza con i vicini** *(mio)*:
- **futuristic**: laboratorio, chiaro, mono solo per etichette; mono è
  terminale scuro.
- **neon**: colori elettrici e bagliori; mono è sobrio, un solo verde.
- **dithered**: grafica retinata; mono è tipografia a griglia.

**Dalla ricerca** *(ricerca: Butterick)*: i font monospaziati sono
**più faticosi da leggere** dei proporzionali e occupano più spazio;
nacquero per le macchine da scrivere. Hanno senso per codice, dati e
etichette. Quindi: mono per titoli, codice, etichette e dati; testo
corrente in un sans proporzionale (o in un "quasi mono" leggibile).


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile mono |
| --- | --- |
| Tema scelto dal contesto | **Scuro** (terminale) |
| Default da evitare: "quasi-nero con un accento acido" (`colore.md`) | **Ammesso**: è proprio questo stile, scelto dall'utente |
| Font a scelta | **Monospaziato** per titoli, etichette, navigazione, codice |
| Densità a scelta | **Densità compatta** ammessa (spaziature piccole), ma target sempre 24px o più |


## 3. Tipografia

- Mono: Space Mono (dall'originale), JetBrains Mono, IBM Plex Mono.
- Testo corrente: un sans proporzionale abbinato (IBM Plex Sans con
  Plex Mono) o un "quasi monospaziato", cioè con larghezze regolari
  ma non identiche. Se si vuole restare in mono anche nei testi
  medi, Atkinson Hyperlegible Mono è progettato per la leggibilità. **Niente lista nera.** *(mio, da verificare)*
- Titoli in minuscolo o con prompt (`> progetti`), non tutto
  maiuscolo.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#0d0f0d` | |
| `--surface` | `#161a16` | |
| `--text` | `#d9e6d6` | 14.9:1 (verde-bianco tenue, meno alone) |
| `--text-muted` | `#9aab96` | 7.9:1 |
| `--border-control` | `#647062` | 3.7:1 (3.38 su `--surface`) |
| `--accent` | `#37f712` | verde fosforo dall'originale: 13.3:1; testo scuro sopra 13.3:1 |
| Ambra (secondo, facoltativo) | `#ffb000` | 10.5:1, per avvisi |

- Il verde fosforo su tutto il testo stanca: solo accenti, prompt,
  link.


## 5. Layout

- Griglia in caratteri (`ch`): colonne larghe 60-80ch, allineamenti
  a caratteri.
- Blocchi come "finestre" del terminale con intestazione
  (`~/progetti`).
- Tabelle testuali con bordi a linee sottili.


## 6. Componenti

- Bottoni come comandi (`[ esegui ]` o `> esegui`), ma sempre
  `<button>` veri con area 24px o più.
- Codice in `<pre><code>` con evidenziazione e bottone "Copia".
- Cursore lampeggiante solo decorativo, fermo con "Riduci movimento"
  (e lampeggio lento, sotto i 3 al secondo).
- Focus: blocco in negativo (fondo verde, testo scuro) o anello verde.


## 7. Movimento

Livello "nessuna" o "misurata": testo che appare come digitato **solo
per una riga di titolo**, mai per i contenuti (i lettori di schermo
leggerebbero a pezzi: il testo intero va nel DOM subito).


## 8. Immagini

Poche: screenshot di codice o del prodotto, ASCII art (con testo
alternativo o `aria-hidden` se decorativa).


## 9. Trappole

- Verde fosforo su fondo chiaro (l'errore dell'originale).
- Tutto in mono, anche i paragrafi lunghi.
- ASCII art letta dai lettori di schermo carattere per carattere.


## 10. Controllo dello stile

- [ ] Fondo scuro; verde solo per accenti.
- [ ] Testo lungo proporzionale o "quasi mono" leggibile.
- [ ] ASCII art nascosta o descritta.


## Fonti

- [Font monospaziati](https://practicaltypography.com/monospaced-fonts.html) (Butterick's Practical Typography)
- [Quasi monospaziati: font per scrivere](https://blakewatson.com/journal/almost-monospaced-the-perfect-fonts-for-writing/) (Blake Watson)
- [Quando la modalità scura diventa difficile da leggere](https://a11ywithdiana.substack.com/p/when-dark-mode-becomes-hard-to-read) (a11y with Diana)
- Stile "mono" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
