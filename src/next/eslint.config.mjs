import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import cypress from 'eslint-plugin-cypress'
import globals from 'globals'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  // Ignore build directories and generated files
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.mjs',
      'coverage/**',
    ],
  },
  // Apply to all JavaScript and TypeScript files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        JSX: true,
        // Cypress globals
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      cypress: cypress,
    },
    rules: {
      'max-len': 'off',
      quotes: [2, 'backtick'],
      indent: 'off',
      semi: ['error', 'never'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'arrow-body-style': 'off',
      'padded-blocks': ['error', { classes: 'always' }],
      'no-underscore-dangle': 'off',
      'no-trailing-spaces': ['error', { ignoreComments: true }],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/alt-text': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'react/require-default-props': 'off',
      'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
      'react/no-unescaped-entities': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'next/', 'studio/', 'packages/'],
        },
      },
    },
  },
  // Extend core ESLint recommended rules
  js.configs.recommended,
  // Extend Next.js configurations using FlatCompat
  ...compat.extends('next/core-web-vitals', 'next'),
  // TypeScript specific overrides
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-use-before-define': 'off',
    },
  },
  // Cypress specific configuration
  {
    files: ['cypress/**/*.{js,ts}', '**/*.cy.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        context: 'readonly',
        beforeEach: 'readonly',
        before: 'readonly',
        afterEach: 'readonly',
        after: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      // Disable problematic rules for Cypress files
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]