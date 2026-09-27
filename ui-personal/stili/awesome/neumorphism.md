# Stile: Neumorphism (rilievi morbidi, "soft UI")

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "neumorphism" di Awesome Design (licenza MIT),
riscritto: l'originale aveva una descrizione di un club sull'AI (non
dello stile), Space Mono per tutto e i colori `#E7E5E4` (fondo) e
`#006666` (tenuti). Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Elementi scolpiti nella stessa materia del fondo.** Tutto ha lo
stesso colore; bottoni e card emergono (o affondano) grazie a due
ombre: una chiara in alto a sinistra e una scura in basso a destra.
Morbido, tattile, silenzioso.

**Adatto a**: piccoli strumenti (calcolatrici, timer, controlli
domotici, lettori musicali), pagine di presentazione di prodotti
fisici, widget.
**Poco adatto a**: siti con molti contenuti e molti controlli,
pubblico anziano, pubblica amministrazione.

**Differenza con i vicini** *(mio)*:
- **claymorphism**: forme gonfie e colorate; neumorphism è
  monocromatico.
- **skeumorphism**: imita materiali veri; neumorphism è astratto.
- **glassmorphism**: trasparenza; neumorphism è opaco.

**Dalla ricerca** *(ricerca: Axess Lab)*: il problema noto dello
stile è che le ombre da sole **non raggiungono il 3:1** richiesto per
i controlli (qui 1.26:1 e 1.66:1): bottoni e campi quasi invisibili
per chi vede poco. Soluzioni: testo 4.5:1, **un bordo o un elemento
3:1** su ogni controllo, chiarezza su cosa è cliccabile, icone sempre
con testo.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile neumorphism |
| --- | --- |
| Superfici diverse dal fondo | **Stesso colore** per fondo e superfici |
| Ombre sobrie | **Doppia ombra** chiara e scura (rilievo) o interna (incavo) |
| Bordi dei controlli 3:1 | **Restano obbligatori**: il rilievo da solo non basta |


## 3. Tipografia

- Sans morbido e pulito; mono solo per numeri e dati (Space Mono
  dall'originale per display di numeri).
- Direzioni possibili *(mio, da verificare)*: Nunito Sans, Manrope,
  Rubik. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` e `--surface` | `#e7e5e4` | dall'originale |
| `--text` | `#1e2938` | 11.7:1 |
| `--text-muted` | `#4f5663` | 5.9:1 |
| `--border-control` | `#77736f` | 3.7:1 |
| `--accent` | `#006666` | dall'originale: 5.4:1; testo bianco sopra 6.8:1 |
| Ombra chiara | `#ffffff` | 1.26:1 (decorativa) |
| Ombra scura | `#b8b3ae` | 1.66:1 (decorativa) |


## 5. Layout

- Pochi elementi, ben distanziati: le ombre hanno bisogno di spazio.
- Griglia semplice, card grandi.


## 6. Componenti

- Card in rilievo: `box-shadow: -6px -6px 12px #fff, 6px 6px 12px
  #b8b3ae`.
- Bottoni: rilievo **più** bordo 1px `--border-control` o testo
  d'accento; premuti o attivi diventano incavo (`inset`) **e cambiano
  anche colore** (lo stato non si affida solo all'ombra).
- Campi: incavo **più** bordo 3:1.
- Interruttori e cursori: stato indicato anche con colore d'accento e
  testo ("Attivo").
- Focus: anello 3px d'accento, ben staccato.


## 7. Movimento

Livello "misurata": passaggio rilievo → incavo breve (120ms).


## 8. Immagini

Poche; foto di prodotto scontornate su fondo uguale alla superficie.


## 9. Trappole

- Controlli con sola ombra: invisibili.
- Stati (attivo, selezionato, disattivato) distinti solo dall'ombra.
- Usarlo per un sito intero pieno di contenuti.
- In contrasto forzato le ombre spariscono: i bordi devono restare.


## 10. Controllo dello stile

- [ ] Ogni controllo ha un bordo o un elemento 3:1.
- [ ] Stati distinti anche per colore o testo.
- [ ] Icone con testo.


## Fonti

- [Neumorfismo accessibile e inclusivo](https://axesslab.com/neumorphism/) (Axess Lab)
- [Per un neumorfismo più accessibile](https://medium.com/@xurxe/accessible-neumorphism-soft-ui-992286900bfa) (Xurxe Toivo García)
- Stile "neumorphism" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
