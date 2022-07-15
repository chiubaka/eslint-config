import { ESLint } from "eslint";
import path from "node:path";

const CONFIG_PATH = path.join(__dirname, "../../dist/.eslintrc.js");

const eslint = new ESLint({
  overrideConfigFile: CONFIG_PATH,
  ignore: false,
  useEslintrc: false,
});

export const lintFile = async (
  filePath: string
): Promise<ESLint.LintResult[]> => {
  return eslint.lintFiles(filePath);
};
