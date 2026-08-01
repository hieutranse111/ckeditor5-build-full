# Files every upgrade touches

| File                        | Change                                                            |
| --------------------------- | ----------------------------------------------------------------- |
| `package.json`              | All `@ckeditor/ckeditor5-*` versions; new packages; `engines` if category 7 hit |
| `src/plugins.ts`            | Import and `builtinPlugins` entry per new plugin; import paths per category 5 |
| `src/ckeditor-modules.d.ts` | A `declare module` block per deep import                          |
| `src/config.ts`             | Toolbar items and default config per category 3                   |
| `src/types.ts`              | `ToolbarItem`, `ImageStyle`, and `FullEditorConfig` shape          |
| `tests/smoke.test.ts`       | Plugin count and the named-plugin assertion list                   |
| `README.md`                 | Plugin count, version table, install example, plugin list, and the `@^NN` pin in the Browser snippet |

The README's Browser snippet pin is called out explicitly because it drifted — it still
reads `@^25` while the package is on v27.

`ckeditor-modules.d.ts` must stay free of top-level `import`/`export`, or `declare module`
becomes augmentation instead of declaration. The file already documents this; the
reference repeats it because it is the easiest rule to break by accident.

## Known traps

| Version | Trap                                                                     |
| ------- | ------------------------------------------------------------------------ |
| v26     | `CloudServicesUploadAdapter` began requiring `CloudServices` by name; `EasyImage` throws `plugincollection-soft-required` without it |
| v26     | The `imageUpload` toolbar item was renamed `uploadImage`                  |
| v27     | New `ckeditor5-language` package; `TextPartLanguage` added to the build   |
| v28     | Packages switched to multiple named exports from `src/index.js`          |
| v29     | `Image` now loads `ImageBlock` + `ImageInline`; `imageStyle:full` → `imageStyle:block`; `config.image.styles` needs an `options` wrapper; new `toggleImageCaption` button; `EasyImage`/`CKFinder` stopped auto-importing `Image`; emitted HTML changes for consumers |
| v30     | `config.toolbar.viewportTopOffset` → `config.ui.viewportOffset` (object)  |
| v32     | `ListStyle` → `ListProperties`; Node ≥14                                 |
| v33     | List plugins moved into subdirectories, changing import paths            |
| v34     | Requires PostCSS 8; new `ckeditor5-style` package                        |
| v35     | Source element no longer updated automatically after `destroy()`         |

## Verifying the sync

```bash
node .claude/skills/upgrading-ckeditor/scripts/check-plugin-sync.mjs
```

It covers the mechanical half: declarations, counts, the README list, dependency versions,
and licenses. It cannot check `src/config.ts` toolbar items or the `src/types.ts` unions —
neither is derivable from plugin names, so those stay a guide-reading task.
