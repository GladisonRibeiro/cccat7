import { Item } from './Item';

export class FreightCalculator {
  static MIN_FREIGHT_COST = 10;

  static calculate(item: Item) {
    const distance = 1000;
    const total = distance * item.getVolume() * (item.getDensity() / 100);

    if (total == 0) return 0;
    return total > FreightCalculator.MIN_FREIGHT_COST
      ? total
      : this.MIN_FREIGHT_COST;
  }
}
