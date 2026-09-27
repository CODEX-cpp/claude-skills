# Stile: Enterprise (piattaforma cloud scura, dashboard)

Si apre solo quando l'utente chiede questo stile. Quando è attivo,
**scavalca le regole di gusto** della skill dove indicato qui sotto,
ma **mai `accessibilita.md`**. I valori scelti vanno nel `tokens.css`
e la scelta dello stile nelle Linee guida (sezione 22).

Origine: stile "enterprise" di Awesome Design (licenza MIT), riscritto
tenendo la sua descrizione: tema scuro da piattaforma cloud (ispirata
a strumenti per sviluppatori), griglie modulari, pannelli, forte
gerarchia dei dati, IBM Plex Sans. Il blu `#0C5CAB` come testo sul
fondo scuro non basta: tenuto per i bottoni (testo bianco 6.7:1),
schiarito per link e grafici. Legenda: *(ricerca: …)* = fonti in fondo; *(mio)* = ragionamento mio.


## 1. L'idea

**Un pannello di controllo per lavorare ore.** Tema scuro sobrio,
dati in primo piano, moduli (pannelli) su una griglia, navigazione
laterale, tabelle dense ma leggibili, stati chiari (attivo, errore,
in corso). Efficiente, non spettacolare.

**Adatto a**: gestionali, pannelli di amministrazione, strumenti
per sviluppatori, monitoraggio, SaaS B2B.
**Poco adatto a**: siti vetrina, pubblico occasionale.

**Differenza con i vicini** *(mio)*:
- **corporate**: sito istituzionale chiaro; enterprise è l'applicazione.
- **bento**: riquadri di presentazione; enterprise usa riquadri di dati.
- **mono**: terminale; enterprise è interfaccia grafica completa.


## 2. Cosa cambia rispetto alle regole base

| Regola base | Nello stile enterprise |
| --- | --- |
| Tema scelto dal contesto | **Scuro** di default, **con tema chiaro** disponibile (chi lavora molte ore o con luce forte legge meglio in chiaro) |
| Densità a scelta | **Densità compatta** nelle tabelle, target sempre 24px o più |
| Pannelli di vetro | Ammessi solo come leggera trasparenza sui menu sovrapposti; i pannelli di lavoro sono **pieni** |


## 3. Tipografia

- IBM Plex Sans (dall'originale) o simile, pesi 400-600, testo
  14-16px nelle tabelle, 16px nel resto.
- Numeri sempre `tabular-nums`, allineati a destra.
- Mono (IBM Plex Mono) per ID, codici, log.
- **Niente lista nera.**


## 4. Colore

Palette di partenza, contrasti verificati *(mio)*:

| Ruolo | Valore | Nota |
| --- | --- | --- |
| `--bg` | `#09090b` | |
| `--surface` | `#141418` | |
| `--text` | `#e8e8ec` | 16.3:1 |
| `--text-muted` | `#a1a1aa` | 7.8:1 |
| `--border-control` | `#71717a` | 4.1:1 (3.8 su `--surface`) |
| `--accent` | `#5aa5f5` | link e grafici: 7.7:1; testo scuro sopra 7.7:1 |
| Bottone principale | `#0c5cab` | dall'originale, testo bianco 6.7:1 |

Stati (su `--surface`):

| Stato | Colore | Contrasto |
| --- | --- | --- |
| Successo | `#34d399` | 9.6:1 |
| Attenzione | `#fbbf24` | 11.0:1 |
| Errore | `#f87171` | 6.6:1 |

- Stati sempre con **icona e testo**, non solo colore.
- `color-scheme: dark` e variante chiara in `:root.tema-alt`.


## 5. Layout

- Barra laterale di navigazione (comprimibile), barra in alto con
  ricerca e account, contenuto a griglia di pannelli.
- Intestazione di pagina con titolo, filtri e azione principale.
- Tabelle con intestazione fissa (`position: sticky`), ordinamento
  annunciato (`aria-sort`), paginazione o caricamento esplicito.
- Stati vuoti utili ("Nessun progetto. Crea il primo") e di
  caricamento (scheletri) per ogni pannello.


## 6. Componenti

- Bottoni: principale blu pieno, secondari con bordo, distruttivi
  rossi con conferma.
- Badge di stato con icona e testo.
- Grafici con palette verificata (sezione 10 del `tokens.css`),
  legende testuali e tabella alternativa.
- Scorciatoie da tastiera documentate (e che non rubano i tasti del
  lettore di schermo).


## 7. Movimento

Livello "nessuna" o "misurata": solo feedback (caricamenti, conferme).


## 8. Immagini

Quasi nessuna: icone, avatar, grafici.


## 9. Trappole

- Grigio su grigio "elegante" nelle tabelle.
- Blu originale come testo sul fondo scuro.
- Stati solo a colori.
- Nessun tema chiaro.


## 10. Controllo dello stile

- [ ] Numeri tabellari allineati.
- [ ] Stati con icona e testo.
- [ ] Tema chiaro disponibile.
- [ ] Ogni pannello ha stato vuoto, caricamento ed errore.


## Fonti

- [Dark mode e leggibilità](https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone) (BOIA)
- [aria-sort](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) (MDN)
- Stile "enterprise" di [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) (licenza MIT)
