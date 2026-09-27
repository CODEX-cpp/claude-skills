# Stile: Fantasy (videogioco fantasy, pergamene e oro)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "fantasy" di Awesome Design (licenza MIT), riscritto:
l'originale aveva "estetica fantasy da videogioco, colori ricchi,
elementi tematici", il font gotico New Rocker per tutto, il blu
`#0250CC` e l'oro `#FDC800` su fondo bianco. Qui ambientato su fondo
scuro "da taverna", con l'oro come accento. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Il menu di un gioco di ruolo.** Fondo scuro caldo come legno e
pietra, oro per gli elementi importanti, titoli con carattere
medievale, cornici e ornamenti, pannelli come pergamene o targhe.
Epico ma usabile.

**Adatto a**: videogiochi, giochi da tavolo, fiere del fumetto,
rievocazioni, librerie fantasy, community di gioco.
**Poco adatto a**: tutto ciò che non è a tema.

**Differenza con i vicini** *(mio)*:
- **cosmic**: fantascienza; fantasy è medioevo immaginario.
- **vintage**: nostalgia informatica; fantasy è epica.
- **skeumorphism**: materiali realistici; fantasy li usa con moderazione
  come decorazione.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile fantasy |
| --- | --- |
| Tema scelto dal contesto | **Scuro caldo** |
| Niente ornamenti | **Cornici e ornamenti** ammessi su titoli e pannelli (immagini d'autore, decorative) |
| Font display solo se giustificato | **Display medievale** nei titoli brevi |


## 3. Tipografia

- Titoli: display medievale o epico, solo titoli brevi (i gotici sono
  illeggibili nei testi).
- Testo: serif leggibile con un po' di carattere.
- Direzioni possibili *(mio, da verificare)*: titoli New Rocker
  (dall'originale), Cinzel Decorative, MedievalSharp; testo Cormorant
  Garamond (dai 18px), Alegreya, Spectral. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#120f0b` | legno scuro |
| `--surface` | `#1e1912` | |
| `--text` | `#f1e6cf` | pergamena: 15.4:1 |
| `--text-muted` | `#bfae8c` | 8.8:1 |
| `--border-control` | `#8a7a5c` | 4.6:1 |
| `--accent` | `#fdc800` | oro dall'originale: 12.2:1; testo scuro sopra 12.2:1 |
| Blu (dall'originale) | `#0250cc` | **solo come fondo** con testo bianco (6.95:1); come testo sul fondo scuro fa 2.75:1 |
| Rosso rubino | `#e0604a` | 5.4:1, per avvisi e danni |


## 5. Layout

- Pannelli con cornice (bordo doppio oro o immagine di cornice via
  `border-image`).
- Sezioni come "capitoli" o "regni".
- Menu del gioco: voci grandi, chiare, raggiungibili da tastiera e
  controller.


## 6. Componenti

- Bottoni oro con testo scuro, cornice sottile.
- Statistiche (forza, livello) in barre con `<meter>` o `<progress>`
  e numeri scritti.
- Icone tematiche (spade, scudi) d'autore, sempre con testo.


## 7. Movimento

Livello "misurata" o "ricca": bagliori dorati brevi al passaggio,
pergamene che si aprono una volta; niente particelle infinite;
tutto fermo con "Riduci movimento".


## 8. Immagini

Illustrazioni d'autore o arte del gioco ufficiale (con permessi),
grandi e di qualità. Sfondi con `loading="lazy"` e pesi controllati.


## 9. Trappole

- Gotico nel testo corrente.
- Ornamenti ovunque: pesante e confuso.
- Blu originale come colore del testo.
- Arte di giochi famosi senza permesso.


## 10. Controllo dello stile

- [ ] Display medievale solo nei titoli brevi.
- [ ] Oro con testo scuro; blu solo come fondo.
- [ ] Ornamenti decorativi nascosti ai lettori di schermo.


## Fonti

- [border-image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) (MDN)
- [Accessibilità e leggibilità dei font](https://business.scope.org.uk/font-accessibility-and-readability-the-basics/) (Scope)
- Stile "fantasy" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
