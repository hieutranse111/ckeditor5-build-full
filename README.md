# ckeditor5-build-full

[![npm](https://img.shields.io/npm/v/ckeditor5-build-full.svg)](https://www.npmjs.com/package/ckeditor5-build-full)

A ready-to-use build of CKEditor 5 Classic Editor with 51 plugins and a preconfigured toolbar.
No bundler configuration, no CSS import — install and use.

## Installation

```bash
npm install ckeditor5-build-full
```

The package major version mirrors the CKEditor 5 major version it bundles. To stay on a
specific line, install it by major:

| Package | CKEditor 5 | npm tag  |
| ------- | ---------- | -------- |
| `30.x`  | 30.0.0     | `latest` |
| `29.x`  | 29.2.0     | `v29`    |
| `28.x`  | 28.0.0     | `v28`    |
| `27.x`  | 27.1.0     | `v27`    |
| `26.x`  | 26.0.0     | `v26`    |
| `25.x`  | 25.0.0     | `v25`    |

```bash
npm install ckeditor5-build-full@^30
```

> Because the major version is reserved for the CKEditor version, breaking changes to this
> package ship in **minor** releases. Pin the minor (for example `~30.0.0`) if you need
> strict stability.

## Usage

### React

```jsx
import { CKEditor } from '@ckeditor/ckeditor5-react'
import FullEditor from 'ckeditor5-build-full'

export default function Editor() {
  return (
    <CKEditor
      editor={FullEditor}
      onChange={(event, editor) => console.log(editor.getData())}
    />
  )
}
```

### Vanilla JS

```js
import FullEditor from 'ckeditor5-build-full'

FullEditor.create(document.querySelector('#editor'))
  .then(editor => { window.editor = editor })
  .catch(console.error)
```

### Browser

```html
<script src="https://unpkg.com/ckeditor5-build-full@^30/dist/index.umd.js"></script>
<script>
  FullEditor.create(document.querySelector('#editor'))
</script>
```

## Configuration

Pass a config object to override the defaults:

```js
FullEditor.create(document.querySelector('#editor'), {
  toolbar: { items: ['bold', 'italic', 'link', '|', 'undo', 'redo'] },
  fontSize: { options: [12, 14, 16, 18] },
  language: 'en'
})
```

With React, use the `config` prop:

```jsx
<CKEditor editor={FullEditor} config={{ toolbar: { items: ['bold', 'italic'] } }} />
```

See the [CKEditor 5 configuration reference](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html)
for all available options.

## TypeScript

Type declarations are bundled — no `@types` package needed.

```ts
import FullEditor from 'ckeditor5-build-full'
import type { FullEditorConfig } from 'ckeditor5-build-full'

const config: FullEditorConfig = {
  toolbar: { items: ['bold', 'italic', 'link'] },
  language: 'en'
}
```

Exported types: `FullEditorConfig`, `FullEditorInstance`, `FullEditorStatic`, `ToolbarItem`, `ImageStyle`.

On lines bundling a CKEditor release that predates upstream TypeScript support, these types
are maintained by this package and cover the public surface only — configuration and the
editor instance. CKEditor's internal APIs (model, view, conversion) are untyped.

## Troubleshooting

### `ckeditor-duplicated-modules`

Your app is loading CKEditor 5 from two places — typically this build plus a direct
dependency on `@ckeditor/ckeditor5-*`.

Use one or the other. Either rely solely on this build, or drop it and assemble your own
custom build. Mixing them is not supported, even when the versions match, because this
build already bundles its own copy of CKEditor.

## Included plugins

Alignment, Autoformat, Autosave, BlockQuote, Bold, CKFinder, Clipboard, CloudServices, Code,
CodeBlock, EasyImage, Essentials, Font, Heading, Highlight, HorizontalLine, HtmlEmbed, Image,
ImageCaption, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload,
Indent, Italic, Link, List, MediaEmbed, Mention, PageBreak, Paragraph, PasteFromOffice,
RemoveFormat, SimpleUploadAdapter, SpecialCharacters, SpecialCharactersEssentials,
StandardEditingMode, Strikethrough, Subscript, Superscript, Table, TableCaption,
TableCellProperties, TableProperties, TableToolbar, TextPartLanguage, TextTransformation,
Underline, UploadAdapter, WordCount

## License

[GPL-2.0-or-later](./LICENSE), matching upstream CKEditor 5. This build embeds CKEditor 5
source, so the published artifact carries the same license. A commercial license is
available from [CKEditor](https://ckeditor.com/legal/ckeditor-oss-license).
