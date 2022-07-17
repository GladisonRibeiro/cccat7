import { Dimension } from '../src/Dimension';

test('Nenhuma dimensão pode ser negativa', () => {
  expect(() => new Dimension(-1, 0, 0, 0)).toThrow(new Error('Inválid Length'));
  expect(() => new Dimension(0, -1, 0, 0)).toThrow(new Error('Inválid Width'));
  expect(() => new Dimension(0, 0, -1, 0)).toThrow(new Error('Inválid Height'));
});

test('O peso do não pode ser negativo', () => {
  expect(() => new Dimension(0, 0, 0, -1)).toThrow(new Error('Inválid Weight'));
});
