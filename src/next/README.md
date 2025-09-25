# mcnuggies.dev - Readme

## Environment setup

### CMS steps
Before you can run the site locally, you'll need to ensure that:
1. You have a valid sanity project (refer to the [Studio README](../studio/README.md))
2. You've properly-configured `.env.local` (see below)
3. (Optional) you have some data in your project

### `.env.local`
This configuration also applies to `.env.production`, but that one is only used for site builds. `.env.local` is used when developing locally.

```
SANITY_PROJECT=<PROJECT_ID>
SANITY_DATASET=<DATASET>
```
## GROQ

Sanity has their own query syntax system, GROQ. Refer to this cheat sheet for info on how to do crucial operations:
* https://www.sanity.io/docs/query-cheat-sheet

