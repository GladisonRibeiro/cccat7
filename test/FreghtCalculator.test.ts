import { Dimension } from '../src/Dimension';
import { FreightCalculator } from '../src/FreightCalculator';
import { Item } from '../src/Item';

test.each([
  [new Item(0, 'Camera', 1000, new Dimension(20, 15, 10, 1)), 10],
  [new Item(0, 'Guitarra', 1000, new Dimension(100, 30, 10, 3)), 30],
  [new Item(0, 'Geladeira', 1000, new Dimension(200, 100, 50, 40)), 400],
])('Deve calcular o valor do frete', (item, value) => {
  const freight = FreightCalculator.calculate(item);
  expect(freight).toBe(value);
});

test('Deve retornar 0 caso as dimensões sejam iguais a 0', () => {
  const freight = FreightCalculator.calculate(
    new Item(0, 'Geladeira', 1000, new Dimension(0, 0, 0, 0)),
  );
  expect(freight).toBe(0);
});
