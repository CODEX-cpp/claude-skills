# Stile: Dramatic (teatrale, scuro, ad alto contrasto)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "dramatic" di Awesome Design (licenza MIT), riscritto:
l'originale aveva la descrizione ("alto contrasto, composizioni
insolite, esperienza teatrale"), fondo `#09090B`, testo `#FAFAFA`,
viola `#8B5CF6` e rosa `#F43F5E`. Tenuti il fondo e il rosa; tolto il
viola (cliché "da AI"); testo un filo meno bianco per ridurre
l'alone. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* =
ragionamento mio.


## 1. L'idea

**Un palcoscenico al buio.** Fondo nero, luce su poche cose:
un titolo enorme, una foto illuminata, un colore acceso. Composizioni
fuori asse, tagli arditi, grande contrasto di scala. Ogni schermata è
una scena.

**Adatto a**: teatro, cinema, moda, fotografia, musica, eventi serali,
lanci importanti.
**Poco adatto a**: testi lunghi, servizi quotidiani, pubblico anziano
o con problemi di vista (vedi sotto).

**Differenza con i vicini** *(mio)*:
- **bold**: sportivo, tipografico, due colori pieni; dramatic è più
  cinematografico, con foto e ombre.
- **storytelling**: percorso a capitoli; dramatic è un'atmosfera.
- **cosmic**: spazio e bagliori; dramatic è nero pieno e luce di scena.

**Dalla ricerca** *(ricerca: a11y with Diana; BOIA)*: il testo
bianco puro su nero puro crea **alone** (halation) per chi ha
l'astigmatismo e al buio: le lettere sembrano "sbavare". Meglio
bianco sporco su nero non assoluto, e testi brevi. Chi legge tanto
legge meglio in chiaro: dramatic va usato per pagine di impatto, non
per documentazione.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile dramatic |
| --- | --- |
| Tema scelto dal contesto | **Scuro** |
| Composizioni ordinate | **Asimmetriche e fuori asse** ammesse (ordine di lettura sempre logico nel codice) |
| Titoli al massimo 6rem | Resta 6rem, ma titoli **molto pesanti o molto sottili** (contrasto di peso) |
| Niente aloni | Restano vietati: la "luce" viene dalle foto, non da bagliori CSS |


## 3. Tipografia

- Titoli: contrasto estremo (peso 900 accanto a 300, o serif enorme
  accanto a sans piccolo).
- Testo 17-18px, peso 400 (non più sottile sul nero), interlinea 1.6.
- Direzioni possibili *(mio, da verificare)*: Outfit (dall'originale,
  pesi 400 e 900), Bodoni Moda, Big Shoulders Display; testo Outfit,
  Figtree. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#09090b` | |
| `--surface` | `#17171a` | |
| `--text` | `#e8e8ec` | 16.3:1 (bianco sporco contro l'alone) |
| `--text-muted` | `#a8a8b0` | 8.4:1 |
| `--border-control` | `#74747c` | 4.3:1 (3.86 su `--surface`) |
| `--accent` | `#f4506a` | rosa-rosso: 5.9:1; testo **scuro** sopra 5.9:1 |

- Il testo bianco sul rosa fa solo 3.4:1: sui bottoni il testo è scuro.
- Fascia rossa profonda per un momento forte: `#5b1022` con testo
  `#e8e8ec` (11.1:1).
- `color-scheme: dark` nel `tokens.css`.


## 5. Layout

- Una scena per schermata: titolo, immagine, poco testo.
- Titoli che si sovrappongono alle foto (con velatura scura sotto per
  il contrasto, misurato nel punto più chiaro della foto).
- Molto nero "vuoto": il vuoto è la scena.
- Su telefono le composizioni fuori asse tornano in colonna.


## 6. Componenti

- Bottoni rettangolari o con bordo sottile chiaro; principale pieno
  rosa con testo scuro.
- Focus: anello 3px nel colore d'accento, ben staccato dal bordo.
- Menu a tutto schermo ammesso (con `<dialog>` e gestione del focus).


## 7. Movimento

Livello "misurata" o "ricca": dissolvenze lente dal nero, entrate
come luci che si accendono. Niente animazioni infinite; "Riduci
movimento" le toglie.


## 8. Immagini

Foto ad alto contrasto, fondi neri, luce laterale, molto bianco e nero
con un tocco di rosso. Mai foto chiare e piatte da stock.


## 9. Trappole

- Bianco puro su nero puro per testi lunghi: alone e fatica.
- Testo sopra foto senza velatura: contrasto variabile.
- Teatralità che nasconde il percorso (dove clicco?).
- Troppo testo: questo stile regge poche parole.


## 10. Controllo dello stile

- [ ] Testo bianco sporco, mai `#fff` su `#000`.
- [ ] Testo scuro sui bottoni rosa.
- [ ] Contrasto del testo sulle foto misurato nel punto peggiore.
- [ ] Ordine nel codice logico anche con composizioni fuori asse.


## Fonti

- [Quando la modalità scura diventa difficile da leggere](https://a11ywithdiana.substack.com/p/when-dark-mode-becomes-hard-to-read) (a11y with Diana)
- [Dark mode e leggibilità](https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone) (BOIA)
- Stile "dramatic" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
