import { validateCPF } from "../../src/utils/cpf";

test('Deve retornar true ao validar um cpf correto com mascara', () => {
  const isValid = validateCPF('050.146.100-05');
  expect(isValid).toBe(true);
});

test('Deve retorna false ao validar um cpf incorreto com mascara', () => {
  const isValid = validateCPF('111.444.777-05');
  expect(isValid).toBe(false);
});

test('Deve retornar true ao validar um cpf sem mascara correto', () => {
  const isValid = validateCPF('19717316090');
  expect(isValid).toBe(true);
});

test('Deve retornar false ao validar um cpf incorreto sem mascara', () => {
  const isValid = validateCPF('11144477705');
  expect(isValid).toBe(false);
});

test('Deve retorna false ao validar um cpf nulo', () => {
  const isValid = validateCPF(null);
  expect(isValid).toBe(false);
});

test('Deve retornar undefined ao validar um cpf undefined', () => {
  const isValid = validateCPF(undefined);
  expect(isValid).toBe(undefined);
});

test('Deve retornar false ao validar um cpf com digitos iguais', () => {
  const isValid = validateCPF('00000000000');
  expect(isValid).toBe(false);
});

test('Deve retornar false ao validar um cpf sem mascara de tamanho minimo incorreto', () => {
  const isValid = validateCPF('1114447735');
  expect(isValid).toBe(false);
});

test('Deve retornar false ao validar um cpf com mascara de tamanho maximo incorreto', () => {
  const isValid = validateCPF('111.444.777-3535');
  expect(isValid).toBe(false);
});

test('Deve retornar false ao validar um cpf com letras', () => {
  const isValid = validateCPF('abcdfgasdfg');
  expect(isValid).toBe(false);
});

test('Deve retornar false ao validar um cpf com caracteres especiais', () => {
  const isValid = validateCPF('ab*+-dfgasdfg');
  expect(isValid).toBe(false);
});