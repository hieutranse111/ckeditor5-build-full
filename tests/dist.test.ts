import { describe, it, expect, beforeAll } from 'vitest'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(__dirname, '../dist')
const read = (f: string) => readFileSync(resolve(dist, f), 'utf8')

describe('dist artifact contract', () => {
  beforeAll(() => {
    if (!existsSync(dist)) throw new Error('dist/ does not exist — run `pnpm build` first')
  })

  it('emits all three formats', () => {
    expect(existsSync(resolve(dist, 'index.js'))).toBe(true)
    expect(existsSync(resolve(dist, 'index.cjs'))).toBe(true)
    expect(existsSync(resolve(dist, 'index.umd.js'))).toBe(true)
  })

  it('does not leak a standalone .css file', () => {
    const cssFiles = readdirSync(dist).filter((f) => f.endsWith('.css'))
    expect(cssFiles).toEqual([])
  })

  it('embeds CSS in the JS as a string', () => {
    expect(read('index.js')).toContain('.ck-content')
  })

  it('keeps CKEditor license header', () => {
    // CKEditor uses `/** @license */`, not the `/*!` marker.
    expect(read('index.js')).toContain('@license')
  })

  it('UMD exposes global FullEditor', () => {
    expect(read('index.umd.js')).toContain('FullEditor')
  })

  it('ESM has a default export', () => {
    expect(read('index.js')).toMatch(/as default|export\s+default/)
  })

  it('.d.ts is generated and does not leak internal CKEditor module paths', () => {
    const dts = read('index.d.ts')
    expect(dts).toContain('FullEditorConfig')
    expect(dts).not.toContain('@ckeditor/ckeditor5-')
  })
})
