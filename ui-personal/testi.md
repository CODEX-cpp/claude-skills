# Testi dell'interfaccia

Leggi questo file quando scrivi titoli, bottoni, etichette, messaggi
di errore, testi di esempio. **Le parole sono design**: un testo
generico fa sembrare generica anche la pagina più curata.

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa.


## 1. Principi

Nell'ordine di importanza *(ricerca: NN/g, "le 3 C")*:

1. **Chiaro**: si capisce subito, con le parole di chi legge.
2. **Breve**: ogni parola in più rischia di non essere letta.
3. **Con carattere**: un tono riconoscibile, ma mai a scapito dei
   primi due.

- **Scrivi dal punto di vista di chi usa**, non di chi ha costruito:
  "Gestisci le notifiche", non "Configurazione webhook".
- **Parole comuni**, niente gergo tecnico se chi legge non è tecnico.
  Se un termine tecnico serve, spiegalo la prima volta. *(ricerca:
  Designers Italia)*
- **Frasi brevi**, una idea per frase. Indicativamente sotto le 20-25
  parole. *(mio)*
- **Forma attiva**: "Abbiamo ricevuto la tua richiesta", non "La
  richiesta è stata ricevuta".
- **Le parole chiave all'inizio**: di titoli, voci di menu, bottoni,
  elementi di elenco. Chi scorre legge le prime parole. *(ricerca:
  NN/g, schema a F)*
- **Ogni testo fa un solo lavoro.** Se il titolo spiega già tutto,
  il paragrafo sotto aggiunge altro o sparisce. *(dalle skill:
  Impeccable, Frontend Design)*
- **Tu o voi, scelto una volta** e tenuto in tutto il sito *(mio)*.
  Il "tu" è più diretto e oggi comune anche per aziende serie; il
  "Lei" solo se il pubblico lo richiede davvero (es. studi legali,
  servizi per anziani). Scrivilo nelle Linee guida del `tokens.css`.


## 2. Titoli

- **Dicono di cosa parla la sezione**, meglio se con un beneficio
  concreto. Un titolo "creativo" che non si capisce è peggio di uno
  semplice.
- **Brevi**: indicativamente fino a 8 parole nelle pagine vetrina.
- **Maiuscola solo sulla prima parola** (e sui nomi propri), come si
  scrive in italiano **[auto]**. Mai "Ogni Parola Maiuscola" (è una
  convenzione inglese). *(ricerca: Accademia della Crusca)*
- **Niente punto finale** nei titoli e nei bottoni. *(mio)*
- **Niente punti esclamativi.** *(ricerca: Butterick)*


## 3. Bottoni, link ed etichette

- **Bottoni: verbo + cosa** ("Scarica il listino", "Prenota una
  visita"). Dicono cosa succede cliccando.
- **La stessa azione ha sempre lo stesso nome**, dal bottone al
  messaggio finale: "Pubblica" → "Pubblicato".
- **Un'etichetta per ogni intenzione**: non "Contattaci", "Scrivici" e
  "Parliamone" nella stessa pagina.
- **Link con testo che dice dove portano** **[auto]**: "Leggi le
  condizioni di reso", mai "clicca qui" o "scopri di più" da soli.
- **Nelle finestre di conferma**, i bottoni ripetono l'azione:
  "Elimina fattura" / "Annulla", mai "Sì" / "No" / "OK". *(ricerca:
  NN/g)*
- **Etichette dei campi**: brevi, senza i due punti finali.
- **Testo di aiuto e segnaposto**: il segnaposto è un **esempio**
  ("es. 20121"), non un'istruzione.


## 4. Messaggi di errore *(ricerca: NN/g)*

Un buon errore risponde a tre domande:

1. **Cosa è successo**, con parole semplici.
2. **Perché**, se si sa ed è utile.
3. **Come si risolve**, o che alternativa c'è.

- "Il file supera 10 MB. Riducilo o carica un PDF." sì;
  "Errore 413" o "Si è verificato un errore" no.
- **Niente colpe** ("Hai sbagliato…"), **niente scuse esagerate**,
  **niente battute**: alla terza volta che compare, la battuta
  irrita. **Niente "Ops!"**.
- **Precisi**: "L'IBAN deve avere 27 caratteri, ne hai inseriti 25",
  non "Formato non valido".
- **I codici tecnici** solo in secondo piano, per l'assistenza.
- **Temi delicati** (pagamenti, dati personali, cancellazioni, accessi
  bloccati): serietà, niente leggerezza.
- **Non promettere** cause o soluzioni che il sistema non conosce.


## 5. Conferme, caricamenti, stati vuoti

- **Conferma**: cosa è successo + cosa succede adesso. "Ordine
  ricevuto. Ti arriva una email di conferma entro qualche minuto."
- **Caricamento**: cosa sta facendo, con i puntini di sospensione veri
  (…): "Carico le fatture…" *(ricerca: Vercel)*
- **Stato vuoto**: perché è vuoto + come si riempie (vedi
  `componenti.md`).
- **Successi senza esclamativi**: "Salvato", non "Fatto! 🎉".


## 6. Contenuti di esempio

Quando i testi veri non ci sono ancora, i testi di esempio devono
sembrare veri, non generati.

- **Mai Lorem ipsum** **[auto]**: nasconde i problemi di layout (testi
  più lunghi o più corti del previsto). *(ricerca: NN/g)*
- **Nomi realistici e italiani** (o del paese del progetto), vari:
  niente "Mario Rossi" ovunque, niente "John Doe" **[auto]**.
- **Niente aziende finte generiche**: "Acme", "Nexus", "TechCorp"
  **[auto]**.
- **Numeri**: dati veri forniti dall'utente, oppure **chiaramente
  segnati come esempio**. Mai numeri inventati che sembrano precisi
  ("97,3% di clienti soddisfatti") presentati come veri.
- **Testimonianze**: solo vere. Se servono per il layout, segnaposto
  dichiarati ("[Testimonianza cliente, max 3 righe]"). Inventare
  recensioni di persone "vere" è ingannevole.
- **Segnala sempre all'utente** quali testi sono di esempio e vanno
  sostituiti.


## 7. Parole e frasi da evitare

Sono i segnali più riconoscibili di un testo generato **[auto]**:

- **Parole vuote del marketing**: rivoluzionario, innovativo,
  all'avanguardia, di nuova generazione, senza soluzione di continuità
  / "seamless", potenziare / "empower", sbloccare / "unlock",
  trasformare, elevare, sinergia, a 360 gradi, eccellenza, soluzioni
  su misura, "il futuro di…". Si sostituiscono con **cosa fa davvero**
  il prodotto, con un numero o un esempio.
- **Frasi a effetto con la negazione**: "Non un prodotto. Una
  rivoluzione.", "Niente compromessi. Solo qualità." Se ce ne sono più
  di una per pagina, è un tic. *(dalle skill: Impeccable)*
- **Falsa modestia e aria da artigiano**: "Lo facciamo con calma",
  "Note dal laboratorio", "Fatto con cura, una cosa alla volta" usati
  come etichette decorative.
- **Metafore che non tornano** e giochi di parole che non vogliono
  dire niente. **Nel dubbio, una frase semplice e funzionale è meglio
  di una "brillante".**
- **Il trattino lungo (—)** nei testi dell'interfaccia **[auto]**: si
  usano punto, virgola, due punti o parentesi.
- **Il punto a metà riga (·)** come separatore ovunque: al massimo uno
  per riga, meglio andare a capo.
- **Etichette sopra i titoli**, numeri di sezione decorativi ("01 /
  Servizi"), inviti a scorrere ("Scorri per scoprire"), versioni finte
  ("v2.0", "BETA") se non è davvero una versione di prova.
- **Emoji** nei testi dell'interfaccia **[auto]**, salvo stile
  esplicitamente giocoso scelto dall'utente.
- **Discorsi di benvenuto** *(dalle skill: gstack; Krug, "happy
  talk")*: paragrafi che aprono con "Benvenuti in…" o raccontano quanto
  è bello il sito o l'azienda. Se leggendoli senti "bla bla bla", vanno
  tolti. Si parte da ciò che serve al visitatore.
- **Istruzioni lunghe** *(dalle skill: gstack; Krug)*: ogni istruzione
  visibile più lunga di una frase è un segnale che l'interfaccia non
  si spiega da sola. Si corregge l'interfaccia, non si allunga
  l'istruzione.
- **Inviti generici**: "Inizia" o "Scopri di più" come unici bottoni
  della pagina. L'invito dice cosa si ottiene: "Prenota la visita",
  "Vedi i prezzi". *(dalle skill: gstack)*

**La prova della metà** *(dalle skill: gstack; Krug)*: togli metà
delle parole della pagina, poi metà di quello che resta. Se la pagina
migliora, continua a togliere. Utile anche un conto rapido: quante
parole sono contenuto utile e quante sono benvenuti, istruzioni e
frasi di circostanza?


## 8. Italiano corretto *(mio, salvo dove indicato)*

- **È** maiuscola accentata, mai **E'** **[auto]**.
- **Apostrofo tipografico ’** e **virgolette** coerenti in tutto il
  sito: « » (più tradizionali) oppure “ ” (più moderne), mai le dritte
  `"` **[auto]**. *(ricerca: Butterick; Crusca per i caporali)*
- **Puntini di sospensione**: il carattere `…`, non tre punti.
  *(ricerca: Vercel)*
- **Trattino corto (-)** per le parole composte e gli intervalli
  (2020-2026, 9-18); niente trattino lungo (vedi sopra).
- **Accenti giusti**: perché, poiché, affinché (acuto); è, cioè, caffè
  (grave).
- **Maiuscole**: minuscola per giorni, mesi, lingue, aggettivi di
  nazionalità (lunedì, settembre, italiano). *(ricerca: Crusca)*
- **Numeri e unità**: `1.234,56 €`, `10 kg`, `3 MB`, con **spazio
  indivisibile** tra numero e unità (`&nbsp;`) per non andare a capo.
- **Date**: "27 settembre 2026" nel testo, "27/09/2026" nelle tabelle.
  **Ore**: "15:30" o "15.30", scelto uno e mantenuto.
- **Telefono**: raggruppato per leggibilità ("02 1234 5678",
  "+39 333 123 4567").
- **Nel codice**: date e numeri formattati con `Intl.DateTimeFormat` e
  `Intl.NumberFormat` con `'it-IT'`, mai costruiti a mano **[auto]**.
  *(ricerca: Vercel)*
- **Nomi di marchi e codici** che un traduttore automatico
  rovinerebbe: `translate="no"`. *(ricerca: Vercel)*
- **Linguaggio inclusivo** senza appesantire: dove possibile forme
  neutre ("chi si iscrive", "le persone iscritte") invece di doppie
  forme ovunque.


## 9. Accessibilità del testo *(mio)*

- Il testo dei link, dei bottoni e dei titoli ha senso **anche letto
  da solo** (i lettori di schermo li elencano fuori contesto).
- Le sigle si scrivono per esteso la prima volta.
- Niente istruzioni che dipendono solo da forma, colore o posizione
  ("clicca il bottone verde a destra"). *(ricerca: WCAG 1.3.3)*


## 10. Prima di consegnare

Rileggi **ogni** testo visibile della pagina (titoli, bottoni,
etichette, errori, `alt`, footer) e correggi quelli che:
- sono grammaticalmente sbagliati o poco chiari;
- hanno riferimenti che non si capiscono ("come abbiamo sempre fatto");
- suonano come una frase generata che "fa la brillante";
- contengono le parole della sezione 7.

In caso di dubbio: **una frase semplice e funzionale**.


## Fonti della ricerca

- [Le 3 C dei testi informativi](https://www.nngroup.com/articles/3-cs-microcopy/) (Nielsen Norman Group)
- [Linee guida per i messaggi di errore](https://www.nngroup.com/articles/error-message-guidelines/) (Nielsen Norman Group)
- [OK/Annulla o Annulla/OK](https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/) (Nielsen Norman Group)
- [Guida al linguaggio della Pubblica Amministrazione](https://docs.italia.it/italia/designers-italia/writing-toolkit/it/bozza/suggerimenti-di-scrittura.html) (Designers Italia)
- [Uso delle maiuscole e minuscole](https://accademiadellacrusca.it/it/consulenza/uso-delle-maiuscole-e-minuscole/58) (Accademia della Crusca)
- [Practical Typography](https://practicaltypography.com/summary-of-key-rules.html) (Matthew Butterick)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) (Vercel)
- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT), che riprende Steve Krug, *Don't Make Me Think*
