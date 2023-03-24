function solution(n) {
    
//     var answer = 0;
    
//     if (Number.isInteger(Math.sqrt(n)) && 1 <= Math.sqrt(n) <= 50000000000000){
//         answer = Math.pow((Math.sqrt(n)+1), 2); 
//     } else {
//         answer = -1;        
//     }
//     return answer;
    
    
    return Number.isInteger(Math.sqrt(n)) && 1 <= Math.sqrt(n) <= 50000000000000 ? Math.pow((Math.sqrt(n)+1), 2) : -1;
}