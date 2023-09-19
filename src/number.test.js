describe("Compare numbers", () => {
  test("basic usage", () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 10).toBeGreaterThanOrEqual(11);
    expect(10 - 6).toBeLessThan(5);
    expect(10 - 6).toBeLessThanOrEqual(4);
  });
});
