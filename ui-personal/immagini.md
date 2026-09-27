# Immagini, illustrazioni e decorazione

Leggi questo file quando inserisci foto, illustrazioni, loghi, sfondi
o decorazioni. Regola di fondo: **un'immagine deve portare
informazione** (il prodotto, le persone vere, il luogo, il risultato).
Quelle messe "per abbellire" le persone le ignorano. *(ricerca: NN/g)*

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa.


## 1. Quali immagini

- **Foto vere prima di tutto**: le persone che lavorano davvero
  nell'azienda, il prodotto vero, il posto vero. Le ricerche con il
  tracciamento dello sguardo mostrano che gli utenti **guardano a lungo
  le foto di persone reali** e **saltano del tutto le foto di stock
  generiche** (modelli sorridenti, strette di mano). *(ricerca: NN/g)*
- **Foto di prodotto ingrandibili**: chi deve scegliere vuole vedere i
  dettagli (almeno il doppio della miniatura). *(ricerca: NN/g)*
- **Una pagina vetrina ha bisogno di immagini**: una pagina solo testo
  non è minimalismo, è incompleta. Anche un sito sobrio ha almeno 2-3
  immagini vere (hero, prodotto o persone, un'immagine di contesto).
- **L'hero ha un'immagine vera**: un titolo su una sfumatura di colore
  non è un hero, è un segnaposto.
- **Coerenza**: tutte le foto sembrano della stessa famiglia (stessa
  luce, temperatura, saturazione, stile di inquadratura). Meglio 4 foto
  coerenti che 10 diverse. *(mio)*

### Se le immagini non ci sono *(mio, adattato dalle skill)*

1. **Chiedile all'utente**: foto sue, del cliente, del prodotto.
2. Se non ci sono ancora, **segnaposto dichiarati**: un riquadro neutro
   con le proporzioni giuste (`aspect-ratio`) e un'etichetta visibile
   ("Foto: il laboratorio, 1600×1000"). Così il layout è già giusto e
   si vede cosa manca.
3. **A fine lavoro, l'elenco** delle immagini da procurare, con
   posizione e dimensioni.
4. Foto di esempio da servizi come `picsum.photos` solo per prototipi,
   e solo se l'utente è d'accordo: sono foto casuali, non c'entrano col
   soggetto e rischiano di restare in produzione.

- **Mai finte schermate** di un software costruite con `<div>`
  (finte dashboard, finti terminali, finte finestre del Mac): è il
  segno numero uno di una pagina generata. Si usa uno screenshot vero,
  un pezzo vero dell'interfaccia, oppure niente.


## 2. Illustrazioni e SVG

- **Mai illustrazioni disegnate "a mano" in SVG dall'AI** come
  decorazione: un mucchio di forme geometriche che imita una scena
  sembra clip-art **[auto]**. Eccezioni: un logo o un marchio
  semplicissimo richiesto dall'utente, forme geometriche pure.
- **Illustrazioni vere**: da un illustratore, da una libreria con uno
  stile unico per tutto il sito, oppure niente.
- **Loghi di clienti o partner**: i loghi veri in SVG (per esempio da
  Simple Icons), non i nomi scritti in un font. Solo loghi, senza
  etichette sotto; devono vedersi bene sia sul chiaro che sullo scuro
  (versione monocromatica con `currentColor`).
- **Marchi inventati** per un prototipo: un monogramma semplice, non un
  nome in grassetto che finge di essere un logo.
- **Forme "organiche"** (macchie, bordi strappati, ritagli a forma di
  persona) fatte con `clip-path` pieni di punti: sembrano economiche.
  Se serve un soggetto scontornato, si usa un'immagine già scontornata
  (PNG/WebP con trasparenza). **[auto]**


## 3. Decorazione

Di default **niente decorazione**: prima di aggiungere qualcosa, prova
a toglierne una ("guardati allo specchio e togli un accessorio").

Da evitare come abitudine:

- **Grana e rumore** su tutto lo sfondo.
- **Macchie di luce e aloni** colorati dietro l'hero **[auto]**.
- **Sfumature "mesh"** che si muovono.
- **Griglie di linee sottili** come sfondo "tecnico" **[auto]**.
- **Righe diagonali ripetute** come texture **[auto]**.
- **Vetro smerigliato** (glassmorphism) su tutto.
- **Etichette o "pillole" sopra le foto** ("Collezione · 02").
- **Didascalie finte** tipo "Studio n. 12 · Nome Fotografo" sotto foto
  di stock: il credito del fotografo si mette solo se è vero.

Queste scelte sono ammesse **solo se lo stile scelto le prevede**
(es. grana nello stile brutalista) e allora vanno fatte bene:
- grana e rumore su un livello fisso, `position: fixed`,
  `pointer-events: none`, mai su elementi che scorrono (appesantisce);
- vetro smerigliato solo su elementi fissi (barra di navigazione), con
  un'alternativa a colore pieno per chi ha chiesto meno trasparenza
  (`@media (prefers-reduced-transparency: reduce)`).


## 4. Testo alternativo (`alt`) *(ricerca: W3C)*

Ogni `<img>` ha l'attributo `alt` **[auto]**. Cosa scriverci dipende
dal ruolo dell'immagine:

| L'immagine è… | `alt` |
| --- | --- |
| **Informativa** (mostra qualcosa che serve) | Una frase breve con il significato: "Il forno a legna del laboratorio, acceso" |
| **Decorativa** (non aggiunge niente al testo) | Vuoto: `alt=""` (il lettore di schermo la salta) |
| **Un link o un bottone** (logo che porta alla home, icona) | Dove porta o cosa fa: "Torna alla home", non "logo" |
| **Complessa** (grafico, schema) | Un `alt` breve + la spiegazione completa nel testo della pagina |
| **Già descritta dal testo accanto** | Vuoto: `alt=""` |
| **Contiene del testo** | Quel testo (e meglio ancora: testo vero, non immagine) |

- **Mai `alt="immagine"`, `alt="foto"`, il nome del file** **[auto]**.
- Non iniziare con "Immagine di…": il lettore di schermo dice già che
  è un'immagine.
- **Niente testo importante dentro le immagini**: non si ingrandisce,
  non si traduce, non si trova con la ricerca.


## 5. Formati *(ricerca: The Image CDN, web.dev)*

| Contenuto | Formato |
| --- | --- |
| Foto | **AVIF**, poi **WebP**, con **JPEG** di riserva |
| Loghi, icone, disegni a tinte piatte | **SVG** |
| Immagini con trasparenza | WebP o AVIF (PNG solo se serve) |
| Animazioni brevi | Video `<video autoplay muted loop playsinline>`, mai GIF |

- A giugno 2026 WebP è supportato dal 96% dei browser e AVIF dal 93%:
  si servono tutti e due con il JPEG come riserva, usando `<picture>`.
- AVIF pesa in media il 40-50% in meno di un JPEG, WebP il 25-35% in
  meno.
- **Si tengono sempre gli originali** ad alta qualità e si generano
  le versioni compresse da quelli.
- **Strumento pratico** *(mio)*: [Squoosh](https://squoosh.app)
  (gratuito, nel browser) per convertire e comprimere a mano.

```html
<picture>
  <source type="image/avif" srcset="img/laboratorio-800.avif 800w, img/laboratorio-1600.avif 1600w">
  <source type="image/webp" srcset="img/laboratorio-800.webp 800w, img/laboratorio-1600.webp 1600w">
  <img src="img/laboratorio-1600.jpg"
       srcset="img/laboratorio-800.jpg 800w, img/laboratorio-1600.jpg 1600w"
       sizes="(min-width: 900px) 50vw, 100vw"
       width="1600" height="1000"
       alt="Il forno a legna del laboratorio, acceso">
</picture>
```


## 6. Dimensioni e caricamento *(ricerca: MDN, web.dev)*

- **`width` e `height` su ogni `<img>`** **[auto]**: il browser riserva
  lo spazio e la pagina non "salta" quando l'immagine arriva. Nel CSS
  `img { max-width: 100%; height: auto; }` le rende comunque flessibili.
- **Più misure della stessa immagine** con `srcset` e `sizes`: il
  telefono scarica quella piccola, lo schermo grande quella grande.
- **Inquadrature diverse** per telefono e desktop (es. un primo piano
  su telefono): `<picture>` con `<source media>`.
- **Immagini sotto la prima schermata**: `loading="lazy"` (si caricano
  solo quando ci si avvicina).
- **L'immagine principale della prima schermata** (di solito l'hero):
  **mai `loading="lazy"`**, anzi `fetchpriority="high"` **[auto]**. È
  quella che decide quanto "sembra veloce" la pagina (LCP).
- **Peso indicativo** *(mio)*: una foto a tutta larghezza sotto i
  200 KB, una miniatura sotto i 50 KB.
- **Ritagli coerenti**: `aspect-ratio` e `object-fit: cover` per avere
  tutte le miniature di una griglia della stessa forma.
- Immagini di sfondo messe via CSS: solo decorative (non hanno `alt`).
  Se l'immagine conta, va nell'HTML come `<img>`.


## 7. Video *(ricerca: Vercel; mio)*

- Video di sfondo: senza audio, brevi, con **pausa** disponibile se
  durano più di 5 secondi, fermi con "Riduci movimento", con
  un'immagine statica (`poster`) mentre carica.
- Video con parlato: **sottotitoli** (`<track>`).
- Mai avvio automatico con audio.


## 8. Prima di consegnare

- [ ] Ogni immagine porta informazione; nessuna foto di stock generica.
- [ ] Ogni `<img>` ha `alt` adatto al suo ruolo, `width` e `height`.
- [ ] Hero con `fetchpriority="high"`, le altre `loading="lazy"`.
- [ ] Formati moderni con riserva; pesi ragionevoli.
- [ ] Nessuna finta schermata, nessuna illustrazione SVG improvvisata.
- [ ] Nessuna decorazione non prevista dallo stile.
- [ ] Elenco delle immagini mancanti consegnato all'utente.


## Fonti della ricerca

- [Foto come contenuto](https://www.nngroup.com/articles/photos-as-web-content/) (Nielsen Norman Group)
- [Albero decisionale per il testo alternativo](https://www.w3.org/WAI/tutorials/images/decision-tree/) (W3C)
- [Immagini responsive](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images) (MDN)
- [Ottimizzare l'LCP](https://web.dev/articles/optimize-lcp) (web.dev)
- [WebP, AVIF o JPEG](https://theimagecdn.com/docs/webp-vs-avif-vs-jpeg) (The Image CDN)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) (Vercel)
