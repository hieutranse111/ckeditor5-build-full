---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v27 (dependencies pinned to `27.1.0`, the latest v27 patch).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `26.0.0` to `27.1.0`.
- Added `@ckeditor/ckeditor5-language` and included `TextPartLanguage` in `builtinPlugins`,
  with `textPartLanguage` added to the default toolbar. The build now ships 50 plugins.
- No other code changes were required: this repo has no custom listeners on the `delete`,
  `enter`, or `keydown` view events (affected by v27's new event bubbling) and does not hook
  into the refactored `Clipboard`/`ClipboardPipeline` internals.
