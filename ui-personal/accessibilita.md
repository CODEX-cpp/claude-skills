# Accessibilità

Queste regole **non si scavalcano mai**, nemmeno da uno stile. Se
l'utente chiede esplicitamente qualcosa che le viola, faglielo notare
in una riga prima di procedere.

Riferimento: **WCAG 2.2, livello AA** (le linee guida internazionali
del W3C). Accessibile non vuol dire "per pochi": vuol dire che funziona
per chi vede poco, chi non distingue i colori, chi usa solo la
tastiera, chi usa un lettore di schermo, chi ha un telefono vecchio, il
sole sullo schermo o un braccio rotto.

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa (soprattutto le
regole di Vercel e Impeccable).


## 0. Perché conta anche per legge *(ricerca)*

- **European Accessibility Act**: dal **28 giugno 2025** in Italia i
  siti e le app che vendono prodotti o servizi ai consumatori
  (e-commerce, banche, prenotazioni, trasporti, servizi digitali)
  devono essere accessibili, con riferimento alle WCAG 2.1 AA (le 2.2
  le includono). Sanzioni fino a 40.000 €.
- **Esenti le microimprese** (meno di 10 dipendenti e fatturato fino a
  2 milioni di euro), ma la regola può cambiare e l'accessibilità
  resta una buona pratica.
- **Pubblica Amministrazione**: già obbligata dalla Legge Stanca.
- Quando un progetto è per un cliente che rientra negli obblighi,
  **segnalalo all'utente**. *(mio)*


## 1. I 6 errori più diffusi del web *(ricerca: WebAIM Million 2026)*

Su un milione di siti analizzati, questi sei errori sono **il 96% di
tutti i problemi** trovati, con una media di 56 errori per pagina.
Sono i primi da evitare, e tutti controllabili in automatico:

| Errore | Pagine che lo hanno | Regola |
| --- | --- | --- |
| Testo con poco contrasto | 84% | Sezione 3 |
| Immagini senza `alt` | 53% | Sezione 5 |
| Campi dei form senza etichetta | 51% | Sezione 6 |
| Link vuoti (senza testo) | 46% | Sezione 2 |
| Bottoni vuoti (solo icona, senza nome) | 31% | Sezione 2 |
| Lingua della pagina mancante | 14% | Sezione 7 |


## 2. HTML giusto prima di tutto

- **Prima regola dell'ARIA** *(ricerca: W3C)*: se esiste un elemento
  HTML che fa già la cosa, usa quello. `<button>` invece di
  `<div role="button">`. Gli attributi ARIA servono solo dove l'HTML
  non basta, e un ARIA sbagliato fa più danni di nessun ARIA.
- **Struttura della pagina**: `<header>`, `<nav>`, `<main>` (uno solo),
  `<footer>`, `<section>` con titolo. Chi usa un lettore di schermo
  salta da una zona all'altra **[auto]**.
- **Titoli** in ordine, uno solo `<h1>` **[auto]** (vedi `tipografia.md`).
- **`<button>` per le azioni, `<a href>` per spostarsi** **[auto]**.
- **Ogni link e ogni bottone ha un nome** leggibile: testo visibile,
  oppure `aria-label` se c'è solo un'icona **[auto]**.
- **Elenchi** come `<ul>`/`<ol>`, **tabelle di dati** come `<table>`
  con `<th>`, mai tabelle per impaginare.
- **`<title>` della pagina** diverso per ogni pagina e che dice dove
  si è ("Contatti · Nome sito") **[auto]**.
- **Elementi nascosti** con `aria-hidden="true"` o `display: none`:
  mai qualcosa di focalizzabile dentro **[auto]**. *(ricerca: W3C)*
- **Testo solo per lettori di schermo**: classe `.sr-only` (visibile
  ai lettori, invisibile a schermo), mai `display: none` per questo.


## 3. Vedere

- **Contrasto** (dettagli in `colore.md`):
  testo 4.5:1, testo grande 3:1, bordi dei campi, icone utili e focus
  3:1 **[auto]**.
- **Mai solo il colore** per dare un'informazione.
- **Zoom al 200%** senza perdere contenuti; **nessuno scroll
  orizzontale a 320px** (zoom al 400%) **[auto]**.
- **Il testo si ingrandisce**: dimensioni in `rem`, mai bloccare lo
  zoom del telefono (`user-scalable=no`, `maximum-scale=1`) **[auto]**.
- **Spaziatura del testo modificabile** *(ricerca: WCAG 1.4.12)*: se
  l'utente aumenta interlinea e spazi (alcune persone con dislessia lo
  fanno), il testo non deve tagliarsi. Quindi niente altezze fisse sui
  contenitori di testo.
- **Contenuti che compaiono** al passaggio del mouse o al focus
  (tooltip): si possono chiudere con Esc, restano visibili se ci si
  passa sopra col mouse, non spariscono da soli. *(ricerca: WCAG 1.4.13)*


## 4. Tastiera

Tutto quello che si fa col mouse si deve poter fare con la tastiera.

- **Tab / Maiusc+Tab** per spostarsi, **Invio** per link e bottoni,
  **Spazio** per bottoni e caselle, **Esc** per chiudere, **frecce**
  dentro menu, schede, gruppi di radio.
- **Focus sempre visibile** **[auto]**: `:focus-visible` con l'anello
  dei token (`--focus-ring`). Mai `outline: none` senza un sostituto
  **[auto]**. L'anello è spesso almeno 2px e ha contrasto 3:1.
  *(ricerca: WCAG 2.4.13)*
- **Ordine del focus = ordine di lettura**: segue l'HTML. Mai
  `tabindex` con numeri positivi **[auto]**; `tabindex="0"` solo per
  rendere focalizzabile un componente personalizzato, `tabindex="-1"`
  per spostarci il focus da JavaScript.
- **Focus non coperto** da barre fisse, banner dei cookie, chat
  *(ricerca: WCAG 2.4.11)*: `scroll-padding-top` pari all'altezza della
  barra fissa.
- **Nessuna trappola**: da ogni elemento si esce con la tastiera. Unica
  eccezione voluta: dentro una finestra modale aperta il focus resta
  nella finestra (con `<dialog>` è automatico) e torna al bottone di
  apertura quando si chiude.
- **Link "Vai al contenuto"** come primo elemento focalizzabile
  **[auto]**.
- **Trascinare**: ogni azione che si fa trascinando (riordinare,
  cursori) ha anche un'alternativa con un clic o con la tastiera.
  *(ricerca: WCAG 2.5.7)*


## 5. Immagini e media

- **`alt` su ogni immagine**, adatto al ruolo (tabella in
  `immagini.md`) **[auto]**. Decorative: `alt=""`.
- **Icone SVG decorative**: `aria-hidden="true"` **[auto]**.
- **Video con parlato**: sottotitoli. **Audio**: trascrizione.
- **Niente testo importante dentro le immagini.**


## 6. Form

Dettagli in `componenti.md`. Qui il minimo inderogabile:

- **Ogni campo ha un'etichetta** collegata (`<label for>`) **[auto]**.
- **`autocomplete`** sui dati personali **[auto]**.
- **Errori**: in testo, vicino al campo, collegati con
  `aria-describedby`, campo con `aria-invalid="true"`; all'invio il
  focus va al primo errore o al riepilogo.
- **Messaggi che cambiano da soli** (errori, "Salvato", risultati di
  ricerca) annunciati con `aria-live="polite"` **[auto]**.
- **Tempo**: se una sessione scade, avvisare prima e permettere di
  prolungare.
- **Accesso senza enigmi** *(ricerca: WCAG 3.3.8)*: niente obbligo di
  ricordare o ricopiare codici senza poter incollare o usare il gestore
  di password.


## 7. Lingua e comprensione

- `<html lang="it">` **[auto]**; parti in un'altra lingua con il loro
  `lang` (`<span lang="en">`): il lettore di schermo le pronuncia
  giuste.
- **Navigazione coerente** tra le pagine: stesso menu, stesso ordine,
  stessi nomi. **Aiuto e contatti sempre nello stesso posto.**
  *(ricerca: WCAG 3.2.3, 3.2.6)*
- **Niente cambi di contesto inaspettati**: scegliere un'opzione in un
  menu a tendina non fa partire un'azione o cambiare pagina da solo.
- **Linguaggio semplice** (vedi `testi.md`).


## 8. Movimento

Dettagli in `movimento.md`: `prefers-reduced-motion` sempre rispettato,
niente lampeggi oltre 3 al secondo, pausa per ciò che si muove da solo
per più di 5 secondi **[auto]**.


## 9. Tocco e puntatore

- **Aree cliccabili almeno 24×24px** (minimo di legge, WCAG 2.5.8),
  **44×44px consigliati** su touch **[auto]**.
- **Azioni al rilascio**, non alla pressione: se l'utente preme per
  sbaglio può spostare il dito fuori e annullare (è il comportamento
  standard dei `<button>`).
- **Gesti complessi** (pizzico, scorrimento a più dita) sempre con
  un'alternativa semplice.


## 10. Modalità dell'utente

Il sistema dell'utente può chiedere qualcosa: rispettalo.

| Preferenza | Cosa fare |
| --- | --- |
| `prefers-reduced-motion` | Meno movimento (vedi `movimento.md`) |
| `forced-colors: active` (contrasto elevato di Windows) | Bordi `transparent` visibili, niente informazioni solo in sfondi/ombre (vedi `colore.md`) |
| `prefers-contrast: more` | Bordi e testi secondari più marcati |
| `prefers-color-scheme` | Solo se il progetto ha due temi |
| `prefers-reduced-transparency` | Vetro smerigliato sostituito da colore pieno |


## 11. Come verificare *(mio, strumenti gratuiti)*

Gli strumenti automatici trovano solo una parte dei problemi (circa un
terzo): servono anche le prove a mano.

1. **Automatico**: in Chrome, **Lighthouse** (strumenti per
   sviluppatori → Lighthouse → Accessibilità) oppure l'estensione
   **axe DevTools** o **WAVE**. Obiettivo: zero errori.
2. **Solo tastiera**: metti via il mouse e usa la pagina dall'inizio
   alla fine con Tab, Invio, Spazio, Esc. Vedi sempre dove sei?
   Arrivi a tutto? Esci da tutto?
3. **Zoom**: 200% e 400% (o finestra larga 320px).
4. **Lettore di schermo**: su Windows **NVDA** (gratuito). Anche solo 5
   minuti: si capisce subito se titoli, link e bottoni hanno senso.
5. **Simulazioni in Chrome** (strumenti per sviluppatori → Rendering):
   daltonismo, `prefers-reduced-motion`, `forced-colors`.
6. **Validatore HTML** del W3C: l'HTML sbagliato confonde i lettori di
   schermo.


## Fonti della ricerca

- [WCAG 2.2, novità](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) (W3C)
- [WebAIM Million 2026, i 6 errori più comuni](https://www.accessibility.chat/articles/webaim-million-2026-same-six-failures-worse-numbers-tell-the-real-story) e [il rapporto originale](https://webaim.org/projects/million/)
- [Le regole d'uso dell'ARIA](https://www.w3.org/TR/using-aria/) (W3C)
- [Accessibilità obbligatoria dal 28 giugno 2025](https://www.actainfo.it/news/accessibilita-digitale-obbligatoria/) (Actainfo)
- [Reflow, WCAG 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) e [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) (Vercel)
