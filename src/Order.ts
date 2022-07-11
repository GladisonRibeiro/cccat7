import { Coupon } from './Coupon';
import { Cpf } from './Cpf';
import { Item } from './Item';
import { OrderItem } from './OrderItem';

export class Order {
  private _minShippingCost = 10;
  private _cpf: Cpf;
  get cpf() {
    return this._cpf;
  }
  private _itens: OrderItem[];
  get itens() {
    return [...this._itens];
  }
  private _coupon?: Coupon;
  get coupon() {
    return this._coupon;
  }

  constructor(cpf: string, itens?: OrderItem[], coupon?: Coupon) {
    this._cpf = new Cpf(cpf);
    this._itens = itens || [];
    this._coupon = coupon;
  }

  addItem(item: Item, quantity: number) {
    if (this._itens.some(orderItem => orderItem.idItem == item.idItem)) {
      throw new Error('Item already exists');
    }
    this._itens.push(
      new OrderItem(
        item.idItem,
        item.price,
        quantity,
        item.length,
        item.width,
        item.height,
        item.weight,
      ),
    );
  }

  addCoupon(coupon: Coupon) {
    if (coupon.expired()) {
      throw new Error('Coupon is expired');
    }
    this._coupon = coupon;
  }

  getTotal() {
    let total = this._itens.reduce((total, item) => total + item.getTotal(), 0);
    if (this._coupon) {
      total -= this._coupon.getDiscount(total);
    }
    return total;
  }

  shippingCost(distance: number) {
    const total = this._itens.reduce(
      (total, item) => total + item.shippingCost(distance),
      0,
    );
    return total > this._minShippingCost ? total : this._minShippingCost;
  }
}
