/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
};

module.exports = config;
