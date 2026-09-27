# Stile: Professional (affidabile, da impresa)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "professional" di Awesome Design (licenza MIT),
riscritto: l'originale era un esempio per un negozio di elettronica
("Electronics shop") con giallo e nero e font Poppins. Qui è uno stile
generico per aziende e professionisti.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Ispirare fiducia.** Ordine, chiarezza, informazioni complete e
facili da trovare, un aspetto serio ma non freddo. Il visitatore deve
pensare: "questi sono seri e sanno quello che fanno".

**Adatto a**: aziende B2B, consulenti, commercialisti, studi tecnici,
assicurazioni, industria, siti istituzionali.
**Poco adatto a**: prodotti di consumo "divertenti", moda.

**Differenza con i vicini** *(mio)*:
- **corporate**: per grandi aziende con molte sezioni e un marchio da
  rispettare; professional è per aziende medie e professionisti.
- **clean**: più neutro e da applicazione; professional ha più
  attenzione ai segnali di fiducia.

**Dalla ricerca** *(ricerca: NN/g)*, i 4 elementi che creano fiducia:
1. **Qualità del design**: niente errori di battitura, link rotti,
   immagini sgranate.
2. **Trasparenza**: contatti, prezzi o come si ottengono, condizioni,
   ben visibili, **senza obbligare a compilare moduli** per saperli.
3. **Contenuti completi, corretti e aggiornati**, che mostrano anche
   il processo e le persone, non solo il risultato.
4. **Collegamenti col resto del web**: recensioni su siti esterni,
   profili, articoli (più credibili delle testimonianze sul sito).


## 2. Cosa cambia rispetto alle regole base

Nessuna eccezione di gusto: questo stile applica le regole base con
una palette e dei contenuti orientati alla fiducia.


## 3. Tipografia

- Un sans solido e molto leggibile, eventualmente un serif per i titoli
  se l'azienda ha una lunga storia.
- Direzioni possibili *(mio, da verificare)*: Source Sans 3 (+ Source
  Serif 4), Public Sans, IBM Plex Sans. **Niente lista nera.**
- Titoli descrittivi, non creativi. Testo 16-17px.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f3f5f8` | |
| `--text` | `#17202b` | 16.4:1 |
| `--text-muted` | `#526072` | 6.4:1 |
| `--border-control` | `#798799` | 3.4:1 anche su `--surface` |
| `--accent` | `#12467f` | blu profondo, 9.5:1; testo bianco sopra 9.5:1 |

- Se l'azienda ha un colore di marchio, quello diventa l'accento (con
  contrasto verificato).


## 5. Layout

- Struttura chiara e convenzionale: chi siamo, cosa facciamo, come
  lavoriamo, casi reali, contatti.
- **Contatti visibili in ogni pagina** (in alto o nel footer, sempre
  nello stesso posto).
- Pagine di servizio con: cosa è, per chi è, come funziona, quanto
  costa o come si chiede un preventivo, domande frequenti.


## 6. Componenti

- Bottoni rettangolari con angoli 4-6px; un'azione principale chiara
  ("Richiedi un preventivo").
- Moduli di contatto brevi (nome, email, messaggio) con conferma
  chiara dopo l'invio.
- Loghi di clienti veri (con permesso), certificazioni reali,
  collegamenti a recensioni esterne.
- Schede del team con foto vere e ruolo.


## 7. Movimento

Livello "nessuna" o "misurata".


## 8. Immagini

**Persone vere dell'azienda**, luoghi di lavoro veri, prodotti veri.
Mai strette di mano e sorrisi di stock: sono le immagini che le persone
ignorano del tutto (vedi `immagini.md`).


## 9. Trappole

- Frasi vuote da azienda ("soluzioni a 360 gradi", "eccellenza"):
  vedi `testi.md`.
- Nascondere prezzi e contatti dietro un modulo.
- Testimonianze inventate o non verificabili.


## 10. Controllo dello stile

- [ ] Contatti trovabili in 5 secondi da qualsiasi pagina.
- [ ] Nessun errore di battitura, nessun link rotto.
- [ ] Solo persone, clienti e numeri veri.


## Fonti

- [Design che ispira fiducia](https://www.nngroup.com/articles/trustworthy-design/) (Nielsen Norman Group)
- Stile "professional" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
