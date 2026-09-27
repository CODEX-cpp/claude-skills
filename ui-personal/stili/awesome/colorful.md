# Stile: Colorful (tanti colori, ognuno con un ruolo)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "colorful" di Awesome Design (licenza MIT), riscritto:
l'originale aveva la palette generica blu `#3B82F6` + viola "da AI" e
il font Inter. Il blu originale con testo bianco sopra fa 3.7:1 e
**non passa** il contrasto dei bottoni. Legenda: *(ricerca: …)* =
fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Una tavolozza ricca, usata con ordine.** Cinque colori pieni e
decisi, ognuno assegnato a qualcosa: una categoria, una sezione, un
tipo di contenuto. Il colore diventa un sistema di orientamento, non
decorazione. Allegro ma leggibile.

**Adatto a**: scuole, corsi, eventi, musei per famiglie, app per
organizzare (categorie, calendari), marchi giovani.
**Poco adatto a**: studi professionali, lusso, gestionali seri.

**Differenza con i vicini** *(mio)*:
- **vibrant**: caldo e energico con 2 colori; colorful ne usa 5, con
  un ruolo ciascuno.
- **gradient**: i colori sfumano uno nell'altro; in colorful sono
  pieni e separati.
- **friendly**: pastello e morbido; colorful è saturo.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile colorful |
| --- | --- |
| Un solo colore d'accento | **Cinque colori di categoria** (`--cat-1` … `--cat-5`), più **un solo colore per le azioni** (bottoni e link), che non cambia mai |
| Proporzione 60-30-10 | Il colore può occupare più spazio (fasce, card colorate), ma lo sfondo resta neutro |

Il resto delle regole base resta valido. **Mai solo il colore**: ogni
categoria ha anche un nome o un'icona (chi non distingue i colori
deve capire lo stesso).


## 3. Tipografia

- Un sans geometrico o arrotondato con pesi robusti (500-800).
- Direzioni possibili *(mio, da verificare)*: Figtree, Nunito Sans,
  Rubik, Lexend. **Niente lista nera.**
- Titoli grandi e pesanti, testo 16-17px.


## 4. Colore

Base, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f6f5f2` | |
| `--text` | `#1b1b22` | 17.1:1 |
| `--text-muted` | `#55555f` | 7.4:1 |
| `--border-control` | `#85858e` | 3.4:1 anche su `--surface` |
| `--accent` (azioni) | `#1747c9` | 7.6:1; testo bianco sopra 7.6:1 |

Colori di categoria (tutti con testo bianco sopra ≥ 4.5:1):

| Token | Valore | Contrasto con bianco |
| --- | --- | --- |
| `--cat-1` | `#c0392b` (rosso) | 5.4:1 |
| `--cat-2` | `#0b7a53` (verde) | 5.4:1 |
| `--cat-3` | `#b35900` (arancio) | 4.8:1 |
| `--cat-4` | `#7a3fb0` (viola pieno, non sfumato) | 6.6:1 |
| `--cat-5` | `#1747c9` (blu) | 7.6:1 |

- Rosso e verde **mai come unica distinzione** tra due cose.
- Per sfondi grandi, versioni tenui con `color-mix(in oklch, var(--cat-1) 12%, white)`
  e testo scuro sopra.


## 5. Layout

- Ogni sezione o categoria ha il suo colore, in modo coerente in tutto
  il sito (la categoria "Corsi" è sempre verde).
- Fasce colorate a tutta larghezza per separare le macro-sezioni, al
  massimo 3-4 per pagina.
- Card con una banda o un'etichetta colorata, **non** il bordino
  laterale spesso (tic vietato).


## 6. Componenti

- Bottoni principali sempre nel colore delle azioni, mai nei colori di
  categoria (altrimenti non si capisce cosa è cliccabile).
- Etichette di categoria: colore + nome, angoli arrotondati.
- Filtri per categoria con colore **e** testo.


## 7. Movimento

Livello "misurata": piccoli rimbalzi vietati comunque; transizioni di
colore su hover.


## 8. Immagini

Illustrazioni colorate d'autore o foto luminose; coerenti con i colori
di categoria.


## 9. Trappole

- Colori usati a caso: ogni colore deve avere un significato fisso.
- Testo bianco su arancio o giallo chiaro: verifica sempre (qui
  l'arancio è già scurito apposta).
- Arcobaleno ovunque: lo sfondo resta neutro.


## 10. Controllo dello stile

- [ ] Ogni colore ha un ruolo scritto nelle Linee guida.
- [ ] Un solo colore per le azioni.
- [ ] Ogni categoria riconoscibile anche senza colore.


## Fonti

- [Progettare per persone daltoniche](https://significa.co/blog/designing-for-colourblind-people) (Significa)
- Stile "colorful" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
