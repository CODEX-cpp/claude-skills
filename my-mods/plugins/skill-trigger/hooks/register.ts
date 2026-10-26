import type { Register } from 'claude-code'
import { VERIFY, matches } from './rules'

export const register: Register = on => {
  on('prompt.submit', ($, e, next) => {
    const hit = matches(e.text)
    if (!hit.length) return next(e)
    const note = `Come prima azione invoca con lo strumento Skill: ${hit.join(', ')} (se disponibili), poi segui le loro istruzioni.`
    return next({ ...e, context: [...(e.context ?? []), note] })
  })

  on('prompt.compose', async ($, e, next) => {
    const r = await next(e)
    return { sections: [...r.sections, { id: 'skill-trigger:verify', text: VERIFY, scope: 'session' as const }] }
  })
}
