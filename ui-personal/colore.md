# Colore

Leggi questo file quando scegli la palette o tocchi i colori.
Il colore serve a tre cose: **gerarchia** (cosa guardare prima),
**significato** (stati, azioni, categorie) e **atmosfera** (il
carattere del progetto). Un colore che non fa nessuna delle tre è
decorazione, e va tolto.

Legenda: **[auto]** = controllabile da script; *(ricerca: …)* =
dalla ricerca online, fonti in fondo; *(mio)* = ragionamento mio.
Il resto viene dalle skill analizzate nella mappa.


## 1. Costruire la palette

- **Si parte dal soggetto, non dalla categoria.** I colori vengono
  dal mondo del progetto (materiali, luoghi, prodotto, logo), non da
  associazioni automatiche tipo "tecnologia = blu", "bio = verde",
  "lusso = oro". Sono proprio quelle che rendono le pagine uguali.
- **Ruoli, non campioni.** La palette si scrive per ruolo nel
  `tokens.css`: sfondo, superfici, bordi, testo (3-4 livelli), accento,
  stati. Un colore senza ruolo non entra.
- **Da 4 a 6 colori di base**, più le loro varianti calcolate.
- **Proporzioni** *(mio: la regola pratica "60-30-10")*: circa il 60%
  della superficie ai neutri (sfondo), il 30% a superfici e testo,
  il 10% all'accento. È un punto di partenza, non una legge: serve a
  ricordare che l'accento funziona perché è raro.
- **Un solo colore d'accento**, usato identico in tutta la pagina e
  in tutte le pagine **[auto]**. Un sito con accento verde non ha un
  bottone blu in fondo alla pagina.
- **L'accento è per ciò che si deve fare** (azione principale, link,
  elemento selezionato), non per decorare. Se tutto ha l'accento,
  niente spicca. *(ricerca: effetto Von Restorff)*
- **Saturazione contenuta**: accenti sotto l'80% di saturazione.
  Colori troppo accesi stancano e sembrano economici.
- **Una sola famiglia di grigi**: o tutti caldi o tutti freddi, mai
  mescolati **[auto]**.
- **Grigi tinti solo se servono**: tingere i grigi con la tinta del
  brand dà coesione quando il brand ha un colore forte; un grigio
  neutro va benissimo quando il progetto è sobrio.

### Neri e bianchi

- **Mai nero puro `#000000`** **[auto]**: toglie profondità e, sui
  fondi scuri, affatica. Il quasi-nero **si ricava dalla palette** (un
  grigio molto scuro leggermente tinto), non è un valore fisso come
  `#111` usato ovunque.
- **Sui fondi scuri, mai testo bianco puro `#ffffff`**: un bianco
  appena spento si legge meglio. *(ricerca: Atmos)*

### Il formato OKLCH *(ricerca: Evil Martians)*

Per costruire scale di tonalità (dal chiaro allo scuro) conviene
`oklch(luminosità croma tinta)`, per esempio `oklch(0.55 0.12 185)`:

- **luminosità** da 0 (nero) a 1 (bianco): a parità di valore, colori
  di tinte diverse sembrano davvero chiari uguali (con HSL no: un
  giallo e un blu con la stessa "L" sembrano lontanissimi);
- **croma** è la saturazione: va **ridotta vicino al bianco e al nero**,
  altrimenti i colori diventano sporchi o impossibili da mostrare;
- **tinta** da 0 a 360, come la ruota dei colori.

Per un singolo colore il formato esadecimale va benissimo. Per le
varianti (tenue, hover) si usa `color-mix()` dal colore base, come
nel `tokens.css`. Strumento utile: [oklch.com](https://oklch.com).


## 2. Default da evitare

Sono le palette che le intelligenze artificiali producono "per
riflesso". Vanno bene solo se il brief le chiede esplicitamente.

**La prova della categoria** *(dalle skill: gstack)*: le interfacce
generate finiscono quasi sempre in una di tre "facce": (1) crema, serif
da titolo a forte contrasto, accento terracotta o rosso; (2) quasi
nero, un solo accento acceso, bordi che brillano; (3) filetti da
giornale, serif corsivo nei titoli, piccole etichette mono spaziate.
Se il brief non le chiedeva e ci sei finito lo stesso, hai smesso di
cercare. Prova: qualcuno indovinerebbe i colori sapendo solo il
settore ("è una libreria, quindi crema e serif")? Allora ricomincia.

- **Viola/blu con sfumature e bagliori** ("AI purple"), bottoni con
  alone viola, gradienti neon **[auto]**.
- **Crema/beige + terracotta, ottone o bordeaux + testo marrone
  scurissimo**: la palette "artigianale di lusso" che finisce su ogni
  sito di cucina, benessere o prodotti fatti a mano. Esempi di valori
  da non usare come default: sfondi `#f5f1ea`, `#f4f1ea`, `#faf7f1`,
  `#efeae0`; accenti `#d97757`, `#b08947`, `#b6553a`, `#9a2436`
  **[auto]**.
- **Quasi-nero con un solo accento verde acido o arancio vivo.**
- **Il "kit SaaS"**: tutto in card grigie arrotondate con la stessa
  ombra grigia `rgba(0,0,0,.1)` e sfumature leggere come decorazione.
- **Aloni e macchie di luce** colorate sullo sfondo (gradienti radiali
  che sfumano nel trasparente) **[auto]**.
- **Bagliori** (ombre colorate senza spostamento, "glow") **[auto]**.
- **Testo grigio su fondo colorato**: sembra sbiadito. Il testo
  secondario su un fondo colorato si ricava da quel colore (più chiaro
  o più scuro), oppure è bianco/quasi bianco **[auto]**.
- **Testo sfumato** (gradient text) **[auto]**.
- **Sezioni che cambiano tema a metà pagina**: una sezione scura in
  mezzo a una pagina chiara sembra un copia-incolla da un altro sito.
  Per variare si usa una sfumatura dello stesso tema.


## 3. Contrasto

Il riferimento è **WCAG 2.2, livello AA**. Il futuro WCAG 3 non ha
ancora un metodo di calcolo del contrasto e non arriverà prima di
qualche anno: fino ad allora vale WCAG 2. *(ricerca: Roselli 2026)*

| Cosa | Contrasto minimo |
| --- | --- |
| Testo normale | 4.5:1 **[auto]** |
| Testo grande (da 24px, o da 19px in grassetto) | 3:1 **[auto]** |
| Bordi dei campi, checkbox, icone che servono a capire, anello di focus, linee dei grafici | 3:1 **[auto]** *(ricerca: WCAG 1.4.11)* |
| Testo segnaposto (placeholder) nei campi | 4.5:1 |
| Controlli disabilitati, loghi | nessun obbligo |

- **I valori non si arrotondano**: 2.99:1 non passa. *(ricerca: W3C)*
- **Il bordo di un campo deve vedersi**: per questo il `tokens.css`
  ha un `--border-control` separato dal `--border` decorativo. Un
  campo con bordo grigio chiarissimo su bianco è introvabile per chi
  vede poco. *(mio, da WCAG 1.4.11)*
- **Testo sopra le immagini**: il contrasto va verificato nel punto
  **peggiore** dell'immagine. Se serve, un velo scuro o sfumato sotto
  il testo (`linear-gradient` da trasparente a scuro).
- **Il contrasto si verifica in tutti gli stati**: normale, hover,
  focus, selezionato, errore, e in entrambi i temi se sono due.
- **Come verificare** *(mio)*: in Chrome, strumenti per sviluppatori →
  seleziona un testo → il selettore di colore mostra il rapporto di
  contrasto. Oppure [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- **Misurare sempre, non "a occhio".** *(dalle skill: Impeccable)*


## 4. Mai solo il colore *(ricerca: Significa, WCAG 1.4.1)*

Circa **1 uomo su 12 e 1 donna su 200** non distingue bene i colori;
quasi tutti confondono il **rosso con il verde**.

- Un'informazione data dal colore deve esserci anche in un'altra
  forma: **icona, testo, forma, posizione, motivo**.
  - Errore: bordo rosso **più** icona **più** messaggio scritto.
  - Stato: pallino verde **più** la parola "Attivo".
  - Grafici: colori **più** etichette dirette o motivi diversi.
  - Link nel testo: colore **più** sottolineatura.
- **Mai rosso e verde come unica distinzione** tra due cose (es.
  "entrate/uscite", "ok/errore").
- **Prova** *(mio)*: in Chrome, strumenti per sviluppatori → menu
  "Rendering" → "Emulate vision deficiencies". Si vede la pagina come
  la vede un daltonico.


## 5. Colori di stato *(mio, salvo dove indicato)*

- Rispetta le **convenzioni**: verde = riuscito, giallo/ambra =
  attenzione, rosso = errore o pericolo, blu = informazione. Inventare
  significati nuovi confonde.
- **Solo per comunicare stati**, mai come decorazione: se il rosso
  compare come colore del brand, un errore non si distingue più.
- **Se l'accento è rosso o verde**, gli stati devono distinguersi per
  tonalità diversa **e** per icona/testo.
- Ogni stato ha una versione tenue per gli sfondi (`--error-dim`) e il
  testo sopra deve comunque superare 4.5:1.


## 6. Tema scuro *(ricerca: Atmos, Material; mio)*

Si fa solo se scelto (vedi `processo.md`). Un tema scuro **non è il
chiaro invertito**: è una palette a sé.

- **Sfondo grigio molto scuro**, non nero: valori intorno a `#121212`.
- **Più un elemento è "in alto", più è chiaro**: la pagina è la più
  scura, le card un po' più chiare, i menu e i drawer ancora di più.
  Le ombre sul fondo scuro si vedono poco: la profondità la danno le
  superfici più chiare.
- **Colori meno saturi** che nel tema chiaro (indicativamente 20 punti
  di saturazione in meno): i colori accesi su fondo scuro "vibrano".
- **Testo quasi bianco**, mai `#ffffff` puro; testo un filo più
  distanziato e, se il font è sottile, un peso in più.
- **Testi lunghi**: sul fondo scuro alcune persone (per esempio con
  astigmatismo) vedono il testo chiaro "sbavare". Per pagine con molto
  testo da leggere, il tema chiaro è la scelta più sicura.
- `color-scheme: dark` nel `tokens.css`: scrollbar e controlli nativi
  diventano scuri.


## 7. Contrasto elevato di Windows e preferenze dell'utente *(ricerca: MDN)*

Alcune persone usano i **temi a contrasto elevato** di Windows: il
browser sostituisce tutti i colori della pagina con pochi colori di
sistema e **cancella ombre e sfondi**.

- **Non affidarti solo a sfondi o ombre** per far vedere dove finisce
  un bottone o una card: in quella modalità spariscono.
- **Trucco**: dai ai bottoni e ai campi un bordo `transparent`
  (invisibile di solito). In modalità contrasto elevato il browser lo
  colora e il bottone torna visibile. Lo stesso vale per
  `outline: 2px solid transparent` sugli elementi con focus
  personalizzato.
- Icone SVG con `fill="currentColor"`: così prendono il colore del
  testo anche in quella modalità.
- Aggiustamenti solo con `@media (forced-colors: active)`, e solo
  piccoli: non si fa un secondo design.
- `@media (prefers-contrast: more)` *(mio)*: se l'utente ha chiesto
  più contrasto nel sistema, si possono rinforzare bordi e testi
  secondari usando i token più scuri.
- **Prova**: strumenti per sviluppatori di Chrome → "Rendering" →
  "Emulate CSS media feature forced-colors".


## 8. Superfici del browser *(dalle skill: Impeccable; mio)*

Le parti che il browser disegna da solo vanno colorate con la palette
(il `tokens.css` ha già i token nella sezione 8):

- anello di focus (`--focus-ring`);
- testo selezionato (`::selection`);
- cursore nei campi (`caret-color`);
- barre di scorrimento (`scrollbar-color`);
- **checkbox, radio e slider nativi**: basta `accent-color: var(--accent)`
  e prendono il colore del progetto senza doverli ridisegnare.


## 9. Colori nei grafici *(mio)*

- Token dedicati `--chart-*`, separati da accento e stati.
- I colori delle serie devono distinguersi anche per **luminosità**,
  non solo per tinta (in bianco e nero si devono ancora distinguere).
- **Massimo 6-8 categorie** con colori propri; le altre in un grigio
  "Altri".
- Etichette dirette sulle serie quando possibile, invece di una
  legenda da decifrare.


## 10. Immagini e colore *(mio)*

- Le foto devono sembrare della stessa famiglia: stessa temperatura
  (calde o fredde), stessa saturazione. Una foto fuori tono si nota
  più di un colore sbagliato.
- Se le foto sono molto colorate, l'interfaccia intorno si tiene più
  neutra, e viceversa.


## 11. Prima di consegnare

- [ ] Un solo accento, uguale ovunque.
- [ ] Nessun colore scritto a mano fuori dal `tokens.css` **[auto]**.
- [ ] Ogni coppia testo/sfondo misurata: 4.5:1 (3:1 per il grande).
- [ ] Bordi dei campi, icone utili e focus: 3:1.
- [ ] Nessuna informazione data solo dal colore.
- [ ] Provata la simulazione del daltonismo.
- [ ] Provata la modalità a contrasto elevato (bottoni e campi visibili).
- [ ] Se c'è il tema scuro: palette propria, verificata a parte.


## Fonti della ricerca

- [Non-text Contrast, WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (W3C)
- [WCAG 3 e il contrasto, aprile 2026](http://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html) (Adrian Roselli)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (Evil Martians)
- [Dark mode, buone pratiche](https://atmos.style/blog/dark-mode-ui-best-practices) (Atmos)
- [Progettare per persone daltoniche](https://significa.co/blog/designing-for-colourblind-people) (Significa)
- [forced-colors, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
- [Laws of UX, Von Restorff](https://lawsofux.com/)
- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT): design-review
