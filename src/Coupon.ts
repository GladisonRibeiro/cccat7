export class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly validity?: Date,
  ) {}

  getDiscount(total: number) {
    return (total * this.percentage) / 100;
  }

  expired() {
    if (!this.validity) return false;
    return this.validity < new Date();
  }
}
