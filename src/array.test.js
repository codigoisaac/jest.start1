describe("Match arrays", () => {
  const users = [
    "Isaac",
    "Abner",
    "Thierre",
    "Will",
    "Jhow",
    "Corea",
    "Giovany"
  ];

  test("basic usage", () => {
    expect(users).toContainEqual("Isaac");
    expect(users).toContain(users[2]);
  });
});
