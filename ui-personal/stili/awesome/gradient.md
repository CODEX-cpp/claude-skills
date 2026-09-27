# Stile: Gradient (sfumature fatte bene)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "gradient" di Awesome Design (licenza MIT), riscritto:
l'originale aveva solo "Gradient design style", una sfumatura viola
`#990FFA` → rosa `#E60076` (il cliché "da AI" per eccellenza) e i
font Montserrat e Space Grotesk (in lista nera). Legenda:
*(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Le sfumature sono il materiale principale**, ma fatte con metodo:
colori che nascono dal soggetto (un'alba, il mare, un materiale), non
il solito viola-rosa. Superfici morbide e luminose, profondità senza
ombre.

**Adatto a**: app di consumo, musica, benessere, eventi, prodotti
digitali giovani.
**Poco adatto a**: servizi seri e istituzionali, gestionali.

**Differenza con i vicini** *(mio)*:
- **colorful**: colori pieni e separati; gradient li fonde.
- **glassmorphism**: vetro smerigliato **sopra** le sfumature;
  gradient usa le sfumature da sole.
- **cosmic**: sfumature scure e spaziali; gradient è luminoso.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile gradient |
| --- | --- |
| Niente sfumature come decorazione | **Sfumature ammesse** su sfondi di sezione, bottoni principali e fasce, con le regole della sezione 4 |
| Niente viola/blu "da AI" | **Resta vietato**: viola-blu e viola-rosa sono proprio il cliché da evitare |
| Niente testo sfumato | **Resta vietato**: il testo è sempre pieno |
| Niente aloni radiali decorativi | Ammessi **solo** come sfondo di una sezione, mai come "bagliore" dietro i titoli |


## 3. Tipografia

- Un sans pulito e morbido, pesi 400-700.
- Direzioni possibili *(mio, da verificare)*: Figtree, Onest, Lexend.
  **Niente lista nera** (l'originale usava Montserrat e Space Grotesk).
- Testo sempre **pieno** (bianco o scuro), mai sfumato.


## 4. Colore e sfumature

Base, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f5f6f8` | |
| `--text` | `#15171c` | 17.9:1 |
| `--text-muted` | `#555b66` | 6.8:1 |
| `--border-control` | `#858b96` | 3.2:1 anche su `--surface` |
| `--accent` | `#0f6e8c` | 5.8:1; testo bianco sopra 5.8:1 |

Due famiglie di sfumature di partenza (testo bianco sopra, verificato
su **entrambi** gli estremi):

| Nome | Da | A | Testo bianco |
| --- | --- | --- | --- |
| Mare | `#0f6e8c` | `#17704a` | 5.8:1 → 6.1:1 |
| Alba | `#9e2a4f` | `#b4531c` | 7.3:1 → 5.0:1 |

Regole *(ricerca: MDN; mio)*:
- **Sfumare nello spazio colore OKLCH**:
  `linear-gradient(135deg in oklch, #0f6e8c, #17704a)`. Nel modo
  predefinito (sRGB) il punto centrale tra due colori diventa grigio e
  "sporco"; in OKLCH resta pulito e luminoso. Per i browser vecchi si
  mette prima una riga con la sfumatura normale.
- **Colori vicini sulla ruota** (2 tinte adiacenti): sfumature tra
  colori opposti passano per il grigio o per colori strani.
- **Il contrasto del testo si misura nel punto peggiore** della
  sfumatura (di solito l'estremo più chiaro).
- **Una sola famiglia di sfumature per sito.**


## 5. Layout

- Sfondi sfumati su poche sezioni chiave (hero, invito finale); il
  resto su fondo chiaro neutro, per riposare lo sguardo.
- Card su sfondo sfumato: pieno bianco, con testo scuro.


## 6. Componenti

- Bottone principale con la sfumatura (testo bianco), secondario pieno
  o con bordo.
- Hover: la sfumatura si sposta leggermente (`background-position`),
  senza animazioni continue.
- Campi e form sempre su fondo pieno chiaro.


## 7. Movimento

Livello "misurata". **Niente sfumature che si muovono all'infinito**
sullo sfondo (appesantiscono e distraggono).


## 8. Immagini

Foto luminose con colori in armonia con la sfumatura, o nessuna foto:
le sfumature bastano come immagine.


## 9. Trappole

- Viola-blu o viola-rosa: il cliché più riconoscibile.
- Sfumature "sporche" (grigie al centro): usa `in oklch`.
- Testo chiaro sull'estremo chiaro: misura sempre il punto peggiore.
- Sfumature ovunque: stancano; poche e grandi.


## 10. Controllo dello stile

- [ ] Una famiglia di sfumature, colori vicini, interpolazione OKLCH.
- [ ] Testo mai sfumato; contrasto verificato sugli estremi.
- [ ] Nessuna animazione continua di sfondo.


## Fonti

- [linear-gradient e metodi di interpolazione](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) (MDN)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (Evil Martians)
- Stile "gradient" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
