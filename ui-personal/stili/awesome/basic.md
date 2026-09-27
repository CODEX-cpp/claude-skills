# Stile: Basic (stampa da libro e report)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "basic" di Awesome Design (licenza MIT), riscritto:
l'originale parlava del "linguaggio visivo di libri, riviste e
report", con griglie editoriali, ma usava un viola `#A855F7` (testo
bianco sopra 4.0:1) e Nunito + Oswald, poco "da libro". Tenuto il blu
notte `#0A1829` come colore del testo. Legenda: *(ricerca: …)* =
fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**La sobrietà di un buon report.** Griglia rigorosa, gerarchie
chiare, numeri e tabelle curate, un solo colore di servizio. Nessun
effetto: la qualità sta nella tipografia e nell'ordine.

**Adatto a**: bilanci e report annuali, documentazione, enti, studi
professionali, ricerche, pubblicazioni scaricabili.
**Poco adatto a**: marchi giovani e giocosi, campagne.

**Differenza con i vicini** *(mio)*:
- **editorial**: rivista, gerarchie forti, foto grandi; basic è più
  report, dati e tabelle.
- **professional** e **corporate**: interfacce aziendali; basic è
  impaginazione di contenuti.
- **minimal** (stile principale): toglie tutto; basic mantiene gli
  strumenti della stampa (note, indici, numerazioni).


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile basic |
| --- | --- |
| Griglia a scelta | **Griglia di impaginazione** fissa (12 colonne, margini da libro) |
| Decorazioni ridotte | **Nessuna decorazione**: solo filetti, numeri, spazio |
| Un solo accento | Uno: blu petrolio; un secondo rosso solo per i dati negativi |


## 3. Tipografia

- Una famiglia con serif e sans abbinati, o un solo sans molto
  completo (con corsivo, maiuscoletto, numeri tabellari).
- Testo 17-18px, interlinea 1.55; titoli moderati (non enormi).
- Numerazione di sezioni (1, 1.1, 1.2) e note a piè di pagina
  collegate (`<a href="#nota-1">` con ritorno).
- Direzioni possibili *(mio, da verificare)*: Source Serif 4 + Source
  Sans 3, IBM Plex Serif + IBM Plex Sans, Libre Franklin. **Niente
  lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f4f4f1` | |
| `--text` | `#0a1829` | blu notte dall'originale: 17.9:1 |
| `--text-muted` | `#4f5b6b` | 6.9:1 |
| `--border-control` | `#858d99` | 3.35:1 (3.04 su `--surface`) |
| `--accent` | `#0d5c63` | blu petrolio: 7.7:1; testo bianco sopra 7.7:1 |
| Rosso dati | `#b3261e` | 6.5:1, solo per valori negativi (con segno "−", mai solo colore) |


## 5. Layout

- Colonna di lettura più una colonna stretta per note, indice o
  numeri chiave.
- Indice della pagina (sommario) all'inizio per documenti lunghi.
- Tabelle a tutta larghezza della colonna, con scorrimento
  orizzontale su telefono (`overflow-x: auto` sul contenitore, con
  `tabindex="0"` e un'etichetta).


## 6. Componenti

- Tabelle curate: numeri allineati a destra e tabellari, intestazioni
  `<th scope>`, righe separate da filetti sottili, niente zebre forti.
- Grafici sobri nel petrolio e nei grigi (vedi sezione 10 del
  `tokens.css`), sempre con titolo e fonte.
- Bottoni semplici, angoli 2-4px; "Scarica il PDF" con peso e formato
  del file.


## 7. Movimento

Livello "nessuna".


## 8. Immagini

Poche, funzionali: grafici, foto documentarie con didascalia. Niente
foto decorative.


## 9. Trappole

- Sembrare vuoto o "non finito": serve cura tipografica vera.
- Tabelle convertite in immagini o in `<div>`.
- Rosso e verde come unico segnale nei dati.


## 10. Controllo dello stile

- [ ] Tabelle vere, numeri tabellari allineati.
- [ ] Note e indice collegati e navigabili da tastiera.
- [ ] Un solo colore di servizio.


## Fonti

- [Tabelle accessibili](https://www.w3.org/WAI/tutorials/tables/) (W3C WAI)
- [font-variant-numeric](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric) (MDN)
- Stile "basic" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
