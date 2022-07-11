import { Coupon } from '../src/Coupon';
import { Item } from '../src/Item';
import { Order } from '../src/Order';
import { OrderItem } from '../src/OrderItem';

describe('Order', function () {
  const cpfValido = '290.991.040-73';
  const itens = [
    new OrderItem(0, 70.0, 1),
    new OrderItem(1, 125.0, 3),
    new OrderItem(2, 150, 2),
  ];

  test('Não deve criar um pedido com cpf inválido', () => {
    expect(() => new Order('111.111.111-11')).toThrow(new Error('Inválid CPF'));
  });

  test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', () => {
    const order = new Order(cpfValido);
    order.addItem(new Item(0, 'Camisa', 70.0), 1);
    order.addItem(new Item(0, 'Calça', 125.0), 3);
    order.addItem(new Item(0, 'Sapato', 150.0), 2);

    expect(order).toBeInstanceOf(Order);
    expect(order.itens.length).toBe(3);
  });

  test('Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
    const order = new Order(cpfValido, itens);
    const coupon = new Coupon('#code', 10);
    order.addCoupon(coupon);

    expect(order.coupon).toBeInstanceOf(Coupon);
    expect(order.coupon?.percentage).toBe(10);
    expect(order.getTotal()).toBe(670.5);
  });

  test('Deve criar um pedido com cpf válido', () => {
    const order = new Order(cpfValido, itens);
    expect(order.cpf).toBe(cpfValido);
    expect(order.getTotal()).toBe(745.0);
  });
});
