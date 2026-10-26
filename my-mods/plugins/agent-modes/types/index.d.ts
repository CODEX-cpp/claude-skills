export type ModeId = 'sub' | 'wf' | 'cq' | 'cf' | 'team'

declare module 'claude-code' {
  interface PluginState {
    'agent-modes': { mode: ModeId | 'none'; teamTurn: boolean }
  }
}
