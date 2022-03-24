# Lerna setup

## [Concepts](https://github.com/lerna/lerna#concepts)

## When to use `lerna run` vs a regular `script`

You only need to use this when you have a command that:
1. Exists in one, or many packages
2. When you want to run the command for all packages that have it

Although it technically does work when only one package has the command, it may make more sense to have a specific command to perform the given action. For example, it doesn't make sense
to use `lerna run dev` to run the Next app since you won't reasonably expect to be starting multiple next apps. In that situation, it would make more sense to have a specific `web` script
to first `cd` into the directory and then simply run the `yarn dev` command.

Where it _does_ make sense to use Lerna is for things like `tsc`; every package has a `tsc` script, and it's reasonable to run them all within the same command, making it a good 
candidate to use with `lerna run`.
