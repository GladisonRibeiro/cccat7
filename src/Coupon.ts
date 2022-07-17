export class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly validity?: Date,
  ) {}

  getDiscount(total: number) {
    return (total * this.percentage) / 100;
  }

  isExpired() {
    if (!this.validity) return false;
    return this.validity.getTime() < new Date().getTime();
  }
}
