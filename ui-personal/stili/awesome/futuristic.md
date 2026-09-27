# Stile: Futuristic (laboratorio tecnologico)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "futuristic" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "tipografia tecnologica, layout moderni,
estetica orientata all'innovazione", Roboto, Audiowide e i colori di
default. Qui l'idea diventa "interfaccia da laboratorio" chiara e
precisa, con variante scura. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**L'interfaccia di un laboratorio del futuro.** Linee sottili come nei
disegni tecnici, etichette in maiuscoletto e monospaziato, coordinate
e numeri di serie, angoli tagliati, un azzurro-petrolio preciso.
Pulito, esatto, "ingegnerizzato".

**Adatto a**: robotica, aerospazio, hardware, deep tech, ricerca,
automotive, startup tecnologiche.
**Poco adatto a**: settori caldi e umani, bambini.

**Differenza con i vicini** *(mio)*:
- **cosmic**: spazio e meraviglia, scuro; futuristic è tecnico e chiaro.
- **mono**: tutto monospaziato stile terminale; futuristic usa il mono
  solo per etichette e dati.
- **perspective**: profondità e isometria; futuristic è linee e
  dettagli tecnici.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile futuristic |
| --- | --- |
| Angoli a scelta | **Angoli tagliati** (`clip-path` con smusso a 45°) su card e bottoni |
| Maiuscolo solo breve | **Etichette in maiuscolo mono** con tracking largo (sono brevi) |
| Niente etichette maiuscole sopra i titoli | **Numeri di sezione** (`01 / SISTEMA`) ammessi, **se** contengono un'informazione vera (ordine, codice); non su ogni titolo per decorazione |
| Niente decorazioni | **Dettagli tecnici** (crocini di registro, righelli, coordinate) ammessi, decorativi |


## 3. Tipografia

- Titoli: sans tecnico o largo.
- Etichette e dati: monospaziato.
- Testo: sans neutro.
- Direzioni possibili *(mio, da verificare)*: titoli Chakra Petch, Exo 2,
  Audiowide (dall'originale, solo titoli); mono Anonymous Pro
  (dall'originale), IBM Plex Mono; testo IBM Plex Sans. **Niente lista
  nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f2f4f7` | grigio freddo |
| `--surface` | `#ffffff` | |
| `--text` | `#0c1117` | 17.2:1 |
| `--text-muted` | `#4c5664` | 6.75:1 |
| `--border-control` | `#818a97` | 3.17:1 |
| `--accent` | `#0a6c8f` | petrolio: 5.4:1; testo bianco sopra 5.9:1 |

Variante scura (`:root.tema-alt`): fondo `#0c1117`, testo
`#e6edf3`, accento `#5fd4f0` (11.0:1) con testo scuro sopra.


## 5. Layout

- Griglia visibile a tratti (righe sottili), sezioni numerate
  (`01 / SISTEMA`).
- Dati tecnici in tabelle o elenchi `<dl>`, con unità di misura.
- Crocini e righelli agli angoli delle immagini, nascosti ai lettori
  di schermo.


## 6. Componenti

- Bottoni con angolo tagliato: il `clip-path` taglia anche
  l'`outline` del focus, quindi il focus va su un contenitore o
  disegnato con un bordo interno *(mio, controllato su MDN: il
  `clip-path` nasconde tutto ciò che esce dalla forma)*.
- Etichette di stato (ONLINE, IN CARICO) con colore **e** testo.
- Numeri tabellari ovunque ci siano dati.


## 7. Movimento

Livello "misurata": linee che si disegnano, numeri che si
aggiornano (con `aria-live` solo se l'utente deve saperlo).
Niente effetti "glitch" (sfarfallii: fastidiosi e rischiosi).


## 8. Immagini

Rendering e foto di prodotto su fondo neutro, disegni tecnici,
esplosi.


## 9. Trappole

- Focus nascosto dal `clip-path`.
- Effetti glitch o testo che si "decripta" lettera per lettera
  (illeggibile per i lettori di schermo).
- Mono nel testo lungo.


## 10. Controllo dello stile

- [ ] Focus visibile anche sugli elementi con angoli tagliati.
- [ ] Mono solo per etichette e dati.
- [ ] Nessun effetto glitch.


## Fonti

- [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) (MDN)
- [Three Flashes, WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) (W3C)
- Stile "futuristic" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
