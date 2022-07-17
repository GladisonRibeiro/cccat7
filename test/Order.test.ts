import { Coupon } from '../src/Coupon';
import { Dimension } from '../src/Dimension';
import { Item } from '../src/Item';
import { Order } from '../src/Order';
import { OrderItem } from '../src/OrderItem';

describe('Order', function () {
  const cpfValido = '290.991.040-73';

  test('Não deve criar um pedido com cpf inválido', () => {
    expect(() => new Order('111.111.111-11')).toThrow(new Error('Inválid CPF'));
  });

  test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', () => {
    const order = new Order(cpfValido);
    order.addItem(new Item(0, 'Camisa', 70.0), 1);
    order.addItem(new Item(1, 'Calça', 125.0), 3);
    order.addItem(new Item(2, 'Sapato', 150.0), 2);

    expect(order).toBeInstanceOf(Order);
    expect(order.itens.length).toBe(3);
  });

  test('Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
    const order = new Order(cpfValido);
    const coupon = new Coupon('#code', 10);
    order.addCoupon(coupon);

    order.addItem(
      new Item(0, 'Camisa', 70.0, new Dimension(100, 30, 10, 3)),
      1,
    );
    order.addItem(new Item(1, 'Calça', 125.0), 3);
    order.addItem(new Item(2, 'Sapato', 150.0), 2);

    expect(order.coupon).toBeInstanceOf(Coupon);
    expect(order.coupon?.percentage).toBe(10);
    expect(order.getTotal()).toBe(700.5);
  });

  test('Deve criar um pedido com cpf válido', () => {
    const order = new Order(cpfValido);
    order.addItem(new Item(0, 'Camisa', 70.0), 1);
    order.addItem(new Item(1, 'Calça', 125.0), 3);
    order.addItem(new Item(2, 'Sapato', 150.0), 2);

    expect(order.cpf.toString()).toBe(cpfValido);
    expect(order.getTotal()).toBe(745.0);
  });

  test('Não deve aplicar cupom de desconto expirado', () => {
    const order = new Order(cpfValido);
    const coupon = new Coupon('#code', 10, new Date('2022-04-10T10:00:00Z'));
    expect(() => order.addCoupon(coupon)).toThrow(
      new Error('Coupon is expired'),
    );
  });

  test('Não deve fazer um pedido com um item com quantidade negativa', () => {
    const order = new Order(cpfValido);
    expect(() => order.addItem(new Item(4, 'Pudin', 50), -1)).toThrow(
      new Error('Inválid Quantity'),
    );
  });

  test('Ao fazer um pedido, o mesmo item não pode ser informado mais de uma vez', () => {
    const order = new Order(cpfValido);
    order.addItem(new Item(0, 'Camisa', 70.0), 1);
    order.addItem(new Item(1, 'Calça', 125.0), 3);
    order.addItem(new Item(2, 'Sapato', 150.0), 2);
    expect(() => order.addItem(new Item(2, 'Sapato', 150.0), 2)).toThrow(
      new Error('Item already exists'),
    );
  });
});
