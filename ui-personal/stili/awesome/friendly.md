# Stile: Friendly (accogliente, pastello, arrotondato)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "friendly" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("elementi arrotondati, tanto spazio,
palette pastello morbide") e dai suoi due pastelli (rosa `#F2D9DC`,
verde `#D9F2D8`). L'originale usava un serif display (Noto Serif
Display), poco "amichevole": qui sostituito. Legenda:
*(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Mettere a proprio agio.** Forme arrotondate, colori pastello
tenui, tanto spazio, testi in tono colloquiale. L'interfaccia sembra
gentile e facile, senza essere infantile.

**Adatto a**: servizi alla persona, pediatri, psicologi, scuole,
associazioni, app di benessere, prodotti per famiglie.
**Poco adatto a**: lusso, prodotti tecnici, marchi aggressivi.

**Differenza con i vicini** *(mio)*:
- **spacious**: accessibilità prima di tutto, sobrio; friendly è più
  colorato e affettuoso.
- **creative**: giocoso con illustrazioni forti; friendly è più
  tranquillo.
- **claymorphism**: forme "gonfie" in 3D; friendly è piatto e morbido.

**Dalla ricerca** *(ricerca: NN/g)*: un tono più colloquiale e
leggero viene percepito come **più amichevole** dagli utenti (con
differenze misurabili), ma meno formale: va scelto in base al
pubblico.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile friendly |
| --- | --- |
| Arrotondamenti a scelta | **Molto arrotondati**: card 20-24px, bottoni a pillola |
| Un solo accento, usato poco | **Sfondi pastello** di sezione (2-3 tinte tenui) più un colore per le azioni |
| Tono dei testi a scelta | **Colloquiale**, con il "tu" |


## 3. Tipografia

- Un sans arrotondato o umanista, pesi 400-700.
- Direzioni possibili *(mio, da verificare)*: Nunito, Figtree, Lexend,
  Quicksand solo per titoli (troppo sottile per il testo).
  **Niente lista nera.**
- Testo 17px, interlinea 1.6; titoli di peso 700, non troppo grandi.


## 4. Colore

Base, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fbfaf8` | |
| `--surface` | `#ffffff` | |
| `--text` | `#23262e` | 14.5:1 |
| `--text-muted` | `#5a5f6b` | 6.1:1 |
| `--border-control` | `#8a8f9b` | 3.1:1 |
| `--accent` | `#2f6f73` | verde petrolio morbido: 5.5:1; testo bianco sopra 5.8:1 |

Pastelli per sfondi (sempre con testo scuro):

| Tinta | Sfondo | Testo scuro | Testo colorato abbinato |
| --- | --- | --- | --- |
| Rosa (dall'originale) | `#f2d9dc` | 11.3:1 | `#7a2e3a` 6.9:1 |
| Verde (dall'originale) | `#d9f2d8` | 12.7:1 | `#23603a` 6.3:1 |
| Azzurro | `#dbe8f7` | 12.2:1 | |

- **Mai testo bianco sui pastelli**, e mai bottoni principali in
  pastello (non si vedono come bottoni).


## 5. Layout

- Sezioni alternate su pastelli tenui (stesso tema chiaro: non è un
  cambio di tema).
- Tanto spazio, una colonna di lettura comoda, card morbide.
- Contenuti in piccoli blocchi con titoli chiari.


## 6. Componenti

- Bottoni a pillola, pieni nel colore delle azioni, grandi (44-48px).
- Campi arrotondati (12px) con bordo visibile (3:1).
- Messaggi di conferma calorosi ma chiari ("Fatto! Ti abbiamo
  scritto un'email" senza esclamativi eccessivi: uno al massimo).
- Icone arrotondate (Phosphor "regular" o "duotone").


## 7. Movimento

Livello "misurata": transizioni morbide (`--ease-out`), niente
rimbalzi (anche se "amichevoli", restano un tic).


## 8. Immagini

Foto calde e naturali di persone vere, o illustrazioni morbide
d'autore.


## 9. Trappole

- Pastelli con testo chiaro o bottoni pastello: invisibili.
- Diventare infantile quando il pubblico è adulto.
- Tono troppo scherzoso negli errori e nei temi delicati (vedi
  `testi.md`).


## 10. Controllo dello stile

- [ ] Testo scuro su tutti i pastelli; bottoni ben visibili.
- [ ] Tono colloquiale ma chiaro, serio dove serve.
- [ ] Arrotondamenti coerenti.


## Fonti

- [Le 4 dimensioni del tono di voce](https://www.nngroup.com/articles/tone-of-voice-dimensions/) (Nielsen Norman Group)
- Stile "friendly" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
