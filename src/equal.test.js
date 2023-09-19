describe("equality", () => {
  test("basic usage - toEqual()", () => {
    expect(1 + 2).toEqual(3);
    expect(1 + 2).not.toEqual(1);
    expect("developer").toEqual("developer");
    expect({ name: "nice" }).toEqual({ name: "nice" });
  });

  test("basic usage - toBe()", () => {
    expect(1 + 2).toBe(3);
    expect("developer").toBe("developer");
    // expect({ name: "nice" }).toBe({ name: "nice" }); //! fails
  });
});
