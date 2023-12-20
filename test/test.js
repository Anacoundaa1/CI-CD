const addNumbers = require('../src/addition');

describe('addNumbers function', () => {
  it('adds two positive numbers', () => {
    const result = addNumbers(2, 3);
    expect(result).toBe(5);
  });

  it('adds a positive number and a negative number', () => {
    const result = addNumbers(5, -3);
    expect(result).toBe(2);
  });

  it('adds two negative numbers', () => {
    const result = addNumbers(-1, -7);
    expect(result).toBe(-8);
  });

  it('adds zero and a number', () => {
    const result = addNumbers(0, 9);
    expect(result).toBe(9);
  });
});
