import { Cpf } from '../src/Cpf';

test('Deve criar um cpf correto com mascara', () => {
  const cpf = new Cpf('050.146.100-05');
  expect(cpf).toBeInstanceOf(Cpf);
});

test('Deve retornar um ao criar um cpf incorreto com mascara', () => {
  expect(() => new Cpf('111.444.777-05')).toThrow(new Error('Inválid CPF'));
});

test('Deve criar um cpf sem mascara correto', () => {
  const cpf = new Cpf('19717316090');
  expect(cpf).toBeInstanceOf(Cpf);
});

test('Deve retornar um erro ao criar um cpf incorreto sem mascara', () => {
  expect(() => new Cpf('11144477705')).toThrow(new Error('Inválid CPF'));
});

test('Deve retorna um erro ao criar um cpf nulo', () => {
  expect(() => new Cpf('')).toThrow(new Error('Inválid CPF'));
});

test('Deve retornar um erro ao criar um cpf com digitos iguais', () => {
  expect(() => new Cpf('00000000000')).toThrow(new Error('Inválid CPF'));
  expect(() => new Cpf('000.000.000-00')).toThrow(new Error('Inválid CPF'));
});

test('Deve retornar um erro ao criar um cpf sem mascara de tamanho minimo incorreto', () => {
  expect(() => new Cpf('1114447735')).toThrow(new Error('Inválid CPF'));
});

test('Deve retornar um erro ao criar um cpf com mascara de tamanho maximo incorreto', () => {
  expect(() => new Cpf('111.444.777-3535')).toThrow(new Error('Inválid CPF'));
});

test('Deve retornar um erro ao criar um cpf com letras', () => {
  expect(() => new Cpf('abcdefghijk')).toThrow(new Error('Inválid CPF'));
});

test('Deve retornar um erro ao criar um cpf com caracteres especiais', () => {
  expect(() => new Cpf('ab**-09=+.')).toThrow(new Error('Inválid CPF'));
});
