# ckeditor5-build-full

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
