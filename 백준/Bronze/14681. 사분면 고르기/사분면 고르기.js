const fs = require('fs');
const inputData = fs.readFileSync(0).toString().split("\n",2).map((num)=>Number(num));
let answer = (inputData[0] > 0 && inputData[1] > 0) ? 1 : (inputData[0] < 0 && inputData[1] > 0) ? 2 : (inputData[0] < 0 && inputData[1] < 0) ? 3 : 4;
console.log(answer);