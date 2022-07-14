import { execSync } from "node:child_process";
import path from "node:path";

const CONFIG_PATH = path.join(__dirname, "../../dist/.eslintrc.js");

export const execLintFile = (filePath: string) => {
  return execSync(
    `yarn run eslint --no-eslintrc --config ${CONFIG_PATH} ${filePath}`
  );
};
