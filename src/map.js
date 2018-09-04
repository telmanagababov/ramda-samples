const { map } = require('ramda');

const mapDouble = map(value => value * 2);

console.log(`map(value => value + 2, [10, 15]) : ${map(value => value + 2, [10, 15])}`);
console.log(`mapDouble([12, 13]) : ${mapDouble([12, 13])}`);