# Usabilità: come si comportano davvero le persone

Leggi questo file quando progetti la struttura di una pagina (mini-piano
in `processo.md`), quando verifichi (`verifica.md`) e quando analizzi un
sito esistente (`redesign.md`). Non sono gusti: sono **comportamenti
osservati** nei test con gli utenti.

Legenda: *(dalle skill: gstack)* = da gstack di Garry Tan (licenza
MIT), che riprende soprattutto Steve Krug, *Don't Make Me Think*;
*(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. Le tre leggi *(dalle skill: gstack; Krug)*

1. **Non farmi pensare.** Ogni pagina si capisce da sola. Se qualcuno
   si ferma a chiedersi "dove clicco?" o "cosa vuol dire?", il design
   ha fallito. Meglio **evidente** che spiegato; meglio spiegato che
   da imparare.
2. **Non contano i clic, conta il pensiero.** Tre clic ovvi valgono
   più di un clic su cui bisogna ragionare. Ogni passaggio è una scelta
   banale ("animale, vegetale o minerale?"), non un indovinello.
3. **Togli, poi togli ancora.** Elimina metà delle parole di ogni
   pagina, poi metà di quello che resta. Via i discorsi di benvenuto,
   via le istruzioni (vedi `testi.md`).


## 2. Come si comportano

- **Scorrono, non leggono.** Gerarchia visiva chiara (più importante =
  più evidente), aree ben definite, titoli, elenchi, parole chiave in
  evidenza. Si progetta un cartellone visto passando in auto, non un
  opuscolo da studiare. *(dalle skill: gstack; ricerca: NN/g, schema
  a F, già in `layout.md`)*
- **Si accontentano** (in inglese *satisficing*): scelgono la
  **prima** opzione ragionevole, non la migliore. Quindi la scelta
  giusta deve essere la più visibile.
- **Tirano a indovinare.** Non cercano di capire come funziona:
  provano. Se arrivano allo scopo per caso, non cercheranno la strada
  "giusta"; se una cosa funziona, anche male, continueranno a usarla.
- **Non leggono le istruzioni.** Le indicazioni devono essere brevi,
  al momento giusto e impossibili da non vedere, o non esistono.
- **Seguono il "profumo" delle informazioni** *(ricerca: NN/g,
  information scent)*: decidono dove cliccare in base a quanto
  l'etichetta promette di portarli a ciò che cercano. Etichette chiare,
  senza gergo o nomi di fantasia; immagini che rappresentano davvero
  la categoria; mai promettere con un titolo ciò che la pagina non dà.


## 3. Il cartellone *(dalle skill: gstack; Krug)*

- **Usa le convenzioni.** Logo in alto a sinistra che porta alla home,
  menu in alto o a sinistra, lente per la ricerca, carrello in alto a
  destra. Si innova sulla navigazione solo quando si è **sicuri** di
  avere un'idea migliore (vedi anche `processo.md`, "originali
  nell'aspetto, convenzionali nel comportamento").
- **La gerarchia visiva è tutto.** Le cose collegate sono raggruppate,
  quelle contenute sono dentro, le più importanti sono le più evidenti.
  Parti dall'idea che ogni elemento sia rumore finché non dimostra il
  contrario.
- **Ciò che si clicca si vede che si clicca**, senza passarci sopra
  col mouse (sul telefono l'hover non c'è): forma, posizione, colore,
  sottolineatura.
- **Elimina il rumore.** Tre fonti: troppe cose che urlano, cose
  disordinate, troppe cose. Si risolve **togliendo**, non aggiungendo.
- **La chiarezza vince sulla coerenza.** Se per rendere una cosa molto
  più chiara serve renderla un po' diversa dalle altre, si sceglie la
  chiarezza.


## 4. Orientarsi: la prova del tronco *(dalle skill: gstack; Krug)*

Sul web non si ha il senso di dove ci si trova. La navigazione deve
sempre rispondere a sei domande. **Prova**: immagina di essere
catapultato su una pagina a caso, senza sapere niente. Sai rispondere
subito?

1. **Che sito è?** Logo o nome visibile e riconoscibile.
2. **Che pagina è?** Titolo della pagina evidente e uguale alla voce
   cliccata.
3. **Quali sono le sezioni principali?** Menu principale visibile.
4. **Cosa posso fare qui?** Scelte di questo livello chiare.
5. **Dove sono nell'insieme?** Voce attuale evidenziata
   (`aria-current="page"`), briciole di pane (*breadcrumb*) se la
   struttura è profonda.
6. **Come cerco?** Ricerca trovabile senza cercarla (se il sito ne ha
   bisogno).

Risultato: **superata** (6 su 6), **parziale** (4-5), **fallita** (3 o
meno). Una prova fallita è un problema **grave**, anche se la pagina è
bellissima.

Adattamento *(mio)*: per una landing di una sola pagina valgono 1, 2
(cosa offre) e 4; la ricerca spesso non serve. In modalità strumento
contano soprattutto 2, 4 e 5.


## 5. Il serbatoio della fiducia *(dalle skill: gstack; Krug)*

Ogni visitatore arriva con una scorta di pazienza. Ogni attrito la
consuma; ogni cortesia la ricarica. Quando finisce, se ne va.

**Consumano** (con un peso indicativo, su una scorta iniziale di 70
su 100; i numeri sono euristici, servono a dare priorità, non sono
misure):

| Cosa | Peso |
| --- | --- |
| Nascondere ciò che vogliono sapere (prezzi, contatti, spedizione, orari) | −15 |
| Finestre che bloccano (splash, tour obbligatori, pop-up all'arrivo) | −15 |
| Punire il loro modo di scrivere (telefono rifiutato perché ha spazi o trattini) | −10 |
| Chiedere informazioni non necessarie | −10 |
| Aspetto sciatto o poco professionale | −10 |
| Ogni scelta ambigua su cui bisogna ragionare | −5 |

**Ricaricano:**

| Cosa | Peso |
| --- | --- |
| I compiti principali sono ovvi e in vista | +10 |
| Errori facili da correggere, con istruzioni precise | +10 |
| Chiari da subito su costi e limiti | +5 |
| Passaggi risparmiati (link diretti, valori predefiniti, compilazione automatica) | +5 ciascuno |
| Scuse quando qualcosa va storto | +5 |

Lettura: sotto 30 = debito grave; 30-60 = da migliorare; sopra 60 =
sano. Si usa **percorrendo un flusso** (es. dalla home all'invio del
modulo), passo per passo, e si riportano i passaggi che consumano di
più (vedi `redesign.md` e `verifica.md`).


## 6. Telefono: stesse regole, posta più alta *(dalle skill: gstack)*

- Lo spazio è poco, ma **mai sacrificare l'usabilità per risparmiare
  spazio**.
- Tutto ciò che si può toccare deve **sembrarlo**: niente cursore,
  niente hover.
- Aree da toccare di almeno 44px (vedi `accessibilita.md`).
- Priorità spietate: ciò che serve in fretta a portata di pollice, il
  resto a pochi tocchi con una strada evidente.


## 7. Come guarda un buon progettista *(dalle skill: gstack)*

Non è una lista da spuntare: è un modo di guardare.

- **Il sistema, non la schermata**: cosa c'è prima, cosa dopo, cosa
  succede quando qualcosa si rompe.
- **Empatia come simulazione**: segnale debole, una mano sola, il capo
  che guarda, prima volta contro millesima volta.
- **Gerarchia come servizio**: cosa vede per primo, secondo, terzo?
- **Pochi vincoli, idee chiare**: "se potessi mostrare solo 3 cose,
  quali?"
- **Prima le domande, poi le opinioni**: per chi è? cosa usava prima?
- **Paranoia dei casi limite**: nome di 47 caratteri, zero risultati,
  rete che cade, daltonismo, testo tradotto più lungo.
- **Il gusto si spiega**: "non mi convince" va sempre ricondotto a un
  principio violato, altrimenti non è una critica utile.
- **Tre tempi** *(Don Norman)*: i primi 5 secondi (impatto), i primi 5
  minuti (uso), il rapporto negli anni (ricordo).
- **Fiducia al pixel**: ogni dettaglio la costruisce o la erode.


## 8. Prima di consegnare

- [ ] Prova del tronco superata su ogni tipo di pagina.
- [ ] L'azione giusta è la più visibile.
- [ ] Tutto ciò che si clicca si riconosce senza hover.
- [ ] Nessuna istruzione più lunga di una frase.
- [ ] Il flusso principale percorso: nessun passaggio che "consuma"
      fiducia senza motivo.


## Fonti

- [gstack](https://github.com/garrytan/gstack) di Garry Tan (licenza MIT): skill design-review e plan-design-review
- Steve Krug, *Don't Make Me Think, Revisited* (New Riders, 2014), citato da gstack
- [Appunti su Don't Make Me Think](https://charukiewi.cz/books/dont-make-me-think/) (Christian Charukiewicz)
- [Information scent](https://www.nngroup.com/articles/information-scent/) (Nielsen Norman Group)
- [Information foraging](https://www.nngroup.com/articles/information-foraging/) (Nielsen Norman Group)
