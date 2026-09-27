# Stile: Fiction (libro illustrato per bambini)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "fiction" di Awesome Design (licenza MIT), riscritto
tenendo la sua descrizione: crema caldo `#FFE9CE`, grande display,
blocchi di colore saturi, contorni neri spessi, forme molto
arrotondate, niente ombre, illustrazioni in ogni sezione. Il font
Cossette Texte non è su Google Fonts: proposte alternative. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Sfogliare un albo illustrato.** Fondo crema, contorni neri spessi
come nei cartoni, blocchi di colore pieni e allegri, forme tonde,
titoli enormi e simpatici, illustrazioni ovunque. Energico ma
ordinato.

**Adatto a**: prodotti per bambini e famiglie, editoria per ragazzi,
ludoteche, scuole, app educative, giocattoli.
**Poco adatto a**: pubblico adulto professionale.

**Differenza con i vicini** *(mio)*:
- **creative**: campagna illustrata, contorni puliti senza nero;
  fiction è "cartone animato" con contorni neri.
- **neobrutalism**: stessi contorni neri, ma ombre a blocco e aria
  "da web"; fiction è piatto, tondo e infantile.
- **claymorphism**: forme 3D gonfie; fiction è piatto.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile fiction |
| --- | --- |
| Bordi sottili | **Contorni neri 3px** su card, bottoni, immagini |
| Ombre | **Nessuna ombra** (tutto piatto) |
| Un solo accento | **4 colori saturi** per i blocchi, più il nero per le azioni |
| Illustrazioni solo se servono | **Illustrazioni in ogni sezione**, d'autore |
| Niente rimbalzi | **Piccoli rimbalzi ammessi** (una volta sola, brevi) |


## 3. Tipografia

- Titoli: display tondo, pesante, simpatico, molto grande.
- Testo: sans rotondo e **chiaro per chi impara a leggere** (a e g "a
  un piano" aiutano i bambini piccoli).
- Direzioni possibili *(mio, da verificare)*: titoli Fredoka, Baloo 2,
  Chewy; testo Andika (pensato per chi impara a leggere), Nunito,
  Lexend. **Niente lista nera.**
- Testo 18px e più: spesso lo legge un bambino.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffe9ce` | crema dall'originale |
| `--surface` | `#fff6ea` | |
| `--text` | `#222222` | 13.5:1 |
| `--text-muted` | `#5a4c3c` | 7.0:1 |
| `--border-control` | `#8a7a66` | 3.5:1 (i contorni neri comunque 13:1) |
| `--accent` | `#222222` | bottoni neri, testo bianco sopra 15.9:1 |

Blocchi di colore (testo nero `#222222` sopra):

| Colore | Valore | Contrasto |
| --- | --- | --- |
| Rosso corallo | `#ff6b5e` | 5.7:1 |
| Blu | `#6f9bff` | 5.9:1 |
| Giallo | `#ffc53d` | 10.1:1 |
| Verde | `#5cc98a` | 7.7:1 |


## 5. Layout

- Blocchi colorati tondi (angoli 24-32px) con contorno nero, uno per
  sezione.
- Illustrazione accanto o dentro ogni blocco.
- Poco testo per blocco, frasi brevi.


## 6. Componenti

- Bottoni grandi (almeno 48px), neri con testo bianco o colorati con
  testo nero, contorno 3px, pillola.
- Hover: il bottone si inclina di 1-2° o cambia colore.
- Icone grandi e piene con testo accanto (i bambini non leggono le
  icone astratte).


## 7. Movimento

Livello "misurata" o "ricca": piccoli rimbalzi **ammessi** qui (è il
linguaggio dei cartoni), brevi e una volta sola; fermi con "Riduci
movimento".


## 8. Immagini

Illustrazioni d'autore con contorno nero, stile coerente con
l'interfaccia. Segnaposto dichiarati ed elenco da commissionare se
mancano.


## 9. Trappole

- Testo bianco sui colori chiari: sempre nero.
- Pagina piena di colore senza gerarchia: un blocco colorato alla
  volta.
- Aree per genitori (prezzi, privacy) con lo stesso tono infantile:
  lì serve chiarezza adulta.


## 10. Controllo dello stile

- [ ] Testo nero su tutti i blocchi colorati.
- [ ] Bottoni grandi, contorni coerenti.
- [ ] Sezione genitori chiara e seria.


## Fonti

- [Accessibilità e leggibilità dei font](https://business.scope.org.uk/font-accessibility-and-readability-the-basics/) (Scope)
- [Andika, font per chi impara a leggere](https://software.sil.org/andika/) (SIL)
- Stile "fiction" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
