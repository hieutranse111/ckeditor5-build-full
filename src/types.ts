import type { toolbarItems } from './config'

/** Toolbar button name, derived from the default config. */
export type ToolbarItem = (typeof toolbarItems)[number] | (string & {})

export type ImageStyle = 'block' | 'side' | 'alignLeft' | 'alignCenter' | 'alignRight'

export interface FullEditorConfig {
  toolbar?: { items: ToolbarItem[] } | ToolbarItem[]
  blockToolbar?: ToolbarItem[]
  fontSize?: { options: (number | string)[] }
  image?: { toolbar?: string[]; styles?: { options: ImageStyle[] } }
  table?: { contentToolbar?: string[] }
  language?: string
  /**
   * Write `getData()` back into the source element when `destroy()` is called.
   * Defaults to `false` since CKEditor 5 v35 — before that the source element was
   * always updated. Enabling it re-exposes the data output, which is not sanitized.
   */
  updateSourceElementOnDestroy?: boolean
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
