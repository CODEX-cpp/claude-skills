export type ModeId = 'sub' | 'wf' | 'cq' | 'cf' | 'team'

const COUNCIL =
  "la skill claude-council è solo manuale (non invocarla con lo strumento Skill): leggi ~/.claude/skills/claude-council/SKILL.md e segui la procedura lanciando lo strumento Workflow con scriptPath = percorso assoluto di ~/.claude/skills/claude-council/council-workflow.js, question = il messaggio dell'utente alla lettera, context = 1-3 frasi utili sul progetto. I membri girano su Sonnet 5.5. Alla fine fai tu la sintesi finale come descritta nella skill."

export const MODES: {
  id: ModeId
  name: string
  how: string
  scale: string
  cost: string
  note: string
}[] = [
  {
    id: 'sub',
    name: 'Subagenti',
    how: 'Claude lancia 2-3 agenti con compiti diversi e ti riporta i riassunti.',
    scale: '2-3 agenti.',
    cost: 'Basso (circa 0,1-0,3M token).',
    note:
      "L'utente ha scelto la modalità SUBAGENTI per questo messaggio: svolgi il lavoro lanciando 2-3 subagenti in parallelo, con compiti distinti e non sovrapposti. Per ciascuno scegli il modello più piccolo adatto e il minimo effort utile. Poi riassumi i risultati. Non usare workflow né agent team.",
  },
  {
    id: 'wf',
    name: 'Workflow',
    how: 'Uno script coordina più agenti e li fa controllare a vicenda.',
    scale: 'Fino a 10 agenti.',
    cost: 'Medio-alto (circa 0,5-1,0M token).',
    note:
      "L'utente ha scelto la modalità WORKFLOW DINAMICO per questo messaggio: usa un workflow (uno script che coordina molti agenti) con fino a 10 agenti al massimo, partendo da una porzione ridotta del lavoro, e fai verificare i risultati da un altro agente prima di riportarli. Non usare agent team.",
  },
  {
    id: 'cq',
    name: 'Council quick',
    how: '4 esperti (Architetto, Scettico, Pragmatico, Ricercatore) rispondono; poi Claude sintetizza.',
    scale: '4 agenti Sonnet.',
    cost: 'Medio (circa 0,3-0,5M token).',
    note: `L'utente ha scelto COUNCIL QUICK per questo messaggio: ${COUNCIL} Usa mode: "quick" (opinioni e sintesi, senza revisione incrociata).`,
  },
  {
    id: 'cf',
    name: 'Council full',
    how: 'Come quick, poi ogni esperto critica e classifica in anonimo le risposte degli altri.',
    scale: '4 agenti, 2 giri (8 passaggi).',
    cost: 'Alto (circa 0,6-1,0M token).',
    note: `L'utente ha scelto COUNCIL FULL per questo messaggio: ${COUNCIL} Usa mode: "full" (con revisione incrociata anonima).`,
  },
  {
    id: 'team',
    name: 'Team',
    how: 'Sessioni complete che si parlano e si dividono i compiti.',
    scale: '3-5 sessioni.',
    cost: 'Molto alto (oltre 2M token, circa 7 volte).',
    note:
      "L'utente ha scelto la modalità AGENT TEAM per questo messaggio: crea un team di 3 teammate con nomi chiari e compiti separati, che comunicano tra loro. Se non riesci a creare il team, dillo e proponi i subagenti.",
  },
]

export const modeById = (id: string) => MODES.find(m => m.id === id)

// I comandi (/...) non consumano il toggle: non sono "il messaggio".
export const consumes = (text: string) => !text.trimStart().startsWith('/')
