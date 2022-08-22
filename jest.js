const jestRules = require("./rules/jest");

/**
 * This settings are mostly used for node environments
 * @deprecated Use `@swan-bitcoin/eslint-config/jest-testing-library` instead.
 */
const jestConfig = {
  plugins: ["jest"],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
      env: {
        "jest/globals": true,
      },
      rules: {
        ...jestRules,
      },
    },
  ],
};

module.exports = jestConfig;
