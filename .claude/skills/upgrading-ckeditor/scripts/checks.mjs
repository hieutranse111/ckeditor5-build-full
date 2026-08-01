const GPL = 'GPL-2.0-or-later'

// Versioned independently of the editor packages, so it must never be swept
// into the "everything on one version" rule.
const VERSION_EXEMPT = '@ckeditor/ckeditor5-dev-utils'

export function packageOf(specifier) {
  const parts = specifier.split('/')
  return parts.slice(0, 2).join('/')
}

export function runChecks(facts) {
  return [
    ...checkDeclarations(facts),
    ...checkCounts(facts),
    ...checkReadmeList(facts),
    ...checkDependencies(facts),
    ...checkLicenses(facts)
  ]
}

function checkDeclarations({ imports, declarations }) {
  const failures = []
  const declared = new Set(declarations)
  const imported = new Set(imports.map(i => i.specifier))

  for (const { specifier } of imports) {
    if (!declared.has(specifier)) {
      failures.push(`${specifier} is imported but has no \`declare module\` in src/ckeditor-modules.d.ts`)
    }
  }
  for (const specifier of declarations) {
    if (!imported.has(specifier)) {
      failures.push(`${specifier} has a \`declare module\` but is not imported by any file in src/`)
    }
  }
  return failures
}

function checkCounts({ builtinPlugins, smokeCount, readmeCount }) {
  const failures = []
  const n = builtinPlugins.length
  if (smokeCount !== n) {
    failures.push(`builtinPlugins has ${n} entries but the smoke test asserts ${smokeCount}`)
  }
  if (readmeCount !== n) {
    failures.push(`builtinPlugins has ${n} entries but the README says ${readmeCount}`)
  }
  return failures
}

function checkReadmeList({ builtinPlugins, readmeList }) {
  const inReadme = new Set(readmeList)
  const missing = builtinPlugins.filter(name => !inReadme.has(name)).sort()
  const inPlugins = new Set(builtinPlugins)
  const extra = readmeList.filter(name => !inPlugins.has(name)).sort()

  if (!missing.length && !extra.length) return []
  const parts = []
  if (missing.length) parts.push(`missing from README: ${missing.join(', ')}`)
  if (extra.length) parts.push(`extra in README: ${extra.join(', ')}`)
  return [`README plugin list disagrees with builtinPlugins — ${parts.join('; ')}`]
}

function checkDependencies({ imports, devDeps }) {
  const failures = []
  const packages = [...new Set(imports.map(i => packageOf(i.specifier)))]

  for (const pkg of packages) {
    if (!devDeps[pkg]) failures.push(`${pkg} is imported but not in devDependencies`)
  }

  const versions = new Map()
  for (const [pkg, version] of Object.entries(devDeps)) {
    if (pkg === VERSION_EXEMPT) continue
    if (!versions.has(version)) versions.set(version, [])
    versions.get(version).push(pkg)
  }
  if (versions.size > 1) {
    const summary = [...versions.entries()]
      .map(([version, pkgs]) => `${version} (${pkgs.join(', ')})`)
      .join(' vs ')
    failures.push(`@ckeditor/ckeditor5-* devDependencies are not on one version: ${summary}`)
  }
  return failures
}

function checkLicenses({ imports, licenses }) {
  const failures = []
  for (const pkg of [...new Set(imports.map(i => packageOf(i.specifier)))]) {
    const license = licenses[pkg]
    if (license === undefined) {
      failures.push(`${pkg}: license could not be read from node_modules`)
    } else if (license !== GPL) {
      failures.push(`${pkg}: license is "${license}", expected ${GPL} — the published build embeds this source`)
    }
  }
  return failures
}
