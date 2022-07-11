export class Item {
  length!: number;
  width!: number;
  height!: number;
  weight!: number;

  constructor(
    readonly idItem: number,
    readonly description: string,
    readonly price: number,
    length: number,
    width: number,
    height: number,
    weight: number,
  ) {
    if (length < 0) throw new Error('Inválid Length');
    if (width < 0) throw new Error('Inválid Width');
    if (height < 0) throw new Error('Inválid Height');
    if (weight < 0) throw new Error('Inválid Weight');

    this.length = length;
    this.width = width;
    this.height = height;
    this.weight = weight;
  }
}
