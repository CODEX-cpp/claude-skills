# Stile: Claymorphism (forme gonfie di plastilina)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "claymorphism" di Awesome Design (licenza MIT),
riscritto partendo dalla sua descrizione ("forme morbide, arrotondate,
3D, gonfie, come argilla colorata"); tenuto il blu notte `#1C398E`
come colore del testo; tolti Montserrat e Poppins e il blu di default.
Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Tutto sembra fatto di plastilina.** Card e bottoni molto
arrotondati e "gonfi", con un'ombra interna chiara in alto e una
scura in basso, più un'ombra esterna morbida; colori pastello pieni;
spesso illustrazioni 3D in stile giocattolo.

**Adatto a**: app per bambini, giochi, app di consumo giocose,
prodotti educativi, landing divertenti.
**Poco adatto a**: servizi seri, contenuti densi.

**Differenza con i vicini** *(mio)*:
- **neumorphism**: stesso colore del fondo, rilievo sottile;
  claymorphism è colorato e gonfio.
- **fiction**: piatto con contorni neri; clay è in 3D morbido.
- **friendly**: piatto e pastello; clay aggiunge volume.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile claymorphism |
| --- | --- |
| Ombre sobrie | **Ombre interne ed esterne** per il volume |
| Arrotondamenti a scelta | **Molto arrotondati** (24-40px) |
| Un solo accento | **Superfici pastello** colorate (3 tinte) più un colore per le azioni |
| Niente rimbalzi | **Rimbalzi morbidi ammessi**, brevi e una volta sola |


## 3. Tipografia

- Sans rotondo e pesante nei titoli, rotondo e leggibile nel testo.
- Direzioni possibili *(mio, da verificare)*: Fredoka, Baloo 2, Nunito,
  Rubik. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f3f1fb` | |
| `--surface` | `#ffffff` | |
| `--text` | `#1c398e` | blu notte dall'originale: 9.3:1 |
| `--text-muted` | `#4a5580` | 6.5:1 |
| `--border-control` | `#8088a8` | 3.13:1 |
| `--accent` | `#c23b22` | corallo scuro: 4.76:1; testo bianco sopra 5.3:1 |

Superfici pastello (testo blu notte sopra):

| Tinta | Valore | Contrasto |
| --- | --- | --- |
| Pesca | `#ffd6c9` | 7.8:1 |
| Cielo | `#c9e7ff` | 8.1:1 |
| Menta | `#d9f5d0` | 8.9:1 |


## 5. Layout

- Card grandi, gonfie, ben distanziate; una tinta per card.
- Illustrazioni 3D morbide (d'autore) accanto ai titoli.


## 6. Componenti

- Card: `border-radius: 32px`, `box-shadow: inset 0 -8px 16px
  rgb(0 0 0 / .08), inset 0 8px 16px rgb(255 255 255 / .7), 0 12px 24px
  rgb(28 57 142 / .12)`.
- Bottoni gonfi, pieni corallo; premuti si "schiacciano" (ombra
  ridotta, `scale(.98)`).
- Campi con bordo visibile 3:1 (il volume da solo non basta).


## 7. Movimento

Livello "misurata" o "ricca": piccoli rimbalzi morbidi ammessi (fanno
parte della "plastilina"), brevi, fermi con "Riduci movimento".


## 8. Immagini

Illustrazioni 3D d'autore (personaggi, oggetti) in stile plastilina,
in WebP o AVIF con fondo trasparente. Segnaposto dichiarati se
mancano.


## 9. Trappole

- Troppe ombre su troppi elementi: pesante e confuso.
- Illustrazioni 3D generiche da banche immagini: tutte uguali.
- Campi senza bordo.


## 10. Controllo dello stile

- [ ] Testo blu notte su tutti i pastelli.
- [ ] Campi con bordo 3:1.
- [ ] Rimbalzi brevi e disattivabili.


## Fonti

- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- [Neumorfismo accessibile (principi validi anche qui)](https://axesslab.com/neumorphism/) (Axess Lab)
- Stile "claymorphism" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
