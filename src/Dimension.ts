export class Dimension {
  length!: number;
  width!: number;
  height!: number;
  weight!: number;

  constructor(length: number, width: number, height: number, weight: number) {
    if (length < 0) throw new Error('Inválid Length');
    if (width < 0) throw new Error('Inválid Width');
    if (height < 0) throw new Error('Inválid Height');
    if (weight < 0) throw new Error('Inválid Weight');

    this.length = length;
    this.width = width;
    this.height = height;
    this.weight = weight;
  }

  getVolume() {
    return (this.width / 100) * (this.height / 100) * (this.length / 100);
  }

  getDensity() {
    const volume = this.getVolume();
    if (volume == 0) return 0;
    return this.weight / volume;
  }
}
