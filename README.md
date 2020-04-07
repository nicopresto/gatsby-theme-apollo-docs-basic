

This repo builds a simple version of the Gatsby theme for [Apollo docs](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs)

The setup was derived from this helpful "hello world" [example](
https://codesandbox.io/s/gatsby-theme-apollo-docs-hello-world-bywp2?file=/package.json) by @trevorblades

## Issues

* My test setup based on the theme README was throwing errors. I will need to build up to that example from this basic example. Titrating one feature/option at a time.
  * component errors (unresolved)
  My error seems to be related to
  ```
  pathPrefix: '/docs/apollo-server',
  ```
  There is a reference to this config in the theme [README](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-core#deploying-to-a-subdirectory)

  * needed to make dummy mdx and md files

* I had trouble adding the theme with Yarn on MacOSX and needed to add puppeteer first with a [Chromium flag](https://docs.percy.io/docs/skipping-puppeteer-chromium-download)

```
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn add puppeteer
```
OR
```
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install puppeteer
```
