export const toolbarItems = [
  'removeFormat',
  '|',
  'heading',
  '|',
  'fontSize',
  'fontFamily',
  'fontColor',
  'fontBackgroundColor',
  '|',
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'code',
  'subscript',
  'superscript',
  '|',
  'bulletedList',
  'numberedList',
  '|',
  'alignment',
  'indent',
  'outdent',
  '|',
  'link',
  'textPartLanguage',
  'insertTable',
  'specialCharacters',
  'uploadImage',
  'mediaEmbed',
  'htmlEmbed',
  '|',
  'highlight',
  'blockQuote',
  'horizontalLine',
  'pageBreak',
  '|',
  'restrictedEditingException',
  '|',
  'undo',
  'redo'
] as const

export const defaultConfig = {
  toolbar: { items: [...toolbarItems] },
  blockToolbar: [
    'heading',
    'fontSize',
    'fontColor',
    'fontBackgroundColor',
    'alignment',
    '|',
    'bulletedList',
    'numberedList',
    '|',
    'blockQuote',
    'uploadImage'
  ],
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28]
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
      '|',
      'imageTextAlternative'
    ],
    styles: ['full', 'side', 'alignLeft', 'alignCenter', 'alignRight']
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
      'toggleTableCaption'
    ]
  },
  language: 'en'
}
