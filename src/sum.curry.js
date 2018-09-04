const { curry } = require('ramda');

const sum = curry((a, b) => a + b);
const add5 = sum(5);

console.log(`add5(12) : ${add5(12)}`);
console.log(`add5('66') : ${add5(66)}`);