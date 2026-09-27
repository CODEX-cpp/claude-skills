# Processo: dall'idea al primo file

Leggi questo file all'inizio di ogni progetto o pagina nuova.
Obiettivo: arrivare al codice con le decisioni già prese e scritte
nel `tokens.css`, invece di improvvisarle mentre si scrive.

Legenda: *(ricerca: …)* = aggiunta dalla ricerca online, fonti in
fondo; *(mio)* = ragionamento mio. Il resto viene dalle skill
analizzate nella mappa.


## 0. Principi di lavoro *(mio, salvo dove indicato)*

- **Una sezione alla volta.** Costruisci una sezione, mostrala
  all'utente, aspetta l'ok, poi passa alla successiva. È il modo di
  lavorare dell'utente: iterazioni brevi, niente sorprese a fine lavoro.
- **Contenuto vero prima del layout.** Il layout si progetta intorno
  ai testi e alle immagini veri, non a Lorem ipsum. Se il contenuto non
  c'è ancora, chiedilo, oppure scrivi una bozza realistica e segnala
  che va rivista. *(ricerca: Nielsen Norman Group)*
- **Prima funziona, poi è bello, poi si muove.** Si costruisce a
  strati: HTML che funziona da solo, poi CSS, poi JavaScript. Se il
  JavaScript non parte, la pagina resta leggibile e usabile
  (progressive enhancement).
- **Dal piccolo al grande (mobile first).** Si scrive prima il CSS per
  il telefono, poi si aggiungono le regole per gli schermi più grandi
  con `@media (min-width: …)`. Aggiungere colonne è più facile che
  toglierle.
- **Originali nell'aspetto, convenzionali nel comportamento.** Gli
  utenti si aspettano che un sito funzioni come tutti gli altri che
  conoscono: menu in alto, logo che porta alla home, carrello in alto
  a destra, form che si comportano come form. La personalità va nei
  colori, nei font, nelle immagini, non nell'inventare nuovi modi di
  navigare. *(ricerca: Jakob's Law, Laws of UX)*
- **Una sola cosa memorabile.** Ogni pagina ha un elemento che resta
  in mente (un titolo, un'immagine, un'interazione); tutto il resto è
  quieto e disciplinato. *(dalle skill: Frontend Design)*
- **Precisione, non atmosfera.** "Pulito e moderno" non è una
  decisione: una decisione nomina il font, la scala degli spazi, lo
  schema di interazione. *(dalle skill: gstack)*
- **I casi limite sono parte del design**: il nome di 47 caratteri,
  zero risultati, la rete che cade, il primo accesso e il millesimo.
  *(dalle skill: gstack)*
- **Nel dubbio, una domanda.** Meglio una domanda breve che un'ora di
  lavoro nella direzione sbagliata.


## A. Progetto nuovo o esistente?

Cerca un `tokens.css` nel progetto (di solito in `css/`).

| Situazione | Cosa fare |
| --- | --- |
| C'è un `tokens.css` | Leggilo tutto, comprese le linee guida in fondo. Salta alla sezione E |
| Progetto nuovo, nessun CSS | Sezioni B, C, D, E in ordine |
| Progetto esistente, CSS già scritti ma niente `tokens.css` | CHIEDI all'utente quale strada preferisce (vedi sotto) e leggi `redesign.md` |

Domanda da fare per i progetti esistenti senza `tokens.css`:

> Questo progetto non ha un `tokens.css`. Preferisci che lo crei
> estraendo i valori dai CSS esistenti, oppure che lavori con quello
> che c'è senza toccarlo?

- **Se sceglie di crearlo:** raccogli colori, font, dimensioni,
  spaziature, raggi, durate e z-index da tutti i CSS. Raggruppa i
  valori simili, dai un nome a ciascuno e segnala con una nota
  `NOTA:` i valori che sembrano incoerenze (esempio: cinque grigi
  quasi uguali, durate fuori scala). Mostra il file all'utente PRIMA
  di sostituire i valori nelle pagine: la sostituzione si fa solo
  dopo il suo ok, **un file CSS alla volta**, controllando che la
  pagina resti uguale.
- **Se sceglie di non toccarlo:** lavora con i valori che trovi,
  senza introdurne di nuovi se ne esiste già uno uguale o simile.

### Quando si riprende un progetto dopo una pausa *(mio)*

1. Leggi la sezione **Linee guida** del `tokens.css`: lì ci sono le
   decisioni già prese.
2. Guarda le pagine esistenti prima di aggiungerne una nuova: la nuova
   deve sembrare dello stesso sito.
3. Se una nuova decisione cambia le linee guida, aggiornale.


## B. Le domande iniziali

Regole per chiedere:
- **Una domanda per messaggio.** Mai un elenco di domande tutte insieme.
- **Non chiedere quello che puoi capire da solo** (dalla richiesta,
  dai file del progetto, dal `tokens.css`). Scrivilo invece nel
  mini-piano, così l'utente può correggerlo.
- Se la richiesta non dice di cosa si tratta, proponi tu soggetto,
  pubblico e scopo della pagina e chiedi conferma.
- **Quando proponi delle opzioni, raccomandane una** e spiega in una
  riga perché. *(mio)*

Le domande, nell'ordine:

1. **Soggetto, pubblico e scopo.** Cos'è, per chi è, qual è il
   compito principale della pagina. Varianti utili *(mio)*:
   - vetrina: "cosa deve fare il visitatore alla fine? (chiamare,
     comprare, iscriversi, scrivere…)";
   - strumento: "quali sono le 3 operazioni che si fanno più spesso?"
     Sono quelle che devono stare più vicine e più in vista.
2. **Modalità**: vetrina (con le varianti "lettura" ed "esperienza")
   o strumento (vedi `SKILL.md`). Chiedila solo se non è evidente.
3. **Stile**: nessuno in particolare, oppure uno di quelli in
   `stili/` (soft, minimal, brutalist) o di quelli in `stili/awesome/`,
   oppure riferimenti dell'utente. **Se dà riferimenti, chiedi anche
   cosa gli piace di ognuno**: "mi piace questo sito" non dice se
   piacciono i colori, i font o l'impaginazione. *(mio)*
4. **Quanta animazione.** Da chiedere SEMPRE, con quattro opzioni:
   - **Nessuna**: solo hover, focus e stati dei controlli.
   - **Misurata** (consigliata): un solo momento curato, per esempio
     l'entrata dell'hero, più le risposte alle azioni dell'utente.
   - **Ricca**: più momenti animati, anche legati allo scroll.
     Resta valido `movimento.md`: ogni animazione deve avere un motivo.
   - **3D immersiva**: una scena 3D che si muove con lo scroll, con le
     librerie Three.js e GSAP. Apre lo stile `stili/3d-scroll.md`.

   Se nel prompt l'utente dice già "3D", "immersivo" o "stile
   Awwwards", il livello è "3D immersiva" senza chiedere. Se dice solo
   "sito animato", **chiedi** se intende "ricca" o "3D immersiva".
5. **Tema**: chiaro o scuro, scelto in base a dove e come si usa
   l'interfaccia (un gestionale usato 8 ore in ufficio e una landing
   vista di sera sul telefono hanno esigenze diverse). Il secondo tema
   solo se l'utente lo chiede.
6. **Materiale esistente**: logo, colori o font di brand già decisi,
   testi, foto.


## C. Il mini-piano

Prima di scrivere codice, mostra all'utente un piano breve:

- **Pagine e sezioni** *(mio)*: l'elenco delle sezioni, ognuna con
  **un solo compito** scritto in una riga ("Hero: dire cosa facciamo
  e far chiamare"). Una sezione senza un compito chiaro non serve.
  L'ordine delle sezioni nasce dal contenuto: evita la sequenza
  automatica "hero, tre vantaggi, testimonianze, prezzi, domande
  frequenti, footer", che è la struttura di default delle pagine
  generate. *(ricerca: articoli sui siti "vibe coded")*
- **Colori**: da 4 a 6 colori con nome, codice e ruolo (sfondo,
  superficie, testo, accento, stati).
- **Font**: quali e con che ruolo (titoli, corpo, dati).
- **Layout**: l'idea in una frase, più uno schizzo ASCII della pagina.
  Specifica l'allineamento (sinistra, centro).
- **La cosa memorabile**: quale elemento resta in mente.
- **Principi**: 2-3 frasi su cosa rende unica questa pagina.
- **Animazione**: il livello scelto e, se c'è, il momento curato.
- **Stati** *(dalle skill: gstack; solo modalità strumento o pagine
  con funzioni)*: per ogni funzione, cosa **vede** l'utente in ogni
  stato. Lo stato vuoto è una funzione, non un ripiego.

  | Funzione | Carica | Vuoto | Errore | Riuscito | Parziale |
  | --- | --- | --- | --- | --- | --- |
  | Elenco fatture | righe scheletro | "Nessuna fattura. Creane una" + bottone | "Non riesco a caricare le fatture. Riprova" | l'elenco | "12 di 40 caricate" |

- **Percorso** *(dalle skill: gstack; facoltativo, utile in vetrina)*:
  i passi principali del visitatore, cosa fa, cosa prova, cosa nella
  pagina lo aiuta.

  | Passo | Cosa fa | Cosa prova | Cosa lo aiuta |
  | --- | --- | --- | --- |
  | 1 | Arriva dalla ricerca | "È quello che cerco?" | Titolo che dice cosa fate |
  | 2 | Guarda i prezzi | Diffidenza | Prezzi chiari, niente asterischi |

- **Decisioni aperte** *(dalle skill: gstack)*: quello che non è
  ancora deciso, con cosa succede se si rimanda. Quello che si può
  rimandare si segna **"da fare dopo"**.

  | Decisione da prendere | Se si rimanda, cosa succede |
  | --- | --- |
  | Menu su telefono | Il menu desktop si schiaccia male |
  | Testo dello stato vuoto | Esce "Nessun elemento" e basta |

### Controlli sul piano

1. **Scelta o abitudine?** Per ogni voce chiediti "farei la stessa
   scelta per qualsiasi pagina simile?". Se sì, non è una scelta ma
   un'abitudine: cambiala e scrivi cosa hai cambiato e perché. I
   default da evitare sono elencati in `colore.md`, `tipografia.md`
   e `layout.md`.
2. **Poche scelte alla volta** *(ricerca: Hick's Law)*: più opzioni
   ha davanti l'utente, più tempo ci mette a decidere. Ogni schermata
   ha un'azione principale evidente; le altre sono secondarie.
3. **Le cose importanti grandi e vicine** *(ricerca: Fitts's Law)*:
   i controlli usati spesso sono ampi e vicini a dove sta già lo
   sguardo o il dito.
4. **Raggruppare** *(ricerca: Miller's Law, chunking)*: le
   informazioni si leggono meglio in gruppi piccoli e con un nome
   (un numero di telefono si legge a blocchi, un form lungo a
   sezioni).
5. **Una sola cosa diversa dal resto** *(ricerca: Von Restorff)*:
   l'elemento che deve essere notato (il bottone principale) è l'unico
   con l'accento. Se tutto ha l'accento, niente spicca.
6. **Inizio e fine contano di più** *(ricerca: Peak-End Rule, Serial
   Position)*: la prima sezione e l'ultima sono quelle che si
   ricordano. Curare anche il fondo pagina e il messaggio dopo
   l'invio di un form.
7. **Prova del tronco sul piano** *(dalle skill: gstack)*: per ogni
   tipo di pagina, il piano risponde alle sei domande di
   `usabilita.md`, sezione 4 (che sito è, che pagina è, sezioni
   principali, cosa posso fare, dove sono, come cerco)?

### Voto al piano *(dalle skill: gstack; mio l'adattamento)*

Prima di mostrarlo, dai al piano un voto onesto da 0 a 10 su cinque
aspetti, e per ognuno sotto il 10 scrivi **cosa lo porterebbe a 10**:

| Aspetto | Domanda |
| --- | --- |
| Struttura | Si sa cosa si vede per primo, secondo, terzo in ogni pagina? |
| Stati | Caricamento, vuoto, errore, riuscito sono definiti? |
| Percorso | Il visitatore arriva allo scopo senza dover pensare? |
| Coerenza | Tutto viene dal `tokens.css` e dallo stile scelto? |
| Telefono e accessibilità | Il telefono ha un layout pensato, non solo "impilato"? Tastiera, contrasti, aree da toccare? |

Il voto non è un giudizio sul lavoro: serve a far vedere all'utente
dove il piano è ancora vago. Le mancanze si risolvono **una alla
volta**, con una domanda e una raccomandazione ciascuna.

### Se l'utente chiede più proposte *(dalle skill: gstack)*

Ogni proposta deve essere **davvero diversa**: font diverso, palette
diversa, impaginazione diversa. Prova: se si possono scambiare i
titoli tra due proposte senza che si noti, sono troppo simili, e una
va rifatta con una direzione diversa. Prima di costruirle, descrivile
in una riga ciascuna e chiedi conferma.

Aspetta l'ok dell'utente sul piano prima di andare avanti.


## D. Creare il `tokens.css`

1. Copia `modelli/tokens.template.css` nel progetto come
   `css/tokens.css`.
2. Sostituisci ogni valore segnaposto con i valori del piano.
3. **Controlla subito il contrasto** di ogni coppia testo/sfondo
   (vedi `accessibilita.md`): meglio correggere un colore ora che
   in venti pagine dopo. *(mio)*
4. Elimina le sezioni opzionali che non servono (sono segnate
   `OPZIONALE` nel modello).
5. Compila la sezione finale **Linee guida** con le decisioni del
   piano scritte a parole: pulsanti, forme, transizioni, z-index,
   separazione dei file. Questa sezione è la memoria del progetto.
6. Mostra il file all'utente.


## E. Costruire

### Struttura dei file

```
progetto/
├── index.html
├── css/
│   ├── tokens.css      caricato per PRIMO in ogni pagina
│   ├── base.css        reset leggero e stili degli elementi HTML
│   ├── main.css        layout generale, navigazione, parti comuni
│   └── <sezione>.css   un file per ogni sezione dell'interfaccia
├── js/
│   └── <sezione>.js    un file per ogni sezione, solo se serve
├── fonts/              font in woff2
└── img/                immagini ottimizzate
```

### Ordine di costruzione *(mio)*

1. **HTML semantico con i contenuti veri**: `<header>`, `<nav>`,
   `<main>`, `<section>`, `<footer>`, titoli in ordine, `<button>` per
   le azioni e `<a>` per i link. Deve avere senso anche senza CSS.
2. **`tokens.css` e `base.css`**: variabili e aspetto degli elementi
   di base (testo, link, titoli, focus, selezione).
3. **Layout**, dal telefono al desktop.
4. **Componenti** (bottoni, card, form), con **tutti gli stati**:
   hover, focus, premuto, disabilitato, caricamento, vuoto, errore.
5. **JavaScript**, solo per ciò che il CSS non può fare.
6. **Animazione per ultima**, se il livello scelto la prevede.

### Regole mentre si scrive

- Nei CSS delle pagine solo `var(--...)`. Se serve un valore che non
  esiste, **aggiungilo prima al `tokens.css`** con un commento che
  spiega a cosa serve, poi usalo.
- Niente CSS o JavaScript inline nell'HTML.
- **Commenti in italiano** che spiegano il *perché* di ogni blocco,
  non il *cosa* (il cosa si legge dal codice). *(mio, per l'utente)*
- **Nomi delle classi che dicono cosa è l'elemento**, non come appare:
  `.btn-primario`, non `.btn-blu`. Se un domani il colore cambia, il
  nome resta giusto. *(ricerca: naming dei design token)*
- **Solo funzioni CSS supportate da tutti i browser recenti**
  (quelle segnate "Baseline" su MDN). Se usi qualcosa di più nuovo,
  prevedi un'alternativa con `@supports`. *(mio)*
- Apri il file dell'argomento prima di lavorarci (tabella in `SKILL.md`).


## F. Consegnare

Prima di dire "fatto", passa tutta la checklist di `verifica.md`.
Poi, in poche righe, di' all'utente:
- cosa hai fatto;
- quali scelte hai fatto da solo e perché *(mio)*;
- cosa resta da fare o da decidere.


## Fonti della ricerca

- [Layout o contenuto: cosa viene prima?](https://www.nngroup.com/articles/layout-vs-content/) (Nielsen Norman Group)
- [Laws of UX](https://lawsofux.com/) (Jakob, Hick, Fitts, Miller, Von Restorff, Peak-End)
- [Perché i siti "vibe coded" si somigliano tutti](https://codemyspec.com/blog/vibe-coded-websites-look-the-same)
- [Convenzioni per i nomi dei design token](https://www.alwaystwisted.com/articles/design-token-naming-conventions)
- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT): plan-design-review, design-shotgun
