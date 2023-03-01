const calculator = require('./calculator')


describe('calculator', () => {
  const calc = new calculator()
  test('properly add number', () => {
    expect(calc.add(5, 2)).toBe(7);
    expect(calc.add(1, 1)).toBe(2);
    expect(calc.add(70, 35)).toBe(105);
    expect(calc.add(-123, 41)).toBe(-82);
  });

  test('properly subtract number', () => {
    // expect(calculator.subtract(5, 2)).toBe(3);
    expect(calc.subtract(1, 1)).toBe(0);
    expect(calc.subtract(70, 35)).toBe(35);
    expect(calc.subtract(-123, 41)).toBe(-164);
  });

  test('properly divide number', () => {
    expect(calc.divide(5, 2)).toBe(2.5);
    expect(calc.divide(1, 1)).toBe(1);
    expect(calc.divide(70, 35)).toBe(2);
    expect(calc.divide(-123, 41)).toBe(-3);
  });

  test('properly multiply number', () => {
    expect(calc.multiply(5, 2)).toBe(10);
    expect(calc.multiply(1, 1)).toBe(1);
    expect(calc.multiply(70, 35)).toBe(2450);
    expect(calc.multiply(-123, 41)).toBe(-5043);
  });
});
