describe("Mock", () => {
  test("create a callable function", () => {
    const mock = jest.fn();
    mock("developer");

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("developer");
  });

  test("implementation", () => {
    const add = jest.fn().mockImplementation((a, b) => 5);

    expect(add(1, 1)).toBe(5);
    expect(add).toHaveBeenCalledWith(1, 1);
  });
});
