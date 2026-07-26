# Contributing

## Setup

```bash
pnpm install
```

## Commands

```bash
pnpm dev          # demo playground
pnpm build        # emit dist/
pnpm test         # unit + type tests
pnpm lint
pnpm typecheck
pnpm size         # bundle size guard
```

## Branching

`main` is the trunk and tracks the CKEditor 5 version currently being shipped. Older
CKEditor lines are kept alive on maintenance branches named after their major — `v25`,
`v26`, and so on.

The package major mirrors the CKEditor major, so the major is unavailable for our own
breaking changes. Within a line they ship as **minor** releases; everything else is a
patch.

| Change                          | Bump  |
| ------------------------------- | ----- |
| New CKEditor major              | major |
| Breaking change in this package | minor |
| Feature or fix                  | patch |

### Moving to a new CKEditor version

Cut a maintenance branch for the outgoing line first, then upgrade `main`:

```bash
git checkout -b v25 main     # preserve the current line
git checkout main
pnpm up "@ckeditor/*@26" --save-exact
pnpm build && pnpm test      # surfaces the API changes to fix
```

All `@ckeditor/*` dependencies are pinned exactly so `package.json` records precisely
which CKEditor release the build contains — the package version only encodes the major.

Nothing in the toolchain is tied to a CKEditor version: file names, workflows, and configs
are the same on every branch, so diffs between lines show real changes rather than renames.

## Releasing

Publishing is triggered by creating a GitHub Release — never by pushing to a branch.

1. **Describe the change.** Add a changeset in the same PR as your work:

   ```bash
   pnpm changeset
   ```

2. **Prepare the release.** Pushing to `main` — or dispatching the Version Packages
   workflow on a maintenance branch — opens a `chore: release <branch>` pull request that
   applies pending changesets: it bumps the version and updates `CHANGELOG.md`. Review and
   merge it.

3. **Publish.** Create a GitHub Release whose tag is `v` plus the version now in
   `package.json` — for example `v25.1.0`. The Release workflow verifies the tag matches,
   rebuilds, runs the full test suite, and publishes to npm with provenance.

The publish step picks its own npm dist-tag: a version higher than the current `latest`
claims `latest`, anything older is published under `v<major>` instead. That way a fix
released from an old maintenance branch never becomes the default install.

### Required repository configuration

- `NPM_TOKEN` secret with publish rights.
- GitHub Pages enabled with source set to **GitHub Actions** (for the demo deploy).
