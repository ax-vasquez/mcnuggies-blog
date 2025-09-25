# Creator blog starter studio

Sanity studio for mcnuggies blog

## First-time setup
1. Create a [sanity.io](https://www.sanity.io/) account
2. Install the Sanity CLI globally
3. Run `sanity login` from the CLI
4. Run [`sanity init -y --create-project <PROJECT_NAME>`](https://www.sanity.io/docs/init)
    * `-y`: enables flag-only project creation (instead of using the CLI prompts)
    * `--create-project <PROJECT_NAME>`: Specify the project name
5. Edit `sanity.json` and add your projects name, ID and dataset
6. Run `sanity install` to install all Sanity studio dependencies and plugins

You _should_ be able to run `yarn start` to run the Studio. However, there may be some issues to address. We should document any issues, and their solutions, at the bottom of this README.

