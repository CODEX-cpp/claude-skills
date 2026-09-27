# Layout e spaziatura

Leggi questo file quando impagini: griglie, sezioni, spazi, responsive.
Il layout traduce le priorità in ordine di lettura: cosa si vede
prima, cosa sta insieme, cosa è separato. Prima di spostare riquadri,
chiediti qual è il problema di struttura.

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa.


## 1. Principi

- **Si raggruppa per significato.** Le cose che stanno insieme sono
  vicine, quelle diverse sono lontane. La vicinanza è il modo più
  forte per creare gruppi: prima dello spazio, non servono bordi,
  riquadri o linee. *(ricerca: legge di prossimità, Gestalt/NN/g)*
- **Un contenitore solo quando lo spazio non basta.** Un riquadro con
  sfondo diverso (card) crea un gruppo più forte della vicinanza:
  usalo quando servono gruppi netti, non per abitudine.
  *(ricerca: legge della regione comune)*
- **Il ritmo nasce dal contrasto**: spazi stretti dentro un gruppo,
  spazi ampi tra gruppi. Se lo stesso spazio è usato ovunque, tutto ha
  lo stesso peso e niente si legge **[auto]**.
- **Più spazio sopra un titolo che sotto**: il titolo appartiene al
  contenuto che segue. Con spazi uguali "galleggia" a metà.
- **La prova dello strizzare gli occhi**: guardando la pagina sfocata
  si devono ancora distinguere l'elemento principale, quello
  secondario e i gruppi.
- **La variazione non è un obiettivo.** Ripetere uno schema aiuta a
  riconoscere; si rompe solo quando cambia il contenuto o la priorità.
- **Il layout segue il contenuto vero**, non lo schema di una pagina
  qualsiasi (vedi `processo.md`).


## 2. Come si legge una pagina *(ricerca: NN/g, schema a F)*

Sulle pagine di testo le persone non leggono: **scorrono**. Leggono la
prima riga, un pezzo di una riga più sotto, poi scendono lungo il
bordo sinistro. Per aiutarle:

- **Le cose importanti all'inizio**: nei primi due paragrafi, e le
  parole chiave all'inizio di titoli e voci di elenco.
- **Titoli e sottotitoli frequenti e chiari**, che da soli raccontano
  la pagina.
- **Elenchi puntati** per le cose parallele, invece di paragrafi
  lunghi.
- **Allineamento a sinistra** del testo corrente (in italiano si legge
  da sinistra): il bordo sinistro è la "guida" dello sguardo.
- **Link con testo che dice dove portano**, mai "clicca qui".


## 3. La scala degli spazi

- **Solo i valori `--space-*` del `tokens.css`** **[auto]**, scala a
  base 4px. Mai valori inventati (13px, 27px).
- Indicazioni di massima *(mio)*:

| Tra… | Spazio |
| --- | --- |
| Icona e testo, etichetta e campo | `--space-1` / `--space-2` (4-8px) |
| Elementi dello stesso gruppo (righe di un form, voci di un elenco) | `--space-3` / `--space-4` (12-16px) |
| Gruppi diversi dentro una sezione | `--space-5` / `--space-6` (24-32px) |
| Una sezione e l'altra (strumento) | `--space-7` (48px) |
| Una sezione e l'altra (vetrina) | `--space-8` / `--space-9` (64-96px) |

- **Densità**: la vetrina respira, lo strumento è più compatto. Ma
  anche in un gestionale le righe di tabella hanno aria sufficiente
  per essere cliccate e lette.
- **Spazio verticale ottico**: un blocco con uno sfondo spesso
  "sembra" avere meno spazio sotto che sopra; aggiusta guardando il
  risultato, non solo i numeri.
- **`gap`** per gli spazi tra fratelli in griglie e flex, invece dei
  margini sui figli: è più semplice e non crea spazi doppi. *(dalle
  skill: Impeccable)*
- **Margini solo in una direzione** *(mio)*: i blocchi hanno spazio
  sotto (o sopra), mai entrambi: così non si sommano in modo
  imprevedibile.


## 4. Contenitori e larghezze

- **Contenitore centrato con larghezza massima** (`--container-max`)
  e margini laterali fluidi (`--gutter`): su schermi larghi il
  contenuto non si allunga fino ai bordi **[auto]**.
- **Righe di testo** limitate a `--measure` (65 caratteri), anche
  dentro un contenitore largo.
- **Niente testo attaccato al bordo dello schermo** su telefono:
  sempre un margine laterale di almeno 16px **[auto]**.
- **Elementi a tutta larghezza** (foto, fasce colorate) sono
  un'eccezione voluta: il contenuto testuale dentro resta nel
  contenitore.
- **Niente scroll orizzontale della pagina, mai** **[auto]**. A 320px
  di larghezza (equivale allo zoom al 400%) la pagina deve funzionare
  scorrendo solo in verticale. Eccezioni: tabelle di dati, mappe,
  grafici, che possono scorrere nel loro riquadro.
  *(ricerca: WCAG 1.4.10 Reflow)*


## 5. Strumenti CSS

- **Grid per le strutture a due dimensioni** (righe e colonne),
  **flex per allineare in una riga**. Mai calcoli come
  `width: calc(33% - 1rem)`.
- **Griglie che si adattano da sole** *(ricerca: Every Layout)*:
  `grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));`
  crea tante colonne quante ne stanno, ognuna larga almeno 18rem,
  senza media query. Il `min(…, 100%)` evita che su telefono la
  colonna esca dallo schermo.
- **`subgrid`** *(mio)*: per allineare titoli, testi e bottoni di card
  affiancate alla stessa altezza (ognuna usa le righe della griglia
  padre). Risolve il classico "bottoni a altezze diverse".
- **Container queries** *(ricerca: MDN)*: un componente (card,
  riquadro) cambia forma in base allo **spazio che ha**, non alla
  larghezza dello schermo. La stessa card funziona nella colonna
  stretta e in quella larga.
  ```css
  .area-card { container-type: inline-size; }
  @container (width > 30rem) { .card { grid-template-columns: 1fr 2fr; } }
  ```
  Media query per la pagina, container query per i componenti.
- **Proprietà logiche** *(mio)*: `margin-block`, `padding-inline`,
  `inset-inline-start` al posto di top/left/right/bottom. Funzionano
  anche se un giorno la pagina fosse in una lingua da destra a
  sinistra, e sono più brevi.
- **Altezza a tutto schermo**: `min-height: 100svh` (con `100vh` prima,
  come riserva per i browser vecchi). Mai `height: 100vh`: su telefono
  la barra del browser copre il fondo. *(ricerca: MDN)*
  Nota: le skill originali dicevano `100dvh`, ma `dvh` cambia mentre
  si scorre e fa "saltare" la pagina; `svh` è stabile.
- **Aree sicure dei telefoni** con il notch: per elementi a tutto
  schermo o barre fisse, `padding: env(safe-area-inset-bottom)` e
  simili, con `viewport-fit=cover` nel meta viewport.
- **`z-index` solo dai token** `--z-*` **[auto]**, mai numeri a caso.
  Se qualcosa "non si vede sopra", prima controlla chi crea un nuovo
  contesto (un `transform`, un `opacity` < 1, un `isolation`) invece di
  alzare il numero.


## 6. Responsive

- **Mobile first**: il CSS di base è per il telefono, le
  `@media (min-width: …)` aggiungono colonne.
- **Breakpoint solo quelli del `tokens.css`** **[auto]**. Meglio
  ancora se il layout si adatta da solo (auto-fit, container queries)
  e servono pochi breakpoint.
- **Ogni sezione a più colonne dichiara come si comporta su
  telefono**, nello stesso file. Niente "tanto si adatta".
- Su telefono: **una colonna**, margini laterali 16px, niente
  sovrapposizioni o rotazioni (fanno conflitto col tocco).
- **L'ordine visivo segue l'ordine dell'HTML** *(dalle skill:
  Impeccable; mio)*: con grid e `order` si può spostare un elemento
  sullo schermo, ma chi naviga con la tastiera o un lettore di
  schermo segue l'HTML. Se cambi l'ordine, cambialo nell'HTML.
- **Dimensioni da provare**: 320, 375, 768, 1024, 1440px, e lo zoom al
  200%. Controlla anche il telefono in orizzontale.
- **Tocco**: aree cliccabili di almeno 44×44px (il minimo di legge
  WCAG 2.2 è 24×24px) e spazio tra elementi cliccabili vicini.
  *(ricerca: WCAG 2.5.8)*


## 7. La prima schermata (hero)

Vale per le pagine vetrina.

- **Deve stare nella prima schermata**: titolo, sottotitolo e bottone
  principale visibili senza scorrere.
- **Titolo al massimo 2 righe**, sottotitolo al massimo 20 parole e
  3-4 righe.
- **Al massimo 4 elementi di testo**: titolo, sottotitolo, bottoni
  (1 principale + al massimo 1 secondario) e, facoltativo, uno tra
  logo del marchio o breve dicitura. Tutto il resto (loghi clienti,
  prezzi, elenchi di vantaggi) va nella sezione **sotto**.
- **Spazio sopra il titolo contenuto** (al massimo `--space-9`):
  un titolo che galleggia a metà schermo sembra un errore.
- **Non centrato di default**: testo a sinistra e immagine a destra,
  oppure composizioni asimmetriche. Centrato solo per pagine
  "manifesto" dove il messaggio è il design.
- **Serve un'immagine vera** (foto, prodotto, illustrazione), non una
  sfumatura dietro un titolo (vedi `immagini.md`).
- **Parte con la cosa più caratteristica del soggetto** *(dalle
  skill: Frontend Design)*: il titolo, un'immagine, una demo. Il
  "numero grande con etichetta piccola e statistiche" è la soluzione
  di default: usarla solo se è davvero la migliore.


## 8. Struttura della pagina

- **Ogni sezione ha un solo compito**, scritto nel mini-piano.
- **Niente "tre card uguali in fila"** per presentare vantaggi o
  servizi **[auto]**. Alternative: due colonne alternate, griglia
  asimmetrica, elenco con testo più ricco, scorrimento orizzontale.
- **Ogni schema di sezione al massimo una volta per pagina**: se due
  sezioni hanno lo stesso schema (es. immagine a sinistra e testo a
  destra), la terza è diversa. Una landing di 8 sezioni usa almeno 4
  schemi diversi.
- **Alternanza immagine/testo al massimo 2 volte di fila**.
- **Griglie "bento"** (riquadri di dimensioni diverse): tante celle
  quanti contenuti, **nessuna cella vuota**; almeno 2-3 celle con
  un'immagine o uno sfondo diverso, non tutte testo su bianco.
- **Loghi dei clienti sotto l'hero**, mai dentro; solo loghi, senza
  etichette sotto.
- **Niente titolo a sinistra con un paragrafino a destra** come
  intestazione di sezione: titolo e testo uno sotto l'altro.
- **Liste lunghe**: più di 5-6 elementi vogliono un componente
  diverso da un elenco con una riga sotto ogni voce (gruppi con
  titolo, griglia, schede, "mostra tutti").
- **Navigazione su una riga** su desktop, altezza al massimo 80px.
- **La navigazione orienta**: in ogni pagina si capisce che sito è,
  che pagina è, quali sono le sezioni e dove ci si trova (prova del
  tronco, `usabilita.md`). *(dalle skill: gstack)*
- **Il fondo pagina conta** *(ricerca: Peak-End Rule)*: l'ultima
  sezione e il footer si ricordano. Chiudi con un'azione chiara, non
  con un muro di link in 4 colonne.


## 9. Card e contenitori

- **Card solo quando servono** a separare elementi indipendenti e
  cliccabili (prodotti, articoli). Per il resto: spazio, linee sottili,
  titoli.
- **Mai card dentro card** **[auto]**.
- **Mai un bordo colorato spesso su un lato solo** della card
  (il "bordino laterale" è uno dei segni più riconoscibili delle
  interfacce generate) **[auto]**.
- **Una sola scala di arrotondamenti** per tutta la pagina, quella del
  `tokens.css` **[auto]**. Gli angoli interni di un elemento
  arrotondato dentro un altro sono più piccoli: raggio interno = raggio
  esterno − distanza tra i due. *(mio)*
- **Card affiancate con bottoni allineati** in basso (subgrid o flex
  in colonna con il bottone spinto in fondo).
- **Nelle pagine strumento con molti dati**: niente card per ogni
  numero; righe e linee sottili.


## 10. Sovrapposizioni

- Ammesse solo se volute e con un motivo.
- **Mai testo sopra altro testo**, e mai testo sopra un'immagine senza
  il contrasto verificato (vedi `colore.md`) **[auto]**.
- Su telefono le sovrapposizioni si tolgono.
- **Elementi fissi** (barre, bottoni flottanti, banner dei cookie) non
  devono coprire l'elemento che ha il focus né il contenuto quando si
  ingrandisce la pagina. *(ricerca: WCAG 2.4.11)*


## 11. Modalità strumento *(mio)*

Per gestionali, dashboard, pannelli:

- **Le 3 operazioni più frequenti** (chieste in `processo.md`) sono le
  più visibili e le più vicine.
- **Navigazione stabile**: stessa posizione in tutte le pagine; la
  pagina attuale è evidenziata.
- **Barra laterale o menu in alto**: laterale se le sezioni sono tante
  (più di 6-7) o si passa spesso dall'una all'altra; in alto se sono
  poche.
- **Tabelle**: intestazione fissa quando si scorre, numeri allineati a
  destra con cifre tabellari, testo a sinistra, righe alternate o linee
  sottili (non entrambe), azioni della riga sempre nello stesso posto.
- **Filtri e ricerca sopra i dati** che filtrano, non in un'altra
  pagina.
- **Densità regolabile solo se serve**: prima si trova una densità
  giusta per tutti.
- **Stati vuoti progettati** (vedi `componenti.md`): una tabella vuota
  spiega perché è vuota e cosa fare.


## 12. Prima di consegnare

- [ ] Prova dello strizzare gli occhi superata.
- [ ] Spazi solo dalla scala, ritmo stretto/ampio visibile.
- [ ] Nessuno scroll orizzontale a 320px e con zoom al 200%.
- [ ] Ogni sezione a più colonne ha il suo comportamento su telefono.
- [ ] L'ordine con il tasto Tab segue l'ordine visivo.
- [ ] Hero nella prima schermata, titolo in 2 righe.
- [ ] Nessuna cella vuota nelle griglie, nessuna card dentro card.
- [ ] Barre fisse che non coprono contenuto o focus.


## Fonti della ricerca

- [Legge di prossimità](https://www.nngroup.com/articles/gestalt-proximity/) (Nielsen Norman Group)
- [Schema di lettura a F](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) (Nielsen Norman Group)
- [Reflow, WCAG 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (W3C)
- [WCAG 2.2, novità](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) (area minima 24px, focus non coperto)
- [Container queries, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Unità svh, lvh, dvh, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [Every Layout, assiomi](https://every-layout.dev/rudiments/axioms/)
- [Laws of UX](https://lawsofux.com/) (regione comune, Peak-End)
- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT)
