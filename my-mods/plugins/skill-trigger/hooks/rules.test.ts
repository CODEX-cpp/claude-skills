import { test, expect } from 'claude-code/testing'
import { matches } from './rules'

const ui = 'anthropic-skills:ui-personal'
const dbg = 'anthropic-skills:debug-personal'

test('italiano comune attiva le tue skill', () => {
  expect(matches('fammi un sito con una landing page')).toContain(ui)
  expect(matches('il pulsante non si vede bene su telefono')).toContain(ui)
  expect(matches('lo script non funziona')).toContain(dbg)
  expect(matches('mi da errore quando salvo')).toContain(dbg)
  expect(matches('perché non parte?')).toContain(dbg)
})

test('GSAP e Three.js in italiano', () => {
  expect(matches('fai comparire le sezioni scorrendo con effetto parallasse')).toContain('gsap-scrolltrigger')
  expect(matches('anima il titolo lettera per lettera')).toContain('gsap-plugins')
  expect(matches('la pagina va a scatti')).toContain('gsap-performance')
  expect(matches('metti un modello 3d glb nella scena')).toContain('threejs-loaders')
  expect(matches('voglio un effetto bloom e sfocatura')).toContain('threejs-postprocessing')
  expect(matches('aggiungi le ombre e una luce direzionale')).toContain('threejs-lighting')
  expect(matches('rivedi il codice di questa pull request')).toContain('code-review')
})

const sec = 'security-audit'

test('parole di sicurezza attivano security-audit', () => {
  expect(matches('dobbiamo essere a norma NIS2')).toContain(sec)
  expect(matches('c\'è una nuova CVE su PHP')).toContain(sec)
  expect(matches('abbiamo trovato una falla nel sito')).toContain(sec)
  expect(matches('mettiamo in sicurezza il server')).toContain(sec)
  expect(matches('fai un pen test del gestionale')).toContain(sec)
  expect(matches('la password è salvata con md5')).toContain(sec)
  expect(matches('phpMyAdmin è esposto su internet')).toContain(sec)
  expect(matches('serve un audit di sicurezza')).toContain(sec)
  expect(matches('c\'è il rischio di sql injection e xss')).toContain(sec)
  expect(matches('sospetto una webshell o una backdoor')).toContain(sec)
})

test('security-audit non si accende per frasi comuni e resta nel tetto di 4', () => {
  expect(matches('ciao come stai oggi')).not.toContain(sec)
  expect(matches('fai un sito con una landing page')).not.toContain(sec)
  expect(matches('anima il titolo lettera per lettera')).not.toContain(sec)
  expect(matches('verifica la sicurezza del sito: errore nel css e animazione allo scroll, shader').length).toBeLessThanOrEqual(4)
  expect(matches('verifica la sicurezza del sito: errore nel css e animazione allo scroll, shader')).toContain(sec)
})

test('frasi neutre non attivano niente e il tetto è 4', () => {
  expect(matches('ciao come stai oggi')).toEqual([])
  expect(matches('sito con animazione allo scroll, shader, bloom, errore nel 3d e css').length).toBeLessThanOrEqual(4)
})
