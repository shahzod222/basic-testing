import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 1,
      b: 2,
      action: Action.Add,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 3,
      b: 2,
      action: Action.Subtract,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 4,
      b: 5,
      action: Action.Multiply,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(20);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 4,
      b: 2,
      action: Action.Divide,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 3,
      b: 2,
      action: Action.Exponentiate,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(9);
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 2,
      b: 3,
      action: '&',
    };

    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: 'ab',
      b: '3',
      action: Action.Add,
    };

    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });
});
