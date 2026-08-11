---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v35 (dependencies pinned to `35.4.0`, the highest v35 release).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `34.2.0` to `35.4.0`. Every package
  this build imports is published at that exact version and every one is still
  `GPL-2.0-or-later`. `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays
  at `39.9.1`.
- **The source element is no longer updated when `destroy()` is called.** Before v35 the
  element the editor was created over was written back with `editor.getData()` on destroy;
  now it is left empty. Confirmed by running the same probe against a v34 and a v35 build
  of this package: the element holds `<p>edited</p>` on v34 and `""` on v35. Consumers that
  created the editor over a `<textarea>` or `<div>` inside a form and read the element back
  after teardown lose their data silently — there is no error and no failing test. The
  behavior is restorable per-instance with the new `updateSourceElementOnDestroy: true`
  config option, verified to return `<p>edited</p>` on v35. That option is now part of the
  exported `FullEditorConfig` type and documented under Troubleshooting in the README,
  including the caveat that the data output is not sanitized the way the editing view is.
- **The editor UI looks different.** v35.1 reworked the colour palette for contrast and
  accessibility, and this build bundles the theme, so the change reaches consumers with no
  action on their part. Diffed out of the built bundle: `--ck-color-base-border`
  `#c4c4c4` → `#ccced1`, `--ck-color-base-active` `#198cf0` → `#2977ff`,
  `--ck-color-focus-outer-shadow` `#bcdefb` → `#cae1fc`,
  `--ck-color-button-default-hover-background` `#e6e6e6` → `#f0f0f0`, and
  `--ck-color-toolbar-background` re-pointed from `--ck-color-base-foreground` to
  `--ck-color-base-background`. The upstream v35 update guide publishes a CSS snippet that
  restores the old values if the previous look is preferred.
- **The `TooltipView` component was removed** in favour of a `data-cke-tooltip-*` attribute
  API driven by `TooltipManager`. Confirmed in the bundle: `ck-tooltip` occurrences drop
  from 111 to 7 and `data-cke-tooltip-text` appears for the first time. Consumers styling
  or querying `.ck-tooltip` themselves will find their selectors no longer match.
  Integrations that only set `ButtonView#tooltip` are unaffected.
- **Focus behavior changed in two places.** Choosing an option from a dropdown now returns
  focus to the dropdown button rather than the editing area, and `ButtonView` no longer
  calls `preventDefault()` on `mousedown`, so toolbar buttons take DOM focus when clicked.
  Both are deliberate accessibility changes upstream. This build ships stock UI components
  and adds no custom buttons or dropdowns, so nothing here needed changing, but consumers
  who scripted around the old focus flow will see typing land somewhere else.
- Emitted HTML was diffed against a v34 build of this same package across 14 samples —
  nested inline formatting (`strong`/`i`/`s`/`u`/`a`/`mark`), bulleted and numbered lists,
  tables with captions, images with captions, block quotes, code blocks, horizontal lines
  and page breaks, alignment, font size/family/colour, sub/superscript and inline code,
  text part language, HTML embed, media embed, and restricted-editing exceptions:
  **byte-identical on both versions.**
- v35.4 makes `HtmlDataProcessor` skip HTML comments by default. This build bundles neither
  General HTML Support nor the `HtmlComment` plugin, and comments were already stripped on
  v34 — `<p>a<!-- keep me -->b</p>` round-trips to `<p>ab</p>` on both versions, so there is
  no observable change here.
- The `input` command was deprecated in v35.3 in favour of `insertText`. This build never
  executes `input` itself; consumers calling `editor.execute( 'input', ... )` still work on
  v35 but should migrate.
- Minor breaking changes that do not reach this build: `DomConverter#viewToDom()` and
  `#viewChildrenToDom()` dropped their DOM-document parameter, `ImageInsertPanelView#dropdownView`
  moved to `ImageInsertUI#dropdownView`, `DataTransfer` moved from `ckeditor5-clipboard` to
  `ckeditor5-engine`, `enableToolbarKeyboardFocus()` was replaced by `EditorUI#addToolbar()`,
  the static `BalloonPanelView.arrowVerticalOffset`/`arrowHorizontalOffset` properties were
  renamed, and the `bold` and `paragraph` icons moved into `ckeditor5-core`. All are
  internal to the plugins this build bundles or apply only to custom editor creators and
  custom UI, of which this build has none.
- The comments, track-changes, and import-from-Word changes in v35.2–v35.4, including the
  new `EditorAnnotations#registerAnnotation()` requirement and the `@external` attribute,
  belong to commercial collaboration packages. This build bundles none of them.
- One new upstream package was introduced in this range, `@ckeditor/ckeditor5-import-word`
  (v35.2). It is a commercial feature and was not added; expanding the plugin set stays out
  of scope for a version upgrade.
- `@ckeditor/ckeditor5-utils` became the first package written in TypeScript upstream. That
  only affects builds installing CKEditor from the Git repository — npm still publishes
  JavaScript, and the package ships no `types` entry — so this build's own hand-written
  declarations in `src/ckeditor-modules.d.ts` are unaffected.
- Upstream `engines.node` is still `>=14` and this repo already requires `>=18`; `postcss`
  stays at `8.5.23`. No toolchain change was needed.
- No plugin was added, removed, or renamed, and no deep import path changed: all 51 import
  paths resolve unchanged at `35.4.0` and the build still ships 51 plugins. `src/plugins.ts`,
  `src/ckeditor-modules.d.ts`, `src/config.ts`, and `tests/smoke.test.ts` needed no edits.
- The `size-limit` budget was deliberately raised from 195 KB to 200 KB. The v35 bundle
  measures 199.58 KB (ESM) and 199.46 KB (UMD) brotlied, up from roughly 194.7 KB on v34 —
  a ~4.8 KB increase driven by the accessibility work, the new tooltip manager, and the
  reworked theme.
