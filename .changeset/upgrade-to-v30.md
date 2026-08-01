---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v30 (dependencies pinned to `30.0.0`, the only v30 release).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `29.2.0` to `30.0.0`.
  `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays at `39.9.1`.
- `config.toolbar.viewportTopOffset` was moved to `config.ui.viewportOffset` and now accepts
  an object (`{ top, right, bottom, left }`) instead of a single number. This build's default
  config never set `viewportTopOffset`, so no change was needed here — but any consumer
  overriding it in their own config needs to switch to `ui.viewportOffset`.
- `toWidgetEditable()` now sets default highlight handling for the editable element, and
  images upcast correctly whether or not they carry an empty `src` attribute. Neither touches
  this build's plugin set (no custom widgets or marker conversion), so no data-output change
  for this build's content.
- No plugin was added, removed, or renamed: the build still ships 51 plugins.
- Raised the `size-limit` budget from 190 KB to 191 KB for both `dist/index.js` and
  `dist/index.umd.js`; the v30 bump alone pushed brotli size to ~190.5 KB.
- Verified in the live editor that autoformat's new backspace-revert (typing `**bold**`
  then immediately pressing Backspace reverts to raw `**bold**` text) works correctly.
