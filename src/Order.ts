import { Coupon } from './Coupon';
import { Cpf } from './Cpf';
import { FreightCalculator } from './FreightCalculator';
import { Item } from './Item';
import { OrderItem } from './OrderItem';

export class Order {
  private _freight = 0;
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

  constructor(cpf: string) {
    this._cpf = new Cpf(cpf);
    this._itens = [];
  }

  addItem(item: Item, quantity: number) {
    if (this._itens.some(orderItem => orderItem.idItem == item.idItem)) {
      throw new Error('Item already exists');
    }
    this._itens.push(new OrderItem(item.idItem, item.price, quantity));
    this._freight += FreightCalculator.calculate(item) * quantity;
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired()) {
      throw new Error('Coupon is expired');
    }
    this._coupon = coupon;
  }

  getTotal() {
    let total = this._itens.reduce((total, item) => total + item.getTotal(), 0);
    if (this._coupon) {
      total -= this._coupon.getDiscount(total);
    }
    if (this._freight) {
      total += this._freight;
    }
    return total;
  }
}
