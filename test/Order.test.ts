import { Coupon } from '../src/Coupon';
import { Order } from '../src/Order';
import { OrderItem } from '../src/OrderItem';

describe('Order', function () {
  const cpfValido = '290.991.040-73';

  test('Não deve criar um pedido com cpf inválido', () => {
    expect(() => new Order('111.111.111-11')).toThrow(new Error('Inválid CPF'));
  });

  test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', () => {
    const itens = [
      new OrderItem('Camisa', 70.0, 1),
      new OrderItem('Calça', 125.0, 1),
    ];
    const order = new Order(cpfValido, itens);
    order.addItem(new OrderItem('Sapato', 150.0, 1));

    expect(order).toBeInstanceOf(Order);
    expect(order.itens.length).toBe(3);
  });

  test('Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
    const order = new Order(cpfValido);
    const coupon = new Coupon('#code', 10);
    order.addCoupon(coupon);

    expect(order.coupon).toBeInstanceOf(Coupon);
    expect(order.coupon?.percentage).toBe(10);
  });
});
