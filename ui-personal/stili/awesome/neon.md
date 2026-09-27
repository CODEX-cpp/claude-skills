# Stile: Neon (insegne elettriche nella notte)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "neon" di Awesome Design (licenza MIT), riscritto: i
colori lime `#BBF351` e azzurro `#00BCFF` sono tenuti (sul fondo
scuro fanno 15.1:1 e 9.1:1), ma l'originale li metteva su fondo
**bianco**, dove il lime fa 1.31:1 e l'azzurro 2.18:1. Tolti Roboto e STIX (serif
accademico, fuori tema). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Insegne al neon in una strada di notte.** Fondo quasi nero, due
colori elettrici, bordi luminosi, contrasto massimo. Energia notturna,
club, gaming.

**Adatto a**: locali notturni, gaming, esports, musica elettronica,
eventi, app per creator.
**Poco adatto a**: testi lunghi, servizi diurni, pubblico sensibile
alla luce.

**Differenza con i vicini** *(mio)*:
- **cosmic**: profondo e silenzioso; neon è urbano e rumoroso.
- **mono**: terminale verde; neon è insegna colorata.
- **bold**: sportivo e pulito, senza bagliori.

**Dalla ricerca** *(ricerca: a11y with Diana)*: i bagliori attorno al
testo peggiorano l'alone (halation) che già c'è con testo chiaro su
fondo scuro. Quindi il bagliore va sui **bordi e sulle forme**, mai
sul testo corrente.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile neon |
| --- | --- |
| Tema scelto dal contesto | **Scuro** |
| Default da evitare: "quasi-nero con un accento acido" (`colore.md`) | **Ammesso**: è proprio questo stile, scelto dall'utente |
| Niente bagliori | **Bagliori ammessi** su bordi, linee e titoli molto grandi (`box-shadow` colorato), **mai** sul testo corrente |
| Un solo accento | **Due colori** elettrici (lime e azzurro) |


## 3. Tipografia

- Titoli: display condensato o "a tubo" (tratto uniforme, come i neon).
- Testo: sans pulito peso 400.
- Direzioni possibili *(mio, da verificare)*: titoli Monoton (solo
  titoli brevi), Tilt Neon, Big Shoulders Display; testo Figtree,
  Archivo. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#0a0a0f` | |
| `--surface` | `#15151d` | |
| `--text` | `#ececf1` | 16.8:1 |
| `--text-muted` | `#a4a4b3` | 8.0:1 |
| `--border-control` | `#707080` | 4.1:1 |
| `--accent` | `#bbf351` | lime: 15.1:1; testo scuro sopra 15.1:1 |
| `--accent-2` | `#00bcff` | azzurro: 9.1:1 (8.3 su `--surface`) |

- `color-scheme: dark`. Con `prefers-contrast: more` i bagliori si
  tolgono.


## 5. Layout

- Sezioni scure con un elemento "acceso" ciascuna.
- Linee luminose come separatori.
- Molto nero intorno: il neon ha bisogno di buio.


## 6. Componenti

- Bottoni pieni lime con testo scuro, o con bordo luminoso azzurro.
- Card con bordo 1px e bagliore leggero al passaggio del mouse.
- Focus: anello lime 3px, più spesso del bagliore (si distingue).


## 7. Movimento

Livello "misurata": un'insegna che si accende una volta. **Mai
lampeggii**: oltre 3 lampi al secondo si rischiano crisi
fotosensibili (WCAG 2.3.1); niente tremolii "da neon rotto".


## 8. Immagini

Foto notturne, luci di città, ritratti con luci colorate.


## 9. Trappole

- Colori neon su fondo chiaro: illeggibili.
- Bagliore sul testo: alone e fatica.
- Neon che lampeggia o tremola.


## 10. Controllo dello stile

- [ ] Fondo scuro; testo senza bagliore.
- [ ] Nessun lampeggio.
- [ ] Bagliori tolti con `prefers-contrast: more`.


## Fonti

- [Quando la modalità scura diventa difficile da leggere](https://a11ywithdiana.substack.com/p/when-dark-mode-becomes-hard-to-read) (a11y with Diana)
- [Three Flashes, WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) (W3C)
- [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) (MDN)
- Stile "neon" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
