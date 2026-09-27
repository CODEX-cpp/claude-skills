# Stile: Retro (anni '70, caldo e grafico)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "retro" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "tipografia d'epoca, palette retro ad alto
contrasto, elementi nostalgici", il font Macondo e i colori di default
blu/viola (per niente retro). Qui scelto un periodo preciso, gli anni
'70, perché "retro" generico non guida le scelte. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Una copertina di disco degli anni '70.** Senape, arancio bruciato,
marrone e verde oliva su crema; titoli tondi e pesanti, strisce e
archi arcobaleno, angoli morbidi. Caldo, ottimista, grafico.

**Adatto a**: locali, birrifici, negozi vintage, musica, eventi,
prodotti con un'identità nostalgica.
**Poco adatto a**: servizi seri, tecnologia, istituzioni.

**Differenza con i vicini** *(mio)*:
- **vintage**: interfacce da computer anni '90 (finestre, pixel);
  retro è grafica stampata anni '70.
- **terracotta**: caldo ma editoriale e contemporaneo; retro è
  dichiaratamente d'epoca.
- **pulse**: tutto arancio con forme geometriche; retro usa 3-4 tinte
  terrose e strisce.

**Periodo diverso?** *(mio)*: se l'utente vuole anni '50 (pastelli,
cromature, corsivi da insegna), '60 (optical, pop) o '80 (neon,
griglie, cromo), si chiede e si adattano colori e font; le regole di
contrasto non cambiano.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile retro |
| --- | --- |
| Un solo accento | **Palette d'epoca** di 3-4 tinte (senape, arancio, oliva, marrone) |
| Font display solo se giustificato | **Display tondo e pesante** per i titoli |
| Niente decorazioni SVG | **Strisce e archi** (3-4 bande di colore) ammessi come motivo grafico semplice |
| Niente texture | Grana leggera ammessa (vedi `paper.md`) |


## 3. Tipografia

- Titoli: display tondo, pesante, stretto (effetto "Cooper" o
  "Windsor"), interlinea stretta.
- Testo: sans o serif semplice e leggibile.
- Direzioni possibili *(mio, da verificare)*: titoli Shrikhand, Righteous,
  Bagel Fat One, Macondo (dall'originale, più "hippie"); testo Karla,
  Libre Franklin. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f4e9d4` | crema |
| `--surface` | `#fbf4e6` | |
| `--text` | `#2a1a10` | marrone scuro: 13.9:1 |
| `--text-muted` | `#634a38` | 6.8:1 |
| `--border-control` | `#947a66` | 3.33:1 |
| `--accent` | `#a8401a` | arancio bruciato: 5.1:1; testo bianco sopra 6.15:1 |
| Senape | `#e0a526` | fondi con testo scuro sopra 7.6:1 |
| Oliva | `#5d6b2a` | 4.85:1 sulla crema; testo bianco sopra 5.8:1 |


## 5. Layout

- Fasce con bordi arrotondati, strisce orizzontali come separatori.
- Titoli grandi centrati o a sinistra, con un arco di strisce dietro
  (decorativo, `aria-hidden="true"`).
- Card crema con angoli 12-16px.


## 6. Componenti

- Bottoni pillola pieni arancio o oliva, testo bianco.
- Etichette tonde senape con testo scuro.
- Icone semplici e piene.


## 7. Movimento

Livello "nessuna" o "misurata". Niente effetti "disco" o pellicola
tremolante.


## 8. Immagini

Foto con toni caldi e un po' sbiaditi (preparate prima, non con
filtri CSS pesanti), grana leggera. Illustrazioni in stile poster.


## 9. Trappole

- Diventare un costume di Carnevale: un periodo solo, pochi elementi.
- Senape e arancio chiari con testo bianco.
- Display tondo nel testo corrente.


## 10. Controllo dello stile

- [ ] Un periodo preciso, dichiarato nelle Linee guida.
- [ ] Testo scuro sulla senape; bianco solo su arancio scuro e oliva.
- [ ] Strisce decorative nascoste ai lettori di schermo.


## Fonti

- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- Stile "retro" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
