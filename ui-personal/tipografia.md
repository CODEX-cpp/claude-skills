# Tipografia

Leggi questo file quando scegli i font o lavori su titoli e testi.
La tipografia porta la personalità della pagina ed è il 90% di ciò
che l'utente guarda: è la prima scelta del mini-piano, non l'ultima.

Legenda:
- **[auto]** = regola controllabile da uno script (controllo automatico).
- *(ricerca: …)* = aggiunta dalla ricerca online, fonti in fondo.
- *(mio)* = ragionamento mio, non preso da una fonte.
- Il resto viene dalle skill analizzate nella mappa.


## 1. Scegliere i font

- **Da dove partire: il soggetto.** Il materiale, il settore, il
  pubblico del progetto suggeriscono il carattere. Un gestionale per
  tecnici e un sito per un forno non usano lo stesso font.
- **Massimo 2 famiglie**: una per i titoli e una per il testo, oppure
  una sola per tutto. Se sono due, devono essere chiaramente diverse
  tra loro. Una terza, monospazio, solo per codice e numeri in tabella.
- **Una famiglia sola con molti pesi è la scelta più sicura** *(mio)*:
  la gerarchia si fa con peso e dimensione, e il sito carica meno file.
- **Nessuna lista di font "consigliati"**: le liste finiscono per
  produrre pagine tutte uguali.
- **Lista nera** (troppo usati, sono il segnale di una pagina generata)
  **[auto]**: Inter, Roboto, Geist, Plus Jakarta Sans, Space Grotesk,
  Fraunces, Instrument Serif. Si usano solo se l'utente li chiede o se
  sono già nel `tokens.css` del progetto.
- **Vietati sempre** (datati o abusati fino a diventare una
  caricatura) **[auto]** *(dalle skill: gstack)*: Papyrus, Comic Sans,
  Lobster, Impact, Jokerman, Bradley Hand, Brush Script, Hobo, Trajan,
  Raleway, Clash Display, Permanent Marker, Courier New. Anche questi
  solo su richiesta esplicita, con un avviso in una riga.
- **Troppo usati come titoli** *(dalle skill: gstack)*: Open Sans,
  Lato, Arial, Helvetica. Nel testo corrente e nelle pagine strumento
  vanno bene; **come voce dei titoli** di una vetrina sono un segnale
  di scelta mancata: se proprio servono, dillo nel mini-piano e spiega
  perché.
- **Niente font di sistema come voce dei titoli** (Arial, Helvetica,
  Impact, Times New Roman, `system-ui`) in una pagina vetrina: serve un
  font scelto. Nel `tokens.css` `system-ui` è solo un segnaposto.
  *(ricerca: Butterick)*
- **Niente font "goliardici" o decorativi per il testo corrente**
  (script, effetto pennello, fantasia): al massimo in un titolo, se il
  soggetto lo giustifica. *(ricerca: Butterick)*
- **Dove cercare**: Google Fonts, Fontshare, font open source. Si
  scaricano e si caricano in locale (vedi sezione 11).

### Controlli prima di adottare un font *(mio)*

1. Ha **tutti i caratteri italiani**: à è é ì ò ù, **È maiuscola**,
   apostrofo tipografico ’, virgolette « » e “ ”, simbolo €.
2. Ha i **pesi** che servono (almeno 400 e 600 o 700) e il **corsivo
   vero** (non inclinato dal browser).
3. Ha le **cifre tabellari** se ci sono numeri da confrontare.
4. **Distingue** l'1 dalla l minuscola e dalla I maiuscola, lo 0 dalla
   O: fondamentale in gestionali, codici, password.
5. Esiste in **versione variabile** (un solo file per tutti i pesi):
   se sì, preferiscila.
6. Scrivi una frase vera del progetto a 16px e a 48px: deve funzionare
   a entrambe le dimensioni.

### Abbinare due font *(ricerca: Butterick; mio)*

- **Contrasto di struttura, non di dettaglio**: un serif con un sans,
  o un sans geometrico con uno umanista. Due sans simili sembrano un
  errore, non una scelta.
- **Altezza della x simile** (l'altezza delle lettere minuscole):
  così i due font sembrano della stessa "taglia" anche vicini.
- **Stessa epoca o stesso spirito**: un font anni '20 e uno
  futuristico litigano.
- Nel dubbio, **una famiglia sola**.

### Font con grazie (serif)

- Solo per progetti **editoriali o di lusso** (riviste, blog lunghi,
  moda, alberghi, cantine…), con il motivo scritto nel mini-piano.
- Mai nei gestionali e nelle interfacce di lavoro.
- **Mai un titolo hero in corsivo serif grande**: è diventato il
  segnale più riconoscibile delle landing generate.
- Il testo corrente in serif vuole righe un po' più lunghe e un filo
  più di interlinea di un sans.

### Monospazio

Solo per codice, numeri da confrontare, dati tecnici. Mai usata come
"costume" per far sembrare tecnica una pagina, e mai per il testo
corrente. *(ricerca: Butterick)*


## 2. La scala

- Usa **solo** le dimensioni `--text-*` del `tokens.css` **[auto]**.
- **Da 5 a 7 gradini** in tutto. Di più diventa caos: nessuno
  distingue un 17px da un 18px. *(mio)*
- Ogni gradino è almeno **1.2-1.25 volte** il precedente:
  titoli e testo devono essere distinguibili a colpo d'occhio.
  - **Strumento**: rapporto 1.2 (scala compatta, tanti livelli vicini).
  - **Vetrina**: rapporto da 1.25 a 1.333 (più contrasto).
- La gerarchia si fa con **dimensione, peso e colore insieme**, non
  solo ingrandendo. Tra 400 e 700 ci sono 500 e 600: usali.
- Titolo più grande della pagina: massimo 6rem **[auto]**.
- **Titolo hero: massimo 2 righe su desktop.** Se va su 3 righe, il
  font è troppo grande, non il testo troppo lungo: riduci la scala.
  Una frase intera a dimensione gigante schiaccia tutto il resto.
- **La dimensione visiva non dipende dal livello del titolo** *(mio)*:
  un `<h2>` può essere piccolo in una card. Il livello (h1-h6) segue
  la struttura del documento, la dimensione segue il design.

### Scala fluida (solo vetrina) *(ricerca: Utopia, Smashing, Roselli)*

Una scala fluida cresce con la larghezza dello schermo tra un minimo
(telefono) e un massimo (desktop), senza salti ai breakpoint.

- Si scrive con `clamp(minimo, preferito, massimo)`.
- **Il valore preferito deve contenere una parte in `rem`**, non solo
  `vw`: esempio `clamp(2rem, 1.5rem + 2vw, 3.5rem)`. Con i soli `vw`
  il testo **non si ingrandisce con lo zoom** del browser, e chi vede
  poco non riesce a leggere (violazione WCAG 1.4.4). **[auto]**
- **Il massimo non deve superare 2.5 volte il minimo** **[auto]**:
  è la condizione perché lo zoom al 200% funzioni su tutti i browser.
- Solo per titoli. Il testo corrente resta fisso (`1rem` o poco più).
- Verifica sempre con lo zoom del browser al 200%.


## 3. Leggibilità

### Dimensione

- **Corpo del testo almeno 1rem (16px)** **[auto]**. Nelle pagine di
  lettura (blog, articoli) anche 17-20px. *(ricerca: Butterick, 15-25px sul web)*
- **Nessun testo sotto 0.75rem (12px)**, nemmeno etichette e badge **[auto]**.
- **Campi dei form almeno 16px** **[auto]**: sotto, iPhone ingrandisce
  automaticamente la pagina quando si tocca il campo. *(mio)*
- Dimensioni sempre in **`rem`**, mai in `px`: così rispettano le
  impostazioni del browser dell'utente. *(ricerca: Roselli)*

### Lunghezza delle righe

- **Tra 45 e 75 caratteri** per il testo corrente:
  `max-width: var(--measure)` sui paragrafi **[auto]**.
  *(ricerca: Butterick indica 45-90)*
- Su telefono va bene anche 35-50.
- L'italiano ha parole più lunghe dell'inglese: nelle colonne strette
  (card, bottoni) prevedi l'a capo delle parole lunghe *(mio)*, vedi
  sezione 6.

### Interlinea

- **Corpo del testo tra 1.4 e 1.7** **[auto]**, di default 1.55.
  *(ricerca: Butterick 1.2-1.45 per la stampa; sullo schermo serve
  qualcosa in più)*
- **Più il testo è grande, meno interlinea serve**: titoli tra 1.05 e
  1.25. *(mio)*
- **Righe più lunghe, interlinea più ampia**; font con altezza della x
  grande, interlinea più ampia.
- Testo chiaro su fondo scuro: un filo più di interlinea e, se il font
  è sottile, un gradino di peso in più.

### Spaziatura tra le lettere (tracking)

- Negativo solo sui titoli grandi, mai sotto -0.04em **[auto]**.
- Sul testo corrente mai oltre 0.05em **[auto]**.
- **Il maiuscolo vuole più spazio**: parole brevi in maiuscolo
  (sigle, bottoni se lo stile lo prevede) tra 0.05em e 0.12em.
  *(ricerca: Butterick, 5-12%)*
- `font-kerning: normal` sempre attivo (è il default, non spegnerlo).
  *(ricerca: Butterick)*

### Paragrafi *(ricerca: Butterick)*

- Separali **o** con uno spazio tra un paragrafo e l'altro **o** con
  il rientro della prima riga. **Mai entrambi.**
- Niente righe vuote o doppi spazi per creare distanza: si usa
  `margin`.

### Altre regole

- **Niente testo giustificato** senza sillabazione (crea buchi tra le
  parole) **[auto]**. Con `hyphens: auto` e `lang="it"` si può, ma
  resta sconsigliato sul web.
- **Niente testo centrato** oltre 2-3 righe: si legge male.
  *(ricerca: Butterick)*
- `text-wrap: balance` sui titoli (righe di lunghezza simile) e
  `text-wrap: pretty` sui paragrafi (niente parola sola in fondo).
- **Corsivo nei titoli grandi**: se la parola ha lettere con la
  "gamba" (g, j, p, q, y), interlinea almeno 1.1 e un piccolo spazio
  sotto, altrimenti la gamba viene tagliata.
- **Mai pesi sotto 400 per il testo corrente** *(mio)*: i font
  sottili (100-300) su schermo diventano grigi e illeggibili,
  soprattutto su fondo scuro.


## 4. Enfasi *(ricerca: Butterick)*

- **Grassetto o corsivo, mai tutti e due insieme.**
- Con parsimonia: se è tutto evidenziato, niente è evidenziato.
- **Sottolineato solo per i link.**
- **Maiuscolo solo per testi più corti di una riga**, e mai per
  paragrafi **[auto]**.
- **Punti esclamativi**: quasi mai. Nell'interfaccia, zero.


## 5. Cose da non fare

- **Evidenziare una parola sola del titolo** con corsivo, grassetto o
  un colore diverso. È uno dei segnali più comuni delle pagine
  generate.
- **Etichette piccole in maiuscolo sopra i titoli** (il cosiddetto
  "eyebrow", es. `CHI SIAMO` sopra "La nostra storia") **[auto]**. Il
  titolo basta da solo; se quelle parole servono, vanno nel titolo o
  nel testo.
- **Etichette tutte in maiuscolo** come stile di default.
- **Testo con sfumatura di colore** (gradient text) **[auto]**.
- **Mescolare due famiglie in un titolo** per "dare interesse".
- **Titoli spezzati a mano con `<br>`** per effetto grafico: su un
  altro schermo si rompono. Si usa `text-wrap: balance`. *(mio)*
- **Grassetto e corsivo "finti"**: se il font non ha il peso o il
  corsivo, il browser li simula male. Si evita con
  `font-synthesis: none` **[auto]**. *(mio)*


## 6. Italiano e testi reali *(mio)*

- `<html lang="it">` sempre **[auto]**: serve alla sillabazione, ai
  lettori di schermo (pronuncia corretta) e ai traduttori automatici.
- **È maiuscola accentata**, mai `E'` **[auto]**.
- **Apostrofo tipografico ’** e virgolette coerenti in tutto il sito:
  « » oppure “ ”, mai le dritte `"` **[auto]**.
- **Spazio indivisibile** (`&nbsp;`) tra numero e unità: `10&nbsp;kg`,
  `€&nbsp;25`, e dopo abbreviazioni come `pag.&nbsp;3`.
- **Parole lunghe in spazi stretti**: `overflow-wrap: break-word` sui
  contenitori, `hyphens: auto` dove l'a capo con trattino è accettabile.
- **Testi troncati con i puntini** (`text-overflow: ellipsis`) solo se
  il testo completo è raggiungibile (tooltip, pagina di dettaglio).
- Numeri e date: formato italiano (1.234,56; 27 settembre 2026), vedi
  `testi.md`.


## 7. Numeri *(ricerca: Vercel; mio)*

- Numeri in colonna o da confrontare (tabelle, prezzi, statistiche):
  `font-variant-numeric: tabular-nums`, cifre tutte della stessa
  larghezza, così si allineano.
- Nel testo corrente vanno bene le cifre normali (proporzionali).
- Numeri grandi da evidenziare (KPI): stesso font del titolo, peso
  alto, interlinea stretta (`--leading-tight`).


## 8. Link *(ricerca: WCAG 1.4.1; mio)*

- **Nel testo corrente i link sono sottolineati**: il solo colore non
  basta, chi non distingue i colori non li vede.
- Sottolineatura curata: `text-underline-offset: 0.15em` e
  `text-decoration-thickness` sottile ma visibile.
- Nei menu e nei bottoni la sottolineatura non serve (si capisce dal
  contesto che sono cliccabili).
- Hover e focus visibili (vedi `accessibilita.md`).


## 9. Titoli e struttura *(ricerca: WCAG; mio)*

- **Un solo `<h1>` per pagina** **[auto]**.
- **Livelli in ordine**, senza salti (h1, h2, h3; non h1 poi h3) **[auto]**.
- **Più spazio sopra un titolo che sotto**: il titolo appartiene al
  contenuto che lo segue.
- Il titolo dice di cosa parla la sezione. Un titolo "creativo" che non
  si capisce è peggio di uno banale.


## 10. Vetrina e strumento

- **Vetrina**: il titolo può essere un elemento grafico a sé, con
  contrasto forte di dimensione e una scala fluida (`--text-display`).
  Il testo corrente può salire a 17-18px.
- **Strumento**: stabilità prima di tutto. Una sola famiglia ben
  regolata, scala fissa, niente dimensioni fluide: l'utente deve
  ritrovare le cose sempre allo stesso posto. Testo a 14-16px, righe
  di tabella compatte ma con interlinea almeno 1.4.


## 11. Caricare i font *(ricerca: web.dev, MDN)*

- **Solo formato `woff2`**: il più compresso, supportato ovunque.
- File dei font **nel progetto** (es. `fonts/`), caricati con
  `@font-face`. Niente link a servizi esterni *(mio: anche per la
  privacy, perché caricarli da Google invia l'indirizzo IP del
  visitatore; nel 2022 un tribunale tedesco, a Monaco, lo ha
  considerato una violazione del GDPR)*.
- **Carica solo i pesi che usi.** Meglio ancora un font variabile.
- **Sottoinsieme di caratteri**: per l'italiano bastano "latin" e
  "latin-ext". Dimezza il peso dei file.
- **`font-display`**:
  - `swap` per il testo: si vede subito col font di riserva, poi cambia;
  - `optional` per font decorativi: se arriva tardi, non si usa.
- **Precarica solo il font principale** (uno, al massimo due file):
  precaricare troppo rallenta il resto della pagina.

```html
<link rel="preload" href="fonts/nome.woff2" as="font" type="font/woff2" crossorigin>
```

- **Ridurre il "salto" quando arriva il font**: scegli un font di
  riserva con proporzioni simili e allinealo con `size-adjust` nella
  `@font-face` di riserva, oppure con `font-size-adjust: from-font`.
  Così il testo non si sposta quando il font vero sostituisce quello
  di riserva.
- Niente font di icone: le icone sono SVG (vedi `componenti.md`).


## 12. Prima di consegnare *(mio)*

- Prova il testo **più lungo** che il progetto avrà davvero (un nome
  lungo, un titolo lungo), non solo quello comodo.
- Prova a **320px** di larghezza e con lo **zoom al 200%**.
- Guarda la pagina **da lontano, strizzando gli occhi**: si devono
  distinguere titolo, sottotitolo e testo.


## Fonti della ricerca

- [Practical Typography, sintesi delle regole](https://practicaltypography.com/summary-of-key-rules.html) (Matthew Butterick)
- [Best practices per i font, web.dev](https://web.dev/articles/font-best-practices)
- [Scale tipografiche fluide, Utopia](https://utopia.fyi/blog/designing-with-fluid-type-scales/)
- [Fluid type e accessibilità, Smashing Magazine](https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/) (regola del 2.5x)
- [Responsive type e zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html) (Adrian Roselli)
- [font-size-adjust, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust)
- [WCAG 2.2, novità](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT): liste dei font vietati e troppo usati
