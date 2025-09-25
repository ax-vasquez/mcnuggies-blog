# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a personal blog site with two main applications:
- **Next.js Frontend** (`src/next/`) - Main website built with React, TypeScript, Next.js, Bootstrap, and Redux
- **Sanity Studio** (`src/studio/`) - Content management system for blog posts, creator info, and projects

The frontend consumes data from Sanity CMS via their client library. Content includes articles, projects, creator information, and supporting metadata like categories and job history.

## Development Commands

### Running the Applications

**Start the Next.js frontend:**
```bash
# From repo root
yarn web
# OR from src/next
yarn dev
```

**Start the Sanity Studio:**
```bash
# From repo root
yarn studio
# OR from src/studio
yarn start
```

### Build Commands

**Next.js:**
```bash
cd src/next && yarn build
```

**Sanity Studio:**
```bash
cd src/studio && yarn build
```

### Linting and Type Checking

**Lint Next.js code:**
```bash
# From repo root
yarn lint-next
# OR from src/next
yarn lint
```

**Type checking:**
```bash
cd src/next && yarn tsc
cd src/studio && yarn tsc
```

### Testing

**Run Cypress E2E tests:**
```bash
cd src/next && yarn cy:open
```

**Generate Sanity schema types:**
```bash
cd src/studio && yarn generateSchemaTypes
```

### Setup Commands

**Initial setup:**
```bash
yarn setup  # Installs all dependencies
```

**Clean install:**
```bash
yarn clean  # Removes all node_modules
yarn setup  # Reinstalls everything
```

## Key Technologies

- **Frontend**: Next.js 14, React 18, TypeScript, Bootstrap 5, Redux Toolkit, SASS
- **CMS**: Sanity v3 with custom schema types
- **Testing**: Cypress for E2E testing
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks, lint-staged
- **Deployment**: Vercel (frontend), hosted Sanity Studio optional

## Project Structure

```
src/
├── next/           # Next.js frontend application
│   ├── components/ # React components organized by feature
│   ├── pages/      # Next.js pages and API routes
│   ├── styles/     # SASS stylesheets
│   ├── redux/      # Redux store and slices
│   ├── sanity/     # Sanity client configuration
│   └── types/      # TypeScript type definitions
└── studio/         # Sanity Studio CMS
    ├── schemas/    # Content schema definitions
    └── sanity.config.ts
```

## Development Notes

- The frontend expects the Sanity Studio to be running to access content data
- Schema changes in the studio require regenerating types with `yarn generateSchemaTypes`
- Pre-commit hooks run linting via lint-staged configuration
- The site uses Bootstrap 5 with custom SASS for styling
- Redux is used for client-side state management (primarily sidebar state)