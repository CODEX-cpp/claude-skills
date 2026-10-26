export type Day = {
  turns: number
  input: number
  output: number
  cacheWrite: number
  cacheRead: number
  cost: number
  compactions: number
  hours: Record<string, number>
  heat: Record<string, number>
  chats: Record<string, { name: string; tokens: number; turns: number; models: Record<string, number> }>
  models: Record<string, { tokens: number; turns: number }>
  tools: Record<string, number>
}

export type Store = { key: string; days: Record<string, Day> }

export type View = {
  turns: number
  input: number
  output: number
  cacheWrite: number
  cacheRead: number
  cost: number
  compactions: number
  days: Record<string, number>
  hours: Record<string, number>
  heat: Record<string, number>
  chats: Record<string, { name: string; tokens: number; turns: number; models: Record<string, number> }>
  models: Record<string, { tokens: number; turns: number }>
  tools: Record<string, number>
}

declare module 'claude-code' {
  interface PluginState {
    'usage-band': { store: Store | null; range: 'mese' | '7g' }
  }
}
