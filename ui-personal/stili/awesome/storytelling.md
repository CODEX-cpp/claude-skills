# Stile: Storytelling (racconto a capitoli)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "storytelling" di Awesome Design (licenza MIT),
riscritto: l'originale aveva una buona descrizione ("guida l'utente
in un percorso con immagini, testi e interazioni") ma i colori di
default blu/viola e il font Inter (in lista nera). Tenuto Abril
Fatface come possibile display. Legenda: *(ricerca: …)* = fonti in
fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**La pagina è un racconto.** Capitoli in sequenza, ognuno con un solo
messaggio: apertura, problema, svolta, prova, invito finale. Titoli
che fanno da "voce narrante", immagini che accompagnano, qualche
momento interattivo al punto giusto.

**Adatto a**: storie di marchio, rapporti annuali, campagne,
progetti culturali, raccolte fondi, presentazioni di un prodotto
nuovo.
**Poco adatto a**: siti da consultare velocemente (orari, prezzi,
servizi), gestionali.

**Differenza con i vicini** *(mio)*:
- **immersive**: esperienza da mostra, con gioco e tela colorata unica;
  storytelling è più sobrio e testuale.
- **editorial**: articoli da leggere; storytelling è un unico percorso
  guidato.
- **dramatic**: teatrale e scuro sempre; storytelling alterna i toni in
  base al capitolo.

**Dalla ricerca** *(ricerca: NN/g; Front-End Checklist)*:
- Lo **scrolljacking** (cambiare velocità o direzione dello
  scorrimento) disorienta la maggior parte degli utenti, peggio se c'è
  testo da leggere e su telefono. **Vietato** in questo stile.
- La struttura (testi e ordine dei capitoli) si scrive **prima**
  degli effetti: se la storia non regge senza animazioni, non regge.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile storytelling |
| --- | --- |
| Sezioni con più contenuti | **Un capitolo = un messaggio** |
| Tema unico | **Cambi di tono per capitolo** ammessi (fascia scura per il momento "forte"), sempre con i token del tema |
| Animazioni a scelta | Livello "misurata" o "ricca", **mai** scrolljacking |
| Font display solo se giustificato | Display per i titoli di capitolo ammesso |


## 3. Tipografia

- Titoli di capitolo grandi con display (serif espressivo), testo in
  un serif o sans di lettura.
- Numeri di capitolo grandi (01, 02…) come elementi grafici.
- Direzioni possibili *(mio, da verificare)*: display Abril Fatface
  (dall'originale), DM Serif Display, Playfair Display; testo Source
  Serif 4, Figtree. **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#fcfbf8` | |
| `--surface` | `#ffffff` | |
| `--text` | `#1a1a1f` | 16.8:1 |
| `--text-muted` | `#56565f` | 7.0:1 |
| `--border-control` | `#86868f` | 3.49:1 |
| `--accent` | `#0b5e66` | 7.2:1; testo bianco sopra 7.5:1 |

Capitolo scuro (fascia, non cambio di tema):

| Ruolo | Valore | Nota |
| --- | --- | --- |
| Fondo | `#15161a` | |
| Testo | `#f1efe9` | 15.7:1 |
| Testo secondario | `#a9a9b2` | 7.8:1 |
| Accento | `#5cc6cf` | 9.0:1 |


## 5. Layout

- Capitoli a tutta altezza (`min-height: 100svh`) solo per aperture
  e momenti chiave; gli altri lunghi quanto serve.
- Indice dei capitoli (fisso su schermi larghi, in cima su telefono)
  con il capitolo attivo evidenziato (`aria-current`).
- "Sticky": immagine ferma e testo che scorre accanto è ammesso
  (`position: sticky`), è scorrimento normale.
- Su telefono la versione è **più semplice**: immagini sopra al testo,
  niente effetti sincronizzati.


## 6. Componenti

- Numero e titolo di capitolo; sommario di una riga.
- Grandi citazioni o numeri come "colpi di scena" (con dati veri).
- Invito all'azione alla fine, e **anche** una scorciatoia in alto
  per chi non vuole leggere tutto.
- Link "Salta al contenuto successivo" se un capitolo è interattivo.


## 7. Movimento

Livello "misurata" o "ricca" (da chiedere):
- Animazioni legate allo scorrimento con `animation-timeline: view()`
  dentro `@supports`, o `IntersectionObserver`; mai eventi scroll
  pesanti.
- Solo `transform` e `opacity`.
- Con "Riduci movimento": tutto già visibile e fermo.


## 8. Immagini

Grandi, a tutta larghezza nei momenti chiave; video in loop solo muti,
con pausa, e fermi con "Riduci movimento". Immagini sotto la prima
schermata in `loading="lazy"`.


## 9. Trappole

- Scrolljacking o scorrimento orizzontale forzato.
- Informazioni pratiche (contatti, prezzi) nascoste in fondo alla
  storia.
- Pagina pesantissima: tante immagini grandi = LCP alto. Controlla i
  pesi.
- Testo dentro le immagini (non si legge, non si traduce, non si
  cerca).


## 10. Controllo dello stile

- [ ] La storia regge anche senza animazioni.
- [ ] Nessuno scrolljacking; versione semplice su telefono.
- [ ] Scorciatoia all'azione principale in alto.
- [ ] "Riduci movimento" rispettato.


## Fonti

- [Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/) (Nielsen Norman Group)
- [Evitare lo scrolljacking](https://frontendchecklist.io/rules/accessibility/scrolljacking) (Front-End Checklist)
- [Guida allo scrollytelling](https://webflow.com/blog/scrollytelling-guide) (Webflow)
- Stile "storytelling" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
