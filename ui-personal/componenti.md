# Componenti

Leggi questo file quando costruisci pulsanti, form, icone,
navigazione, finestre, notifiche, tabelle. Regola generale: **usa
l'elemento HTML nativo giusto** (`<button>`, `<a>`, `<input>`,
`<dialog>`, `<details>`, `<select>`) prima di costruirne uno con i
`<div>`. Il nativo funziona già con tastiera, lettori di schermo e
modalità a contrasto elevato.

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa.


## 1. Stati: ogni componente li ha tutti

Le interfacce generate mostrano solo lo stato "tutto è andato bene".
Ogni componente interattivo va progettato in **tutti** questi stati:

| Stato | Cosa si vede |
| --- | --- |
| Normale | L'aspetto di base |
| Hover (mouse sopra) | Cambio leggero ma visibile: sfondo, bordo o colore |
| Focus (da tastiera) | Anello di focus ben visibile, sempre (vedi `accessibilita.md`) |
| Premuto | Piccola conferma fisica: `translateY(1px)` o `scale(0.98)` |
| Disabilitato | Attenuato, ma con un motivo spiegato (vedi sezione 2) |
| Caricamento | Il bottone resta largo uguale e mostra che sta lavorando |
| Errore | Messaggio chiaro vicino al punto del problema |
| Vuoto | Spiega perché è vuoto e cosa fare (sezione 9) |
| Riuscito | Conferma breve di cosa è successo |

- **Hover, focus e premuto sono più evidenti dello stato normale**,
  mai meno. *(ricerca: Vercel)*
- **Su touch l'hover non esiste**: niente informazioni che si vedono
  solo passando il mouse sopra. *(ricerca: NN/g)* Gli effetti hover
  vanno dentro `@media (hover: hover)`, così su telefono non restano
  "appiccicati" dopo il tocco. *(mio)*


## 2. Pulsanti

### Bottone o link?

- **`<button>` per le azioni** (salva, invia, apri, elimina).
- **`<a href>` per andare da un'altra parte** (un'altra pagina, una
  sezione). **[auto]**
- **Mai un `<div>` o `<span>` cliccabile** **[auto]**: non si
  raggiunge con la tastiera e il lettore di schermo non sa che è
  cliccabile.

### Gerarchia

- **Un solo bottone primario per schermata** **[auto]**: più "azioni
  principali" = nessuna azione principale. *(ricerca: GOV.UK)*
- Primario (pieno, accento) → secondario (tenue) → ghost (solo bordo)
  → link. Non sempre serve la coppia "pieno + contorno": spesso basta
  un bottone e un link.
- **Distruttivi** (elimina, annulla abbonamento): colore di errore,
  mai come azione primaria di default, e con conferma o annullamento
  (sezione 7).

### Testo del bottone *(ricerca: GOV.UK, Frontend Design)*

- **Verbo + cosa**: "Salva modifiche", "Invia richiesta",
  "Scarica fattura". Mai "Invia", "OK", "Clicca qui", "Continua" se
  non si capisce cosa succede.
- **Maiuscola solo all'inizio.**
- **Stesso nome per la stessa azione** in tutto il percorso: il bottone
  "Pubblica" produce il messaggio "Pubblicato".
- **Su una riga sola** su desktop: se va a capo, si accorcia il testo
  (max 3 parole per i principali) o si allarga il bottone.
- **Un'intenzione, un'etichetta**: "Contattaci", "Scrivici",
  "Parliamone" sulla stessa pagina sono la stessa azione; se ne sceglie
  una e si usa ovunque.
- **Niente freccia decorativa** aggiunta al testo (→) come default.

### Forma e misure

- **Area cliccabile di almeno 44×44px** **[auto]**, anche se il bottone
  visibile è più piccolo (si allarga il padding).
- Forma dalla scala unica del `tokens.css`.
- **Contrasto del testo sul bottone 4.5:1** **[auto]**; bottoni "solo
  bordo" su foto: con un velo o un bordo ben visibile.
- **Bordo `transparent`** anche sui bottoni pieni: in modalità a
  contrasto elevato diventa visibile (vedi `colore.md`).
- Icona nel bottone: a sinistra del testo per l'azione, a destra solo
  per "avanti/apri". **Bottoni con sola icona**: `aria-label` che dice
  l'azione **[auto]**.

### Bottoni disabilitati *(ricerca: Adam Silver, GOV.UK)*

I bottoni disabilitati creano più problemi di quanti ne risolvano:
non spiegano cosa manca, non si raggiungono con la tastiera, hanno
poco contrasto, e l'utente non si accorge quando si riattivano.

- **Preferisci il bottone sempre attivo**: se il form non è completo,
  al clic si mostrano gli errori (sezione 3).
- Se proprio va disabilitato, **scrivi vicino perché** ("Scegli almeno
  un file per continuare").
- **Durante l'invio**: il bottone resta largo uguale, mostra "Invio in
  corso…" e **ignora il secondo clic** (niente doppio ordine o doppio
  pagamento). *(ricerca: GOV.UK)*


## 3. Form

### Campi *(ricerca: GOV.UK, Vercel)*

- **Etichetta sempre visibile, sopra il campo** **[auto]**, collegata
  con `<label for>`. Breve, maiuscola solo iniziale, senza i due punti
  finali.
- **Mai il segnaposto (placeholder) al posto dell'etichetta** **[auto]**:
  sparisce quando si scrive, spesso ha poco contrasto e i lettori di
  schermo non sempre lo leggono. Il segnaposto, se c'è, è un esempio:
  "es. mario.rossi@email.it".
- **Suggerimento** (testo d'aiuto) sotto l'etichetta e sopra il campo,
  una frase breve; collegato con `aria-describedby`.
- **Larghezza del campo proporzionata al contenuto atteso**: il CAP è
  stretto, l'indirizzo è largo. Un campo largo quanto la pagina per 5
  cifre confonde.
- **Tipo giusto**: `type="email"`, `tel`, `url`, `number` solo per
  quantità; per codici numerici (CAP, codice cliente) `type="text"`
  con `inputmode="numeric"`. Su telefono compare la tastiera giusta.
- **`autocomplete`** con il valore corretto (`name`, `email`,
  `street-address`, `postal-code`, `tel`, `current-password`…)
  **[auto]**: il browser compila da solo, ed è richiesto da WCAG 1.3.5.
- **Mai bloccare l'incolla** **[auto]** (nemmeno nelle password e nelle
  conferme email).
- `spellcheck="false"` su email, codici, nomi utente.
- **Testo dei campi almeno 16px**, altrimenti iPhone ingrandisce la
  pagina (vedi `tipografia.md`).
- **Obbligatori e facoltativi**: se quasi tutti sono obbligatori,
  segna solo i facoltativi "(facoltativo)". L'asterisco da solo non
  basta.
- **Chiedi solo quello che serve.** Ogni campo in più è un motivo per
  abbandonare. *(mio)*
- **Non far riscrivere cose già inserite** (es. indirizzo di
  spedizione e fatturazione: casella "uguale"). *(ricerca: WCAG 3.3.7)*
- **Checkbox e radio**: etichetta cliccabile insieme alla casella,
  nessuna zona "morta" tra le due **[auto]**; `accent-color` per il
  colore (vedi `colore.md`).
- **Gruppi di campi** (indirizzo, data) dentro `<fieldset>` con
  `<legend>`.
- **Form lunghi**: divisi in sezioni con titolo, o in più passaggi con
  indicatore di avanzamento ("Passo 2 di 4").
- **Accesso**: nessun test "cognitivo" obbligatorio (ricordare,
  trascrivere, risolvere enigmi) senza alternativa; il gestore di
  password e l'incolla devono funzionare. *(ricerca: WCAG 3.3.8)*

### Errori *(ricerca: NN/g, GOV.UK)*

- **Quando**: si valida quando l'utente **lascia** il campo, non mentre
  scrive (un "email non valida" alla terza lettera è irritante). Una
  volta mostrato l'errore, si toglie appena il campo diventa corretto,
  anche mentre scrive. *(mio: "avvisa tardi, perdona presto")*
- **Dove**: messaggio **sotto il campo** (o tra etichetta e campo),
  vicino al problema; mai solo in cima al form, mai in un tooltip.
- **Come**: bordo del campo in colore di errore **più** icona **più**
  testo. Mai solo il rosso.
- **Cosa dice**: cosa non va **e** come si sistema. "Inserisci
  un'email nel formato nome@esempio.it", non "Campo non valido".
  Niente colpe, niente "Oops!".
- **All'invio con errori**: riepilogo in cima al form con i link ai
  campi sbagliati, e il **focus** si sposta lì (o sul primo campo
  sbagliato). *(ricerca: Vercel, GOV.UK)*
- **Mai cancellare** quello che l'utente ha già scritto.
- Collegamento per i lettori di schermo: `aria-invalid="true"` sul
  campo e `aria-describedby` verso il messaggio.
- **Messaggio di conferma** dopo l'invio: cosa è successo e cosa
  succede adesso ("Richiesta inviata. Ti rispondiamo entro 2 giorni
  lavorativi all'indirizzo che hai indicato.").


## 4. Icone

- **Una sola libreria per progetto: Phosphor**, che ha tutti gli
  spessori. Uno spessore unico in tutto il progetto **[auto]**.
- **SVG, mai font di icone e mai emoji** al posto delle icone **[auto]**.
  *(ricerca: web.dev)*
- **Mai icone disegnate a mano** "a occhio" dall'AI: il risultato è
  quasi sempre sbilanciato. Se un'icona non c'è nella libreria, si
  cerca nella stessa libreria un'alternativa.
- **Icona + testo**: le icone da sole sono riconosciute da tutti solo
  in pochissimi casi (casa, cerca, stampa, chiudi). Tutte le altre
  vogliono un'etichetta visibile. *(ricerca: NN/g)*
- **Prova dei 5 secondi**: se non si capisce cosa fa un'icona in 5
  secondi, serve il testo. *(ricerca: NN/g)*
- **Icone decorative** accanto a un testo: `aria-hidden="true"`
  **[auto]**. Icone che sono l'unico contenuto di un bottone: il
  bottone ha `aria-label`.
- `fill="currentColor"` o `stroke="currentColor"`: l'icona prende il
  colore del testo (e funziona col contrasto elevato).
- **Evita le metafore scontate** (razzo per "lancio", scudo per
  "sicurezza", lampadina per "idea").
- **Dimensioni dai token** `--icon-*`; icone che servono a capire:
  contrasto 3:1 (vedi `colore.md`).


## 5. Navigazione

- **Convenzioni**: logo in alto a sinistra che porta alla home, menu
  principale in alto o laterale, voce della pagina attuale evidenziata
  con `aria-current="page"` **[auto]**. *(ricerca: Jakob's Law)*
- **Link "Vai al contenuto"** come primo elemento della pagina,
  visibile quando riceve il focus **[auto]**.
- **Voci del menu**: poche (idealmente 5-7), nomi che dicono cosa c'è
  dentro, nello stesso ordine in tutte le pagine.
  *(ricerca: Hick's Law, WCAG 3.2.3)*
- **Menu su telefono**: un bottone vero (`<button aria-expanded>`) con
  icona **e** la parola "Menu" (il solo hamburger non tutti lo
  riconoscono). *(ricerca: NN/g)*
- **Menu a tendina**: si aprono al clic, non solo al passaggio del
  mouse; si chiudono con Esc e cliccando fuori.
- **Barra fissa in alto**: bassa (64-72px), non deve coprire il
  contenuto quando si salta a un'ancora (`scroll-margin-top` sui
  titoli) né l'elemento con il focus. *(ricerca: Vercel, WCAG 2.4.11)*
- **Aiuto e contatti sempre nello stesso posto** in tutte le pagine
  (es. sempre nel footer o sempre in alto a destra).
  *(ricerca: WCAG 3.2.6)*
- **Percorso (breadcrumb)** nelle strutture a più livelli.
- **Link che si aprono in una nuova scheda**: solo se serve davvero, e
  va detto (icona + testo nascosto "si apre in una nuova scheda").
  *(mio)*


## 6. Finestre, menu e comparse

- **Finestre modali solo quando serve interrompere** *(ricerca: NN/g)*:
  per evitare un danno (cancellazione irreversibile) o chiedere un dato
  senza cui non si prosegue. Mai per iscrizioni alla newsletter, mai
  appena si apre la pagina. Alternative: pannello laterale, sezione
  espandibile, modifica diretta.
- **Usa `<dialog>` nativo con `showModal()`** *(ricerca: MDN)*: blocca
  lo sfondo, si chiude con Esc, gestisce il focus da solo. Serve sempre
  un bottone "Chiudi" visibile. Lo sfondo scuro si stila con
  `::backdrop` (usando `--overlay-bg`).
- **Menu, tooltip, piccoli pannelli**: attributo `popover` e
  `popovertarget` *(ricerca: MDN, supportato da tutti i browser dal
  2025)*: si chiudono da soli cliccando fuori o con Esc, e stanno sopra
  tutto senza lottare con gli `z-index`.
- **Alla chiusura il focus torna** sull'elemento che ha aperto la
  finestra.
- **Tooltip** solo per informazioni in più, mai per informazioni
  necessarie (su telefono non si vedono).
- **Sezioni espandibili (domande frequenti)**: `<details>` e `<summary>`
  nativi, niente JavaScript.


## 7. Notifiche, conferme, annullare

- **Messaggi temporanei (toast)**: in un angolo fisso, restano abbastanza
  per essere letti (almeno 5 secondi, di più se lunghi), si possono
  chiudere, non coprono i bottoni. Annunciati ai lettori di schermo con
  `aria-live="polite"`. *(ricerca: Vercel; mio per i tempi)*
- **Mai informazioni importanti solo in un toast** che sparisce.
- **Azioni distruttive**: meglio **"Annulla"** per qualche secondo
  dopo l'azione (l'elemento sparisce ma si può recuperare) che una
  finestra "Sei sicuro?". La conferma si usa quando non si può
  annullare, e ripete l'azione nel bottone: "Elimina 3 file", non
  "Sì". *(ricerca: Vercel; dalle skill: Impeccable)*
- **Modifiche non salvate**: avvisa prima di uscire dalla pagina.


## 8. Caricamento *(ricerca: NN/g)*

| Attesa | Cosa mostrare |
| --- | --- |
| Meno di 1 secondo | Niente (un indicatore che lampeggia disturba) |
| 1-10 secondi, pagina intera | Sagome grigie della pagina che arriva (skeleton) |
| 1-10 secondi, una parte | Indicatore nella parte che carica |
| Più di 10 secondi | Barra di avanzamento con indicazione del tempo o dei passi |

- Le sagome devono **somigliare alla pagina vera** (stesse proporzioni):
  una pagina vuota con solo intestazione e piè di pagina sembra rotta.
- **Il testo di caricamento dice cosa sta facendo**: "Carico le
  fatture…", non "Caricamento…".
- Riserva lo spazio di ciò che arriva (immagini, tabelle), così la
  pagina non salta.


## 9. Stati vuoti *(ricerca: NN/g)*

Uno spazio vuoto senza spiegazioni fa pensare che qualcosa non
funzioni. Uno stato vuoto fa tre cose:

1. **Dice perché è vuoto**, distinguendo i casi: primo utilizzo,
   nessun risultato della ricerca, filtri troppo stretti, niente
   permessi, errore di caricamento.
2. **Insegna** in una riga a cosa serve quello spazio ("Qui trovi le
   fatture che ricevi via PEC").
3. **Offre l'azione** per riempirlo (bottone "Carica la prima
   fattura", "Togli i filtri").

- **Mai "nessun dato" mentre si sta ancora caricando.**


## 10. Tabelle *(mio, salvo dove indicato)*

- `<table>` vera con `<th scope>` e `<caption>` (anche nascosta).
- Numeri **allineati a destra** con cifre tabellari, testo a sinistra,
  intestazioni allineate come la colonna.
- Righe con linee sottili **oppure** colori alternati, non entrambi.
- Intestazione fissa (`position: sticky`) nelle tabelle lunghe.
- Su telefono la tabella scorre nel suo riquadro (con un'ombra ai bordi
  che fa capire che c'è altro); la pagina no.
- Liste molto lunghe (oltre 50 righe): paginazione, "carica altri" o
  `content-visibility: auto`. *(ricerca: Vercel)*
- Ordinamento: colonna cliccabile con indicazione del verso
  (`aria-sort`).


## 11. Media e immagini nei componenti

Vedi `immagini.md`. Qui solo: **`width` e `height` su ogni `<img>`**
**[auto]** (niente salti di pagina) e **`alt`** sempre **[auto]**.


## 12. Prima di consegnare

- [ ] Ogni componente interattivo ha tutti gli stati della sezione 1.
- [ ] Solo elementi nativi per azioni e link; nessun `<div>` cliccabile.
- [ ] Un solo bottone primario per schermata; testi "verbo + cosa".
- [ ] Ogni campo ha etichetta visibile, tipo e `autocomplete` giusti.
- [ ] Errori provati: vicino al campo, con testo e icona, focus giusto.
- [ ] Tutto raggiungibile e usabile solo con la tastiera.
- [ ] Stati di caricamento e vuoti progettati.


## Fonti della ricerca

- [Errori nei form](https://www.nngroup.com/articles/errors-forms-design-guidelines/) (Nielsen Norman Group)
- [Il problema dei bottoni disabilitati](https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/) (Adam Silver)
- [Campo di testo](https://design-system.service.gov.uk/components/text-input/) e [pulsante](https://design-system.service.gov.uk/components/button/) (GOV.UK Design System)
- [Stati vuoti](https://www.nngroup.com/articles/empty-state-interface-design/) e [schermate scheletro](https://www.nngroup.com/articles/skeleton-screens/) (Nielsen Norman Group)
- [Finestre modali e non modali](https://www.nngroup.com/articles/modal-nonmodal-dialog/) (Nielsen Norman Group)
- [Usabilità delle icone](https://www.nngroup.com/articles/icon-usability/) (Nielsen Norman Group)
- [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) e [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) (MDN)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) (Vercel)
- [WCAG 2.2, novità](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
