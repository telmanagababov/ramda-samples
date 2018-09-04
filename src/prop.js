const { prop } = require('ramda');

const propZ = prop('z');

console.log(`prop('x', { x: 10 }) : ${prop('x', { x: 10 })}`);
console.log(`prop('y', { x: 10 }) : ${prop('y', { x: 10 })}`);
console.log(`propZ({ z: 88 }) : ${propZ({ z: 88 })}`);