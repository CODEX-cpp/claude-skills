---
name: verifica-personal
description: Regola per non dichiarare mai un lavoro finito, corretto o funzionante senza averlo verificato davvero. Da usare ogni volta che si sta per dire "fatto", "funziona", "risolto", "sistemato" o simili, prima di consegnare un file o di passare al compito successivo.
---

# Prova prima di dire "fatto"

Tradotta e adattata da *verification-before-completion* di
[Superpowers](https://github.com/obra/superpowers) (Jesse Vincent,
licenza MIT, file `LICENSE` qui accanto). Le parti segnate *(mio)* sono
adattamenti per il lavoro di Ivan: siti in HTML, CSS e JavaScript puri,
script Python, file per l'ufficio.

**Principio: prima la prova, poi l'affermazione. Sempre.**


## La legge

```
NIENTE "FATTO" SENZA UNA PROVA APPENA ESEGUITA
```

Se il controllo non è stato eseguito **adesso**, in questo stesso
passaggio, non si può dire che funziona. Un controllo di prima, o "a
occhio", non vale.


## I cinque passi

Prima di dire che qualcosa è fatto, corretto o funziona:

1. **Individuare**: quale controllo dimostra questa affermazione?
2. **Eseguire**: il controllo completo, adesso.
3. **Leggere**: tutto il risultato, compresi errori e avvisi, contando
   quello che è fallito.
4. **Confrontare**: il risultato conferma l'affermazione?
   - **No**: dire come stanno davvero le cose, con la prova.
   - **Sì**: dire che funziona, **mostrando la prova**.
5. **Solo allora** affermarlo.

Saltare un passo non è verificare: è raccontare.


## Cosa serve come prova *(adattato)*

| Affermazione | Serve | Non basta |
| --- | --- | --- |
| "La pagina funziona" | Pagina aperta nel browser, console senza errori, screenshot | "Il codice sembra giusto" |
| "Su telefono va" | Prova a 375px (modalità dispositivo o telefono vero) | Averla vista solo su desktop |
| "Il bug è risolto" | Il caso di prova che prima falliva ora va (vedi `debug-personal`) | "Ho cambiato il codice" |
| "Il form invia" | Invio vero, con dati giusti e con dati sbagliati | Il bottone si vede |
| "Lo script funziona" | Script eseguito, risultato letto, file prodotto aperto | "Non dà errori" (ma il risultato non è stato guardato) |
| "Il file è pronto" (Excel, Word, PDF) | File aperto e ricontrollato: dati, formule, impaginazione | File salvato |
| "Contrasti a posto" | Rapporto misurato (script o strumento) | "Si legge bene" |
| "Tutto quello che era chiesto c'è" | Richiesta riletta, elenco punto per punto spuntato | "Ho fatto le parti principali" |
| "Il sottoagente ha finito" | Controllo dei file cambiati davvero | Il suo messaggio "fatto" |

Per i siti, la verifica completa è in `verifica.md` di ui-personal:
questa skill ne è la regola di fondo.


## Campanelli d'allarme: fermarsi

- Usare "dovrebbe", "probabilmente", "sembra".
- Esprimere soddisfazione prima di verificare ("Perfetto!", "Fatto!",
  "Ottimo!").
- Stare per consegnare un file o passare al compito dopo senza aver
  controllato.
- Fidarsi del resoconto di un altro (un sottoagente, uno strumento)
  senza guardare.
- Accontentarsi di una verifica parziale.
- Pensare "solo per questa volta".
- **Qualsiasi frase che fa intendere che funziona, senza aver
  controllato.**


## Scuse comuni

| Scusa | Realtà |
| --- | --- |
| "Ora dovrebbe andare" | Esegui la prova |
| "Sono sicuro" | La sicurezza non è una prova |
| "Solo per questa volta" | Nessuna eccezione |
| "Il validatore HTML dice ok" | Il validatore non apre la pagina nel browser |
| "Lo strumento ha detto fatto" | Controlla tu |
| "Una verifica parziale basta" | Una verifica parziale non dimostra niente |
| "Con altre parole la regola non vale" | Conta il senso, non le parole |


## Quando non si può verificare *(mio)*

A volte la prova non si può fare: manca un browser, manca un file vero,
serve il PC di Ivan, serve un account. Allora **lo si dice
chiaramente**, con cosa manca e come può controllare lui:

> "Non ho potuto aprire la pagina su un iPhone vero: l'ho provata solo
> nella modalità dispositivo di Chrome a 375px. Da controllare sul tuo
> telefono: il menu e il form."

Mai scrivere "verificato" per qualcosa che non lo è.


## Quando si applica

**Sempre prima di:**
- qualsiasi frase che dice o fa intendere che è finito, corretto o
  funzionante;
- consegnare un file;
- passare al compito o alla sezione successiva;
- dire a Ivan "puoi provarlo".

**Vale per:** le frasi esatte, i sinonimi, e tutto ciò che lascia
intendere un successo.


## Come si scrive la conferma *(mio)*

Una riga con **cosa** è stato controllato e **il risultato**, non un
aggettivo:

- No: "Fatto, il menu ora funziona perfettamente!"
- Sì: "Aperta la pagina a 375px: il menu si apre al clic, il focus va
  alla prima voce, console senza errori. Screenshot qui sotto."
