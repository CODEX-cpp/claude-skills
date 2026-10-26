import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import { MODES, consumes, modeById } from './modes'

const mode = atom({ plugin: 'agent-modes', key: 'mode' } as const, 'none')
// Vero solo durante il turno in cui hai usato il toggle Team: lì gli agenti possono avere un nome.
const teamTurn = atom({ plugin: 'agent-modes', key: 'teamTurn' } as const, false)

export const register: Register = on => {
  // Il toggle vale per il prossimo messaggio e poi si spegne.
  on('prompt.submit', async ($, e, next) => {
    if (consumes(e.text)) {
      const cur = await read($, mode)
      const m = cur === 'none' ? undefined : modeById(cur)
      await update($, teamTurn, () => m?.id === 'team')
      if (m) {
        await update($, mode, () => 'none')
        $.ui.toast(`Modalità agenti: ${m.name} (solo per questo messaggio)`)
        $.ui.invalidate('ui.render')
        return next({ ...e, context: [...(e.context ?? []), m.note] })
      }
    }
    return next(e)
  })

  on('turn.complete', async ($, e, next) => {
    await update($, teamTurn, () => false)
    return next(e)
  })

  // Con gli Agent Teams accesi un agente con nome parte come teammate (più costoso).
  // Fuori dal toggle Team tolgo il nome: resta un subagente normale.
  on('tool.call', { tool: 'Agent' }, async ($, e, next) => {
    if (e.name === undefined || (await read($, teamTurn))) return next(e)
    const { name, ...rest } = e
    return next(rest as typeof e)
  })

  // La fascia sta sotto quella del contesto: si compone con quello che c'è già.
  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const below = await next(e)
    if (e.props.hasSurvey) return below

    const { Box, Button, Text } = $.ui.resolve(e)
    const cur = await read($, mode)
    const active = modeById(cur)

    return (
      <Box flexDirection="column">
        {below}
        <Box flexDirection="row" gap={2} marginTop={1}>
          <Text dimColor>Agenti</Text>
          {MODES.map(m => (
            <Box key={`item-${m.id}`} flexDirection="row">
              <Button
                key={`toggle-${m.id}`}
                plain
                dimColor={cur !== m.id}
                label={`${cur === m.id ? '☑' : '☐'}  ${m.name}`}
                onPress={() => update($, mode, c => (c === m.id ? 'none' : m.id))}
              />
              <Box
                position="absolute"
                bottom={1}
                left={0}
                width={76}
                display="none"
                hover={{ display: 'flex' }}
                flexDirection="column"
                backgroundColor="#2b2a28"
                paddingX={1}
              >
                <Text bold>{m.name}</Text>
                <Text>Come funziona: {m.how}</Text>
                <Text>Scala: {m.scale}</Text>
                <Text>Costo: {m.cost}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        {active ? (
          <Text dimColor>
            {active.name}: {active.scale} Costo: {active.cost}
          </Text>
        ) : null}
      </Box>
    )
  })
}
