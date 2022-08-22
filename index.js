// Splitting rules into separate modules allow for a lower-level API if our
// default rules become difficult to extend without lots of duplication.
const coreRules = require("./rules/core");
const importRules = require("./rules/import");
const reactRules = require("./rules/react");
const jsxA11yRules = require("./rules/jsx-a11y");
const typescriptRules = require("./rules/typescript");
const importSettings = require("./settings/import");
const reactSettings = require("./settings/react");

const OFF = 0;
// const WARN = 1;
// const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
const config = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaVersion: "latest",
    babelOptions: {
      presets: [require.resolve("@babel/preset-react")],
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  plugins: ["import", "react", "react-hooks", "jsx-a11y", "prettier"],
  settings: {
    ...reactSettings,
    ...importSettings,
  },

  // NOTE: In general - we want to use prettier for the majority of stylistic
  // concerns.  However there are some "stylistic" eslint rules we use that should
  // not fail a PR since we can auto-fix them after merging to dev.  These rules
  // should be set to WARN.
  //
  // ERROR should be used for "functional" rules that indicate a problem in the
  // code, and these will cause a PR failure

  // IMPORTANT: Ensure that rules used here are compatible with
  // typescript-eslint. If they are not, we need to turn the rule off in our
  // overrides for ts/tsx.

  // To read the details for any rule, see https://eslint.org/docs/rules/[RULE-KEY]
  rules: {
    ...coreRules,
    ...importRules,
    ...reactRules,
    ...jsxA11yRules,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:import/typescript"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        ...typescriptRules,
      },
    },
  ],
};

module.exports = config;
