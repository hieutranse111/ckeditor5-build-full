import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { collectFacts } from './check-plugin-sync.mjs'
import { runChecks } from './checks.mjs'

const here = fileURLToPath(new URL('.', import.meta.url))
const repoRoot = join(here, '..', '..', '..', '..')
const script = join(here, 'check-plugin-sync.mjs')

test('the current tree is consistent', () => {
  assert.deepEqual(runChecks(collectFacts(repoRoot)), [])
})

test('collectFacts sees the editor-classic import from src/editor.ts', () => {
  const facts = collectFacts(repoRoot)
  const specifiers = facts.imports.map(i => i.specifier)
  assert.ok(specifiers.includes('@ckeditor/ckeditor5-editor-classic/src/classiceditor'))
})

test('the CLI exits 0 on the current tree', () => {
  const out = execFileSync('node', [script], { cwd: repoRoot, encoding: 'utf8' })
  assert.match(out, /All plugin sync checks passed/)
})

test('the CLI exits 1 when the smoke count drifts', () => {
  const sandbox = mkdtempSync(join(tmpdir(), 'sync-check-'))
  try {
    for (const path of ['src', 'tests', 'README.md', 'package.json', 'node_modules/@ckeditor']) {
      cpSync(join(repoRoot, path), join(sandbox, path), { recursive: true, dereference: true })
    }
    const smoke = join(sandbox, 'tests', 'smoke.test.ts')
    writeFileSync(smoke, readFileSync(smoke, 'utf8').replace(/toHaveLength\(\d+\)/, 'toHaveLength(3)'))

    assert.throws(
      () => execFileSync('node', [script], { cwd: sandbox, encoding: 'utf8', stdio: 'pipe' }),
      err => {
        assert.equal(err.status, 1)
        assert.match(err.stderr, /smoke test asserts 3/)
        return true
      }
    )
  } finally {
    rmSync(sandbox, { recursive: true, force: true })
  }
})
