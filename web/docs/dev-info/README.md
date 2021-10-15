# Repository information README
The "Repository Information" directory contains documentation about the implementation details in the repository. **They are intended to assist developers in maintaining the base code for this repository**. They are not useful for people looking simply to use the starter for their own personal blog.

## Directories
1. `.vscode` - configuration files used only by VS Code
    * At the time of writing this README, this directory only contains configurations that enables the use of Tailwind directives in CSS
2. `docs` - the documentation directory
3. `src` - the source code for the starter site

> Note that there are some additional directories, `.cache`, `node_modules` and `public`. However, you generally don't need to do much with these.

## Important files
1. [`gatsby-browser.js`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
    * A crucial (yet optional) file for Gatsby sites
        * Crucial specifically for this starter repo, as it's currently how we import the Tailwind CSS for the site to use
            * Without the single line importing the CSS file, the Tailwind styling would be completely ignored
        * Optional, because this file is only necessary in certain use cases, such as ours
            * It's also used whenever you need to use any of the Gatsby Browser APIs
2. [`gatsby-config.js`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)
    * The central configuration file for a Gatsby site
3. [`gatsby-node.js`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
    * A code file that's run once during your site's build process
    * You can use the Gatsby Node APIs to create pages dynamically, as we do in this repo for blog posts
4. [`gatsby-ssr.js`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)
    * SSR: "Server Side Rendering"
    * Gatbsy SSR APIs allow you to alter the content of static HTML files as they are being server-side rendered
    * We use this to wrap the root element with the Redux provider (we also do this in in `gatsby-browser` - the Provider is required in both locations)
3. `package.json`
4. [`postcss.config.js`](https://github.com/postcss/postcss)
5. [`tailwind.config.js`](https://tailwindcss.com/docs/theme)
6. `tsconfig.json`