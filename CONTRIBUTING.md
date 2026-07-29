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

`main` tracks the current CKEditor major. `v25`, `v26`, ... are maintenance branches for
older majors still getting fixes. Never push directly to either — work on a branch and open
a PR into whichever line it targets: `main` for current work, the matching `vNN` branch for
a fix specific to that old CKEditor version.

Package major mirrors CKEditor major, so our own breaking changes ship as **minor**.

| Change                          | Bump  |
| ------------------------------- | ----- |
| New CKEditor major              | major |
| Breaking change in this package | minor |
| Feature or fix                  | patch |

### Upgrading CKEditor

Cut the outgoing line's maintenance branch first, then upgrade `main`:

```bash
git checkout -b v25 main            # freeze the outgoing line
git checkout main
git checkout -b feature/v26
pnpm up "@ckeditor/*@26" --save-exact
pnpm build && pnpm test
```

Also diff `plugins.ts` against upstream's `requires()` changes — tests only catch breakage
in plugins you already configured, not new soft dependencies upstream added.

## Releasing

Publishing is triggered by creating a GitHub Release — never by pushing to a branch.

1. **Describe the change.** Add a changeset in the same PR as your work:

   ```bash
   pnpm changeset
   ```

2. **Prepare the release.** Pushing to `main` or a `vNN` branch opens a release pull request
   that applies pending changesets: it bumps the version and updates `CHANGELOG.md`. Review
   and merge it.

3. **Publish.** Create a GitHub Release whose tag is `v` plus the version now in
   `package.json` — for example `v25.1.0`. The Release workflow verifies the tag matches,
   rebuilds, runs the full test suite, and publishes to npm with provenance.

The publish step picks its own npm dist-tag: a version higher than the current `latest`
claims `latest`, an older one is published under `v<major>` instead — so a fix from a
maintenance branch never becomes the default install.
