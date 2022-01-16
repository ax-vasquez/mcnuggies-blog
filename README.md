# [mcnuggies.dev - starter template](https://github.com/ax-vasquez/sanity-template-gatsby-creators-blog)

The full site code for [mcnuggies.dev](https://www.mcnuggies.dev/)

* **Source code**: https://github.com/ax-vasquez/sanity-template-gatsby-creators-blog
* **Sanity Create endpoint**: https://www.sanity.io/create?template=ax-vasquez/sanity-template-gatsby-creators-blog
    * _Not currently working; results in a JSON syntax error, despite no errors thrown from source code - appears to be an issue with Sanity's create endpoint_

## Heads up!
Although I am fond of Sanity.io as a CMS, their `sanity.io/create` endpoint doesn't seem to work correctly for this site template. I've reached out for more information about what may be going on, but so far, no progress has been made. 
 
**If you're interested in using this starter, DON'T use the `sanity.io/create` URL!!!** Instead, clone the base repository here: 
 * https://github.com/ax-vasquez/sanity-template-gatsby-creators-blog.

You will need to follow the steps in this README in order to get your site deployed.

## Running things locally

Both the site (front end) and Sanity studio (CMS) can be run and used locally (though, it's not required to do so). This is useful when testing changes locally, or if you are just examining the Studio/starter and don't want to bother with any deployments.

### Running the site

All code for the site ("front end") is located in the `/web` directory.

To run the site locally:
1. `cd` to the root of the `/web` directory
2. Run `yarn` to install all dependencies
3. Run `yarn start` to run the site in develop mode
    * While in develop mode, the site code is watched for changes - most changes should be hot-reloaded with exceptions being in any of the Gatsby API files (e.g., `gatsby-browser.js`, `gatsby-config.js`, etc.)
4. Once the `yarn start` script completes, you should see output similar to the following

```bash
You can now view creators-blog in the browser.

  http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

  http://localhost:8000/___graphql

Note that the development build is not optimized.
To create a production build, use gatsby build

success Building development bundle - 11.265s
success Writing page-data.json files to public directory - 0.229s - 1/1 4.37/s
```

### Running the Sanity Studio

All code for the Sanity Studio is located in the `/studio` directory.

**You don't have to host the studio anywhere in order to use the content**. Sanity is unique in that you basically have the option to "run" the CMS on your own computer. Technically, it's just a GUI that uses the Sanity API to perform actions in your datasets; no data is hosted locally, so you won't lose anything if you close the locally-hosted Studio.

To run the studio locally:
1. `cd` to the root of the `/studio` directory
2. Run `yarn` to install all dependencies
3. Sign in to the Sanity CLI using either of the following methods:
    1. `yarn sanity login` - uses the locally-installed `sanity-cli` to perform the login operation
        * You don't need to install the dependency globally if you take this route, but you _will_ need to prefix each `sanity` command with `yarn`
    2. `sanity login` - uses a globally-installed `sanity-cli` (you'll need to install the CLI package globally before you can do this - see https://www.sanity.io/docs/cli)
4. If you see output similar to the following, then your Studio is up and running! Click the link in the terminal output to access it

```bash
➜  yarn start
yarn run v1.22.17
$ sanity start
✔ Checking configuration files...
⠦ Compiling...webpack built 86f0054a87192a39ac2b in 8378ms
✔ Compiling...
Content Studio successfully compiled! Go to http://localhost:3333
```
* In this output, the Studio is succesfully up and running at http://localhost:3333

## Deploying to Netlify

*Docs coming soon...*

### Deploying the Site

*Docs coming soon...*

### Deploying the Studio

*Docs coming soon...*
