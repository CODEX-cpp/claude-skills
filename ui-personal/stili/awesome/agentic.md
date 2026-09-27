# Stile: Agentic (interfaccia conversazionale con l'AI)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "agentic" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("interazione conversazionale, risultati
chiari, pochi controlli: l'utente delega i compiti all'AI"). Tenuto il
fondo `#F6F6F1`; l'arancio `#FF5701` col testo bianco fa 3.17:1:
scurito. Playfair Display tenuto solo per i titoli. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Chiedi, e il sistema fa.** Al centro c'è un campo in cui scrivere
cosa si vuole; intorno, suggerimenti pronti, i risultati come schede
chiare, lo stato dei compiti in corso (in attesa, in lavorazione,
fatto) e poche azioni per approvare o correggere.

**Adatto a**: assistenti AI, chatbot di supporto, strumenti che
automatizzano compiti, ricerca interna, prenotazioni conversazionali.
**Poco adatto a**: siti vetrina, contenuti editoriali.

**Differenza con i vicini** *(mio)*:
- **enterprise**: dashboard con tanti dati e controlli; agentic ne
  mostra pochi e delega.
- **levels**: porta a un'azione (acquisto, iscrizione); agentic porta a
  una conversazione.
- **minimal** (stile principale): sobrio in generale; agentic è
  sobrio **attorno al campo di richiesta**.

**Dalla ricerca** *(ricerca: NN/g)*, per chatbot e assistenti:
- **un solo** punto d'accesso alla chat, sempre raggiungibile;
- dire subito **cosa sa fare** (messaggio iniziale e suggerimenti);
- suggerimenti come **bottoni cliccabili**, non testo da ricopiare;
- **niente scorrimento automatico** in fondo mentre arriva la
  risposta: l'utente resta all'inizio del messaggio;
- risposte lunghe con **dettagli espandibili**;
- finestra ridimensionabile; possibilità di **salvare o condividere**;
- input vocale come alternativa.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile agentic |
| --- | --- |
| Navigazione classica | **Campo di richiesta** come elemento principale della pagina |
| Tanti controlli visibili | **Pochi controlli**; le opzioni avanzate si aprono su richiesta |
| Font display solo se giustificato | Serif elegante per il saluto e i titoli (Playfair dall'originale) |


## 3. Tipografia

- Titoli e saluto: serif elegante (Playfair Display, Newsreader).
- Conversazione e interfaccia: sans leggibile 16-17px.
- Codice e dati: mono.
- Direzioni possibili *(mio, da verificare)*: sans Figtree, Onest,
  Source Sans 3. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f6f6f1` | dall'originale |
| `--surface` | `#ffffff` | |
| `--text` | `#161616` | 16.7:1 |
| `--text-muted` | `#55554f` | 6.9:1 |
| `--border-control` | `#87877f` | 3.34:1 |
| `--accent` | `#c03f00` | arancio scuro: 4.9:1; testo bianco sopra 5.3:1 |


## 5. Layout

- Pagina iniziale: saluto, campo di richiesta grande al centro,
  3-6 suggerimenti sotto.
- Conversazione: colonna di 65-75ch, messaggi dell'utente e del sistema
  ben distinti (allineamento **e** fondo, non solo colore).
- Pannello laterale (apribile) per compiti in corso e cronologia.


## 6. Componenti

- Campo di richiesta: `<textarea>` con etichetta vera, cresce con il
  testo, invio con Invio e a capo con Maiusc+Invio (scritto accanto).
- Messaggi nuovi annunciati con `aria-live="polite"` **una volta
  completi**, non parola per parola.
- Stato dei compiti: icona **e** testo ("In lavorazione", "Fatto",
  "Serve la tua conferma").
- Azioni che modificano dati (inviare, pagare, cancellare): sempre
  **conferma esplicita** dell'utente, con riepilogo.
- Bottoni "Copia", "Rigenera", "Interrompi" sempre raggiungibili da
  tastiera.


## 7. Movimento

Livello "misurata": indicatore di "sta scrivendo" discreto, testo che
arriva senza spostare la pagina. Con "Riduci movimento" niente effetto
macchina da scrivere.


## 8. Immagini

Poche; nei risultati, immagini dei prodotti o documenti quando
servono (NN/g: meglio che solo testo).


## 9. Trappole

- Scorrimento automatico in fondo durante la risposta.
- Il sistema che agisce senza conferma su azioni importanti.
- Nessuna indicazione di cosa l'assistente sa fare.
- Lettori di schermo sommersi da annunci parola per parola.


## 10. Controllo dello stile

- [ ] Suggerimenti come bottoni.
- [ ] Niente scorrimento automatico; annunci solo a messaggio completo.
- [ ] Conferma esplicita per azioni importanti.


## Fonti

- [10 linee guida per i chatbot AI dei siti](https://www.nngroup.com/articles/ai-chatbots-design-guidelines/) (Nielsen Norman Group)
- [Suggerimenti di prompt](https://www.nngroup.com/articles/prompt-suggestions/) (Nielsen Norman Group)
- [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) (MDN)
- Stile "agentic" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
