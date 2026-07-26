import postcss from 'postcss'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { styles } = require('@ckeditor/ckeditor5-dev-utils')

const RUNTIME = `
function __injectCss(css) {
  if (typeof document === 'undefined') return;
  var id = 'ckeditor5-build-full';
  var tag = document.getElementById(id);
  if (!tag) {
    tag = document.createElement('style');
    tag.id = id;
    document.head.appendChild(tag);
  }
  tag.appendChild(document.createTextNode(css));
}
`

// CSS is injected at runtime rather than emitted as a file, so consumers never
// have to import a stylesheet. dist.test.ts enforces this.
export function ckeditorCss({ minify = true } = {}) {
  const config = styles.getPostCssConfig({
    themeImporter: { themePath: require.resolve('@ckeditor/ckeditor5-theme-lark') },
    minify
  })

  return {
    name: 'ckeditor-css',
    async transform(code, id) {
      if (!id.endsWith('.css')) return null
      const result = await postcss(config.plugins).process(code, { from: id })
      return {
        code: `${RUNTIME}\n__injectCss(${JSON.stringify(result.css)});\nexport default undefined;`,
        map: { mappings: '' }
      }
    }
  }
}
