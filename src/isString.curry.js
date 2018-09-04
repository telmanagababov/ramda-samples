const { is } = require('ramda');

const isString = is(String);

console.log(`isString(123) : ${isString(123)}`);
console.log(`isString('test') : ${isString('test')}`);