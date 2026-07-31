---
'ckeditor5-build-full': major
---

Upgrade to CKEditor 5 v28 (dependencies pinned to `28.0.0`).

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
