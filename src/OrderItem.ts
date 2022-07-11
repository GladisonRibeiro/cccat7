export class OrderItem {
  quantity: number;

  constructor(
    readonly idItem: number,
    readonly price: number,
    quantity: number,
    readonly length: number,
    readonly width: number,
    readonly height: number,
    readonly weight: number,
  ) {
    if (quantity < 0) {
      throw new Error('Inválid Quantity');
    }
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }

  shippingCost(distance: number) {
    const volume = (this.length * this.width * this.height) / 1000000;
    const density = Math.round(this.weight / volume);
    return distance * volume * (density / 100);
  }
}
