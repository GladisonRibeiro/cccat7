import { validate } from "../../src/utils/cpf";

test('Deve retornar true ao validar um cpf correto com mascara', () => {
  const isValid = validate('050.146.100-05');
  expect(isValid).toBe(true);
});

test('Deve retorna false ao validar um cpf incorreto com mascara', () => {
  const isValid = validate('111.444.777-05');
  expect(isValid).toBe(false);
});

test('Deve retornar true ao validar um cpf sem mascara correto', () => {
  const isValid = validate('19717316090');
  expect(isValid).toBe(true);
});

test('Deve retornar false ao validar um cpf incorreto sem mascara', () => {
  const isValid = validate('11144477705');
  expect(isValid).toBe(false);
});

test('Deve retorna false ao validar um cpf nulo', () => {
  const isValid = validate(null);
  expect(isValid).toBe(false);
});

test('Deve retornar undefined ao validar um cpf undefined', () => {
  const isValid = validate(undefined);
  expect(isValid).toBe(undefined);
});

test('Deve retornar false ao validar um cpf com digitos iguais', () => {
  const isValid = validate('00000000000');
  expect(isValid).toBe(false);
});

test('Deve retornar false ao validar um cpf sem mascara de tamanho minimo incorreto', () => {
  const isValid = validate('1114447735');
  expect(isValid).toBe(false);
});

test('Deve retornar false ao validar um cpf com mascara de tamanho maximo incorreto', () => {
  const isValid = validate('111.444.777-3535');
  expect(isValid).toBe(false);
});

test('Deve retornar um erro ao validar um cpf com letras', () => {
  const isValid = validate('abcdfgasdfg');
  expect(isValid).toBe(false);
});