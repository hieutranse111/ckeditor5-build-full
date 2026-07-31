// Must stay free of top-level import/export. A .d.ts with either becomes a module,
// which turns `declare module` into augmentation and requires the target to already
// have types. Inline import() keeps this file a global script.

declare module '@ckeditor/ckeditor5-editor-classic/src/classiceditor' {
  const ClassicEditorBase: import('./ckeditor').EditorConstructor
  export default ClassicEditorBase
}

declare module '@ckeditor/ckeditor5-essentials/src/essentials' {
  const Essentials: import('./ckeditor').PluginConstructor
  export default Essentials
}

declare module '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter' {
  const UploadAdapter: import('./ckeditor').PluginConstructor
  export default UploadAdapter
}

declare module '@ckeditor/ckeditor5-autoformat/src/autoformat' {
  const Autoformat: import('./ckeditor').PluginConstructor
  export default Autoformat
}

declare module '@ckeditor/ckeditor5-basic-styles/src/bold' {
  const Bold: import('./ckeditor').PluginConstructor
  export default Bold
}

declare module '@ckeditor/ckeditor5-basic-styles/src/italic' {
  const Italic: import('./ckeditor').PluginConstructor
  export default Italic
}

declare module '@ckeditor/ckeditor5-block-quote/src/blockquote' {
  const BlockQuote: import('./ckeditor').PluginConstructor
  export default BlockQuote
}

declare module '@ckeditor/ckeditor5-ckfinder/src/ckfinder' {
  const CKFinder: import('./ckeditor').PluginConstructor
  export default CKFinder
}

declare module '@ckeditor/ckeditor5-cloud-services/src/cloudservices' {
  const CloudServices: import('./ckeditor').PluginConstructor
  export default CloudServices
}

declare module '@ckeditor/ckeditor5-easy-image/src/easyimage' {
  const EasyImage: import('./ckeditor').PluginConstructor
  export default EasyImage
}

declare module '@ckeditor/ckeditor5-heading/src/heading' {
  const Heading: import('./ckeditor').PluginConstructor
  export default Heading
}

declare module '@ckeditor/ckeditor5-image/src/image' {
  const Image: import('./ckeditor').PluginConstructor
  export default Image
}

declare module '@ckeditor/ckeditor5-image/src/imagecaption' {
  const ImageCaption: import('./ckeditor').PluginConstructor
  export default ImageCaption
}

declare module '@ckeditor/ckeditor5-image/src/imagestyle' {
  const ImageStyle: import('./ckeditor').PluginConstructor
  export default ImageStyle
}

declare module '@ckeditor/ckeditor5-image/src/imagetoolbar' {
  const ImageToolbar: import('./ckeditor').PluginConstructor
  export default ImageToolbar
}

declare module '@ckeditor/ckeditor5-image/src/imageupload' {
  const ImageUpload: import('./ckeditor').PluginConstructor
  export default ImageUpload
}

declare module '@ckeditor/ckeditor5-indent/src/indent' {
  const Indent: import('./ckeditor').PluginConstructor
  export default Indent
}

declare module '@ckeditor/ckeditor5-link/src/link' {
  const Link: import('./ckeditor').PluginConstructor
  export default Link
}

declare module '@ckeditor/ckeditor5-list/src/list' {
  const List: import('./ckeditor').PluginConstructor
  export default List
}

declare module '@ckeditor/ckeditor5-media-embed/src/mediaembed' {
  const MediaEmbed: import('./ckeditor').PluginConstructor
  export default MediaEmbed
}

declare module '@ckeditor/ckeditor5-paragraph/src/paragraph' {
  const Paragraph: import('./ckeditor').PluginConstructor
  export default Paragraph
}

declare module '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice' {
  const PasteFromOffice: import('./ckeditor').PluginConstructor
  export default PasteFromOffice
}

declare module '@ckeditor/ckeditor5-table/src/table' {
  const Table: import('./ckeditor').PluginConstructor
  export default Table
}

declare module '@ckeditor/ckeditor5-table/src/tabletoolbar' {
  const TableToolbar: import('./ckeditor').PluginConstructor
  export default TableToolbar
}

declare module '@ckeditor/ckeditor5-typing/src/texttransformation' {
  const TextTransformation: import('./ckeditor').PluginConstructor
  export default TextTransformation
}

declare module '@ckeditor/ckeditor5-alignment/src/alignment' {
  const Alignment: import('./ckeditor').PluginConstructor
  export default Alignment
}

declare module '@ckeditor/ckeditor5-autosave/src/autosave' {
  const Autosave: import('./ckeditor').PluginConstructor
  export default Autosave
}

declare module '@ckeditor/ckeditor5-basic-styles/src/underline' {
  const Underline: import('./ckeditor').PluginConstructor
  export default Underline
}

declare module '@ckeditor/ckeditor5-basic-styles/src/strikethrough' {
  const Strikethrough: import('./ckeditor').PluginConstructor
  export default Strikethrough
}

declare module '@ckeditor/ckeditor5-basic-styles/src/code' {
  const Code: import('./ckeditor').PluginConstructor
  export default Code
}

declare module '@ckeditor/ckeditor5-basic-styles/src/subscript' {
  const Subscript: import('./ckeditor').PluginConstructor
  export default Subscript
}

declare module '@ckeditor/ckeditor5-basic-styles/src/superscript' {
  const Superscript: import('./ckeditor').PluginConstructor
  export default Superscript
}

declare module '@ckeditor/ckeditor5-clipboard/src/clipboard' {
  const Clipboard: import('./ckeditor').PluginConstructor
  export default Clipboard
}

declare module '@ckeditor/ckeditor5-font/src/font' {
  const Font: import('./ckeditor').PluginConstructor
  export default Font
}

declare module '@ckeditor/ckeditor5-highlight/src/highlight' {
  const Highlight: import('./ckeditor').PluginConstructor
  export default Highlight
}

declare module '@ckeditor/ckeditor5-horizontal-line/src/horizontalline' {
  const HorizontalLine: import('./ckeditor').PluginConstructor
  export default HorizontalLine
}

declare module '@ckeditor/ckeditor5-mention/src/mention' {
  const Mention: import('./ckeditor').PluginConstructor
  export default Mention
}

declare module '@ckeditor/ckeditor5-page-break/src/pagebreak' {
  const PageBreak: import('./ckeditor').PluginConstructor
  export default PageBreak
}

declare module '@ckeditor/ckeditor5-remove-format/src/removeformat' {
  const RemoveFormat: import('./ckeditor').PluginConstructor
  export default RemoveFormat
}

declare module '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode' {
  const StandardEditingMode: import('./ckeditor').PluginConstructor
  export default StandardEditingMode
}

declare module '@ckeditor/ckeditor5-code-block/src/codeblock' {
  const CodeBlock: import('./ckeditor').PluginConstructor
  export default CodeBlock
}

declare module '@ckeditor/ckeditor5-special-characters/src/specialcharacters' {
  const SpecialCharacters: import('./ckeditor').PluginConstructor
  export default SpecialCharacters
}

declare module '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials' {
  const SpecialCharactersEssentials: import('./ckeditor').PluginConstructor
  export default SpecialCharactersEssentials
}

declare module '@ckeditor/ckeditor5-word-count/src/wordcount' {
  const WordCount: import('./ckeditor').PluginConstructor
  export default WordCount
}

declare module '@ckeditor/ckeditor5-image/src/imageresize' {
  const ImageResize: import('./ckeditor').PluginConstructor
  export default ImageResize
}

declare module '@ckeditor/ckeditor5-image/src/imagetextalternative' {
  const ImageTextAlternative: import('./ckeditor').PluginConstructor
  export default ImageTextAlternative
}

declare module '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter' {
  const SimpleUploadAdapter: import('./ckeditor').PluginConstructor
  export default SimpleUploadAdapter
}

declare module '@ckeditor/ckeditor5-table/src/tableproperties' {
  const TableProperties: import('./ckeditor').PluginConstructor
  export default TableProperties
}

declare module '@ckeditor/ckeditor5-table/src/tablecellproperties' {
  const TableCellProperties: import('./ckeditor').PluginConstructor
  export default TableCellProperties
}

declare module '@ckeditor/ckeditor5-html-embed/src/htmlembed' {
  const HtmlEmbed: import('./ckeditor').PluginConstructor
  export default HtmlEmbed
}

declare module '@ckeditor/ckeditor5-language/src/textpartlanguage' {
  const TextPartLanguage: import('./ckeditor').PluginConstructor
  export default TextPartLanguage
}
