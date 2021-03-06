import "@rushstack/eslint-patch/modern-module-resolution";

import { Linter } from "eslint";

const config: Linter.Config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:unicorn/recommended",
  ],
  ignorePatterns: ["reports"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        project: "tsconfig.eslint.json",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": [
          "error",
          { allowDeclarations: true },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-this-alias": [
          "error",
          { allowedNames: ["self"] },
        ],
        "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      extends: ["plugin:yml/standard", "plugin:yml/prettier"],
    },
    {
      files: ["*.json"],
      plugins: ["json"],
      rules: {
        "json/json": "error",
      },
    },
    {
      files: ["tsconfig.json"],
      rules: {
        "json/json": ["error", { allowComments: true }],
      },
    },
    {
      files: ["package.json"],
      plugins: ["package-json"],
      extends: ["plugin:package-json/recommended"],
      rules: {
        "prettier/prettier": "off",
        "package-json/sort-collections": [
          "error",
          [
            "config",
            "dependencies",
            "dependenciesComments",
            "devDependencies",
            "peerDependencies",
            "peerDependenciesComments",
            "scripts",
          ],
        ],
      },
    },
  ],
  plugins: ["prettier", "promise", "simple-import-sort", "unicorn"],
  rules: {
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "promise/catch-or-return": [
      "error",
      { terminationMethod: ["catch", "finally"] },
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        // See https://github.com/lydell/eslint-plugin-simple-import-sort/#custom-grouping
        groups: [
          // Side effect imports (the plugin inserts '\\u0000' for us to match).
          ["^\\u0000"],
          // Packages. (Things that start with a letter (or digit or underscore), or `@` followed by a letter.)
          ["^@?\\w"],
          // Relative imports.
          ["^\\."],
          // Catch everything not covered by other rules
          ["^"],
        ],
      },
    ],
    "unicorn/filename-case": [
      "error",
      { cases: { camelCase: true, pascalCase: true } },
    ],
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          args: {
            arguments: false,
          },
          dev: {
            development: false,
          },
        },
      },
    ],
  },
};

export = config;
