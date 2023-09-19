describe("Match objects", () => {
  const user = { name: "Isaac", age: 25 };

  test("basic usage", () => {
    expect(user.name).toBeDefined();
    expect(user.id).not.toBeDefined();
  });
});
