import { test } from 'node:test'
import assert from 'node:assert/strict'
import { runChecks, packageOf } from './checks.mjs'

function facts(overrides = {}) {
  return {
    imports: [
      { name: 'Bold', specifier: '@ckeditor/ckeditor5-basic-styles/src/bold' },
      { name: 'Table', specifier: '@ckeditor/ckeditor5-table/src/table' }
    ],
    builtinPlugins: ['Bold', 'Table'],
    declarations: [
      '@ckeditor/ckeditor5-basic-styles/src/bold',
      '@ckeditor/ckeditor5-table/src/table'
    ],
    smokeCount: 2,
    readmeCount: 2,
    readmeList: ['Bold', 'Table'],
    devDeps: {
      '@ckeditor/ckeditor5-basic-styles': '27.1.0',
      '@ckeditor/ckeditor5-table': '27.1.0',
      '@ckeditor/ckeditor5-dev-utils': '39.9.1'
    },
    licenses: {
      '@ckeditor/ckeditor5-basic-styles': 'GPL-2.0-or-later',
      '@ckeditor/ckeditor5-table': 'GPL-2.0-or-later'
    },
    ...overrides
  }
}

test('packageOf strips the deep path', () => {
  assert.equal(packageOf('@ckeditor/ckeditor5-table/src/table'), '@ckeditor/ckeditor5-table')
})

test('a consistent tree produces no failures', () => {
  assert.deepEqual(runChecks(facts()), [])
})

test('reports an import with no module declaration', () => {
  const out = runChecks(facts({ declarations: ['@ckeditor/ckeditor5-basic-styles/src/bold'] }))
  assert.equal(out.length, 1)
  assert.match(out[0], /ckeditor5-table\/src\/table.*no `declare module`/)
})

test('reports an orphaned module declaration', () => {
  const out = runChecks(facts({ declarations: [...facts().declarations, '@ckeditor/ckeditor5-gone/src/gone'] }))
  assert.equal(out.length, 1)
  assert.match(out[0], /ckeditor5-gone\/src\/gone.*not imported/)
})

test('reports a smoke-test count that disagrees', () => {
  const out = runChecks(facts({ smokeCount: 3 }))
  assert.equal(out.length, 1)
  assert.match(out[0], /builtinPlugins has 2.*smoke.*3/)
})

test('reports a README count that disagrees', () => {
  const out = runChecks(facts({ readmeCount: 9 }))
  assert.equal(out.length, 1)
  assert.match(out[0], /builtinPlugins has 2.*README.*9/)
})

test('reports a README plugin list that does not match', () => {
  const out = runChecks(facts({ readmeList: ['Bold', 'Underline'], readmeCount: 2 }))
  assert.equal(out.length, 1)
  assert.match(out[0], /missing from README: Table/)
  assert.match(out[0], /extra in README: Underline/)
})

test('reports an imported package missing from devDependencies', () => {
  const devDeps = { ...facts().devDeps }
  delete devDeps['@ckeditor/ckeditor5-table']
  const out = runChecks(facts({ devDeps }))
  assert.equal(out.length, 1)
  assert.match(out[0], /ckeditor5-table.*not in devDependencies/)
})

test('reports mismatched ckeditor versions but ignores dev-utils', () => {
  const out = runChecks(
    facts({
      devDeps: {
        '@ckeditor/ckeditor5-basic-styles': '27.1.0',
        '@ckeditor/ckeditor5-table': '27.0.0',
        '@ckeditor/ckeditor5-dev-utils': '39.9.1'
      }
    })
  )
  assert.equal(out.length, 1)
  assert.match(out[0], /27\.0\.0/)
  assert.doesNotMatch(out[0], /dev-utils/)
})

test('reports a package that is no longer GPL-2.0-or-later', () => {
  const out = runChecks(
    facts({ licenses: { ...facts().licenses, '@ckeditor/ckeditor5-table': 'SEE LICENSE IN LICENSE.md' } })
  )
  assert.equal(out.length, 1)
  assert.match(out[0], /ckeditor5-table.*SEE LICENSE IN LICENSE\.md/)
})

test('reports a package whose license could not be read', () => {
  const licenses = { ...facts().licenses }
  delete licenses['@ckeditor/ckeditor5-table']
  const out = runChecks(facts({ licenses }))
  assert.equal(out.length, 1)
  assert.match(out[0], /ckeditor5-table.*license could not be read/)
})
