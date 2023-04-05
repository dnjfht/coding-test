const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map((num)=>Number(num)).reduce((sum, num)=>sum+=num);
console.log(inputData);