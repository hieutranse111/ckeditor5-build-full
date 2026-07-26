import { expectTypeOf } from 'vitest'
import { describe, it } from 'vitest'
import type { FullEditorConfig, ToolbarItem } from '../src/types'

describe('public types', () => {
  it('ToolbarItem accepts valid button names', () => {
    expectTypeOf<'bold'>().toMatchTypeOf<ToolbarItem>()
    expectTypeOf<'heading'>().toMatchTypeOf<ToolbarItem>()
    expectTypeOf<'|'>().toMatchTypeOf<ToolbarItem>()
  })

  it('ToolbarItem accepts a third-party plugin button while keeping autocomplete', () => {
    expectTypeOf<'thirdPartyButton'>().toMatchTypeOf<ToolbarItem>()
  })

  it('FullEditorConfig accepts known config', () => {
    const config: FullEditorConfig = {
      toolbar: { items: ['bold', 'italic'] },
      fontSize: { options: [12, 14] },
      language: 'en'
    }
    expectTypeOf(config).toMatchTypeOf<FullEditorConfig>()
  })

  it('FullEditorConfig accepts unknown keys (third-party plugins)', () => {
    const config: FullEditorConfig = { thirdPartyPlugin: { foo: 1 } }
    expectTypeOf(config).toMatchTypeOf<FullEditorConfig>()
  })
})
