# Stile: Skeumorphism (oggetti e materiali reali)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "skeumorphism" di Awesome Design (licenza MIT),
riscritto partendo dalla sua descrizione ("imita texture, materiali e
funzioni 3D del mondo reale"); l'arancio `#FA3C00` col testo bianco fa
3.7:1: scurito. Tolti Roboto e il gotico Germania One (illeggibile
oltre poche parole). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**L'interfaccia imita oggetti veri.** Una rubrica sembra un'agenda di
pelle, un lettore musicale ha manopole, gli interruttori sembrano
interruttori. Materiali (carta, legno, pelle, metallo), luci e ombre
realistiche. Era lo stile dei primi iPhone.

**Adatto a**: strumenti che imitano oggetti (sintetizzatori,
registratori, agende, calcolatrici), giochi, siti a tema,
presentazioni di prodotti fisici, pubblico poco esperto di digitale.
**Poco adatto a**: siti di contenuti, servizi, gestionali.

**Differenza con i vicini** *(mio)*:
- **neumorphism**: rilievo astratto monocromatico; skeumorphism imita
  materiali veri.
- **vintage**: rilievo semplice a 2 colori da computer anni '90.
- **paper**: solo la carta, piatta.

**Dalla ricerca** *(ricerca: NN/g)*: imitare oggetti noti **riduce il
tempo di apprendimento** e dà fiducia a chi è poco pratico; ma texture
e ombre pesano sulle prestazioni, le metafore forzate rendono
goffe le interazioni ("inclina il telefono per…") e lo stile invecchia
in fretta. Oggi si usa **con misura**: nelle icone, nei controlli che
ricordano oggetti, negli strumenti nuovi per il pubblico.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile skeumorphism |
| --- | --- |
| Niente texture | **Materiali** (legno, pelle, metallo, carta) ammessi, come immagini leggere |
| Ombre sobrie | **Luci e ombre realistiche** (sfumature, riflessi) |
| Niente sfumature decorative | Sfumature ammesse per simulare volume e luce |
| Controlli standard | **Controlli che imitano oggetti** (manopole, interruttori), ma costruiti su elementi HTML veri |


## 3. Tipografia

- Tipografia "dell'oggetto" (etichette incise, display LCD, scritte a
  mano sull'agenda) solo per etichette brevi.
- Testo in un sans o serif pulito.
- Direzioni possibili *(mio, da verificare)*: testo Source Sans 3, Lora;
  etichette DSEG (display LCD), Special Elite (macchina da scrivere).
  **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ece7df` | |
| `--surface` | `#f7f3ec` | |
| `--text` | `#231f1a` | 13.3:1 |
| `--text-muted` | `#5b5348` | 6.15:1 |
| `--border-control` | `#8d8373` | 3.03:1 |
| `--accent` | `#c23300` | arancio scuro: 4.53:1; testo bianco sopra 5.6:1 |
| Pelle (esempio) | `#5a3a22` | testo `#f7f3ec` sopra 9.2:1 |

- Il contrasto del testo sopra i materiali si misura nel punto più
  chiaro della texture.


## 5. Layout

- L'oggetto al centro (l'agenda, il pannello di controllo), con
  contenuti leggibili dentro.
- Su telefono l'oggetto si semplifica.


## 6. Componenti

- Interruttore: `<input type="checkbox" role="switch">` stilizzato,
  con stato anche a parole.
- Manopola: `<input type="range">` stilizzato (usabile con le frecce),
  mai un div che si ruota solo col mouse.
- Bottoni con volume (sfumatura e ombra) che si "premono".
- Focus visibile anche sopra le texture.


## 7. Movimento

Livello "misurata": movimenti fisici credibili (un interruttore che
scatta, una pagina che si gira) brevi e disattivabili.


## 8. Immagini

Texture leggere (WebP piccoli ripetuti), foto di oggetti reali. Peso
totale delle texture sotto controllo (qualche decina di KB).


## 9. Trappole

- Controlli finti costruiti con `<div>`: inaccessibili.
- Metafore forzate che rallentano ("gira la manopola" per scegliere
  una data).
- Texture pesanti: pagina lenta.
- Font gotici o decorativi nel testo.


## 10. Controllo dello stile

- [ ] Ogni controllo è un elemento HTML vero, usabile da tastiera.
- [ ] Contrasto misurato sulle texture.
- [ ] Texture leggere.


## Fonti

- [Skeuomorfismo](https://www.nngroup.com/articles/skeuomorphism/) (Nielsen Norman Group)
- [Switch pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) (W3C WAI-ARIA APG)
- Stile "skeumorphism" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
