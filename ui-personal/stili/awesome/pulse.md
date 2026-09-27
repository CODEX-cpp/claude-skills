# Stile: Pulse (arancio, bordi spessi, forme geometriche)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "pulse" di Awesome Design (licenza MIT), riscritto
tenendo i suoi tratti (arancio vivo, bordi spessi 4px, forme
geometriche, tipografia espressiva). L'originale aveva testo arancio
`#EA580C` su fondo arancio `#FDBA74`: **2.1:1**, illeggibile. Legenda:
*(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Vitalità in una sola tinta.** Tutto gira intorno all'arancio, dai
toni chiari a quelli bruciati; bordi neri spessi, cerchi, semicerchi e
rettangoli pieni come elementi grafici; tipografia con carattere. È
monocromatico ma pieno di energia.

**Adatto a**: eventi, festival, sport, centri giovanili, podcast,
campagne.
**Poco adatto a**: servizi seri, testi lunghi.

**Differenza con i vicini** *(mio)*:
- **vibrant**: arancio + verde acqua, più fotografico; pulse è tutto
  arancio e grafico.
- **neobrutalism**: più colori pastello e ombre a blocco; pulse è
  monocromatico con forme geometriche.
- **geometric**: forme geometriche neutre e ordinate; pulse è
  energico e caldo.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile pulse |
| --- | --- |
| Bordi sottili | **Bordi spessi 3-4px** scuri come firma dello stile |
| Niente forme decorative SVG improvvisate | **Forme geometriche semplici** (cerchi, semicerchi, rettangoli) ammesse come elementi grafici: sono forme pure, non illustrazioni |
| Un solo accento, usato poco | **Monocromatico**: tutta la palette in tonalità di arancio, con molto colore |


## 3. Tipografia

- Titoli: un display con carattere (l'originale usava Limelight,
  decorativo anni '30: va bene solo per titoli brevi).
- Testo: un sans robusto, 16-17px.
- Direzioni possibili *(mio, da verificare)*: titoli Limelight,
  Archivo Black, Dela Gothic One; testo Rubik, Archivo.
  **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fff4e8` | arancio chiarissimo |
| `--surface` | `#ffffff` | |
| `--text` | `#1f1208` | marrone quasi nero: 16.9:1 |
| `--text-muted` | `#5c4636` | 8.1:1 |
| `--border-control` | `#8a6e5a` | 4.3:1 |
| `--accent` | `#b93d05` | arancio bruciato: 5.2:1; testo bianco sopra 5.6:1 |
| Superfici arancio | `#fdba74` e `#f59e0b` | **solo con testo scuro** `#1f1208` sopra (10.8:1 e 8.5:1) |

- Il testo arancio sopra superfici arancio **non si usa** (l'errore
  dell'originale).
- Bordi spessi nel colore del testo (`#1f1208`).


## 5. Layout

- Blocchi con bordo spesso, griglia chiara.
- Forme geometriche grandi dietro o accanto ai titoli, sempre decorative
  (`aria-hidden="true"`), mai sotto il testo in modo da ridurne il
  contrasto.
- Su telefono le forme si riducono o spariscono.


## 6. Componenti

- Bottoni con bordo 3-4px scuro, pieni arancio bruciato (testo bianco)
  o arancio chiaro (testo scuro).
- Hover: il bottone si sposta di 2px e il bordo "ingrossa" (o cambio
  di colore), senza rimbalzi.
- Card con bordo spesso, angoli piccoli (0-8px, a scelta ma uguali).


## 7. Movimento

Livello "misurata": forme che entrano con decisione una volta; niente
pulsazioni continue (nonostante il nome: il "pulse" è nel colore, non
nell'animazione).


## 8. Immagini

Foto ritagliate in forme geometriche semplici (cerchio, rettangolo) con
`border-radius` o `clip-path` semplice, mai sagome complesse.


## 9. Trappole

- Arancio su arancio: illeggibile.
- Troppe forme: una o due per sezione.
- Font display nel testo corrente.


## 10. Controllo dello stile

- [ ] Testo scuro su tutte le superfici arancio.
- [ ] Bordi spessi coerenti, forme decorative nascoste ai lettori di
      schermo.
- [ ] Nessuna animazione continua.


## Fonti

- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- Stile "pulse" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
