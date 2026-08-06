---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v34 (dependencies pinned to `34.2.0`, the highest v34 patch).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `33.0.0` to `34.2.0`.
  `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays at `39.9.1`.
- `Editor#isReadOnly` is no longer directly settable; it's now controlled exclusively by
  `editor.enableReadOnlyMode( lockId )` and `editor.disableReadOnlyMode( lockId )`. This
  build doesn't set `isReadOnly` itself, but any consumer doing `editor.isReadOnly = true`
  directly will now get a runtime error and must migrate to the lock methods.
- v34 introduces the document list feature (multi-block list items) as a new,
  separate `documentlist.js` module alongside the existing `list.js`. This build only
  imports the top-level `List` plugin, whose import path and single-block behavior are
  unchanged, so no code change was needed.
- New `ckeditor5-style` package was introduced upstream for a configurable styles
  dropdown. Not added to this build — out of scope for this upgrade.
- CKEditor 5 now requires PostCSS 8; this repo's `postcss` devDependency was already at
  `8.5.23`, so no change was needed.
- No plugin was added, removed, or renamed in this build: it still ships 51 plugins.
- The `size-limit` budget was raised from 194 KB to 195 KB to cover a small increase in
  the bundled output.
- Verified in the live editor that bulleted-list creation still works and `getData()`
  output is unchanged, without console errors.
