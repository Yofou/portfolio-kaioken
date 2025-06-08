// Environment: server
import type { OnRenderHtmlAsync } from "vike/types"
import { dangerouslySkipEscape, escapeInject } from "vike/server"
import { renderToString } from "kaioken"
import { getTitle } from "./utils"
import { App } from "./App"

export const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext
): ReturnType<OnRenderHtmlAsync> => {
  const pageHtml = renderToString(App, { pageContext })
  const title = getTitle(pageContext)
  const canonicalURL = 'https://nathan.software' + pageContext.urlPathname // TODO
  const description = "Nathan Portfolio Site & Where they put their short blogs reviewing Web Developement tech."
  const socialImageURL = '/portfolio-thumbnail.png'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" href="/favicon.ico">
        <title>${title}</title>
        <link rel='canonical' href="${canonicalURL}" />
        <meta name="description" content="${description}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:type" content="article">
        <meta property="og:image" content="${socialImageURL}">
      </head>
      <body>
        <div id="page-root">${dangerouslySkipEscape(pageHtml)}</div>
        <div class="noise-bg bg-overlay" />
      </body>
    </html>`
}
