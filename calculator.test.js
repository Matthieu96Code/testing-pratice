const calculator = require('./calculator')


describe('calculator', () => {
  test('properly add number', () => {
    expect(calculator.add(5, 2)).toBe(7);
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(70, 35)).toBe(105);
    expect(calculator.add(-123, 41)).toBe(82);
  });

  test('properly subtract number', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(70, 35)).toBe(35);
    expect(calculator.subtract(-123, 41)).toBe(-164);
  });

  test('properly divide number', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(1, 1)).toBe(1);
    expect(calculator.divide(70, 35)).toBe(2);
    expect(calculator.divide(-123, 41)).toBe(-3);
  });

  test('properly multiply number', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
    expect(calculator.multiply(1, 1)).toBe(1);
    expect(calculator.multiply(70, 35)).toBe(2450);
    expect(calculator.multiply(-123, 46)).toBe(-5043);
  });
});
