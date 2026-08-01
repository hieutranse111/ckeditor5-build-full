#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  parseImports,
  parseBuiltinPlugins,
  parseModuleDeclarations,
  parseSmokeCount,
  parseReadmeCount,
  parseReadmePluginList
} from './parse.mjs'
import { runChecks, packageOf } from './checks.mjs'

export function collectFacts(repoRoot) {
  const read = (...parts) => readFileSync(join(repoRoot, ...parts), 'utf8')

  const srcDir = join(repoRoot, 'src')
  const imports = readdirSync(srcDir)
    .filter(file => file.endsWith('.ts'))
    .flatMap(file => parseImports(readFileSync(join(srcDir, file), 'utf8')))

  const pkg = JSON.parse(read('package.json'))
  const devDeps = Object.fromEntries(
    Object.entries(pkg.devDependencies ?? {}).filter(([name]) =>
      name.startsWith('@ckeditor/')
    )
  )

  const licenses = {}
  for (const pkgName of new Set(imports.map(i => packageOf(i.specifier)))) {
    const manifest = join(repoRoot, 'node_modules', pkgName, 'package.json')
    if (!existsSync(manifest)) continue
    licenses[pkgName] = JSON.parse(readFileSync(manifest, 'utf8')).license
  }

  const readme = read('README.md')
  return {
    imports,
    builtinPlugins: parseBuiltinPlugins(read('src', 'plugins.ts')),
    declarations: parseModuleDeclarations(read('src', 'ckeditor-modules.d.ts')),
    smokeCount: parseSmokeCount(read('tests', 'smoke.test.ts')),
    readmeCount: parseReadmeCount(readme),
    readmeList: parseReadmePluginList(readme),
    devDeps,
    licenses
  }
}

// Guarded so the test file can import `collectFacts` without the CLI firing.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const failures = runChecks(collectFacts(process.cwd()))
  if (failures.length) {
    console.error(`${failures.length} plugin sync problem(s):\n`)
    for (const failure of failures) console.error(`  - ${failure}`)
    process.exitCode = 1
  } else {
    console.log('All plugin sync checks passed.')
  }
}
