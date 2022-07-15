import { testEsLintExample } from "./utils";

describe(".eslintrc", () => {
  testEsLintExample("missing-semicolon", "Insert `;`");
  testEsLintExample("console-log", "Unexpected console statement");
  testEsLintExample("simple-import-sort", "Run autofix to sort these imports!");
});
