# Stile: Bento (griglia a riquadri di misure diverse)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "bento" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("griglia di riquadri di misure
diverse, gerarchia chiara, spazi morbidi"); tenuti il fondo
`#FFF5E6` e i colori pesca `#FAD4C0` e azzurro `#80A1C1` come fondi
dei riquadri; tolto Inter (lista nera). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Come una scatola bento giapponese.** I contenuti stanno in
riquadri arrotondati di misure diverse, incastrati in una griglia: il
più importante è il più grande. Ogni riquadro dice una cosa sola.
Reso famoso dalle presentazioni di Apple.

**Adatto a**: presentazione di funzioni di un prodotto, portfolio,
pagine "chi siamo", dashboard personali, riepiloghi.
**Poco adatto a**: testi lunghi, elenchi di prodotti uniformi.

**Differenza con i vicini** *(mio)*:
- **contemporary**: stile generale di oggi che **usa** anche il bento;
  bento è la griglia a riquadri come protagonista.
- **enterprise**: riquadri di dati in una dashboard scura; bento è
  presentazione.
- **geometric**: griglia rigorosa con forme pure; bento è morbido.

**Dalla ricerca** *(ricerca: freeCodeCamp)*: al massimo **9
riquadri** per griglia (oltre, troppa scelta); la gerarchia viene
dalla misura **e** da colore, tipografia, posizione;
`grid-template-areas` per riorganizzare la griglia su tablet e
telefono.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile bento |
| --- | --- |
| Card tutte uguali | **Riquadri di misure diverse** (1×1, 2×1, 2×2) |
| Card con bordo o ombra | **Riquadri pieni** su fondi tenui, senza ombra |
| Arrotondamenti a scelta | **Arrotondati** (20-28px), tutti uguali |


## 3. Tipografia

- Sans pulito; nei riquadri grandi titoli grandi, nei piccoli numeri
  grandi o una frase.
- Direzioni possibili *(mio, da verificare)*: Onest, Figtree, Manrope.
  **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fff5e6` | dall'originale |
| `--surface` | `#ffffff` | |
| `--text` | `#111827` | 16.4:1 |
| `--text-muted` | `#4f5563` | 6.9:1 |
| `--border-control` | `#858a94` | 3.21:1 |
| `--accent` | `#2f5d86` | blu scuro: 6.4:1; testo bianco sopra 6.9:1 |
| Riquadro pesca | `#fad4c0` | testo `#111827` 12.9:1 |
| Riquadro azzurro | `#80a1c1` | testo `#111827` 6.6:1 |


## 5. Layout

- Griglia CSS a 4-6 colonne con `grid-template-areas`; gap uguale
  ovunque (16-20px).
- Il riquadro principale (2×2) in alto a sinistra o al centro.
- **Ordine nel codice = ordine di importanza**: su telefono la
  griglia diventa una colonna e l'ordine deve restare sensato.
- Container queries (`@container`) per adattare il contenuto di ogni
  riquadro alla sua misura.


## 6. Componenti

- Riquadro: titolo, una frase, eventualmente un'immagine o un numero.
- Se il riquadro è un link, **tutto** il riquadro è cliccabile (link
  esteso con `::after`), con focus visibile sul riquadro.
- Niente testi lunghi dentro i riquadri.


## 7. Movimento

Livello "misurata": riquadri che entrano in sequenza breve; al
passaggio leggero ingrandimento (`scale(1.02)`).


## 8. Immagini

Screenshot, foto ritagliate a misura del riquadro (`object-fit:
cover`), icone grandi.


## 9. Trappole

- Più di 9 riquadri: diventa un mosaico confuso.
- Ordine visivo diverso dall'ordine del codice.
- Riquadri tutti della stessa importanza visiva.


## 10. Controllo dello stile

- [ ] Massimo 9 riquadri per griglia.
- [ ] Ordine sensato anche in una colonna.
- [ ] Un messaggio per riquadro.


## Fonti

- [Bento grid nel web design](https://www.freecodecamp.org/news/bento-grids-in-web-design/) (freeCodeCamp)
- [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) (MDN)
- Stile "bento" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
