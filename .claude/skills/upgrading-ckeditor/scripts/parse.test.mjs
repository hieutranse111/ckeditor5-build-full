import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  parseImports,
  parseBuiltinPlugins,
  parseModuleDeclarations,
  parseSmokeCount,
  parseReadmeCount,
  parseReadmePluginList
} from './parse.mjs'

test('parseImports keeps default package imports', () => {
  const src = [
    "import type { PluginConstructor } from './ckeditor'",
    "import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'",
    "import { builtinPlugins } from './plugins'"
  ].join('\n')
  assert.deepEqual(parseImports(src), [
    { name: 'Bold', specifier: '@ckeditor/ckeditor5-basic-styles/src/bold' }
  ])
})

test('parseBuiltinPlugins reads the array in source order', () => {
  const src = [
    'export const builtinPlugins: PluginConstructor[] = [',
    '  Essentials,',
    '  Bold,',
    '  Italic',
    ']'
  ].join('\n')
  assert.deepEqual(parseBuiltinPlugins(src), ['Essentials', 'Bold', 'Italic'])
})

test('parseBuiltinPlugins returns empty when the array is absent', () => {
  assert.deepEqual(parseBuiltinPlugins('const x = 1'), [])
})

test('parseModuleDeclarations reads every declare module specifier', () => {
  const src = [
    "declare module '@ckeditor/ckeditor5-basic-styles/src/bold' {",
    '  const Bold: import(\'./ckeditor\').PluginConstructor',
    '  export default Bold',
    '}'
  ].join('\n')
  assert.deepEqual(parseModuleDeclarations(src), [
    '@ckeditor/ckeditor5-basic-styles/src/bold'
  ])
})

test('parseSmokeCount reads the toHaveLength assertion', () => {
  assert.equal(parseSmokeCount('expect(Editor.builtinPlugins).toHaveLength(50)'), 50)
  assert.equal(parseSmokeCount('nothing here'), null)
})

test('parseReadmeCount reads the plugin count sentence', () => {
  assert.equal(parseReadmeCount('Classic Editor with 50 plugins and a toolbar.'), 50)
  assert.equal(parseReadmeCount('no count'), null)
})

test('parseReadmePluginList splits the section on commas and newlines', () => {
  const src = [
    '## Included plugins',
    '',
    'Alignment, Autoformat, BlockQuote,',
    'Bold, WordCount',
    '',
    '## License',
    '',
    'GPL-2.0-or-later'
  ].join('\n')
  assert.deepEqual(parseReadmePluginList(src), [
    'Alignment',
    'Autoformat',
    'BlockQuote',
    'Bold',
    'WordCount'
  ])
})
