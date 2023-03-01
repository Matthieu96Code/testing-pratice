const calculator = require('./calculator')


describe('calculator', () => {
  const calc = new calculator()

  test('properly add number', () => {
    expect(calc.add(5, 2)).toBe(7);
  });
  
  test('properly add number', () => {
    expect(calc.add(1, 1)).toBe(2);
  });
  
  test('properly add number', () => {
    expect(calc.add(70, 35)).toBe(105);
  });

  test('properly add number', () => {
    expect(calc.add(-123, 41)).toBe(-82);
  });

// subtract

  test('properly subtract number', () => {
    expect(calc.subtract(5, 2)).toBe(3);
  });
  
  test('properly subtract number', () => {
    expect(calc.subtract(1, 1)).toBe(0);
  });
  
  test('properly subtract number', () => {
    expect(calc.subtract(70, 35)).toBe(35);
  });

  test('properly subtract number', () => {
    expect(calc.subtract(-123, 41)).toBe(-164);
  });

// divide

  test('properly divide number', () => {
    expect(calc.divide(5, 2)).toBe(2.5);
  });
  test('properly divide number', () => {
    expect(calc.divide(1, 1)).toBe(1);
  });
  test('properly divide number', () => {
    expect(calc.divide(70, 35)).toBe(2);
  });

  test('properly divide number', () => {
    expect(calc.divide(-123, 41)).toBe(-3);
  });

// multiply

  test('properly multiply number', () => {
    expect(calc.multiply(5, 2)).toBe(10);
  });
  
  test('properly multiply number', () => {
    expect(calc.multiply(1, 1)).toBe(1);
  });
  
  test('properly multiply number', () => {
    expect(calc.multiply(70, 35)).toBe(2450);
  });
  
  test('properly multiply number', () => {
    expect(calc.multiply(-123, 41)).toBe(-5043);
  });
  
});
