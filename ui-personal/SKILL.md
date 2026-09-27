---
name: ui-personal
description: Regole di design per creare o modificare qualsiasi interfaccia web (siti, landing page, portfolio, gestionali, dashboard, componenti, pagine HTML/CSS). Da usare ogni volta che si progetta, si costruisce, si rivede o si migliora l'aspetto di un'interfaccia.
---

# UI Personal

Skill personale di design, costruita confrontando le skill pubbliche
di design (Taste, Frontend Design di Anthropic, Web Design Guidelines
di Vercel, Impeccable, le skill di design di gstack) e scegliendo una
regola per ogni conflitto.

Questo file è l'INDICE: dice cosa fare e quale file aprire.
I file per argomento si leggono solo quando servono.


## 1. Chi vince in caso di conflitto

Dall'alto verso il basso, la voce più in alto vince:

1. **La richiesta esplicita dell'utente** in chat.
2. **Il `tokens.css` del progetto**: le scelte già fatte per quel progetto
   (colori, font, forme, linee guida scritte in fondo al file).
3. **Lo stile scelto**, se l'utente ne ha scelto uno (cartella `stili/`).
4. **Le regole di questa skill.**

Eccezione: le regole di `accessibilita.md` non si scavalcano mai,
nemmeno da uno stile. Se l'utente chiede esplicitamente qualcosa che
le viola, fallo presente in una riga prima di procedere.


## 2. Due modalità

Decidi subito quale delle due vale per la pagina che stai facendo:

- **Vetrina**: la pagina deve convincere (landing, portfolio, sito
  aziendale, pagina prodotto). Il design può avere più personalità.
- **Strumento**: la pagina serve a lavorare (gestionale, dashboard,
  pannello di controllo, form lunghi). Contano chiarezza, densità
  giusta e prevedibilità; la personalità sta nei dettagli.

La vetrina ha due varianti *(dalle skill: gstack)*:

- **Vetrina "lettura"** (blog, articoli, documentazione, guide): lo
  scopo è capire. Una colonna di lettura di 65-75 caratteri, titoli più
  vicini al testo che segue che a quello prima, orientamento sempre
  chiaro (dove sono, cosa viene dopo, come cerco). Niente hero
  spettacolare né inviti all'azione ripetuti. Link visitati di colore
  diverso da quelli non visitati.
- **Vetrina "esperienza"** (portfolio, gallerie, mostre): l'opera
  occupa la prima schermata e l'interfaccia si fa da parte; un solo
  momento animato curato, mai uno scorrimento "dirottato"; l'opera non
  si ritaglia mai per farla stare in uno schema.

Uno stesso progetto può averle più di una: la home di un prodotto è
vetrina, il blog è vetrina "lettura", il pannello interno è
strumento. Si decide **per sezione**, non per sito.


## 3. Il processo in breve

Dettagli completi in `processo.md`.

1. **Controlla se il progetto ha già un `tokens.css`.**
   - Sì: leggilo per primo e rispettalo.
   - No, progetto nuovo: crealo dal modello (passo 3).
   - No, progetto esistente con CSS già scritti: CHIEDI all'utente se
     crearlo estraendo i valori dai CSS esistenti, oppure lavorare
     senza toccare nulla.
2. **Fai le domande iniziali**, una per messaggio (vedi `processo.md`).
   Tra queste c'è sempre: quanta animazione vuole (nessuna, misurata,
   ricca, 3D immersiva).
3. **Scrivi il mini-piano e il `tokens.css`** partendo da
   `modelli/tokens.template.css`.
4. **Costruisci** in HTML, CSS e JavaScript puri. Nei file CSS delle
   pagine usa solo le variabili `var(--...)` del `tokens.css`.
5. **Verifica** con `verifica.md` prima di consegnare.


## 4. Quale file leggere

| Quando | File |
| --- | --- |
| Inizio di un progetto o di una pagina nuova | `processo.md` |
| Si scelgono o si toccano font e testi | `tipografia.md` |
| Si scelgono o si toccano i colori | `colore.md` |
| Si impagina (griglie, spazi, sezioni, responsive) | `layout.md` |
| Si decide la struttura, la navigazione e i percorsi; si valuta se una pagina "si capisce" | `usabilita.md` |
| Pulsanti, card, form, icone, navigazione | `componenti.md` |
| Animazioni e transizioni | `movimento.md` |
| Immagini, illustrazioni, sfondi, decorazioni | `immagini.md` |
| Si scrivono testi dell'interfaccia (titoli, bottoni, errori) | `testi.md` |
| Sempre, prima di consegnare | `accessibilita.md` e `verifica.md` |
| Si modifica un sito o un'app già esistente | `redesign.md` |
| Livello di animazione "3D immersiva", o l'utente chiede un sito 3D | `stili/3d-scroll.md` |
| L'utente chiede uno stile preciso | prima `stili/` (soft, minimal, brutalist), poi `stili/awesome/` (52 stili riscritti e 13 copie di marchi: leggi prima `stili/awesome/LEGGIMI.md`) |


## 5. Tecnologia

- Default: **HTML, CSS e JavaScript puri**. Nessun framework, nessuna
  libreria, nessun passaggio di build.
- Librerie o framework solo se l'utente li chiede, o se il progetto
  li usa già (in quel caso si lavora con quello che c'è).
- **Eccezione**: con il livello di animazione "3D immersiva" sono
  ammesse Three.js, GSAP e Lenis, **scaricate in locale** e senza
  React (regole in `stili/3d-scroll.md`).
- Separazione dei file: `tokens.css` per le variabili, `base.css`
  per gli elementi HTML di base, `main.css` per il layout comune, un
  CSS per ogni sezione dell'interfaccia. Niente CSS o JavaScript
  inline nell'HTML.
- Priorità tra i CSS gestita con i livelli `@layer` dichiarati nel
  `tokens.css`, non con selettori sempre più specifici o `!important`.
- Solo funzioni CSS supportate da tutti i browser recenti (segnate
  "Baseline" su MDN); per le più nuove, un'alternativa con `@supports`.
- Commenti in italiano che spiegano il *perché* di ogni blocco.


## 6. Principi guida

Dettagli in `processo.md`, sezione 0.

- **Una sezione alla volta**: costruisci, mostra, aspetta l'ok.
- **Contenuto vero prima del layout**, mai Lorem ipsum.
- **Prima funziona, poi è bello, poi si muove**: HTML semantico,
  poi CSS, poi JavaScript.
- **Mobile first**: CSS pensato prima per il telefono.
- **Originale nell'aspetto, convenzionale nel comportamento**: la
  personalità sta in colori, font e immagini; menu, form e link
  funzionano come l'utente si aspetta.
- **Una sola cosa memorabile** per pagina, il resto disciplinato.
- **Non farmi pensare**: ogni pagina si capisce da sola; ciò che si
  clicca si vede che si clicca (dettagli in `usabilita.md`).
- **Nel dubbio, una domanda breve.**


## 7. Le regole da non dimenticare mai

Valgono anche se non hai aperto gli altri file:

- Nessun valore scritto a mano nei CSS delle pagine: colori, dimensioni,
  spaziature, durate e z-index vengono dal `tokens.css`.
- Contrasto del testo almeno 4.5:1 (3:1 per il testo grande), focus
  sempre visibile, `alt` su ogni immagine.
- Niente trattino lungo (—) nei testi dell'interfaccia.
- Niente etichette piccole in maiuscolo sopra i titoli.
- Niente nero puro `#000000`, niente viola/blu con bagliori "da AI".
- `<html lang="it">`, un solo `<h1>`, titoli in ordine senza salti.
- Font caricati in locale, mai da servizi esterni.
- Il contenuto è visibile anche se il JavaScript non parte.
- Nessuna consegna senza aver passato `verifica.md`.
