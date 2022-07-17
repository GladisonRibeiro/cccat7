export class OrderItem {
  quantity: number;

  constructor(
    readonly idItem: number,
    readonly price: number,
    quantity: number,
  ) {
    if (quantity < 0) {
      throw new Error('Inválid Quantity');
    }
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
}
