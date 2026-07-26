import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import { builtinPlugins } from './plugins'
import { defaultConfig } from './config'

class FullEditor extends (ClassicEditorBase as unknown as { new (...args: unknown[]): object }) {}

;(FullEditor as unknown as { builtinPlugins: unknown }).builtinPlugins = builtinPlugins
;(FullEditor as unknown as { defaultConfig: unknown }).defaultConfig = defaultConfig

export default FullEditor
