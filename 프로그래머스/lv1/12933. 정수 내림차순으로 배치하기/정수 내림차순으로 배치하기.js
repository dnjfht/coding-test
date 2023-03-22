function solution(n) {
    return parseInt(String(n).split("").map((num)=>Number(num)).sort((a,b)=>b-a).join(""));
}