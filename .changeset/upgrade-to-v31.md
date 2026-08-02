---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v31 (dependencies pinned to `31.1.0`, the highest v31 patch).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `30.0.0` to `31.1.0`.
  `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays at `39.9.1`.
- `InsertHtmlEmbedCommand` and `UpdateHtmlEmbedCommand` were removed and replaced by a single
  `HtmlEmbedCommand` executed via `editor.execute( 'htmlEmbed', ... )`. This build never calls
  those commands directly, so no change was needed here — but any consumer with custom UI
  calling `insertHtmlEmbed`/`updateHtmlEmbed` needs to switch to the unified `htmlEmbed` command.
- The editing pipeline now strips interactive attributes (e.g. `onclick`) and blocks `<script>`
  elements from rendering during editing, renaming/replacing them in the view. This only affects
  the editing view, not `editor.getData()` output, and this build has no custom widgets that
  generate such markup, so no data-output change for this build's content.
- Table and table-cell model attributes gained plugin-name prefixes for consistency
  (`borderColor` → `tableBorderColor`, `backgroundColor` → `tableCellBackgroundColor`, etc.).
  Verified in the live editor that `TableProperties`/`TableCellProperties` still downcast to the
  expected `border-color`/`background-color` CSS in `getData()` output. This build doesn't read
  or set those attributes directly, so no code change was needed.
- No plugin was added, removed, or renamed: the build still ships 51 plugins.
- Raised the `size-limit` budget from 191 KB to 193 KB for both `dist/index.js` and
  `dist/index.umd.js`; the v31 bump alone pushed brotli size to ~192.2 KB.
- Verified in the live editor that table insertion, cell merging, and the table properties
  toolbar work without console errors.
