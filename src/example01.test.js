describe("Addition", () => {
  let calc;

  beforeEach(() => {
    const options = { precision: 2 };
    calc = new Calculator(options);
  });

  test("Adds two positive numbers", () => {
    const result = calc.add(1.456, 2.7);

    expect(result).toBe(4.15);
  });

  test("Adds two negative numbers", () => {
    const result = calc.add(-1.456, -2.7);

    expect(result).toBe(-4.15);
  });
});
