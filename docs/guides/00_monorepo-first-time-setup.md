# Monorepo first time setup

## Installing dependendencies for all `packages`

1. (Very first time, or after removing `node_modules`) run `yarn` from the monorepo root to install the root dependencies
2. Run `yarn lerna bootstrap` - this installs all dependendencies for all packages in the `/packages` directory
    * _This does not include things in the `/web` directory_

> ### _"I installed lerna globally - why did I do that?"_
> Odds are, you followed `lerna`'s docs. They recommend installing it globally, which is viable. However, you don't
have to install it globally. When you run `yarn` at the root of this repo, it will install a _local_ copy of `lerna`. If you have `lerna` installed globally, _both `yarn lerna bootstrap` and `lerna bootstrap` will do the same thing_.

## Running the next app ("front end") and Sanity Studio

You can run both the `next` app and Studio by running `yarn web` and `yarn studio`, respectively, from the root.
* Both commands will install all dependencies before starting the corresponding application
