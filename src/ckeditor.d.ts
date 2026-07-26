// Hand-written types for CKEditor releases that predate upstream TypeScript support.
// Internal — excluded from the published .d.ts.

export interface PluginConstructor {
  new (editor: unknown): unknown
  readonly pluginName?: string
  readonly requires?: readonly PluginConstructor[]
}

export interface EditorInstance {
  getData(): string
  setData(data: string): void
  destroy(): Promise<void>
  on(event: string, callback: (...args: unknown[]) => void): void
  plugins: { has(name: string): boolean; get(name: string): unknown }
}

export interface EditorConstructor {
  new (...args: unknown[]): unknown
  create(element: HTMLElement | string, config?: Record<string, unknown>): Promise<EditorInstance>
  builtinPlugins?: PluginConstructor[]
  defaultConfig?: Record<string, unknown>
}
