# Stile: Square (squadrato e delicato)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "square" di Awesome Design (licenza MIT), riscritto:
l'originale non aveva descrizione del brand e usava Google Sans (font
di un marchio). Ho tenuto la descrizione ("aspetto raffinato,
tipografia delicata, palette minime") e l'idea del nome.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Forme quadrate, tipografia leggera, ordine geometrico.** Tutto è
fatto di rettangoli e quadrati perfetti, con angoli vivi; il testo è
sottile ma leggibile; lo spazio è regolato su una griglia precisa. Ha
qualcosa di architettonico.

**Adatto a**: studi di architettura e design, fotografi, gallerie,
marchi di moda o arredo minimali, portfolio.
**Poco adatto a**: servizi per un pubblico molto ampio, gestionali.

**Differenza con i vicini** *(mio)*:
- **geometric**: usa forme geometriche anche come decorazione;
  square usa solo il quadrato come struttura.
- **brutalist** (stile principale): crudo e pesante; square è leggero
  e delicato.
- **refined**: stessa eleganza, ma con serif; square è tutto sans.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile square |
| --- | --- |
| Arrotondamenti a scelta | **Zero** ovunque |
| Pesi di testo | Titoli leggeri (300-400) ammessi, **mai sotto 400 per il testo corrente** |
| Immagini | Ritagli **quadrati** (1:1) o a proporzioni fisse della griglia |


## 3. Tipografia

- Un sans geometrico con pesi leggeri ben disegnati.
- Direzioni possibili *(mio, da verificare)*: Red Hat Display (titoli)
  + Red Hat Text (testo), Albert Sans. **Niente lista nera.**
- Titoli grandi e leggeri, tracking leggermente positivo per i titoli
  piccoli, testo 16px a peso 400.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fafafa` | |
| `--surface` | `#ffffff` | |
| `--text` | `#1a1a1a` | 16.7:1 |
| `--text-muted` | `#5e5e5e` | 6.2:1 |
| `--border-control` | `#8a8a8a` | 3.3:1 |
| `--accent` | `#244c5a` | blu petrolio scuro, 8.9:1; testo bianco sopra 9.3:1 |

- Quasi monocromatico; l'accento solo per le azioni.


## 5. Layout

- Griglia modulare a quadrati: celle 1×1, 2×1, 2×2.
- Spazi tutti multipli della stessa unità (es. 8px), bordi di 1px che
  disegnano la griglia.
- Allineamenti perfetti: in questo stile ogni pixel fuori posto si
  vede.
- Su telefono: celle impilate a una colonna, i quadrati restano
  quadrati.


## 6. Componenti

- Bottoni rettangolari angoli vivi, bordo 1px o pieno scuro.
- Campi con solo bordo inferiore **solo se** il contrasto è 3:1 e
  l'area resta riconoscibile come campo; altrimenti bordo completo.
- Icone Phosphor "light", nello stesso spessore delle linee.


## 7. Movimento

Livello "nessuna" o "misurata": dissolvenze brevi, nessuno spostamento
che rompa la griglia.


## 8. Immagini

Foto con ritaglio quadrato e composizione pulita; spesso in bianco e
nero o poco saturate.


## 9. Trappole

- Testo troppo sottile: sotto peso 400 il testo corrente diventa grigio
  e illeggibile.
- Campi con solo una linea sotto che non si capiscono.


## 10. Controllo dello stile

- [ ] Angoli vivi ovunque, griglia coerente.
- [ ] Testo corrente a peso 400 o più.
- [ ] Nessun riferimento a marchi (niente Google Sans).


## Fonti

- Stile "square" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
