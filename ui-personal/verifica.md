# Verifica prima di consegnare

**Nessuna consegna senza questa verifica.** Ogni voce è un controllo
sul risultato costruito, non un'intenzione: si guarda la pagina, si
misura, si prova.

Legenda: **[auto]** = controllabile da script (quando esisterà il
controllo automatico, queste voci le farà lui); *(ricerca: …)* = dalla
ricerca online, fonti in fondo; *(mio)* = ragionamento mio.


## 0. Come verificare, senza girare in tondo

*(dalle skill: Impeccable, Frontend Design; mio)*

- **Un giro solo, poi un controllo.** Costruisci tutto, verifica tutto
  insieme (telefono e desktop nello stesso giro), correggi tutto in un
  blocco, ricontrolla **una** volta. Poi basta: la verifica infinita
  consuma tempo e non migliora il risultato.
- **Guardare, non immaginare.** Se hai modo di aprire la pagina in un
  browser e fare uno screenshot, fallo: un'immagine vale più di mille
  righe di codice riletto.
- **Le prove con i numeri si misurano** (contrasto, dimensioni,
  tempi), non si stimano "a occhio".
- **Se qualcosa non si può verificare** (es. manca un browser),
  dillo all'utente invece di scrivere "verificato".
- **Regola di fondo**: la skill `verifica-personal` (niente "fatto"
  senza una prova appena eseguita). Se durante la verifica salta fuori
  un errore, si corregge con la skill `debug-personal` (prima la causa,
  poi la correzione).


## 0.5 Sguardo d'insieme *(dalle skill: gstack)*

Prima delle liste, un giudizio "da persona" sulla pagina finita
(meglio su uno screenshot intero). Si scrive in quattro frasi:

1. "La pagina comunica **…**" (cosa arriva a colpo d'occhio:
   competenza, allegria, confusione?).
2. "Noto **…**" (cosa salta all'occhio, nel bene o nel male, con
   l'elemento preciso).
3. "Le prime 3 cose che guardo sono **…, …, …**". Se non sono le 3
   previste dal piano, **la gerarchia visiva mente**.
4. "In una parola: **…**".

Poi tre prove:

- [ ] **Prova delle aree**: indica ogni zona della pagina; se non sai
      dire in 2 secondi a cosa serve, è definita male.
- [ ] **Prova del tronco** superata (`usabilita.md`, sezione 4).
- [ ] **Flusso principale percorso** (es. home → modulo inviato)
      col serbatoio della fiducia (`usabilita.md`, sezione 5): nessun
      passaggio che la consuma senza motivo.

**Bocciature immediate** (se ce n'è anche una sola, si corregge prima
di tutto il resto):
- una griglia di card "da SaaS" come prima impressione;
- una bella immagine con un marchio debole o assente;
- un titolo forte senza un'azione chiara;
- immagini piene di dettagli dietro al testo;
- sezioni che ripetono lo stesso concetto con parole diverse;
- un carosello senza motivo;
- un'interfaccia strumento fatta di card impilate invece che di un
  layout.

**Sette domande sì/no** (servono a motivare il giudizio):
1. Il marchio o il prodotto si riconosce nella prima schermata?
2. C'è un elemento visivo forte che fa da ancora?
3. La pagina si capisce leggendo solo i titoli?
4. Ogni sezione ha un solo compito?
5. Le card servono davvero?
6. L'animazione migliora la gerarchia o l'atmosfera?
7. Il design sembrerebbe curato anche togliendo tutte le ombre
   decorative?


## 1. Il piano è stato rispettato

- [ ] Ogni sezione fa il compito scritto nel mini-piano.
- [ ] Tutti i requisiti del brief ci sono e si trovano in pochi secondi.
- [ ] La "cosa memorabile" c'è; il resto è quieto.
- [ ] Livello di animazione quello scelto con l'utente.
- [ ] Linee guida del `tokens.css` aggiornate con le decisioni prese.


## 2. Token e codice

- [ ] Nei CSS delle pagine nessun colore, dimensione, spazio, durata o
      z-index scritto a mano: solo `var(--...)` **[auto]**.
- [ ] `tokens.css` caricato per primo in ogni pagina **[auto]**.
- [ ] Ogni CSS nel suo `@layer` **[auto]**.
- [ ] Niente CSS o JS inline nell'HTML **[auto]**.
- [ ] Niente `!important` se non documentato **[auto]**. *(mio)*
- [ ] Niente codice commentato, `console.log` o file di prova
      dimenticati **[auto]**.
- [ ] Commenti in italiano che spiegano il perché dei blocchi.
- [ ] HTML valido (validatore del W3C) **[auto]**.
- [ ] Nessun errore nella console del browser **[auto]**.


## 3. Aspetto (da `tipografia.md`, `colore.md`, `layout.md`)

- [ ] Nessun font della lista nera o dei "vietati sempre" (salvo richiesta); nessun font "troppo usato" come voce dei titoli di una vetrina **[auto]**.
- [ ] Titolo hero in 2 righe; corpo almeno 16px; righe 45-75 caratteri.
- [ ] Un solo accento, uguale ovunque.
- [ ] Nessuna palette "da AI" (viola, crema+terracotta, bagliori) **[auto]**.
- [ ] Spazi solo dalla scala, ritmo stretto/ampio visibile.
- [ ] Prova dello strizzare gli occhi superata.
- [ ] Nessuna sezione a "tre card uguali", nessuna card dentro card,
      nessuna cella vuota nelle griglie **[auto]**.
- [ ] Nessuna etichetta maiuscola sopra i titoli **[auto]**.
- [ ] Nessuno dei segni "da generatore" *(dalle skill: gstack)*:
      titolo a sinistra e screenshot a destra con due bottoni come
      unica idea di hero; "Inizia" e "Scopri di più" come unici
      inviti (l'invito dice cosa si ottiene); tre numeroni sotto
      l'hero ("10k+ utenti"); recensioni con cinque stelle e frasi che
      nessuno ha detto; nastro di loghi che scorre; ogni azione
      secondaria dentro una finestra (modal); segnaposto grigio al
      posto della foto.
- [ ] Testo secondario sopra una superficie colorata tinto di quel
      colore, non grigio (vedi `colore.md`).
- [ ] Superfici del browser curate: focus, selezione, scrollbar,
      checkbox (`accent-color`).


## 4. Testi (da `testi.md`)

- [ ] Riletto **ogni** testo visibile, compresi `alt` e footer.
- [ ] Nessuna parola della lista "da AI", nessun trattino lungo (—),
      nessuna emoji, nessun Lorem ipsum **[auto]**.
- [ ] Bottoni "verbo + cosa", una sola etichetta per ogni intenzione.
- [ ] Italiano corretto: È, apostrofi, virgolette, `…`, date e importi
      in formato italiano **[auto]**.
- [ ] Testi e numeri di esempio segnalati all'utente.


## 5. Componenti e stati (da `componenti.md`)

- [ ] Ogni elemento interattivo ha hover, focus, premuto; dove serve
      disabilitato, caricamento, vuoto, errore.
- [ ] Un solo bottone primario per schermata.
- [ ] Form: etichette, tipi, `autocomplete`, errori provati davvero
      (invia il form vuoto, inserisci dati sbagliati).
- [ ] Doppio clic sull'invio: non parte due volte.
- [ ] Link e bottoni portano davvero da qualche parte (nessun
      `href="#"`) **[auto]**.


## 6. Accessibilità (da `accessibilita.md`)

- [ ] Lighthouse / axe: zero errori di accessibilità **[auto]**.
- [ ] I 6 errori più comuni assenti: contrasto, `alt`, etichette, link
      e bottoni vuoti, `lang` **[auto]**.
- [ ] Pagina usata dall'inizio alla fine **solo con la tastiera**.
- [ ] Focus sempre visibile e mai coperto da barre fisse.
- [ ] Zoom al 200% e larghezza 320px: niente perso, niente scroll
      orizzontale.
- [ ] Provato con "Riduci movimento", daltonismo simulato e contrasto
      elevato.


## 7. Responsive

- [ ] Provato a 320, 375, 768, 1024, 1440px (e telefono in
      orizzontale).
- [ ] Testi più lunghi del previsto: niente si rompe (prova a
      raddoppiare un titolo o un nome).
- [ ] Aree cliccabili almeno 44px su telefono.
- [ ] Campi dei form almeno 16px (niente zoom automatico su iPhone).
- [ ] Browser diversi: Chrome e Firefox almeno; Safari (o un iPhone)
      se possibile. *(mio)*


## 8. Prestazioni *(ricerca: web.dev)*

I tre valori che Google usa per giudicare l'esperienza di una pagina
(Core Web Vitals), misurati con Lighthouse o PageSpeed Insights:

| Misura | Cosa indica | Buono |
| --- | --- | --- |
| **LCP** | Quanto ci mette a comparire il contenuto principale | entro 2,5 s |
| **INP** | Quanto è pronta a rispondere ai clic | entro 200 ms |
| **CLS** | Quanto "salta" la pagina mentre carica | sotto 0,1 |

- [ ] Immagine principale con `fetchpriority="high"`, le altre
      `loading="lazy"`; `width` e `height` ovunque **[auto]**.
- [ ] Immagini in AVIF/WebP e di peso ragionevole.
- [ ] Font in `woff2`, solo i pesi usati, locali **[auto]**.
- [ ] Nessuna libreria caricata "per sicurezza" e non usata.
- [ ] LCP entro 2,5 s è il **requisito**; l'**obiettivo** è 1,5 s per
      i siti informativi e 2 s per le applicazioni. *(dalle skill:
      gstack)*
- [ ] Lighthouse: Prestazioni almeno 90 su telefono. *(mio: obiettivo
      pratico per pagine statiche)*


## 9. Contenuto e condivisione *(mio)*

- [ ] `<title>` e `<meta name="description">` diversi per ogni pagina.
- [ ] Anteprima per i social: `og:title`, `og:description`, `og:image`.
- [ ] Favicon.
- [ ] Pagina 404 curata, con un link per tornare.
- [ ] Nel footer: privacy, cookie (se servono), contatti.


## 10. Resoconto all'utente

Alla fine, in poche righe (vedi `processo.md`, sezione F):

1. cosa è stato fatto;
2. le scelte fatte in autonomia e perché;
3. **cosa non è stato possibile verificare** e perché;
4. cosa manca (immagini, testi veri, dati) e cosa resta da decidere.


## Fonti della ricerca

- [Web Vitals](https://web.dev/articles/vitals) (web.dev)
- [Ottimizzare l'LCP](https://web.dev/articles/optimize-lcp) (web.dev)
- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT): design-review
- [WebAIM Million 2026](https://www.accessibility.chat/articles/webaim-million-2026-same-six-failures-worse-numbers-tell-the-real-story)
