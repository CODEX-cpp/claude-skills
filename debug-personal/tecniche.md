# Tecniche di supporto al debug

Tradotte e adattate da *root-cause-tracing* e *defense-in-depth* di
[Superpowers](https://github.com/obra/superpowers) (licenza MIT). Gli
esempi originali erano in TypeScript su Node: qui sono sostituiti da
esempi per siti in JavaScript puro e script Python *(mio)*.


## 1. Risalire all'origine

Spesso l'errore **compare** lontano da dove **nasce**: un file salvato
nella cartella sbagliata, un totale sbagliato in fondo a un foglio, un
elemento della pagina senza testo. L'istinto è correggere dove si vede
l'errore, ma quello è il sintomo.

**Principio:** seguire la catena all'indietro fino al primo punto
sbagliato, e correggere lì.

**Quando serve:**
- l'errore compare in fondo a una sequenza di passaggi;
- la traccia dell'errore è lunga;
- non si capisce da dove arrivi il dato sbagliato.

### I passi

1. **Osservare il sintomo.**
   `TypeError: Cannot read properties of null (reading 'addEventListener')`
   in `js/menu.js`, riga 12.
2. **Trovare la causa immediata**: quale riga lo provoca?
   `bottone.addEventListener('click', apriMenu)`: `bottone` è `null`.
3. **Chiedersi chi l'ha passato**: da dove arriva `bottone`?
   `const bottone = document.querySelector('.menu-toggle')`.
4. **Continuare a risalire**: perché la ricerca non trova niente?
   - la classe nell'HTML è `.menu-btn`, non `.menu-toggle`? oppure
   - lo script è caricato nell'`<head>` senza `defer`, e parte prima
     che il bottone esista?
5. **Trovare l'origine vera**: lo script senza `defer`. Si corregge
   **lì** (aggiungendo `defer`), non aggiungendo un `if (bottone)` in
   `menu.js`, che nasconderebbe il problema senza risolverlo.

Esempio Python *(mio)*: un report esce con i totali a zero. Il sintomo
è nel file finale; risalendo si scopre che la funzione di somma riceve
una lista vuota, perché il filtro sulle date confronta con `==` un testo e una
data (`"2026-09-27" == date(2026, 9, 27)` dà sempre `False`) e scarta
tutto. Si corregge la
lettura delle date, non la somma.

### Quando non si riesce a risalire a mano

Si aggiunge un **segnale temporaneo** subito prima del punto
problematico, con un'etichetta chiara, per vedere valori e percorso:

```js
// DEBUG temporaneo: da togliere a problema risolto
console.error('DEBUG menu:', { bottone, stato: document.readyState });
console.trace('DEBUG menu: chi mi ha chiamato');
```

```python
# DEBUG temporaneo: da togliere a problema risolto
import traceback
print("DEBUG righe filtrate:", len(righe), righe[:3])
traceback.print_stack()
```

Poi si legge il risultato cercando l'etichetta `DEBUG`: quale file,
quale riga, sempre lo stesso punto o punti diversi? A problema risolto,
**tutti i segnali DEBUG si tolgono** (vedi `verifica.md` di
ui-personal: niente `console.log` dimenticati).


## 2. Difesa a strati

Quando la causa era un dato sbagliato, un solo controllo sembra
sufficiente. Ma un solo controllo si può aggirare: un'altra pagina che
usa la stessa funzione, una modifica futura, un file di dati diverso.

**Principio:** controllare il dato in **ogni** punto importante che
attraversa, così lo stesso errore diventa impossibile, non solo
corretto.

- Un controllo: "abbiamo corretto l'errore".
- Più strati: "abbiamo reso l'errore impossibile".

### I quattro strati

| Strato | Scopo | Esempio sito *(mio)* | Esempio Python *(mio)* |
| --- | --- | --- | --- |
| 1. All'ingresso | Rifiutare subito i dati chiaramente sbagliati | `required`, `type="email"`, `pattern` nei campi del form | Controllare che il file esista e abbia le colonne attese prima di leggerlo |
| 2. Nella logica | Controllare che il dato abbia senso per quell'operazione | Prima di calcolare il totale, verificare che le quantità siano numeri positivi | Prima di sommare, verificare che la lista non sia vuota e segnalarlo |
| 3. Protezioni di contesto | Impedire le operazioni pericolose in certe situazioni | Non inviare il form due volte (bottone bloccato durante l'invio) | Rifiutare di sovrascrivere il file originale: si scrive sempre un file nuovo |
| 4. Tracce | Lasciare indizi per quando gli altri strati non bastano | Un messaggio in console con il dato che ha fatto fallire | Un file di log con data, file letto, righe scartate e perché |

### Quando si usa

Dopo aver trovato e corretto la causa (fase 4 del debug), si chiede:
"in quali altri punti questo dato passa senza controllo?". Si
propongono a Ivan gli strati che mancano, **uno alla volta**, con il
motivo. Non si aggiungono controlli "per sicurezza" senza dirlo: ogni
controllo in più è codice in più da capire.
