import { Coupon } from './Coupon';
import { Cpf } from './Cpf';
import { OrderItem } from './OrderItem';

export class Order {
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

  addItem(item: OrderItem) {
    this._itens.push(item);
  }

  addCoupon(coupon: Coupon) {
    this._coupon = coupon;
  }
}
