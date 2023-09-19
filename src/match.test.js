describe("Match regular expressions", () => {
  test("basic usage", () => {
    expect("developer").toMatch(/\w+/);
    expect("(12)34567-8901").toMatch(/^\(\d{2}\)\d{5}-\d{4}$/);
  });
});
