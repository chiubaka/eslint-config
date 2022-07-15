import "node:fs";

import { ESLint } from "eslint";
import { execSync as __ } from "node:child_process";

import { testEsLintExample as _ } from "../../utils";

const _eslint = new ESLint();
