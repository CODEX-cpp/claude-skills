---
name: rapportino
description: Scrive il rapportino di lavoro a partire dalla chat in corso, nello stile salvato dell'utente. Usalo SEMPRE quando l'utente nomina un rapportino da scrivere o correggere ("fammi il rapportino", "puoi farmi il rapportino", "rapportino dei tentativi", "serve il rapportino", "report della giornata", "più generico", "meno tecnico"). Chiede quale parte della chat includere (tutta, mattina, pomeriggio, da un punto, fascia oraria) usando gli orari reali dei messaggi.
---

# Rapportino

Genera il rapportino dalla chat attuale. Stile e regole stanno in `~/.claude/rapportini/` e restano salvati tra le chat: l'utente non deve incollare nulla.

## Regole che non si perdono mai

Valgono per il primo testo e per OGNI riscrittura ("più generico", "più breve", "meno tecnico" cambiano solo il livello di dettaglio, mai queste regole):

1. Prima riga: solo il nome del cliente (chiederlo se manca).
2. Testo semplice: niente titoli ("Problema", "Verifiche", "Conclusione", "Esito", "Rapporto ..."), niente riga con la data, niente riga con la macchina o il sistema ("PC: ...", "Windows 11", "SSD: ..."), niente schede, niente elenchi puntati, niente grassetto. Nessuna informazione che l'utente non ha chiesto: la data e i dati della macchina non si scrivono mai di propria iniziativa. Il nome del PC compare solo dentro una frase quando serve a capire ("Ripristino avvio sul PC di ...").
3. Impersonale: frasi al participio passato, senza soggetto ("Verificato...", "Eseguita...", "Controllati..."). Mai "ho", "abbiamo", "è stato".
4. Niente congiunzioni tra azioni ("quindi", "perciò", "perché", "e poi", "dunque"): si spezza in due righe. Una riga = un fatto.
5. Livello semplice: cosa è stato controllato e con che esito. Niente modelli di dischi, capacità, byte, ore di accensione, comandi o elenchi di strumenti, salvo la causa o l'esito.
6. Ultima riga: lo stato finale come fatto ("PC portato in laboratorio."), senza commenti.

Prima di rispondere, ricontrolla il testo riga per riga contro queste sei regole e correggilo.

## 1. Prepara lo stile

Leggi `~/.claude/rapportini/stile.md`: contiene l'analisi dello stile dell'utente (struttura, verbi, punteggiatura, livello di dettaglio, formule). Non esistono rapportini di esempio da rileggere, ricava lo stile solo da queste regole.

- Se la cartella o il file mancano, creali con regole minime: nome del cliente sulla prima riga; frasi brevi al participio passato, senza soggetto e senza congiunzioni inutili; una attività per riga; solo ciò che è stato fatto e l'esito, mai istruzioni per riapplicare la soluzione; testo semplice senza markdown.

## 2. Capisci cosa c'è nella chat

Esegui lo script (percorso relativo a questa skill, cartella base indicata all'attivazione):

```
python "<cartella-base>/scripts/extract.py" outline
```

Elenca i messaggi numerati con data e ora, divisi in blocchi (nuovo blocco dopo 45 minuti di pausa o cambio giorno).

Lo script unisce da solo la chat più recente con le sessioni precedenti della stessa cartella che la precedono di meno di 24 ore (una chat ripresa in un'altra sessione) e toglie i doppioni. Ogni riga riporta tra parentesi quadre la sessione di provenienza. Se vedi più sessioni con argomenti chiaramente diversi (altra chat nella stessa cartella), chiedi all'utente se includerle tutte o solo una; per una sola usa `--session <prime-8-lettere>` anche nel comando `show`.

## 3. Chiedi il periodo

Con AskUserQuestion proponi solo opzioni sensate in base all'outline:

- Tutta la chat (predefinita se c'è un solo giorno e un solo argomento).
- Solo oggi: mattina (prima delle 13) / pomeriggio (dalle 13), solo se esistono messaggi in quella parte.
- Da un punto preciso: indica il numero del messaggio o l'argomento.
- Fascia oraria personalizzata (l'utente scrive per esempio "13-15"). Va bene anche un altro giorno.

Mostra per ogni opzione l'intervallo di orari e quanti messaggi contiene. Non chiedere nulla se l'utente ha già detto il periodo.

Cliente: il rapportino deve sempre aprirsi con il nome del cliente. Se non risulta chiaramente dalla chat né dal messaggio dell'utente, chiedilo nella stessa domanda del periodo (domanda separata, risposta libera). Lo si omette solo se l'utente dice espressamente di non metterlo.

## 4. Estrai e scrivi

```
python "<cartella-base>/scripts/extract.py" show [--day today|AAAA-MM-GG] [--part morning|afternoon] [--from HH:MM] [--to HH:MM] [--from-n N] [--to-n N]
```

Leggi l'estratto, ignora tutto fuori dal periodo scelto, scrivi il rapportino seguendo `stile.md`, con il nome del cliente sulla prima riga. Rispondi solo con il rapportino, senza introduzione né commento finale.

## 5. Impara dalle correzioni

Se l'utente corregge ("più generico", "meno congiunzioni", "non è un tutorial"), riscrivi e poi aggiungi la regola in fondo alla sezione 9 di `stile.md`: una riga breve e generale, non legata al caso. Non duplicare regole già presenti.
