const { chain } = require('ramda');

const duplicate = value => [value, value];
const powers = value => [value, Math.pow(value, 2), Math.pow(value, 3)];

console.log(`chain(duplicate, [1, 2, 3]) : ${chain(duplicate, [1, 2, 3])}`);
console.log(`chain(powers, [1, 2, 3]) : ${chain(powers, [1, 2, 3])}`);