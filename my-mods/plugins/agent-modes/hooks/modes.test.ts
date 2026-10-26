import { test, expect } from 'claude-code/testing'
import { MODES, consumes, modeById } from './modes'

test('cinque modalità, ognuna con nota e le tre sezioni', () => {
  expect(MODES.map(m => m.id)).toEqual(['sub', 'wf', 'cq', 'cf', 'team'])
  for (const m of MODES) {
    expect(m.note.length).toBeGreaterThan(40)
    expect(m.how && m.scale && m.cost).toBeTruthy()
  }
  expect(modeById('wf')?.name).toBe('Workflow')
})

test('le note del council indicano la modalità giusta', () => {
  expect(modeById('cq')?.note).toContain('mode: "quick"')
  expect(modeById('cf')?.note).toContain('mode: "full"')
  expect(modeById('cq')?.note).toContain('council-workflow.js')
})

test('i comandi non consumano il toggle', () => {
  expect(consumes('controlla il codice')).toBe(true)
  expect(consumes('/compact')).toBe(false)
  expect(consumes('  /dashboard')).toBe(false)
})
