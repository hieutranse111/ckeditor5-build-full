---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v32 (dependencies pinned to `32.0.0`, the only v32 release).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `31.1.0` to `32.0.0`.
  `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays at `39.9.1`.
- `ListStyle` was renamed to `ListProperties`. This build only ships the base `List` plugin,
  not `ListStyle`/`ListProperties`, so no change was needed here.
- The minimum Node.js version was raised to `14.0.0`. This repo's `engines.node` is already
  `>=18`, so no change was needed.
- `Batch#type` was deprecated in favor of `Batch#isUndoable`/`#isLocal`/`#isUndo`/`#isTyping`,
  and `Input#isInput()` was removed. This build doesn't read `Batch#type` or call
  `Input#isInput()` directly, so no code change was needed.
- Revision history's adapter interface and revision model changed. This build doesn't include
  the (commercial) `ckeditor5-revision-history` package, so not applicable.
- No plugin was added, removed, or renamed: the build still ships 51 plugins.
- Verified in the live editor that bulleted-list creation still works and `getData()` output
  is unchanged, without console errors.
