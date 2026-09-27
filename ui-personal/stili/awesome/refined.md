# Stile: Refined (sobrio ed elegante, con serif)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "refined" di Awesome Design (licenza MIT), riscritto:
il file originale aveva solo "Refined design style" come descrizione,
Playfair Display ovunque e la palette blu/viola generica.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Eleganza discreta**: un serif curato per i titoli, un sans pulito
per il testo, colori quasi assenti, dettagli tipografici fatti bene.
Sembra uno studio professionale di livello o una casa editrice.

**Adatto a**: studi legali e notarili, architetti, gallerie, cantine,
alberghi, editoria, professionisti di fascia alta.
**Poco adatto a**: prodotti tecnologici, pubblico giovane, gestionali.

**Differenza con i vicini** *(mio)*:
- **soft**: più morbido e "da agenzia", con sans e arrotondamenti;
  refined è più classico, con serif e angoli vivi.
- **editorial**: pensato per contenuti lunghi da rivista; refined per
  siti di presentazione.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile refined |
| --- | --- |
| Serif solo per progetti editoriali o di lusso | **Serif per i titoli**, per definizione (il motivo va comunque scritto nel mini-piano) |
| Arrotondamenti a scelta | **Zero o quasi** (0-2px) |
| Ombre minime | Nessuna ombra |


## 3. Tipografia

- **Titoli in serif** con un buon contrasto tra tratti spessi e
  sottili, peso normale (400), **mai in corsivo grande nell'hero**
  (regola base).
- **Testo in sans** sobrio, 16-17px.
- Direzioni possibili *(mio, da verificare)*: titoli Libre Caslon
  Display, EB Garamond, Cormorant; testo Figtree, Albert Sans.
  **Niente font della lista nera** (l'originale usava Playfair
  Display, abusato nelle pagine generate).
- Dettagli tipografici curati: virgolette « », maiuscoletto vero se il
  font lo ha, numeri "old style" nel testo se disponibili.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f3f3f1` | grigio pietra chiaro (non crema) |
| `--surface` | `#ffffff` | |
| `--text` | `#1e1e1c` | 15.0:1 |
| `--text-muted` | `#5d5c57` | 6.0:1 |
| `--border-control` | `#86857f` | 3.3:1 |
| `--accent` | `#5c2a35` | bordeaux scuro, 10.3:1; testo bianco sopra 11.4:1 |

- L'accento compare pochissimo: link, un bottone, un filetto.
- **Niente crema + terracotta/ottone**: è proprio il default da evitare
  (vedi `colore.md`).


## 5. Layout

- Molto spazio bianco, allineamenti rigorosi, griglia classica.
- **Filetti sottili** (linee di 1px) per separare, al posto dei
  riquadri.
- Testo corrente in una colonna di lettura stretta.


## 6. Componenti

- Bottoni rettangolari, sottili: bordo scuro o pieno scuro, testo in
  sans medio. Niente pillole.
- Link sottolineati con sottolineatura sottile e distanziata.
- Campi minimali con bordo visibile (3:1).


## 7. Movimento

Livello "nessuna" o "misurata": dissolvenze lente e brevi, nulla che
si sposti molto.


## 8. Immagini

Foto di grande qualità, luce naturale, composizioni pulite; bianco e
nero ammesso se coerente in tutto il sito.


## 9. Trappole

- Serif piccolo e sottile per il testo corrente: si legge male sullo
  schermo.
- Grigi "eleganti" sotto 4.5:1.
- Diventare "polveroso": serve comunque un'azione principale chiara.


## 10. Controllo dello stile

- [ ] Serif solo nei titoli, testo in sans leggibile.
- [ ] Nessun font della lista nera, nessun titolo hero in corsivo.
- [ ] Accento rarissimo, niente crema.


## Fonti

- [Practical Typography](https://practicaltypography.com/summary-of-key-rules.html) (Matthew Butterick)
- Stile "refined" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
