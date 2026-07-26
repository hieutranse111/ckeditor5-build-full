import { readFileSync } from 'node:fs'

export function svgRaw() {
  return {
    name: 'svg-raw',
    transform(_code, id) {
      if (!id.endsWith('.svg')) return null
      const svg = readFileSync(id, 'utf8')
      return {
        code: `export default ${JSON.stringify(svg)};`,
        map: { mappings: '' }
      }
    }
  }
}
