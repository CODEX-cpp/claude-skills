---
name: debug-personal
description: Metodo per correggere errori trovando prima la causa vera. Da usare ogni volta che qualcosa non funziona o si comporta in modo inatteso (errore, bug, pagina che si vede male, script che si blocca, risultato sbagliato, lentezza), PRIMA di proporre qualsiasi correzione.
---

# Debug con metodo

Da usare davanti a **qualsiasi** problema tecnico: un errore nella
console, un CSS che non si applica, un menu che non si apre, uno script
Python che si ferma, un risultato sbagliato, una pagina lenta.

Tradotta e adattata da *systematic-debugging* di
[Superpowers](https://github.com/obra/superpowers) (Jesse Vincent,
licenza MIT, file `LICENSE` qui accanto). Le parti segnate *(mio)* sono
adattamenti per il modo di lavorare di Ivan: siti in HTML, CSS e
JavaScript puri, script Python, nessun framework di test.


## La legge

```
NIENTE CORREZIONI SENZA AVER TROVATO LA CAUSA
```

Correggere il sintomo è un fallimento: il problema torna, oppure se ne
crea un altro altrove. Finché la fase 1 non è finita, **non si propone
nessuna correzione**.

Vale **soprattutto** quando:
- c'è fretta (le emergenze spingono a tirare a indovinare);
- la correzione "sembra ovvia";
- si è già provata qualche correzione che non ha funzionato;
- non si capisce del tutto il problema.

Non si salta neanche quando il problema sembra semplice: anche i
problemi semplici hanno una causa, e con il metodo si trova in fretta.


## Le quattro fasi

Ogni fase va finita prima di passare alla successiva.

### Fase 1: trovare la causa

1. **Leggere l'errore per intero.** Non saltare errori e avvisi: spesso
   contengono già la soluzione. Leggere tutta la traccia (in Python il
   *traceback*, nel browser lo stack nella console), annotare file,
   riga, codice dell'errore.
2. **Riprodurlo in modo affidabile.** Quali sono i passi esatti? Succede
   ogni volta? Su quale browser, a quale larghezza, con quali dati? Se
   non si riesce a riprodurlo, si raccolgono altri dati: **non si tira
   a indovinare**.
3. **Guardare cosa è cambiato di recente**: file modificati, righe
   aggiunte, una libreria o un font nuovo, un'impostazione diversa, un
   altro PC o un altro browser.
4. **Raccogliere prove dove i pezzi si passano i dati.** Quando il
   problema attraversa più parti (HTML → CSS → JavaScript, oppure
   modulo → foglio Excel → script), si controlla **cosa entra e cosa
   esce** a ogni passaggio, una volta sola, per capire **dove** si
   rompe. Poi si indaga solo quel pezzo.
5. **Risalire all'origine del dato sbagliato**: da dove viene il valore
   errato? Chi l'ha passato? Si risale finché si trova la fonte, e si
   corregge lì, non dove si vede il sintomo. Tecnica completa in
   `tecniche.md`, sezione 1.

**Strumenti per i siti** *(mio)*, negli strumenti per sviluppatori del
browser (F12):
- **Console**: errori JavaScript con file e riga.
- **Elementi → Calcolato** (Computed): quale regola CSS vince davvero e
  da quale file arriva. È la prima cosa da guardare quando "il CSS non
  funziona" (spesso un'altra regola lo sovrascrive, o manca il
  `@layer` giusto).
- **Rete** (Network): file che non si caricano (errori 404), font o
  immagini mancanti, file lenti.
- **Modalità dispositivo**: per riprodurre i problemi del telefono.

**Strumenti per Python** *(mio)*: il traceback si legge **dal basso**
(l'ultima riga è l'errore, quelle sopra il percorso per arrivarci);
`print()` temporanei con etichetta chiara prima e dopo il punto
sospetto, da togliere a fine lavoro.

### Fase 2: cercare lo schema

1. **Trovare un esempio che funziona**, simile a quello rotto, nello
   stesso progetto (un'altra pagina con lo stesso menu, un altro script
   che legge lo stesso file).
2. **Leggere il riferimento per intero**, se si sta applicando uno
   schema o un esempio: ogni riga, non a colpo d'occhio.
3. **Elencare tutte le differenze** tra ciò che funziona e ciò che è
   rotto, anche le più piccole. Mai "questa non può contare".
4. **Capire le dipendenze**: di cosa ha bisogno il pezzo rotto? Quali
   file, impostazioni, ordine di caricamento, dati?

### Fase 3: un'ipotesi alla volta

1. **Formulare una sola ipotesi**, scritta chiaramente: "Penso che la
   causa sia X perché Y". Specifica, non vaga.
   *(mio)* L'ipotesi si scrive anche **a Ivan**, in una riga, prima di
   toccare il codice: così vede il ragionamento e può correggerlo.
2. **Provarla con la modifica più piccola possibile**: una variabile
   alla volta, mai più cose insieme.
3. **Verificare prima di continuare**: ha funzionato? Si passa alla
   fase 4. Non ha funzionato? **Nuova ipotesi**, senza aggiungere altre
   correzioni sopra la prima (la prima si annulla).
4. **Quando non si sa, lo si dice**: "Non capisco X". Non si finge di
   sapere. Si chiede o si cerca ancora.

### Fase 4: correggere la causa

1. **Preparare un caso di prova minimo** *(adattato)*: il modo più
   semplice per far comparire il problema. Per un sito, una pagina o
   una sequenza di passi precisa ("apri a 375px, clicca il menu");
   per Python, un piccolo input che fa sbagliare lo script. Serve
   **prima** di correggere, per poter dimostrare dopo che è risolto.
2. **Una sola correzione**, sulla causa trovata. Niente "già che ci
   sono sistemo anche questo", niente riordini del codice nella stessa
   modifica.
3. **Verificare la correzione**: il caso di prova ora va? Il resto
   funziona ancora? Il problema originale è davvero sparito? Prima di
   dire "risolto" si usa la skill **`verifica-personal`**.
4. **Se la correzione non funziona: fermarsi.** Contare i tentativi:
   - meno di 3: si torna alla fase 1 con le informazioni nuove;
   - **3 o più: stop**, si mette in discussione l'impostazione (punto 5).
     Non si prova la quarta correzione senza averne parlato con Ivan.
5. **Dopo 3 correzioni fallite, il problema è nell'impostazione**, non
   nell'ipotesi. Segnali tipici: ogni correzione fa comparire un
   problema nuovo in un altro punto; per correggere servirebbe
   rifare mezzo progetto. Domande da porre a Ivan: l'impostazione è
   giusta? La stiamo tenendo solo per abitudine? Conviene cambiarla
   invece di continuare a mettere toppe?


## Campanelli d'allarme: fermarsi e tornare alla fase 1

Se si sta pensando una di queste cose:
- "Correzione veloce ora, indago dopo."
- "Provo a cambiare X e vedo se va."
- "Faccio più modifiche insieme e riprovo."
- "Salto la prova, controllo a occhio."
- "Probabilmente è X, lo sistemo."
- "Non capisco del tutto, ma forse così funziona."
- "L'esempio fa così, ma io lo adatto diversamente."
- Un elenco di correzioni prima di aver indagato.
- **"Ancora un tentativo"** dopo averne già fatti 2.
- Ogni correzione rivela un problema nuovo altrove.

**Tutti significano: stop, si torna alla fase 1.**

### Segnali da Ivan che il metodo non viene seguito

- "Ma succede davvero?": si è dato per scontato senza verificare.
- "Ma così si vede se…?": servivano prove, non ipotesi.
- "Smetti di tirare a indovinare": si propongono correzioni senza aver
  capito.
- "Siamo bloccati?": l'approccio non funziona; si torna alle basi.

In tutti questi casi: stop, fase 1.


## Scuse comuni

| Scusa | Realtà |
| --- | --- |
| "È semplice, non serve il metodo" | Anche i problemi semplici hanno una causa; col metodo si trova in fretta |
| "È urgente, non c'è tempo" | Il metodo è più veloce del provare a caso |
| "Provo questa, poi indago" | La prima correzione decide la strada: meglio partire bene |
| "Più correzioni insieme fanno prima" | Poi non si sa quale ha funzionato, e ne nascono di nuovi |
| "L'esempio è lungo, lo adatto" | Capirlo a metà garantisce errori: si legge tutto |
| "Vedo il problema, lo sistemo" | Vedere il sintomo non è capire la causa |
| "Ancora un tentativo" (dopo 2 falliti) | 3 fallimenti = problema di impostazione |


## Riepilogo

| Fase | Cosa si fa | Finita quando |
| --- | --- | --- |
| 1. Causa | Leggere l'errore, riprodurre, guardare i cambiamenti, raccogliere prove | Si sa **cosa** succede e **perché** |
| 2. Schema | Trovare un esempio che funziona, confrontare | Si conoscono le differenze |
| 3. Ipotesi | Una teoria, una prova minima | Ipotesi confermata, o una nuova |
| 4. Correzione | Caso di prova, una correzione, verifica | Problema risolto e dimostrato |


## Quando la causa "non c'è"

Se l'indagine completa mostra che il problema dipende davvero
dall'esterno (la rete, un servizio di terzi, un browser particolare, i
tempi):
1. il metodo è stato seguito;
2. si scrive cosa si è indagato;
3. si gestisce il caso (un messaggio d'errore chiaro, un nuovo
   tentativo, un'alternativa);
4. si lascia una traccia utile per la prossima volta (un messaggio in
   console, una nota nel codice).

**Ma**: il 95% dei casi "senza causa" sono indagini non finite.


## Resoconto a Ivan *(mio)*

A problema risolto, in poche righe:
1. **Il sintomo** (cosa si vedeva).
2. **La causa vera** (perché succedeva), spiegata senza gergo.
3. **La correzione** (cosa è cambiato, in quale file).
4. **La prova** che ora funziona (vedi `verifica-personal`).
5. Se serve: come evitare che ricapiti (vedi `tecniche.md`, sezione 2).


## Tecniche di supporto

In `tecniche.md`:
1. **Risalire all'origine**: seguire il dato sbagliato all'indietro
   fino a dove nasce.
2. **Difesa a strati**: dopo aver trovato la causa, controlli in più
   punti perché lo stesso errore non possa ripresentarsi.
