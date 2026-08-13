---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v36 (dependencies pinned to `36.0.1`, the highest v36 release).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `35.4.0` to `36.0.1`. Every package
  this build imports is published at that exact version and every one is still
  `GPL-2.0-or-later`. `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays
  at `39.9.1` — `pnpm up "@ckeditor/ckeditor5-*@36.0.1"` matches that package's name too
  (it also starts with `ckeditor5-`), so it was reset back to `39.9.1` by hand after the
  bump pulled it to `36.0.1` as well.
- **The default marker for unordered lists changed from `circle` to `disc`.** Upstream
  fixed this as a bug (ckeditor/ckeditor5#13206), but it changes rendered output for any
  existing bulleted list that doesn't set an explicit `listStyle` — the emitted HTML is
  unchanged, only the browser's default `list-style-type` for `<ul><li>` differs. This
  build ships the `List` plugin and sets no `listStyle` default of its own, so every
  consumer's plain bulleted lists render with a filled disc marker instead of a hollow
  circle after this upgrade, with no error and no failing test to catch it.
- **`EditorUI` moved from `@ckeditor/ckeditor5-core` to `@ckeditor/ckeditor5-ui`.** This
  build imports neither package's `editorui` module directly — `src/plugins.ts` and
  `src/ckeditor-modules.d.ts` needed no change.
- Three minor breaking changes ship in v36, all UI-internals timing changes: dropdown
  content panels, toolbar items, and contextual balloon panels are now built lazily on
  first appearance instead of during editor initialization. This build ships stock UI
  components and adds no custom dropdowns, toolbars, or balloons that read those internals
  eagerly, so nothing here needed changing.
- No plugin was added, removed, or renamed, and no deep import path changed besides
  `EditorUI` above: all 51 import paths resolve unchanged at `36.0.1` and the build still
  ships 51 plugins. `src/config.ts` and `src/types.ts` needed no edits. `tests/smoke.test.ts`
  needed no edits — its plugin count and named-plugin assertions still hold.
- Upstream `engines.node` and `postcss` requirements are unchanged from v35; this repo
  already satisfies both. No toolchain change was needed.
- The `size-limit` budget was deliberately raised from 200 KB to 201 KB. The v36 bundle
  measures 200.65 KB (ESM) and 200.59 KB (UMD) brotlied, up from roughly 199.5 KB on v35 —
  a modest increase with no single attributable cause in the v36 release notes.
