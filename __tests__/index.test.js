// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import Validator from '../index.js';

test('task1', () => {
  const validator = new Validator();
  const schema = validator.number();

  assert.equal(schema.isValid(null), false); // false
  assert.equal(schema.isValid(''), false); // false
  assert.equal(schema.isValid(true), false); // false
  assert.equal(schema.isValid(123), true); // true
  assert.equal(schema.isValid(0), true); // true
});

test('task2', () => {
  const validator = new Validator();
  const schema1 = validator.number().even();
  const schema2 = validator.number().odd();

  assert.equal(schema1.isValid(''), false);
  assert.equal(schema1.isValid(2), true);
  assert.equal(schema2.isValid(2), false);
  assert.equal(schema2.isValid(3), true);
});

test('task3', () => {
  const validator = new Validator();
  const schema = validator.array();

  assert.equal(schema.isValid('Hello!'), false);
  assert.equal(schema.isValid(123), false);
  assert.equal(schema.isValid([]), true);
  assert.equal(schema.isValid([1, 23, 4]), true);
});

test('task4', () => {
  const validator = new Validator();
  const schema1 = validator.array().length(4);
  const schema2 = validator.array().length(12312312455434);

  assert.equal(schema1.isValid(null), false);
  assert.equal(schema1.isValid([]), false);
  assert.equal(schema1.isValid([1, 2, 3, 4]), true);
  assert.equal(schema2.isValid([]), false);
  assert.equal(schema2.isValid([1, 23, 4, 5]), false);
});

// test('task5', () => {
//   const validator = new Validator();
//   const schema = validator.object();

//   schema.shape({
//     name: validator.string().length(5),
//     age: validator.number().isEven(),
//   });

//   assert.equal(schema.isValid({ name: 'kolya', age: 100 }), true);
//   assert.equal(schema.isValid({ name: 'maya', age: 2 }), false);
//   assert.equal(schema.isValid({ name: 'anna', age: 3 }), false);
//   assert.equal(schema.isValid({ name: 'sergey', age: 11136 }), true);
// });s
