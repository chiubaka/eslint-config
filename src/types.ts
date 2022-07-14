export interface EsLintConfig extends BaseConfig {
  overrides?: Override[];
}

interface Environment {
  browser?: boolean;
  es2021?: boolean;
}

interface Override extends BaseConfig {
  files: string | string[];
}

interface ParserOptions {
  ecmaVersion: string;
  project: string;
  sourceType: string;
}

type RuleConfig = string | [string, any];

interface BaseConfig {
  env?: Environment;
  extends?: string[];
  ignorePatterns?: string[];
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: string[];
  rules?: {
    [rule: string]: RuleConfig;
  };
}
