# Stile: Paper (carta stampata e materica)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "paper" di Awesome Design (licenza MIT), riscritto:
l'originale aveva la descrizione ("texture di carta, ispirato alla
stampa, pochi colori, superfici tattili") ma usava Roboto e Montserrat
(poco "da stampa") e un viola `#8B5CF6` fuori tema. Legenda:
*(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Sembra un foglio vero.** Fondo color carta, una grana appena
percettibile, inchiostro blu o nero, pochissimi colori. Le superfici
sono "fogli" sovrapposti, con bordi sottili e ombre minime, come
carta appoggiata sul tavolo.

**Adatto a**: artigiani, cartolerie, tipografie, studi grafici,
ricette, diari, blog personali, inviti.
**Poco adatto a**: prodotti tecnologici, dashboard, contenuti molto
dinamici.

**Differenza con i vicini** *(mio)*:
- **editorial**: impaginazione da rivista su fondo pulito; paper imita
  il materiale.
- **riso**: carta + inchiostri fluorescenti e sfalsati; paper è più
  sobrio (un solo inchiostro).
- **skeumorphism**: imita oggetti in modo realistico; paper resta
  piatto, solo "materico".


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile paper |
| --- | --- |
| Niente texture decorative | **Grana di carta leggera** ammessa sul fondo (vedi sezione 4) |
| Fondo neutro | **Fondo color carta** (avorio, crema) |
| Un solo accento | Resta uno: il **colore dell'inchiostro** |


## 3. Tipografia

- Serif da libro per il testo o per i titoli; in alternativa un sans
  umanista "da stampa".
- Testo 17-19px, interlinea 1.6.
- Direzioni possibili *(mio, da verificare)*: Crimson Pro, EB Garamond
  (solo titoli e testi medi), Libre Caslon Text, Literata; sans di
  appoggio Karla, Work Sans; mono per note "a macchina" IBM Plex Mono.
  **Niente lista nera.**


## 4. Colore e grana

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f6f1e7` | carta avorio |
| `--surface` | `#fbf8f1` | foglio più chiaro |
| `--text` | `#1f1d1a` | nero inchiostro: 14.9:1 |
| `--text-muted` | `#5e5a52` | 6.1:1 |
| `--border-control` | `#8a8479` | 3.3:1 |
| `--accent` | `#1f4e79` | blu inchiostro: 7.7:1; testo bianco sopra 8.7:1 |
| Fascia "cartoncino" | `#e4d6bd` | testo `#1f1d1a` sopra 11.7:1 |

Grana *(ricerca: CSS-Tricks; mio)*:
- Si fa con un piccolo SVG `<feTurbulence>` come immagine di sfondo,
  o con una piccola immagine WebP ripetuta (qualche KB).
- **Opacità bassissima** (3-6%): se si nota subito, è troppa.
- Solo sul **fondo pagina**, mai dietro al testo lungo delle card
  (abbassa la leggibilità) e mai animata.
- `mix-blend-mode` si comporta in modo diverso fra Chrome e Safari:
  controlla in entrambi.
- Con `forced-colors: active` o "Aumenta contrasto" la grana si
  toglie.


## 5. Layout

- Fogli (card) centrati, con margini generosi come una pagina.
- Una colonna di lettura; note a margine su schermi larghi.
- Separatori tipografici (una riga, un simbolo `§` o `❧` nascosto ai
  lettori di schermo) al posto dei filetti moderni.


## 6. Componenti

- Card "foglio": fondo `--surface`, bordo 1px, ombra minima e morbida
  (`0 1px 2px`), angoli 2-4px (la carta non è arrotondata).
- Bottoni a bordo inchiostro o pieni blu, angoli piccoli.
- Campi con solo la riga sotto **sconsigliati**: bordo completo 3:1
  (vedi `componenti.md`).
- Etichette tipo "timbro" (bordo, maiuscoletto) per categorie.


## 7. Movimento

Livello "nessuna" o "misurata". Niente fogli che si piegano o pagine
che "si girano" in 3D.


## 8. Immagini

Foto con luce naturale e toni caldi, scansioni di oggetti di carta
veri (biglietti, schizzi), illustrazioni a tratto. Niente immagini
lucide da stock.


## 9. Trappole

- Grana troppo forte o animata: sembra sporco, pesa sulle prestazioni.
- Carta troppo scura o gialla: il testo perde contrasto.
- Font "antichi" illeggibili per il testo corrente.
- Ombre realistiche esagerate (diventa skeumorphism).


## 10. Controllo dello stile

- [ ] Grana 3-6% solo sul fondo, tolta in contrasto forzato.
- [ ] Un solo colore d'inchiostro.
- [ ] Angoli piccoli, ombre minime.


## Fonti

- [Grainy gradients con feTurbulence](https://css-tricks.com/grainy-gradients/) (CSS-Tricks)
- [Sfondi granulosi in CSS](https://ibelick.com/blog/create-grainy-backgrounds-with-css) (ibelick)
- Stile "paper" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
