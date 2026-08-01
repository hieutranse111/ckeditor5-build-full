## What & why
<!-- What changed, and why — not how (the diff already shows how). -->


## Checklist

- [ ] Targets the right branch (`main`, or the `vNN` line this fixes)
- [ ] `pnpm build && pnpm test && pnpm lint && pnpm typecheck` pass
- [ ] Changeset added (`pnpm changeset`), or not needed
- [ ] CKEditor upgrade only: diffed `plugins.ts` against upstream's `requires()` changes
