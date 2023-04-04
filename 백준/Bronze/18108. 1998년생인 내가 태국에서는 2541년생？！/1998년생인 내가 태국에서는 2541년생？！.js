const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString();

console.log(Number(inputData)-543);