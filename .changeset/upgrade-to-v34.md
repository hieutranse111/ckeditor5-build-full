---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v34 (dependencies pinned to `34.2.0`, the highest v34 patch).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `33.0.0` to `34.2.0`. Every package
  this build imports is published at that exact patch and every one is still
  `GPL-2.0-or-later`. `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays
  at `39.9.1`.
- **`Editor#isReadOnly` is no longer directly settable.** Read-only state is now controlled
  exclusively by a lock mechanism: `editor.enableReadOnlyMode( lockId )` and
  `editor.disableReadOnlyMode( lockId )`. The editor stays read-only while any lock is
  held. This build never sets `isReadOnly` itself, so nothing here changed — but any
  consumer doing `editor.isReadOnly = true` gets a **runtime error** on v34 and must
  migrate to the lock methods. Confirmed against both versions: the assignment is silently
  accepted on v33 and throws on v34.
- v34 introduces the document list feature (multiple blocks per list item) as a separate
  `documentlist.js` module alongside the existing `list.js`. This build imports only the
  top-level `List` plugin, whose import path and single-block behavior are unchanged, so no
  code change was needed.
- Engine-level minor breaking changes in v34 — the `isAllowedInsideAttributeElement` option
  was removed and `AttributeElement` now wraps any view element per position rules, Tab and
  Shift+Tab moved to a `'tab'` view document event, and widget insertion moved from
  `Model#insertContent()` to `Model#insertObject()` — are all internal to the plugins this
  build bundles. Emitted HTML was diffed against a v33 build of this same package for
  nested inline formatting (`strong`/`i`/`s`/`u`/`a`/`mark`), bulleted and numbered lists,
  tables with captions, and images with captions: **byte-identical on both versions.**
- The `html-support` element types `$htmlSection`, `$htmlObjectBlock`, and
  `$htmlObjectInline` were removed in favour of `$container`, `$blockObject`, and
  `$inlineObject`. This build does not bundle General HTML Support, so it is unaffected.
- v34.1 added support for the `type` attribute of `<ul>`/`<ol>` alongside `list-style-type`.
  That lives in the list-properties feature, which this build does not bundle, so `<ol
  type="a">` is still downcast to a plain `<ol>` exactly as it was on v33.
- Two new upstream packages were introduced in this range — `@ckeditor/ckeditor5-style`
  (v34.0, configurable styles dropdown) and `@ckeditor/ckeditor5-ckbox` (v34.2, CKBox
  service integration) — along with a new table column-resizing plugin in v34.1. None were
  added to this build; expanding the plugin set is out of scope for a version upgrade.
- CKEditor 5 requires PostCSS 8. This repo's `postcss` devDependency was already `8.5.23`
  and `engines.node` stays at `>=18`, so no toolchain change was needed.
- No plugin was added, removed, or renamed: this build still ships 51 plugins, and no deep
  import path changed. `src/plugins.ts`, `src/ckeditor-modules.d.ts`, `src/config.ts`,
  `src/types.ts`, and `tests/smoke.test.ts` all needed no edits.
- The `size-limit` budget was deliberately raised from 194 KB to 195 KB: the v34 bundle
  measures 194.66 KB (ESM) and 194.84 KB (UMD) brotlied, which exceeds the old 194 KB cap.
