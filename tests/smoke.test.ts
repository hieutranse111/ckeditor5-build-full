import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import FullEditor from '../dist/index.js'
import type { FullEditorInstance, FullEditorStatic } from '../src/types'

const Editor = FullEditor as unknown as FullEditorStatic

describe('FullEditor smoke', () => {
  let element: HTMLElement
  let editor: FullEditorInstance | undefined

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(async () => {
    if (editor) {
      await editor.destroy()
      editor = undefined
    }
    element.remove()
  })

  it('declares exactly 51 builtin plugins', () => {
    expect(Editor.builtinPlugins).toHaveLength(51)
  })

  it('initializes from a div', async () => {
    editor = await Editor.create(element)
    expect(editor).toBeDefined()
  })

  it('round-trips setData/getData', async () => {
    editor = await Editor.create(element)
    editor.setData('<p>hello</p>')
    expect(editor.getData()).toContain('hello')
  })

  it('loads representative plugins', async () => {
    editor = await Editor.create(element)
    for (const name of [
      'Bold',
      'Italic',
      'Table',
      'HtmlEmbed',
      'WordCount',
      'TextPartLanguage',
      'TableCaption'
    ]) {
      expect(editor.plugins.has(name), `missing plugin ${name}`).toBe(true)
    }
  })

  it('round-trips a table caption', async () => {
    editor = await Editor.create(element)
    editor.setData(
      '<figure class="table"><table><tbody><tr><td>a</td></tr></tbody></table><figcaption>Cap</figcaption></figure>'
    )
    expect(editor.getData()).toContain('<figcaption>Cap</figcaption>')
  })

  it('injects CSS into the document', async () => {
    editor = await Editor.create(element)
    const tag = document.getElementById('ckeditor5-build-full')
    expect(tag).not.toBeNull()
    expect(tag!.textContent).toContain('.ck')
  })

  it('destroys cleanly', async () => {
    const e = await Editor.create(element)
    await e.destroy()
    expect(document.querySelector('.ck-editor')).toBeNull()
  })
})
