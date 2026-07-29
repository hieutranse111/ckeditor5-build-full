---
'ckeditor5-build-full': major
---

Upgrade to CKEditor 5 v26.0.0.

- All `@ckeditor/ckeditor5-*` dependencies bumped from `25.0.0` to `26.0.0`.
- Added `@ckeditor/ckeditor5-cloud-services` and included `CloudServices` in `builtinPlugins`.
  Upstream changed `CloudServicesUploadAdapter` (used by `EasyImage`) to require `CloudServices`
  by name instead of auto-loading it; without this the editor now throws
  `plugincollection-soft-required` on init. The build now ships 49 plugins.
- Renamed the `imageUpload` toolbar/block-toolbar item to `uploadImage`, matching upstream's
  renamed command/button (the old name is still aliased upstream, but new configs should use
  the current name).
