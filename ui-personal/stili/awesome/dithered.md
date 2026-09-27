# Stile: Dithered (immagini a punti, pochi colori)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "dithered" di Awesome Design (licenza MIT), riscritto:
l'originale spiegava la tecnica ("pattern di punti che simulano le
sfumature con pochi colori") ma usava i colori di default blu/viola,
Open Sans e Space Grotesk (in lista nera). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il fascino dei primi schermi.** Il *dithering* (retinatura) è la
tecnica che simula i grigi e le sfumature con un disegno di punti di
pochi colori, come sui vecchi Macintosh in bianco e nero. Le immagini
diventano grafica; l'interfaccia intorno resta pulita, monocromatica,
con un colore d'inchiostro.

**Adatto a**: portfolio, siti personali, progetti tecnici e artistici,
musica elettronica, siti "leggeri" e sostenibili.
**Poco adatto a**: e-commerce dove le foto dei prodotti devono essere
fedeli, cibo, moda.

**Differenza con i vicini** *(mio)*:
- **vintage**: interfaccia da computer anni '90 completa; dithered usa
  solo la tecnica delle immagini, su interfaccia moderna.
- **riso**: retino di stampa, colori fluo, sfalsamenti; dithered è
  digitale e nitido.
- **mono**: tutto monospaziato e tecnico; dithered è più grafico.

**Dalla ricerca** *(ricerca: sheep.horse; endtimes.dev)*:
- Un'immagine retinata in pochi colori (PNG a palette) pesa **molto
  meno** della foto: è anche una scelta di leggerezza.
- Ma **non si può ridimensionare**: ingrandita o rimpicciolita dal
  browser diventa sfocata o piena di effetto moiré (righe
  ondulate). Va mostrata a dimensione esatta, o retinata al volo alla
  dimensione giusta (componenti come `as-dithered-image`, a costo di
  prestazioni).


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile dithered |
| --- | --- |
| Immagini AVIF/WebP/JPEG | **Immagini retinate in PNG a palette** (2-8 colori), con `image-rendering: pixelated` |
| Immagini responsive | **Dimensioni fisse** per le immagini retinate (o multipli interi: 1×, 2×) |
| Un solo accento | Resta uno: l'inchiostro |


## 3. Tipografia

- Un sans o un mono pulito; i titoli possono usare un font a pixel.
- Direzioni possibili *(mio, da verificare)*: testo IBM Plex Sans (in
  coppia con IBM Plex Mono dall'originale), Public Sans; titoli
  Pixelify Sans o un mono. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f2f0e8` | carta chiara (ricorda i vecchi schermi) |
| `--surface` | `#ffffff` | |
| `--text` | `#111111` | 16.6:1 |
| `--text-muted` | `#555550` | 6.6:1 |
| `--border-control` | `#858580` | 3.25:1 |
| `--accent` | `#1f3fbf` | blu inchiostro: 7.3:1; testo bianco sopra 8.3:1 |

- Le immagini retinate usano **gli stessi colori** della palette
  (nero + carta, o nero + carta + blu).
- Variante scura ammessa: fondo `#111111`, testo `#f2f0e8`.


## 5. Layout

- Interfaccia sobria, a griglia, con filetti 1px.
- Immagini retinate grandi come protagoniste.
- Retini (pattern di punti) come fondo di fasce: solo con
  `background-image` piccolo e ripetuto, **mai sotto il testo**.


## 6. Componenti

- Bottoni rettangolari con bordo 2px o pieni blu.
- Focus: bordo spesso 3px o contorno "a scacchi" ben visibile.
- Barre di caricamento a blocchi (stile d'epoca) ammesse, con
  `<progress>` vero.


## 7. Movimento

Livello "nessuna" o "misurata": al massimo passaggio da retinata a
foto al passaggio del mouse (non sul telefono).


## 8. Immagini

- Retinatura preparata **prima** (tool di conversione, algoritmi come
  Atkinson o Floyd-Steinberg), a dimensione di visualizzazione.
- Testo alternativo sempre (la retinatura non cambia il contenuto).
- Per schermi ad alta densità: file a 2× esatti, mostrati a 1×.


## 9. Trappole

- Immagini retinate ridimensionate dal browser: moiré e sfocatura.
- Retino dietro al testo: illeggibile.
- Retinare le foto di prodotto: il cliente non vede il prodotto.


## 10. Controllo dello stile

- [ ] Immagini retinate a dimensione esatta, `image-rendering: pixelated`.
- [ ] Colori delle immagini uguali alla palette.
- [ ] Nessun retino dietro al testo.


## Fonti

- [Dithering accurato al pixel nell'HTML](https://sheep.horse/2022/12/pixel_accurate_atkinson_dithering_for_images_in_ht.html) (sheep.horse)
- [Perché usare immagini retinate](https://endtimes.dev/why-you-should-dither-images/) (endtimes.dev)
- [as-dithered-image](https://github.com/andrewstephens75/as-dithered-image) (GitHub)
- Stile "dithered" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
