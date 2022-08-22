# `@swan-bitcoin/eslint-config`

This package includes a shareable ESLint config for Swan projects.

## Installation

First, install this package along with ESLint in your project. **This package requires at least version 8.1 of ESLint**

```sh
npm install -D eslint @swan-bitcoin/eslint-config
```

Then create a file named `.eslintrc` in the root of your project:

```json
{
  "extends": "@swan-bitcoin/eslint-config"
}
```

### Jest + Testing Library

This packages also ships with optional configuration options for projects that use [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com). To enable these rules, add the following to your `.eslintrc`:

```json
{
  "extends": [
    "@swan-bitcoin/eslint-config",
    "@swan-bitcoin/eslint-config/jest-testing-library"
  ]
}
```

Please note that because this ruleset is optional, we do not include the core libraries as peer dependencies for this package. If you use these rules, be sure that you have the following dependencies installed in your project:

```json
{
  "@testing-library/jest-dom": ">=5.16.0",
  "@testing-library/react": ">=12.0.0",
  "jest": ">=26.0.0"
}
```
