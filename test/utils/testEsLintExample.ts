import path from "node:path";

import { lintFile } from "./lintFile";

export const testEsLintExample = (exampleName: string, matchString: string) => {
  const examplePath = path.join(__dirname, `../examples/${exampleName}`);
  const badExamplePath = `${examplePath}/bad.ts`;
  const goodExamplePath = `${examplePath}/good.ts`;

  // eslint-disable-next-line jest/valid-title
  describe(exampleName, () => {
    it("finishes with no errors when run on a good example", async () => {
      const results = await lintFile(goodExamplePath);

      expect(results).toHaveLength(1);

      const result = results[0];

      expect(result.errorCount).toEqual(0);
    });

    it(`exits with an error containing "${matchString}" when run on a bad example`, async () => {
      const results = await lintFile(badExamplePath);

      expect(results).toHaveLength(1);

      const result = results[0];

      expect(result.errorCount).toEqual(1);

      const messages = result.messages;
      const message = messages[0];

      expect(message.message).toContain(matchString);
    });
  });
};
