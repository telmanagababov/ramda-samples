const { zipWith } = require('ramda');

const letters = ['q', 'w', 'a', 'b', 'c'];
const numbers = [3, 4, 5, 6];
const zipper = zipWith((x, y) => `${x}:${y}!`);

console.log(`zipWith(a => a, letter, numbers) : ${zipWith(a => a, letters, numbers)}`);
console.log(`zipper(letter, numbers) : ${zipper(letters, numbers)}`);