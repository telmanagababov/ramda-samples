const { remove } = require('ramda');

const originalList = [1, 2, 3, 4];

console.log(`originalList : ${originalList}`);
console.log(`remove(0, 2, originalList) : ${remove(0, 2, originalList)}`);
console.log(`remove(2, 3, originalList) : ${remove(2, 3, originalList)}`);