# Stile: Corporate (azienda solida e coerente)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "corporate" di Awesome Design (licenza MIT), riscritto:
l'originale aveva la descrizione ("professionalità, coerenza, allineamento
al marchio, layout minimali, griglie strutturate") ma Open Sans,
Poppins e i colori di default blu/viola. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Un'azienda seria che si presenta bene.** Griglia ordinata, blu
istituzionale (o il colore del marchio), foto vere di persone e
luoghi, percorsi chiari verso "Servizi", "Chi siamo", "Contatti".
Rassicurante e coerente in ogni pagina.

**Adatto a**: aziende medio-grandi, industrie, studi professionali,
banche, assicurazioni, consulenza, siti di gruppo.
**Poco adatto a**: marchi giovani e creativi.

**Differenza con i vicini** *(mio)*:
- **professional**: interfaccia sobria per servizi e strumenti;
  corporate è il sito istituzionale di un'azienda.
- **enterprise**: piattaforma software con dati; corporate è
  comunicazione.
- **basic**: report e documenti; corporate è il sito vetrina.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile corporate |
| --- | --- |
| Accento a scelta | **Colore del marchio** del cliente (verificato a 4.5:1; se non passa, versione scura per testo e bottoni) |
| Struttura libera | **Struttura convenzionale**: menu in alto, footer ricco, pagine tipo |


## 3. Tipografia

- Un sans affidabile con molti pesi, eventualmente il font del marchio.
- Direzioni possibili *(mio, da verificare)*: Source Sans 3, IBM Plex
  Sans, Libre Franklin, Public Sans. **Niente lista nera.**


## 4. Colore

Palette di partenza (se il cliente non ha un marchio), contrasti
verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f4f6f8` | |
| `--text` | `#0f1b2d` | 17.3:1 |
| `--text-muted` | `#4a5568` | 7.5:1 |
| `--border-control` | `#7f8896` | 3.58:1 |
| `--accent` | `#0b4f9c` | blu istituzionale: 8.0:1; testo bianco sopra 8.0:1 |


## 5. Layout

- Pagine tipo: home, servizi (elenco + pagina per servizio), chi
  siamo, lavora con noi, news, contatti.
- Home: chi siete in una frase, 3-6 servizi, numeri (veri), casi,
  contatti.
- Footer completo: sedi, P. IVA, privacy e cookie, dichiarazione di
  accessibilità (in Italia/UE può essere obbligatoria: vedi
  `accessibilita.md`), social.


## 6. Componenti

- Bottoni blu pieni, angoli 4-6px.
- Card servizi uniformi con icona, titolo, frase, link.
- Moduli di contatto brevi (nome, email, messaggio, consenso).


## 7. Movimento

Livello "nessuna" o "misurata".


## 8. Immagini

Foto vere di persone, sedi, prodotti. Le foto stock "stretta di mano"
tolgono credibilità: meglio poche foto vere.


## 9. Trappole

- Testi vaghi ("soluzioni innovative a 360°"): vedi `testi.md`.
- Foto stock.
- Colore del marchio usato così com'è anche quando non raggiunge il
  contrasto.


## 10. Controllo dello stile

- [ ] Colore del marchio verificato.
- [ ] Footer con dati legali e accessibilità.
- [ ] Foto vere.


## Fonti

- [Dichiarazione di accessibilità](https://www.agid.gov.it/it/design-servizi/accessibilita) (AgID)
- Stile "corporate" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
