const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map((num)=>Number(num));

const answer = inputData[0] > inputData[1] ? ">" : inputData[0] < inputData[1] ? "<" : "==";
console.log(answer);