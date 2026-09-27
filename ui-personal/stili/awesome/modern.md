# Stile: Modern (editoriale contemporaneo, a blocchi di colore)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "modern" di Awesome Design (licenza MIT), riscritto:
l'originale aveva una sola frase di brand e una palette viola
(`#553F83`) con serif IBM Plex. Ho tenuto l'idea (serif editoriale +
grandi campiture di colore) e cambiato il colore per evitare il viola
"da AI". Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* =
ragionamento mio.


## 1. L'idea

**Serif contemporaneo e blocchi di colore pieno**: pagine con grandi
zone di un colore scuro e deciso, titoli serif grandi e diretti, testo
pulito. Ha l'autorevolezza di una rivista e la freschezza di un
prodotto digitale.

**Adatto a**: software "tranquillo", servizi professionali moderni,
fondazioni, riviste online, siti di prodotto con molto testo.
**Poco adatto a**: e-commerce con molti prodotti, gestionali densi.

**Differenza con i vicini** *(mio)*:
- **refined**: più classico, quasi senza colore; modern usa il colore
  a campiture larghe.
- **editorial**: più impaginazione da rivista; modern è più "marchio".


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile modern |
| --- | --- |
| Serif solo per progetti editoriali | **Serif per titoli (e volendo testo)**, motivo scritto nel mini-piano |
| Un tema per tutta la pagina, niente sezioni invertite | **Ammessi blocchi di colore scuro** (hero, citazioni, chiusura) come elemento del linguaggio, al massimo 2-3 per pagina e sempre dello stesso colore |


## 3. Tipografia

- Serif contemporaneo per i titoli (e volendo anche per il testo),
  con un sans o mono per etichette e dati.
- Direzioni possibili *(mio, da verificare)*: IBM Plex Serif + IBM
  Plex Sans (dall'originale), Source Serif 4 + Source Sans 3, Literata.
  **Niente lista nera.**
- Titoli grandi, peso medio (500-600), interlinea 1.1.


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | pagina |
| `--surface` | `#eef0f5` | zone chiare |
| `--text` | `#161a24` | 17.4:1 |
| `--text-muted` | `#4f5668` | 7.3:1 |
| `--border-control` | `#838a9b` | 3.0:1 anche su `--surface` |
| `--accent` | `#1f2a44` | blu inchiostro, per bottoni e blocchi; testo bianco 14.3:1 |

Dentro i **blocchi scuri** (`#1f2a44`):

| Ruolo | Valore | Nota |
| --- | --- | --- |
| Testo | `#f2f3f7` | 12.9:1 |
| Testo secondario | `#b9c0d3` | 7.8:1 |
| Accento caldo | `#f2b35e` | ambra, 7.7:1; usato solo nei blocchi scuri |

- Nei blocchi scuri si ridefiniscono i token con una classe
  (es. `.blocco-scuro { --bg: …; --text: …; }`), così i componenti
  dentro si adattano da soli.


## 5. Layout

- Alternanza misurata tra zone bianche e blocchi scuri a tutta
  larghezza.
- Testo in colonne di lettura, titoli grandi allineati a sinistra.
- Griglia semplice, spazi ampi tra le sezioni.


## 6. Componenti

- Bottoni rettangolari con angoli piccoli (4px): pieni blu inchiostro
  sul bianco, pieni ambra sul blu.
- Citazioni grandi in serif dentro i blocchi scuri.
- Link sottolineati.


## 7. Movimento

Livello "misurata": il momento curato può essere l'entrata del titolo
hero.


## 8. Immagini

Foto editoriali, anche in bianco e nero; illustrazioni solo d'autore.


## 9. Trappole

- Troppi blocchi scuri: diventa la "pagina a strisce" che salta da un
  tema all'altro. Massimo 2-3.
- Serif piccolo nel testo su schermi a bassa risoluzione: verifica la
  leggibilità.


## 10. Controllo dello stile

- [ ] Blocchi scuri al massimo 2-3, tutti dello stesso colore.
- [ ] Contrasti verificati sia sul bianco sia nei blocchi.
- [ ] Nessun viola "da AI".


## Fonti

- Stile "modern" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
