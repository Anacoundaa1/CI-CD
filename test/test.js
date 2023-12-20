const addNumbers = require('../src/addition');

describe('fonction addNumbers : ', () => {
  it('Ajouter deux nombres positifs', () => {
    const result = addNumbers(2, 3);
    expect(result).toBe(5);
  });

  it('Ajouter un nombre positif et un nombre negatif', () => {
    const result = addNumbers(5, -3);
    expect(result).toBe(2);
  });

  it('Ajouter deux nombres negatifs', () => {
    const result = addNumbers(-1, -7);
    expect(result).toBe(-8);
  });

  it('Ajouter zero et un nombre', () => {
    const result = addNumbers(0, 9);
    expect(result).toBe(9);
  });
});
