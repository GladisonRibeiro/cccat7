/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const {defaults} = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
};