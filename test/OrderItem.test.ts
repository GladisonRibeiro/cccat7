import { OrderItem } from '../src/OrderItem';

describe('OrderItem', function () {
  test('Deve calcular o total', () => {
    const orderItem = new OrderItem(0, 125, 3, 0, 0, 0, 0);
    expect(orderItem.getTotal()).toBe(375);
  });
});
