// Regex parsing rather than a real TS parser: the target files follow one rigid,
// hand-maintained shape, and pulling in a parser would mean a dependency this
// script is not allowed to add.

export function parseImports(source) {
  const out = []
  const re = /^import\s+(\w+)\s+from\s+'([^']+)'/gm
  for (const [, name, specifier] of source.matchAll(re)) {
    if (specifier.startsWith('.')) continue
    out.push({ name, specifier })
  }
  return out
}

export function parseBuiltinPlugins(source) {
  const match = source.match(/builtinPlugins[^=]*=\s*\[([^\]]*)\]/)
  if (!match) return []
  return match[1]
    .split(',')
    .map(entry => entry.trim())
    .filter(Boolean)
}

export function parseModuleDeclarations(source) {
  return [...source.matchAll(/declare module '([^']+)'/g)].map(m => m[1])
}

export function parseSmokeCount(source) {
  const match = source.match(/toHaveLength\(\s*(\d+)\s*\)/)
  return match ? Number(match[1]) : null
}

export function parseReadmeCount(source) {
  const match = source.match(/with\s+(\d+)\s+plugins/)
  return match ? Number(match[1]) : null
}

export function parseReadmePluginList(source) {
  const match = source.match(/^## Included plugins\s*\n([\s\S]*?)(?=^## )/m)
  if (!match) return []
  return match[1]
    .split(/[,\s]+/)
    .map(entry => entry.trim())
    .filter(Boolean)
}
