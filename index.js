const katex = require('katex')

module.exports = config => {
  return ctx => {
    ctx.content = ctx.content
      .replace(/\$\$(.+?)\$\$/g, (_, math) =>
        katex.renderToString(math, { displayMode: true, throwOnError: false })
      )
      .replace(/\$(.+?)\$/g, (_, math) =>
        katex.renderToString(math, { displayMode: false, throwOnError: false })
      )
  }
}
