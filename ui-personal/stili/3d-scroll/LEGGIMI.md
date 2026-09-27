# Materiale originale dello stile 3D Scroll

Da [awwwards-3d](https://github.com/tsogjavklann/awwwards-3d), licenza
MIT (file `LICENSE` qui accanto). In inglese. **Le regole valide sono
in `stili/3d-scroll.md`**: dove questo materiale le contraddice, vince
quel file.

## Cosa c'è

- `riferimenti/`: manuali tecnici da aprire solo quando servono.
  - `ARCHITECTURE.md`: struttura della scena, ciclo di disegno e scroll
  - `PATTERNS.md`: 33 pezzi di codice pronti
  - `PROCEDURAL_GEOMETRY.md`: forme generate dal codice
  - `BLENDER_PIPELINE.md`: modelli da Blender al web
  - `SHADERS.md`: effetti grafici programmati
  - `POST_PROCESSING.md`: bagliore, grana, vignetta
  - `TRANSITIONS.md`: passaggi tra pagine
  - `ANTI_PATTERNS.md`: errori che rovinano il risultato
- `esempi/`: 4 siti di esempio (`minimal`, `coin-scroll`,
  `room-walkthrough`, `glass-product`) con i loro modelli.

## Attenzione: gli esempi vanno adattati

Gli esempi sono scritti **a file unico** e caricano le librerie **da
internet**. Nei progetti di Ivan si fa diversamente (decisioni prese):
1. si smontano nei file separati (`tokens.css`, `scena.css`,
   `js/scena.js`, `js/scroll.js`…);
2. le librerie si scaricano in `js/vendor/` e l'importmap punta lì;
3. si aggiungono il fotogramma di riposo, "Riduci movimento", il
   bottone di pausa e lo scorrimento morbido solo su computer;
4. si tolgono eventuali cursori personalizzati.
