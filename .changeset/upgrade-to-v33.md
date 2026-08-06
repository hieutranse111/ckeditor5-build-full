---
"ckeditor5-build-full": major
---

Upgrade to CKEditor 5 v33 (dependencies pinned to `33.0.0`, the only v33 release).

- All `@ckeditor/ckeditor5-*` dependencies bumped from `32.0.0` to `33.0.0`.
  `@ckeditor/ckeditor5-dev-utils` is versioned independently and stays at `39.9.1`.
- `ListEditing`, `ListUI`, `ListStyleEditing`, `ListStyleUI`, `TodoListEditing`, and
  `TodoListUI` moved into subdirectories inside `ckeditor5-list`. This build only imports the
  top-level `List` plugin, whose import path is unchanged, so no code change was needed.
- Collaboration features (`TrackChanges`, `RealTimeCollaborativeEditing`, etc.) now require
  extra plugins to be imported alongside them. This build doesn't include any collaboration
  packages, so not applicable.
- Downcast conversion now requires all model items to be consumed, and low-level converters
  must test consumption before acting. This build has no custom downcast converters, so no
  change was needed.
- `config.initialData` is now always populated internally. This build doesn't read
  `config.initialData`, so not applicable.
- No new package, and no plugin was added, removed, or renamed: the build still ships 51
  plugins.
- The `size-limit` budget was raised from 193 KB to 194 KB to cover a small increase in the
  bundled output.
- Verified in the live editor that bulleted-list creation still works and `getData()` output
  is unchanged, without console errors.
