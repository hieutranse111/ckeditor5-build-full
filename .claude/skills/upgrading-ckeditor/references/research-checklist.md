# Breaking-change research checklist

Walk all ten categories for **every** major in the span, not just the target. Each row
names a real upstream change that proves the category matters — if you cannot rule a
category out, you have not researched it.

## Sources

Read both, per major:

1. Release notes — `https://github.com/ckeditor/ckeditor5/releases/tag/vNN.0.0`. Complete,
   but framed as a changelog.
2. Migration guide — actionable, with before/after config snippets. These were **deleted
   from `master`**; guides for v25–v41 survive only at tag `v41.0.0`:

   ```bash
   gh api "repos/ckeditor/ckeditor5/contents/docs/updating/update-to-NN.md?ref=v41.0.0" \
     --jq .content | base64 -d
   ```

## Categories

| # | Category | Proof |
| - | -------- | ----- |
| 1 | Plugin renamed or moved between packages | v32 `ListStyle` → `ListProperties`; v33 moved list plugins into subdirectories |
| 2 | Plugin dependency graph changed — **in either direction** | v29 `EasyImage` and `CKFinder` *stopped* auto-importing `Image`; v26 `EasyImage` *started* requiring `CloudServices` by name |
| 3 | Config option renamed, or its **shape or values** changed | v30 `config.toolbar.viewportTopOffset` → `config.ui.viewportOffset`; v29 `config.image.styles` must be wrapped in `options: []` and `full` became `block`; v26 `imageUpload` → `uploadImage` |
| 4 | New package worth adding to the build | v34 introduced `ckeditor5-style`; v27 introduced `ckeditor5-language` |
| 5 | **Deep-import path changed** | v28: "All the packages use multiple exports instead of the one object in `src/index.js`"; v33 relocated list plugins. Directly breaks `plugins.ts` and `ckeditor-modules.d.ts` |
| 6 | **Silent behavior or data-output change** | v29 inline images alter emitted HTML and captions no longer auto-show; v35 the source element is no longer updated after `destroy()`; v33 `config.initialData` is now always set. No error, no failing test — consumers' content changes |
| 7 | **Toolchain or runtime requirement raised** | v32 Node ≥14 and webpack 5; v34 requires PostCSS 8; v41 Node ≥18. Touches `engines`, `ci.yml` `node-version`, and the `postcss` devDependency |
| 8 | **License and legal** | The published artifact embeds every dependency's source, so all `@ckeditor/ckeditor5-*` must remain `GPL-2.0-or-later`; upstream does move features between open-source and commercial. From v44 upstream also makes `config.licenseKey` mandatory (`'GPL'` for self-hosted) — outside this range, but the tripwire belongs here |
| 9 | Bundle size budget | New plugins push against the 190 KB `size-limit` |
| 10 | Hand-written type surface drifted | `src/types.ts` hard-codes `ImageStyle` and the `image.styles` shape; v29 breaks both |

## Writing up findings

Record every hit before editing code. That list is the changeset body. Category 6 hits in
particular must be spelled out: they are breaking changes for consumers even though
nothing in this repo fails.
