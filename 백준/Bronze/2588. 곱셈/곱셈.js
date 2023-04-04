const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n", 2);
const num1 = Number(inputData[0]);
const num2 = inputData[1].split("").map((num)=>Number(num));

console.log(num1 * num2[2]);
console.log(num1 * num2[1]);
console.log(num1 * num2[0]);
console.log((num1 * num2[2]) + ((num1 * num2[1])* 10) + ((num1 * num2[0])* 100));