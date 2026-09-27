# Redesign di siti e app esistenti

Leggi questo file quando metti mano a un progetto che esiste già.
Il rischio più grande di un redesign non è farlo brutto: è **rompere
qualcosa che funzionava** (posizionamento su Google, abitudini degli
utenti, statistiche, moduli). Prima si analizza, poi si tocca.

Legenda: *(ricerca: …)* = dalla ricerca online, fonti in fondo;
*(mio)* = ragionamento mio. Il resto viene dalle skill analizzate nella
mappa (Taste v2, redesign-skill, Impeccable).


## 1. Capire che tipo di intervento è

Chiedi all'utente (una domanda), se non è evidente:

| Tipo | Cosa cambia | Cosa resta |
| --- | --- | --- |
| **Ritocco** | Dettagli: font, spazi, colori, stati mancanti | Identità, struttura, contenuti |
| **Evoluzione** | L'aspetto si modernizza, sezioni ricomposte | Identità riconoscibile, struttura, contenuti, URL |
| **Rifacimento** | Nuovo linguaggio visivo (si riparte dal mini-piano di `processo.md`) | Contenuti, funzioni, URL, nomi dei campi |

- **Ritocco ed evoluzione preservano; il rifacimento sostituisce.**
  Mai una via di mezzo confusa: se si rifà, il vecchio aspetto è un
  riferimento di cosa non fare, non qualcosa da "lucidare".
  *(dalle skill: Impeccable)*
- **Circa il 70% del valore con il 40% del rischio**: se struttura,
  contenuti e SEO funzionano, un'evoluzione mirata di solito basta.
  *(dalle skill: Taste v2)*


## 2. Analizzare prima di toccare

Prima di qualsiasi modifica, scrivi (e mostra all'utente) un breve
rapporto:

1. **Tecnologia**: come è fatto (HTML/CSS puro, framework, CMS), quali
   file CSS e JS, se c'è un `tokens.css` (vedi `processo.md`, sezione A).
2. **Identità attuale**: colori, font, logo, forme, tono. Cosa è
   riconoscibile e va tenuto.
3. **Struttura**: pagine, menu, percorsi principali (es. "dalla home al
   modulo di contatto").
4. **Cosa funziona**: sezioni efficaci, interazioni che gli utenti
   conoscono, testi che rendono.
5. **Problemi**, in ordine di gravità:
   - accessibilità (i 6 errori più comuni in `accessibilita.md`);
   - cose rotte (link morti, immagini mancanti, form senza conferma);
   - problemi su telefono;
   - segni di template/AI (da `colore.md`, `tipografia.md`,
     `layout.md`, `testi.md`);
   - incoerenze (5 grigi quasi uguali, 3 raggi diversi, durate a caso).
6. **Stati mancanti**: caricamento, vuoto, errore, focus.
7. **Posizionamento su Google** (se è un sito pubblico): le pagine che
   portano più visite. *(ricerca: Search Engine Land)*

Il rapporto si apre con lo **sguardo d'insieme** di `verifica.md`
(sezione 0.5: quattro frasi, prova delle aree, prova del tronco) e,
se l'utente lo vuole, prosegue con la **pagella** qui sotto.


## 2.5 La pagella *(dalle skill: gstack; mio l'adattamento)*

Serve a dire in modo onesto e confrontabile "a che punto è" un sito,
prima e dopo il lavoro. Si fa su 3-8 pagine (home e quelle più
importanti), su telefono e desktop.

**I numeri del sistema di design reale** (quello che si vede, non
quello che dovrebbe esserci), con i campanelli d'allarme:

| Cosa | Allarme se |
| --- | --- |
| Famiglie di font | più di 3 |
| Colori diversi (esclusi i grigi) | più di 12 |
| Titoli `h1`-`h6` | livelli saltati, salti di misura senza una scala |
| Spazi (margini, padding) | valori fuori da una scala |
| Aree da toccare | sotto 44px su telefono |

**Ogni problema** ha una categoria e un peso: **grave** (fa male
all'utente o blocca), **medio** (si nota, sembra trascurato),
**rifinitura** (si annota ma non abbassa il voto).

**Voti per categoria**, da A a F. Ogni categoria parte da A; ogni
problema grave toglie un voto intero, ogni problema medio mezzo voto.

| Voto | Significato |
| --- | --- |
| A | Intenzionale, curato, piacevole: si vede che c'è un pensiero |
| B | Basi solide, piccole incoerenze: professionale |
| C | Funziona ma è generico: nessun punto di vista |
| D | Problemi evidenti: sembra non finito |
| F | Danneggia l'esperienza: va rifatto |

**Voto complessivo** = media pesata:

| Categoria | Peso |
| --- | --- |
| Gerarchia visiva | 15% |
| Tipografia | 15% |
| Spazi e layout | 15% |
| Colore e contrasto | 10% |
| Stati interattivi | 10% |
| Telefono | 10% |
| Testi | 10% |
| Segni "da AI" | 5% |
| Movimento | 5% |
| Prestazioni percepite | 5% |

In più: **voto "da AI"** a parte (quanto sembra generato), e il
**serbatoio della fiducia** percorrendo 2-3 flussi importanti
(`usabilita.md`, sezione 5), con i passaggi che la consumano di più.

**Coerenza tra pagine**: stessa navigazione, stesso footer, stessi
componenti con lo stesso aspetto, stesso tono, stesso ritmo degli
spazi.

**Come si scrivono le critiche** (osservazioni, non gusti):
- "Noto che…" (un fatto: "il bottone principale compete con il
  secondario");
- "Mi chiedo se…" (un dubbio: "gli utenti capiranno 'Elabora'?");
- "E se…" (una proposta: "e se la ricerca stesse in alto?");
- "Penso che… perché…" (un'opinione motivata con un principio).

Ogni critica ha accanto una proposta concreta. Alla fine del lavoro si
rifà la pagella: il confronto prima/dopo è il resoconto migliore.


## 3. Cosa non si cambia mai senza permesso

- **Indirizzi delle pagine (URL)** e ancore interne.
- **Voci del menu principale** e il loro ordine.
- **Nomi e ordine dei campi dei form** (rompono statistiche e
  compilazione automatica).
- **Logo** e marchio.
- **Testi legali**: privacy, cookie, condizioni.
- **Identificativi usati dalle statistiche** (id e classi usati da
  Google Analytics, pixel, tracciamenti).
- **Tono dei testi**: modernizzare l'aspetto non vuol dire riscrivere
  i contenuti.
- **Le cose accessibili che già funzionano**: focus, `alt`, contrasti
  buoni non devono peggiorare.


## 4. In che ordine migliorare

Dal cambiamento con più effetto e meno rischio *(dalle skill: Taste v2,
redesign-skill)*:

1. **Tipografia**: font, scala, interlinea, lunghezza delle righe.
2. **Spazi e ritmo**: scala di spaziatura, contenitori, allineamenti.
3. **Colore**: pulizia della palette, un accento, contrasti.
4. **Stati interattivi**: hover, focus, premuto, disabilitato.
5. **Stati mancanti**: caricamento, vuoto, errore.
6. **Componenti generici** sostituiti con soluzioni migliori.
7. **Movimento**, al livello scelto con l'utente.
8. **Ricomposizione di sezioni** (hero e sezioni chiave).
9. **Sostituzione completa** di un blocco, solo se non è recuperabile.

Ci si ferma quando l'obiettivo dell'utente è raggiunto.


## 5. Come lavorare

- **Con la tecnologia che c'è**: niente cambi di framework o di
  librerie. Se il progetto non ha framework, CSS puro.
- **Modifiche piccole e verificabili**, una sezione o un file alla
  volta, mostrate all'utente.
- **Prima di rinominare o cancellare una classe CSS**, cercala in
  tutti i file (HTML, CSS, JS): potrebbe servire altrove. *(mio)*
- **Prima di dire che "c'è un bug nel CSS"**, controlla se un altro
  file lo sovrascrive (con `@layer` il problema si riduce, vedi
  `tokens.css`). Nel browser: strumenti per sviluppatori → scheda
  "Calcolato" (Computed) mostra quale regola vince. *(dal template di
  Ivan)*
- **Screenshot prima e dopo** di ogni pagina toccata, a 375 e 1440px,
  per confrontare. *(dalle skill: Impeccable; mio)*
- **Niente codice commentato lasciato in giro**: si cancella (c'è la
  cronologia di Git per recuperarlo).


## 6. Sito pubblico: non perdere Google *(ricerca: Search Engine Land)*

Se il redesign cambia struttura o indirizzi:

- **Prima**: elenco di tutte le pagine attuali e di quelle che portano
  più visite (Google Search Console, se l'utente ce l'ha).
- **Ogni vecchio indirizzo** che cambia ha un **reindirizzamento 301**
  verso la nuova pagina equivalente (non tutti verso la home).
- **Si conservano** titoli delle pagine (`<title>`), descrizioni,
  struttura dei titoli (`h1`, `h2`) e link interni delle pagine
  importanti, salvo motivi precisi.
- **Al lancio**: togliere eventuali `noindex` rimasti dalla versione di
  prova, controllare i reindirizzamenti, statistiche e moduli di
  contatto, inviare la nuova mappa del sito (sitemap) a Google.
- **Dopo**: controllare le visite e le pagine non trovate per 1-3 mesi.


## 7. Prima di consegnare

- [ ] Rapporto di analisi mostrato all'utente prima di iniziare.
- [ ] Nulla della sezione 3 cambiato senza permesso.
- [ ] Nessuna funzione rotta: link, form, statistiche provati.
- [ ] Accessibilità non peggiorata (meglio: migliorata).
- [ ] Screenshot prima/dopo (e, se fatta, pagella prima/dopo).
- [ ] Se sito pubblico con URL cambiati: reindirizzamenti 301 pronti.
- [ ] `verifica.md` superata.


## Fonti della ricerca

- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT): design-review
- [Guida alla migrazione dei siti per la SEO](https://searchengineland.com/guide/ultimate-site-migration-seo-checklist) (Search Engine Land)
- [WebAIM Million 2026](https://www.accessibility.chat/articles/webaim-million-2026-same-six-failures-worse-numbers-tell-the-real-story)
