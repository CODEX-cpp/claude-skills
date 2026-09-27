# Stile: Sleek (moderno, preciso, tecnologico)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "sleek" di Awesome Design (licenza MIT), riscritto: il
file originale conteneva il font Inter (in lista nera) e la palette
blu/viola "da AI". Legenda: *(ricerca: …)* = fonti in fondo;
*(mio)* = ragionamento mio.


## 1. L'idea

**Precisione e leggerezza**: linee sottili, superfici nette, dettagli
curati al pixel, piccole risposte ai gesti dell'utente. Sembra un buon
prodotto tecnologico: "meno, ma fatto meglio". Applica la proporzione
60-30-10 dei colori in modo rigoroso.

**Adatto a**: software e SaaS, app web, siti di prodotti tecnologici,
strumenti per sviluppatori.
**Poco adatto a**: siti caldi e artigianali, pubblico poco digitale.

**Differenza con i vicini** *(mio)*:
- **clean**: più semplice e neutro; sleek ha più cura dei dettagli e
  delle micro-interazioni.
- **premium**: mette al centro foto grandi di un prodotto; sleek è
  un'interfaccia, non una vetrina.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile sleek |
| --- | --- |
| Tema scelto dal contesto | Funziona bene sia chiaro sia scuro (palette per entrambi qui sotto) |
| Ombre minime | Bordi di 1px al posto delle ombre; ombre solo su menu e finestre |
| Arrotondamenti a scelta | Piccoli e precisi: 6-8px |
| Animazione | Consigliato "misurata", con molta cura delle micro-interazioni (hover, premuto, aperture) |


## 3. Tipografia

- Un sans geometrico o grotesk moderno, pesi 400-600; mono per dati,
  codici, scorciatoie.
- Direzioni possibili *(mio, da verificare)*: Schibsted Grotesk,
  Onest, Albert Sans; mono: JetBrains Mono. **Niente lista nera.**
- Titoli con tracking leggermente negativo (-0.02em), testo 15-16px.
- Cifre tabellari ovunque ci siano numeri.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Chiaro | Scuro | Nota |
| --- | --- | --- | --- |
| `--bg` | `#f6f7f8` | `#0f1113` | |
| `--surface` | `#ffffff` | `#181b1f` | |
| `--text` | `#111418` | `#e8eaed` | oltre 14:1 in entrambi |
| `--text-muted` | `#5b636d` | `#9aa2ac` | oltre 5.6:1 |
| `--border-control` | `#838b95` | `#6b737c` | oltre 3.2:1 |
| `--accent` | `#2d4ee0` | `#8ea2ff` | blu cobalto, oltre 5.9:1 |

- L'accento è saturo ma **senza bagliori né sfumature**.
- Nel tema scuro le superfici più "alte" sono più chiare (vedi
  `colore.md`).


## 5. Layout

- Griglie precise, allineamenti perfetti, spazi dalla scala a base 4.
- Divisori di 1px, superfici leggermente diverse per le zone.
- Densità media: né ariosa né compressa.


## 6. Componenti

- Bottoni con angoli 6px, altezza 36-40px su desktop (area cliccabile
  estesa a 44px su touch).
- Hover curati: cambio di sfondo di un gradino, bordo più marcato.
- Premuto: `translateY(1px)`.
- Campi con anello di focus netto nel colore d'accento.
- Scorciatoie da tastiera mostrate con `<kbd>`.
- Menu e finestre con `popover` / `<dialog>`, ombra leggera.


## 7. Movimento

- Transizioni brevi (`--duration-instant` / `--duration-fast`) con
  `--ease-out`, su hover, focus, aperture.
- Il momento curato può essere un'interazione (un pannello che si
  apre bene), non per forza un'entrata.
- Niente entrate animate delle sezioni.


## 8. Immagini

Screenshot veri del prodotto, ben ritagliati, con angoli coerenti con
la scala. Niente finte interfacce disegnate in HTML.


## 9. Trappole

- Grigi troppo chiari "perché è elegante".
- Scivolare nel "kit SaaS": card tutte uguali con la stessa ombra.
- Scuro con testo bianco puro e accento neon: resta vietato.


## 10. Controllo dello stile

- [ ] Allineamenti al pixel, divisori coerenti.
- [ ] Micro-interazioni presenti ma brevi.
- [ ] Contrasti verificati nel tema usato (o in entrambi).


## Fonti

- [Dark mode, buone pratiche](https://atmos.style/blog/dark-mode-ui-best-practices) (Atmos)
- Stile "sleek" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
