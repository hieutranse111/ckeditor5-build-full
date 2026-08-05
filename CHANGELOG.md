# ckeditor5-build-full

## 32.0.0

### Major Changes

- [#16](https://github.com/hieutranse111/ckeditor5-build-full/pull/16) [`9c5aac5`](https://github.com/hieutranse111/ckeditor5-build-full/commit/9c5aac5c58b3649ec372f28b67c6833b127db02a) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v32 (dependencies pinned to `32.0.0`, the only v32 release).

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

## 31.0.0

### Major Changes

- [#14](https://github.com/hieutranse111/ckeditor5-build-full/pull/14) [`197406d`](https://github.com/hieutranse111/ckeditor5-build-full/commit/197406d96d188834266cc3750d84b45e988648cb) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v31 (dependencies pinned to `31.1.0`, the highest v31 patch).

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

## 30.0.0

### Major Changes

- [#12](https://github.com/hieutranse111/ckeditor5-build-full/pull/12) [`5db0c14`](https://github.com/hieutranse111/ckeditor5-build-full/commit/5db0c148abf3b3015358255fe90d2a39c6c29f1f) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v30 (dependencies pinned to `30.0.0`, the only v30 release).

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

## 29.0.0

### Major Changes

- [#10](https://github.com/hieutranse111/ckeditor5-build-full/pull/10) [`71af183`](https://github.com/hieutranse111/ckeditor5-build-full/commit/71af183f18164e92312366a3f99454d72a212166) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v29 (dependencies pinned to `29.2.0`, the latest v29 patch).

  - All `@ckeditor/ckeditor5-*` dependencies bumped from `28.0.0` to `29.2.0`.
  - `Image` now loads both `ImageBlock` and `ImageInline` under the hood. Content that embeds
    an `<img>` without a `<figure>` wrapper now round-trips as an inline image instead of being
    promoted to a block image — a data-output change for existing content, not just an API one.
  - The default image style was renamed `full` → `block`. `config.image.styles` in
    `src/config.ts` and `src/types.ts` now uses the `{ options: [...] }` shape upstream requires,
    and the toolbar button is `imageStyle:block`.
  - Image captions are no longer shown automatically when an image is selected. Added the
    `toggleImageCaption` button to the default image toolbar so captions stay reachable through
    the UI; the `ImageCaption` plugin was already part of this build.
  - `EasyImage` and `CKFinder` stopped auto-importing `Image` upstream. This build already
    imports `Image` explicitly in `src/plugins.ts`, so it needed no change.
  - No plugin was added or removed: the build still ships 51 plugins.
  - Verified against the smoke tests that images without a `<figure>` wrapper stay inline and
    block images with captions round-trip correctly, and that `toggleImageCaption` /
    `imageStyle:block` render and work in the live editor.

## 28.0.0

### Major Changes

- [#8](https://github.com/hieutranse111/ckeditor5-build-full/pull/8) [`60e539b`](https://github.com/hieutranse111/ckeditor5-build-full/commit/60e539b0f867ea8c04b2d984ad123a50e8c540b4) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v28 (dependencies pinned to `28.0.0`).

  - All `@ckeditor/ckeditor5-*` dependencies bumped from `27.1.0` to `28.0.0`.
  - Added the new `TableCaption` plugin to `builtinPlugins` and `toggleTableCaption` to the
    default `table.contentToolbar`. Tables can now carry a `<figcaption>`. The build now ships
    51 plugins.
  - v28's major breaking change (packages re-export named bindings from `src/index.js` instead
    of a single default object) does not affect this build: every plugin is imported by its
    deep module path, which is unchanged.
  - v28's minor breaking changes are limited to `@ckeditor/ckeditor5-table` internals
    (`TablePropertiesView`/`TableCellPropertiesView` constructor options, conversion helper
    signatures, unified `border*`/`padding` model attribute values). This repo does not use
    those APIs directly.

## 27.0.0

### Major Changes

- [#6](https://github.com/hieutranse111/ckeditor5-build-full/pull/6) [`b561522`](https://github.com/hieutranse111/ckeditor5-build-full/commit/b5615225a4fb74c71e3892a95f0ae23091ab6de4) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v27 (dependencies pinned to `27.1.0`, the latest v27 patch).

  - All `@ckeditor/ckeditor5-*` dependencies bumped from `26.0.0` to `27.1.0`.
  - Added `@ckeditor/ckeditor5-language` and included `TextPartLanguage` in `builtinPlugins`,
    with `textPartLanguage` added to the default toolbar. The build now ships 50 plugins.
  - No other code changes were required: this repo has no custom listeners on the `delete`,
    `enter`, or `keydown` view events (affected by v27's new event bubbling) and does not hook
    into the refactored `Clipboard`/`ClipboardPipeline` internals.

## 26.0.0

### Major Changes

- [`11109f9`](https://github.com/hieutranse111/ckeditor5-build-full/commit/11109f9e3b6326ac43b61d28d4475c7116506e4b) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Upgrade to CKEditor 5 v26.0.0.

  - All `@ckeditor/ckeditor5-*` dependencies bumped from `25.0.0` to `26.0.0`.
  - Added `@ckeditor/ckeditor5-cloud-services` and included `CloudServices` in `builtinPlugins`.
    Upstream changed `CloudServicesUploadAdapter` (used by `EasyImage`) to require `CloudServices`
    by name instead of auto-loading it; without this the editor now throws
    `plugincollection-soft-required` on init. The build now ships 49 plugins.
  - Renamed the `imageUpload` toolbar/block-toolbar item to `uploadImage`, matching upstream's
    renamed command/button (the old name is still aliased upstream, but new configs should use
    the current name).

## 25.1.0

### Minor Changes

- [`74a0e92`](https://github.com/hieutranse111/ckeditor5-build-full/commit/74a0e92a9546811ef0da45164dbd943b7aa3258c) Thanks [@hieutranse111](https://github.com/hieutranse111)! - Add ESM and CJS builds alongside UMD, bundle TypeScript declarations, and correct the
  license to GPL-2.0-or-later to match upstream CKEditor 5.

  `main` now points at `./dist/index.cjs`. Importing the package by name is unchanged;
  deep imports of `lib/ckeditor.js` still resolve through the exports map.
