---
'ckeditor5-build-full': minor
---

Add ESM and CJS builds alongside UMD, bundle TypeScript declarations, and correct the
license to GPL-2.0-or-later to match upstream CKEditor 5.

`main` now points at `./dist/index.cjs`. Importing the package by name is unchanged;
deep imports of `lib/ckeditor.js` still resolve through the exports map.
