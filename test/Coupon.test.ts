import { Coupon } from '../src/Coupon';

describe('Coupon', function () {
  test('Deve calcular o desconto', () => {
    const coupon = new Coupon('code', 10);
    expect(coupon.getDiscount(500)).toBe(50);
  });
});
