import { EsLintConfig } from "./types";

const config: EsLintConfig = {
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
  ],
  plugins: ["prettier", "promise", "simple-import-sort", "unicorn"],
  rules: {},
};

export = config;
