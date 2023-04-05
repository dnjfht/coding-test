const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const time = inputData[0].split(" ").map(Number);

let hour = time[0];
let minute = time[1];
const cookMinute = Number(inputData[1]);

minute += cookMinute;

if(minute > 59){
    hour += Math.floor(minute / 60);
    minute -= (Math.floor(minute / 60)) * 60;
    if(hour > 23){
        hour -= 24;
    }
}
console.log(hour + " " + minute);
