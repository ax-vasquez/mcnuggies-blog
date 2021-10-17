# Troubleshooting the Gatsby site

## Site runs in `develop`, but won't `build`

**First, try running (from the root of the `web` directory): `rm -rf .cache public`**
* Sometimes, these can get messed up
    * Deleting them and re-running `build` can sometimes fix the issue

### If clearing `.cache` and `public` directories didn't work...

1. Check each of the Gatsby API files
    * _Are things imported consistently?_
    * _Do imports/exports use the same version (e.g., ES6 or CommonJS)?_
2. Try changing both `gatsby-ssr.js` and `gatsby-brower.js` to use ES6 syntax instead of CommonJS syntax
    * For example, change `module.wrapRootElement...` (CommonJS) to `export const wrapRootElement` (ES6)
        * Both mean the same thing
