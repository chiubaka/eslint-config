import { testEsLintExample } from "./utils";

describe(".eslintrc", () => {
  testEsLintExample("missing-semicolon", "Insert `;`");

  testEsLintExample("console-log", "asdf");
});