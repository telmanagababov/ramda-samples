const { lens, prop, assoc, view, set, over, negate } = require('ramda');

const xLens = lens(prop('x'), assoc('x'));
const yLens = lens(prop('y'), assoc('y'));

console.log(`view(xLens, { x: 10, y: 15 }) : ${view(xLens, { x: 10, y: 15 })}`);
console.log(`view(yLens, { x: 10, y: 15 }) : ${view(yLens, { x: 10, y: 15 })}`);
console.log(`set(xLens, 25, { x: 10, y: 15 }).x : ${set(xLens, 25, { x: 10, y: 15 }).x}`);
console.log(`over(yLens, negate, { x: 10, y: 15 }).y : ${over(yLens, negate, { x: 10, y: 15 }).y}`);