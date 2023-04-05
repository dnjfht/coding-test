const fs = require('fs');
const inputData = Number(fs.readFileSync("/dev/stdin").toString());
const answer = (inputData % 4 === 0 && inputData % 100 !== 0) ? 1 : (inputData % 4 === 0 && inputData % 400 === 0) ? 1 : 0;
console.log(answer);