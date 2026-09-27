# Stile: Perspective (profondità, isometria, piani sovrapposti)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "perspective" di Awesome Design (licenza MIT), riscritto
partendo dalla sua descrizione ("viste isometriche, punti di fuga,
elementi a strati per guidare l'attenzione"). Il verde `#00BD7D` col
testo bianco fa 2.45:1: tenuto solo come riempimento con testo scuro.
Tolti Poppins e Oswald. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Spazio e profondità.** Schermate e card inclinate in prospettiva o
in vista isometrica, piani sovrapposti a distanze diverse, elementi
che sembrano fluttuare. Serve a mostrare prodotti digitali "in
scena" e a guidare lo sguardo.

**Adatto a**: presentazioni di app e software, landing di prodotto,
portfolio di interfacce, infografiche isometriche.
**Poco adatto a**: contenuti da leggere, form, siti istituzionali.

**Differenza con i vicini** *(mio)*:
- **futuristic**: fantascienza, scuro, neon; perspective è chiaro e
  pulito, solo spaziale.
- **bento**: griglia a riquadri piatta; perspective inclina i piani.
- **skeumorphism**: materiali reali; perspective è geometria.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile perspective |
| --- | --- |
| Elementi piatti | **Trasformazioni 3D** (`perspective`, `rotateX/Y`) ammesse su immagini e card dimostrative |
| Testo dritto | Resta **dritto**: il testo da leggere non si inclina mai |
| Ombre sobrie | **Ombre lunghe e morbide** per staccare i piani |


## 3. Tipografia

- Sans geometrico pulito, titoli grandi e compatti.
- Direzioni possibili *(mio, da verificare)*: Manrope, Sora, Outfit;
  titoli Archivo Narrow. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#f6f7f7` | |
| `--surface` | `#ffffff` | |
| `--text` | `#111827` | 16.5:1 |
| `--text-muted` | `#4f5763` | 6.8:1 |
| `--border-control` | `#858c96` | 3.16:1 |
| `--accent` | `#007a52` | verde scuro: 5.0:1; testo bianco sopra 5.4:1 |
| Verde originale | `#00bd7d` | solo riempimenti con testo scuro `#111827` sopra 7.2:1 |


## 5. Layout

- Hero con screenshot del prodotto inclinato in prospettiva
  (`transform: perspective(1200px) rotateX(12deg) rotateY(-16deg)`).
- Piani sovrapposti (uno dietro l'altro) con ombre diverse per la
  distanza.
- Su telefono le inclinazioni si riducono o spariscono (spazio poco,
  lettura difficile).


## 6. Componenti

- Card dimostrative inclinate; card di contenuto dritte.
- Bottoni normali, pieni verde scuro.
- Diagrammi isometrici (SVG d'autore) con testo esterno leggibile.


## 7. Movimento

Livello "misurata" o "ricca": al passaggio del mouse la card si
raddrizza un po' (inclinazione ridotta); piccolo parallasse **solo**
se leggero. Con "Riduci movimento" niente parallasse né inclinazioni
che si muovono (il parallasse dà nausea a chi soffre di disturbi
vestibolari).


## 8. Immagini

Screenshot veri del prodotto, ad alta risoluzione (inclinati perdono
nitidezza), con testo alternativo che dice cosa mostrano.


## 9. Trappole

- Testo da leggere inclinato.
- Parallasse forte o legato al movimento del telefono.
- Screenshot finti o sfocati.
- Trasformazioni 3D su tanti elementi: rallenta.


## 10. Controllo dello stile

- [ ] Testo sempre dritto.
- [ ] Inclinazioni ridotte su telefono e con "Riduci movimento".
- [ ] Screenshot veri e nitidi.


## Fonti

- [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) (MDN)
- [Animation from Interactions, WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) (W3C)
- Stile "perspective" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
