import type { toolbarItems } from './config'

/** Toolbar button name, derived from the default config. */
export type ToolbarItem = (typeof toolbarItems)[number] | (string & {})

export type ImageStyle = 'full' | 'side' | 'alignLeft' | 'alignCenter' | 'alignRight'

export interface FullEditorConfig {
  toolbar?: { items: ToolbarItem[] } | ToolbarItem[]
  blockToolbar?: ToolbarItem[]
  fontSize?: { options: (number | string)[] }
  image?: { toolbar?: string[]; styles?: ImageStyle[] }
  table?: { contentToolbar?: string[] }
  language?: string
  /** Config for third-party plugins. */
  [key: string]: unknown
}

export interface FullEditorInstance {
  getData(): string
  setData(data: string): void
  destroy(): Promise<void>
  on(event: string, callback: (...args: unknown[]) => void): void
  plugins: { has(name: string): boolean; get(name: string): unknown }
}

export interface FullEditorStatic {
  create(element: HTMLElement | string, config?: FullEditorConfig): Promise<FullEditorInstance>
  builtinPlugins: unknown[]
  defaultConfig: FullEditorConfig
}
