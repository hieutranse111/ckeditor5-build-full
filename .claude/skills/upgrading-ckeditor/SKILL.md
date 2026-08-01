---
name: upgrading-ckeditor
description: Use when upgrading this package to a new CKEditor 5 major — bumping @ckeditor/ckeditor5-* dependencies, "support vNN", or cutting the maintenance branch for the outgoing major. Covers the deep-import architecture (v25–v36) only.
---

# Upgrading CKEditor 5

Announce: "Using upgrading-ckeditor to upgrade to CKEditor vNN."

Create a todo per phase. Do not skip phase 3 — every past upgrade's real work was
discovered there, not by running the build.

## Phase 1 — Pin the target version

`npm view @ckeditor/ckeditor5-core versions --json`, take the highest patch of the target
major. Confirm every package the build imports is published at that exact version. The
build pins exact versions, so a package missing that patch is a blocker, not a warning.

## Phase 2 — Prepare branches

Cut and push `vNN` for the **outgoing** major first — that freezes the maintenance line
and gives the release workflow a branch to publish fixes from under the `vNN` dist-tag.
Then branch `feature/support-vNN` for the new major off `main`.

## Phase 3 — Research breaking changes

Follow `references/research-checklist.md`. Write down every hit before editing anything.

## Phase 4 — Bump dependencies

```bash
pnpm up "@ckeditor/ckeditor5-*@NN.x.y" --save-exact
```

Do **not** use the `"@ckeditor/*"` glob that `CONTRIBUTING.md` shows: it also matches
`@ckeditor/ckeditor5-dev-utils`, which is versioned independently and would be dragged to
a nonexistent version.

## Phase 5 — Sync the seven touchpoints

Follow `references/touchpoints.md`.

## Phase 6 — Verify

```bash
pnpm install && pnpm lint && pnpm build && pnpm typecheck && pnpm test && pnpm size
node .claude/skills/upgrading-ckeditor/scripts/check-plugin-sync.mjs
```

The smoke test initializes a real editor, so it is what surfaces
`plugincollection-soft-required`. A `pnpm size` failure means the `size-limit` budget needs
raising as a deliberate, stated decision — never a silent one.

Green tooling does not clear research category 6. Load `pnpm dev` and exercise the affected
features by hand.

## Phase 7 — Changeset and PR

`pnpm changeset`, bump `major`. Follow the voice of the existing changesets in git history:
what was bumped, what was added and why, and what needed **no** change and why. Call out
every category 6 finding explicitly. Open the PR into `main`.
