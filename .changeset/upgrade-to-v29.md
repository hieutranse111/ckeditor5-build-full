---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v29 (dependencies pinned to `29.2.0`, the latest v29 patch).

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
