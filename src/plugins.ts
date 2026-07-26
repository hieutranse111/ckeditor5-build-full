import type { PluginConstructor } from './ckeditor'

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import Mention from '@ckeditor/ckeditor5-mention/src/mention'
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter'
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed'

export const builtinPlugins: PluginConstructor[] = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Alignment,
  Autosave,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  Clipboard,
  Font,
  Highlight,
  HorizontalLine,
  Mention,
  PageBreak,
  RemoveFormat,
  StandardEditingMode,
  CodeBlock,
  SpecialCharacters,
  SpecialCharactersEssentials,
  WordCount,
  ImageResize,
  ImageTextAlternative,
  SimpleUploadAdapter,
  TableProperties,
  TableCellProperties,
  HtmlEmbed
]
