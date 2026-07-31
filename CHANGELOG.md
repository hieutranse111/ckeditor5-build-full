# ckeditor5-build-full

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
