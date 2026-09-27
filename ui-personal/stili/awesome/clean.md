# Stile: Clean (pulito e funzionale)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "clean" di Awesome Design (licenza MIT), riscritto: il
file originale conteneva solo una palette generica con blu e viola
"da AI" e il font Roboto (in lista nera). Legenda: *(ricerca: …)* =
fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Tutto al servizio dell'uso**: poche cose, ben ordinate, leggibili,
senza nessun effetto. È lo stile "neutro affidabile": non vuole essere
notato, vuole far fare le cose in fretta.

**Adatto a**: gestionali, pannelli di amministrazione, siti di servizi,
moduli, documentazione, siti aziendali semplici.
**Poco adatto a**: marchi che devono emozionare o distinguersi molto.

**Differenza con i vicini** *(mio)*:
- **minimal** (stile principale): più editoriale, da "documento", con
  tinte pastello; clean è più da "applicazione", con un accento vero.
- **spacious**: stessa pulizia ma con molto più spazio e testo più
  grande; clean è più compatto.
- **sleek**: più "lucido" e tecnologico; clean è volutamente semplice.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile clean |
| --- | --- |
| Ombre minime | Quasi nessuna: separazione con bordi sottili e sfondi leggermente diversi |
| Arrotondamenti a scelta | Piccoli e uguali ovunque: 6px |
| Animazione | Consigliato livello "nessuna" o "misurata" |

Tutto il resto delle regole base resta valido.


## 3. Tipografia

- **Un solo sans molto leggibile** per tutto, con 3-4 pesi.
- Direzioni possibili *(mio, da verificare con i controlli di
  `tipografia.md`)*: Albert Sans, Public Sans, Atkinson Hyperlegible
  Next; mono: IBM Plex Mono per dati e codici. **Niente font della
  lista nera.**
- Scala compatta (rapporto 1.2), testo 16px, interlinea 1.5.
- Gerarchia con peso (400 / 600) più che con dimensioni enormi.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f5f7f9` | zone e pannelli |
| `--text` | `#15191e` | 17.6:1 |
| `--text-muted` | `#566170` | 6.3:1 su bianco, 5.9:1 su `--surface` |
| `--border-control` | `#7f8996` | bordi dei campi, 3.3:1 anche su `--surface` |
| `--accent` | `#1f5fae` | blu sobrio, 6.3:1; testo bianco sopra 6.3:1 |

- Un solo accento, solo per azioni, link e selezione.
- Colori di stato convenzionali (verde, ambra, rosso, blu) sempre con
  icona e testo.


## 5. Layout

- Griglia regolare e prevedibile, allineamenti a sinistra.
- Spazi dalla scala standard (`--space-3` dentro i gruppi, `--space-6`
  / `--space-7` tra le sezioni).
- Per i gestionali segui la sezione "Modalità strumento" di
  `layout.md`.


## 6. Componenti

- Bottoni rettangolari con angoli 6px; primario pieno, secondario con
  bordo `--border-control`.
- Campi con bordo ben visibile, etichetta sopra, errori sotto.
- Tabelle con linee sottili, intestazione fissa.
- Icone Phosphor "regular", sempre con testo accanto.


## 7. Movimento

Solo transizioni brevi di stato (hover, focus, aperture). Nessuna
entrata animata.


## 8. Immagini

Screenshot veri, foto funzionali (prodotto, persone del team). Nessuna
decorazione.


## 9. Trappole

- "Pulito" che diventa "vuoto": le informazioni importanti devono
  restare visibili, non nascoste in menu.
- Bordi dei campi così tenui da sparire.
- Tutto grigio: senza un accento, l'azione principale non si trova.


## 10. Controllo dello stile

- [ ] Si capisce subito cosa si può fare e dove cliccare.
- [ ] Un solo accento, nessuna decorazione.
- [ ] Contrasti verificati, bordi dei campi visibili.


## Fonti

- [Caratteristiche del design minimalista](https://www.nngroup.com/articles/characteristics-minimalism/) (Nielsen Norman Group)
- Stile "clean" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
