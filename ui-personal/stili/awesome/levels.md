# Stile: Levels (pagina che converte)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "levels" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("togliere attrito, costruire fiducia,
guidare verso un'azione precisa con chiarezza, psicologia e
velocità"); tenuto il grigio antracite `#27272A`; tolti Inter e il
viola. È più un **metodo** che un aspetto: si può combinare con
un'altra palette. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Una pagina, un obiettivo.** Tutto porta a una sola azione
(acquistare, iscriversi, prenotare): titolo che dice il beneficio,
prova sociale vera, obiezioni risolte, azione ripetuta nei punti
giusti, moduli brevissimi, pagina velocissima.

**Adatto a**: landing page di prodotti, corsi, eventi, abbonamenti,
raccolta contatti, prove gratuite.
**Poco adatto a**: siti con molti obiettivi, contenuti da esplorare.

**Differenza con i vicini** *(mio)*:
- **agentic**: porta a una conversazione; levels a un'azione.
- **corporate**: presenta l'azienda; levels vende una cosa.
- **premium**: fa desiderare; levels fa decidere.

**Dalla ricerca** *(ricerca: Baymard)*: nei checkout la media è
**11.3 campi**, l'ideale circa **8**; il **17%** di chi abbandona lo fa
per la complessità. Conta il **numero di campi** più del numero di
passaggi. Trucchi semplici poco usati: un solo campo "Nome e cognome",
"Indirizzo riga 2" e "Codice sconto" nascosti dietro un link,
indirizzo di fatturazione uguale a quello di spedizione di default,
account creato **dopo** l'acquisto.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile levels |
| --- | --- |
| Navigazione completa | **Navigazione ridotta** (o assente) sulla landing: niente uscite |
| Più azioni per sezione | **Una sola azione** principale, ripetuta (dopo l'hero, a metà, in fondo) |
| Moduli a scelta | **Moduli minimi**: solo i campi indispensabili |


## 3. Tipografia

- Sans chiaro e deciso; titolo grande con il beneficio, non lo slogan.
- Direzioni possibili *(mio, da verificare)*: Figtree, Public Sans,
  Onest. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f5f5f4` | |
| `--text` | `#18181b` | 17.7:1 |
| `--text-muted` | `#52525b` | 7.7:1 |
| `--border-control` | `#82828b` | 3.81:1 |
| `--accent` | `#27272a` | antracite dall'originale: bottoni con testo bianco 14.9:1 |

- L'azione principale è **l'unico** elemento pieno della pagina: si
  trova senza cercarla. Se il marchio ha un colore, si usa quello
  (verificato).


## 5. Layout

Ordine tipico *(mio, basato su pratiche comuni di landing)*:
1. Hero: beneficio in una frase, sottotitolo, azione, prova
   (valutazione o numero di clienti **veri**).
2. Problema e soluzione.
3. Come funziona (3 passaggi).
4. Prove: recensioni con nome e foto veri, loghi di clienti (con
   permesso).
5. Prezzi chiari, cosa è incluso.
6. Domande frequenti (le obiezioni) con `<details>`.
7. Azione finale.


## 6. Componenti

- Bottone principale grande, testo che dice cosa succede ("Inizia la
  prova di 14 giorni"), non "Invia".
- Rassicurazioni vicino al bottone (niente carta richiesta,
  disdetta quando vuoi) **solo se vere**.
- Moduli con `autocomplete` giusti, errori chiari, nessun campo
  facoltativo inutile.


## 7. Movimento

Livello "nessuna" o "misurata": la velocità vale più di ogni effetto.
Core Web Vitals nei limiti (vedi `verifica.md`).


## 8. Immagini

Il prodotto in uso, persone vere; una sola immagine nell'hero,
ottimizzata e con `fetchpriority="high"`.


## 9. Trappole

- **Tecniche scorrette**: conti alla rovescia finti, "solo 2 rimasti"
  falsi, recensioni inventate, costi nascosti fino all'ultimo passo.
  Sono "dark pattern": nell'UE ricadono tra le pratiche commerciali
  scorrette (direttiva 2005/29/CE) e, per le piattaforme online, nel
  divieto dell'art. 25 del Digital Services Act. Non sono consulenza
  legale: in caso di dubbio, sentire un esperto.
- Troppe azioni diverse.
- Moduli lunghi.


## 10. Controllo dello stile

- [ ] Un'azione, ripetuta; unico elemento pieno.
- [ ] Nessuna urgenza o prova sociale inventata.
- [ ] Modulo con il minimo di campi.
- [ ] Pagina veloce (LCP ≤ 2.5s).


## Fonti

- [Checkout: ridurre i campi dei moduli](https://baymard.com/blog/checkout-flow-average-form-fields) (Baymard Institute)
- [Digital Services Act, art. 25](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32022R2065) (EUR-Lex)
- Stile "levels" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
