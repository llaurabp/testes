const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('nulo', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('dois mais dois', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe e toEqual são equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras tem leite nela', () => {
  expect(shoppingList).toContain('leite');
  expect(new Set(shoppingList)).toContain('leite');
});
