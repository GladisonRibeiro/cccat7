export class Cpf {
  private _value!: string;
  get value() {
    return this._value;
  }

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new Error('Inválid CPF');
    }
    this._value = value;
  }

  CPF_LENGTH = 11;
  MAXIMUM_DIGIT_VALUE = 9;

  validate(cpf: string) {
    if (!cpf) {
      return false;
    }
    cpf = this.removeNotDigits(cpf);
    if (!this.isValidLength(cpf)) {
      return false;
    }
    if (this.isSameDigits(cpf)) {
      return false;
    }
    let { firstDigitAccumulator, secondDigitAccumulator } =
      this.calculateDigitAccumulators(cpf, this.CPF_LENGTH);
    let firstDigitChecker = this.calculateDigitChecker(
      firstDigitAccumulator,
      this.CPF_LENGTH,
    );
    secondDigitAccumulator += 2 * firstDigitChecker;
    let secondDigitChecker = this.calculateDigitChecker(
      secondDigitAccumulator,
      this.CPF_LENGTH,
    );
    let checkDigits = cpf.substring(cpf.length - 2, cpf.length);
    let generatedCheckDigits = `${firstDigitChecker}${secondDigitChecker}`;
    return checkDigits == generatedCheckDigits;
  }

  removeNotDigits(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  isValidLength(cpf: string) {
    return cpf.length === this.CPF_LENGTH;
  }

  isSameDigits(cpf: string) {
    return cpf.split('').every(digit => digit === cpf[0]);
  }

  calculateDigitAccumulators(cpf: string, defaultLength: number) {
    let firstDigitAccumulator = 0;
    let secondDigitAccumulator = 0;
    for (let multiplier = 1; multiplier < cpf.length - 1; multiplier++) {
      const digit = parseInt(cpf.substring(multiplier - 1, multiplier));
      firstDigitAccumulator += (defaultLength - multiplier) * digit;
      secondDigitAccumulator += (defaultLength + 1 - multiplier) * digit;
    }
    return { firstDigitAccumulator, secondDigitAccumulator };
  }

  calculateDigitChecker(digitAccumulator: number, defaultLength: number) {
    let restOfDivision = digitAccumulator % defaultLength;
    return restOfDivision < defaultLength - this.MAXIMUM_DIGIT_VALUE
      ? 0
      : defaultLength - restOfDivision;
  }

  toString() {
    return this._value;
  }
}
