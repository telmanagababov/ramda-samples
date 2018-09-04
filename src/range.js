const { range } = require('ramda');

const rangeFrom10 = range(10);

console.log(`range(1, 4) : ${range(1, 4)}`);
console.log(`rangeFrom10(14) : ${rangeFrom10(14)}`);