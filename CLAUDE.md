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
yarn web
```

**Start the Sanity Studio:**
```bash
yarn studio
```

### Build Commands

**Next.js:**
```bash
yarn build:next
```

**Sanity Studio:**
```bash
yarn build:studio
```

### Linting and Type Checking

**Lint Next.js code:**
```bash
yarn lint-next
```

**Type checking:**
```bash
yarn tsc:next   # Next.js
yarn tsc:studio # Sanity Studio
```

### Testing

**Run Cypress E2E tests:**
```bash
yarn cy:open
```

**Generate Sanity schema types:**
```bash
yarn generateSchemaTypes
```

### Setup Commands

**Initial setup:**
```bash
yarn install  # Installs all workspace dependencies
```

**Clean install:**
```bash
yarn clean     # Removes all node_modules
yarn install   # Reinstalls everything
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

- This project uses **Yarn Workspaces** to manage dependencies across both applications
- The frontend expects the Sanity Studio to be running to access content data
- Schema changes in the studio require regenerating types with `yarn generateSchemaTypes`
- Pre-commit hooks run linting via lint-staged configuration
- The site uses Bootstrap 5 with custom SASS for styling
- Redux is used for client-side state management (primarily sidebar state)
- Shared dependencies like TypeScript, ESLint, and Prettier are managed at the workspace root