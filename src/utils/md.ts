import MarkdownIt from 'markdown-it'
// import prism from 'markdown-it-prism'
import Prism from 'prismjs'

import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

const md = new MarkdownIt({
  html: true,
  linkify: true,

  typographer: true,
  highlight: (code: string, lang: string): string => {
    const grammar = Prism.languages[lang]
    if (!grammar) {
      return `<pre><code>${md.utils.escapeHtml(code)}</code></pre>`
    }
    const html = Prism.highlight(code, grammar, lang)
    return `<pre class="language-${lang}"><code>${html}</code></pre>`
  },
})


// import 'prismjs/components/prism-csharp'
// import 'prismjs/components/prism-markup'


// const md = new MarkdownIt({
//   html: false,
//   linkify: true,
//   breaks: true,
//   typographer: true,
// }).use(prism, { defaultLanguage: 'markup' })

export default md