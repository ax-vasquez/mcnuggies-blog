# README

Front end code for mcnuggies.dev

## Running the site

To run the site, you can do either of the following:
* Run `yarn web` from the repo root, or...
* Run `yarn dev` from the within `/web/next`

## Front-end data

Most non-media data for the front end is stored in the Sanity studio. This includes (but is not limited to) things like:
1. Creator
2. Articles
3. Supporting types for Articles

To run the studio, you do either:
* Run `yarn studio` from the repo root, or...
* Run `yarn start` from within `/web/studio`

Both commands do the same thing and start the Sanity studio.

> You can host the Sanity studio somewhere like Netlify, but this is entirely optional. However, if you don't want to have to start the studio up
every time you want to make a change to the data, hosting your studio is a good idea since it will always be online (ideally). The tradeoff with hosting
your studio is that you lose a little flexibility with the schema; every time you make a change to the schema, you'll need to redeploy the Studio to wherever it's hosted so that the latest version is used there.
