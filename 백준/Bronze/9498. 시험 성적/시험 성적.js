const fs = require('fs');
const inputData = Number(fs.readFileSync("/dev/stdin").toString());
const answer = 90 <= inputData && inputData <= 100 ? "A" : 80 <= inputData && inputData <= 89 ? "B" : 70 <= inputData && inputData <= 79 ? "C" : 60 <= inputData && inputData <= 69 ? "D" : "F";
console.log(answer);