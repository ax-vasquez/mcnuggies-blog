# Monorepo first time setup

## Installing dependendencies for all `packages`

1. (Very first time, or after removing `node_modules`) run `yarn` from the monorepo root to install the root dependencies
2. Run `yarn lerna bootstrap` - this installs all dependendencies for all packages in the `/packages` directory
    * _This does not include things in the `/web` directory_

## Running the front end

Before you can test the front end, you'll need a Sanity project. Refer to the [Studio README](../../web/studio/README.md) for steps on how to get your project setup. Once
you have your Sanity studio, create some data in it, then follow the steps in the [Next app's README](../../web/next/README.md) for info on configuring it before starting
it up.
