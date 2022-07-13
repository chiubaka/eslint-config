import { hello } from "./hello";

describe("hello", () => {
  it("returns a familiar phrase", () => {
    expect(hello()).toBe("Hello, world!");
  });
});
