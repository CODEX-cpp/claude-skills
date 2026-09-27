# Stile: Spacious (arioso e accessibile)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "spacious" di Awesome Design (licenza MIT), riscritto:
il file originale conteneva solo palette e font generici (Open Sans,
Montserrat). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* =
ragionamento mio.


## 1. L'idea

**Tanto spazio, testo grande, una cosa alla volta.** L'interfaccia non
mette fretta: ogni elemento ha aria intorno, i caratteri sono grandi,
i bersagli da cliccare sono ampi. È lo stile più indicato per chi ha
poca familiarità col digitale o problemi di vista.

**Adatto a**: servizi sanitari, pubblica amministrazione, servizi per
persone anziane, benessere, siti con testi lunghi da leggere.
**Poco adatto a**: gestionali con molti dati, pagine che devono
mostrare tanto in poco spazio.

**Differenza con i vicini** *(mio)*: come **clean**, ma con spazi e
caratteri più grandi; come **soft**, ma pensato per la facilità d'uso
più che per l'eleganza.

**Dalla ricerca** *(ricerca: NN/g)*: le persone oltre i 65 anni
indicano come ostacoli principali i **caratteri piccoli**, i **bottoni
troppo piccoli** sul telefono, i campi che accettano un solo formato e
gli **errori poco chiari**. Questo stile li affronta tutti.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile spacious |
| --- | --- |
| Testo corrente almeno 16px | **18px** (1.125rem), mai sotto 16px per nessun testo utile |
| Aree cliccabili 44px consigliati | **48px** minimo, con almeno 8px tra una e l'altra |
| Scala degli spazi | Ogni gradino usato **un passo più grande** del solito |
| Animazione | Consigliato livello "nessuna" |


## 3. Tipografia

- Un font progettato per la leggibilità, con lettere molto distinte
  tra loro (1, l, I; 0 e O).
- Scelta consigliata *(ricerca: Braille Institute)*: **Atkinson
  Hyperlegible Next**, creato dal Braille Institute per chi vede poco;
  gratuito anche per uso commerciale, 7 pesi, corsivi, versione
  variabile, oltre 150 lingue, con una versione mono.
- Interlinea 1.6-1.7, righe di 50-65 caratteri.
- Titoli chiari e descrittivi, niente titoli "creativi".


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f4f6f5` | |
| `--text` | `#1a1f1d` | 16.7:1 |
| `--text-muted` | `#53605b` | 6.6:1 (più scuro del solito, di proposito) |
| `--border-control` | `#84908b` | 3.3:1 su bianco, 3.05:1 su `--surface` |
| `--accent` | `#23665a` | verde petrolio, 6.7:1; testo bianco sopra 6.7:1 |

- Obiettivo più alto del minimo: testo principale oltre 7:1.


## 5. Layout

- Una colonna di contenuto anche su desktop per le pagine di lettura
  e i moduli.
- Sezioni ben separate, titoli frequenti.
- **Navigazione sempre visibile e con parole**, niente icone da sole.
- **Un compito per schermata** nei percorsi (moduli a passi con
  "Passo 2 di 4").


## 6. Componenti

- Bottoni grandi (almeno 48px di altezza), testo 18px, verbo chiaro.
- Campi larghi e alti, etichetta grande sopra, aiuto sempre visibile
  (niente tooltip).
- **Campi tolleranti** *(ricerca: NN/g)*: accetta i formati più comuni
  (data con / o -, telefono con o senza spazi) invece di rifiutarli.
- Errori in testo grande, vicino al campo, con la soluzione.
- Link sottolineati e ben distanziati.


## 7. Movimento

Nessuna animazione oltre ai cambi di stato. Niente elementi che si
muovono da soli.


## 8. Immagini

Foto vere e chiare, grandi, con `alt` accurato. Icone sempre con
testo.


## 9. Trappole

- Spazio che spinge i contenuti importanti troppo in basso: la prima
  schermata dice comunque cosa si può fare.
- Caratteri grandi ma sottili: meglio pesi 400-500.


## 10. Controllo dello stile

- [ ] Testo 18px, aree cliccabili 48px.
- [ ] Testo principale oltre 7:1.
- [ ] Provato con zoom al 200% e su telefono piccolo.
- [ ] Moduli che accettano più formati.


## Fonti

- [Usabilità per le persone anziane](https://www.nngroup.com/articles/usability-for-senior-citizens/) (Nielsen Norman Group)
- [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) (Braille Institute)
- Stile "spacious" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
