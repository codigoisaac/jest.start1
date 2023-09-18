const add = require("./calc");

describe("Calculator", () => {
  test("add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
