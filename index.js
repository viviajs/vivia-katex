const katex = require('katex')

module.exports = config => {
  const inlineReg = /\$([^$\n]+)\$/sg
  const blockReg = /\$\$([^$]+)\$\$/g

  return context => {
    context.content = context.content
      .toString()
      .replace(blockReg, (_, math) =>
        katex.renderToString(math, { displayMode: true, throwOnError: false })
      )
      .replace(inlineReg, (_, math) =>
        katex.renderToString(math, { displayMode: false, throwOnError: false })
      )
    context.head =
      (context.head ?? '') +
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css">'
  }
}
