const { is } = require('ramda');

function isString(value) {
  return is(String, value);
}

console.log(`isString(123) : ${isString(123)}`);
console.log(`isString('test') : ${isString('test')}`);