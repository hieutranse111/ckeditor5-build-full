import FullEditor from '../../dist/index.js'
import { version } from '../../package.json'
import type { FullEditorInstance, FullEditorStatic } from '../../src/types'

const Editor = FullEditor as unknown as FullEditorStatic
const output = document.querySelector<HTMLPreElement>('#output')!
const element = document.querySelector<HTMLElement>('#editor')!

document.querySelector<HTMLElement>('#version')!.textContent = `v${version}`

Editor.create(element).then((editor: FullEditorInstance) => {
  const render = () => { output.textContent = editor.getData() }
  render()
  editor.on('change:data', render)
  ;(window as unknown as { editor: FullEditorInstance }).editor = editor
})
