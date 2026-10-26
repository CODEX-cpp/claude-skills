import type { Register } from 'claude-code'

const ASK_NOTE =
  "L'utente chiede un rapportino: come prima azione invoca la skill 'rapportini:rapportino' con lo strumento Skill e segui le sue istruzioni."

const FIX_NOTE =
  "Se stai correggendo o riscrivendo un rapportino: rileggi ~/.claude/rapportini/stile.md, applica la correzione cambiando solo il livello di dettaglio e mantieni TUTTE le regole di forma (cliente in prima riga, impersonale al participio, niente congiunzioni, niente titoli o elenchi puntati, una riga = un fatto). Poi salva la regola nella sezione 9 di stile.md."

// qualsiasi richiesta che nomina il rapportino ("farmi", "fammi", "mi prepari", "serve il rapportino", ...)
const MENTION = /rapportin/i
// ...tranne quando si parla dello strumento stesso (skill, mod, stile, correzioni al codice)
const META = /\b(skill|mod|plugin|hook|stile|regol[ae]|codice|bug|funziona(?:\s+(?:male|bene|benissimo))?|sistem(?:a|are)|correggi|migliora|aggiorna)\b/i
// correzioni tipiche dopo un rapportino: valgono solo poco dopo che ne è stato chiesto uno
const CORR = /pi[uù]\s+generic|meno\s+(tecnic|dettagli|congiunzion)|troppo\s+(tecnic|dettagli|lung|complicat)|pi[uù]\s+(breve|corto|semplice)|impersonal|senza\s+congiunzion/i
const WINDOW_MS = 30 * 60 * 1000

export const register: Register = on => {
  let lastAsk = -Infinity

  on('prompt.submit', async ($, e, next) => {
    const t = e.text
    const now = await $.clock.now()
    const ctx = [...(e.context ?? [])]
    if (MENTION.test(t) && !META.test(t)) {
      lastAsk = now
      ctx.push(ASK_NOTE)
    } else if (CORR.test(t) && now - lastAsk < WINDOW_MS) {
      ctx.push(FIX_NOTE)
    }
    return ctx.length === (e.context ?? []).length ? next(e) : next({ ...e, context: ctx })
  })
}
