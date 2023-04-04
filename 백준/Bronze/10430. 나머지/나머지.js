const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map((num)=>Number(num));

console.log((inputData[0] + inputData[1])%inputData[2]);
console.log(((inputData[0] % inputData[2]) + (inputData[1] % inputData[2])) % inputData[2]);
console.log((inputData[0] * inputData[1])%inputData[2]);
console.log(((inputData[0] % inputData[2]) * (inputData[1] % inputData[2])) % inputData[2]);