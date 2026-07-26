import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import { svgRaw } from './build/svg-plugin.mjs'
import { ckeditorCss } from './build/postcss-plugin.mjs'

const input = 'src/index.ts'

const plugins = [
  svgRaw(),
  ckeditorCss(),
  nodeResolve({ browser: true, preferBuiltins: false }),
  commonjs(),
  esbuild({
    target: 'es2019',
    minify: true,
    legalComments: 'inline'
  })
]

export default [
  {
    input,
    output: [
      { file: 'dist/index.js', format: 'es', sourcemap: false },
      { file: 'dist/index.cjs', format: 'cjs', exports: 'default', sourcemap: false },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'FullEditor',
        exports: 'default',
        sourcemap: false
      }
    ],
    plugins,
    onwarn(warning, warn) {
      // CKEditor ships with known internal circular imports.
      if (warning.code === 'CIRCULAR_DEPENDENCY') return
      warn(warning)
    }
  },
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts()],
    external: [/\.css$/, /\.svg$/]
  }
]
