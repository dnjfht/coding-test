function solution(n){
 return String(n).split("").map(Number).reduce((sum,num)=>sum+=num, 0);
}