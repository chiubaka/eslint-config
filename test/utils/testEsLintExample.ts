import path from "node:path";

import { execLintFile } from "./execLintFile";

interface ExecError {
  stdout: Buffer;
}

export const testEsLintExample = (exampleName: string, matchString: string) => {
  const examplePath = path.join(__dirname, `../examples/${exampleName}`);
  const badExamplePath = `${examplePath}/bad.ts`;
  const goodExamplePath = `${examplePath}/good.ts`;

  // eslint-disable-next-line jest/valid-title
  describe(exampleName, () => {
    it("finishes with no errors when run on a good example", () => {
      expect(() => {
        execLintFile(goodExamplePath);
      }).not.toThrow();
    });

    it(`exits with an error containing "${matchString}" when run on a bad example`, () => {
      try {
        execLintFile(badExamplePath);
      } catch (error: any) {
        const execError = error as ExecError;
        const stdout = execError.stdout.toString();

        expect(stdout).toContain(matchString);
      }

      expect.assertions(1);
    });
  });
};
