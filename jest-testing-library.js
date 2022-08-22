const jestRules = require("./rules/jest");
const jestDomRules = require("./rules/jest-dom");
const testingLibraryRules = require("./rules/testing-library");

module.exports = {
  plugins: ["jest", "jest-dom", "testing-library"],
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
        ...jestDomRules,
        ...testingLibraryRules,
      },
    },
  ],
};
