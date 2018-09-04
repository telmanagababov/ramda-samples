const { append } = require('ramda');

const originalList = [1, 2, 3, 4];

console.log(`originalList : ${originalList}`);
console.log(`append([5, 6, 7], originalList) : ${append([5, 6, 7], originalList)}`);
console.log(`append([25], originalList) : ${append([25], originalList)}`);