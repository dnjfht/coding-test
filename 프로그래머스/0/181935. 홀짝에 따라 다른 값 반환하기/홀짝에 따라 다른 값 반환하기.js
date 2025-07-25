function solution(n) {
    let answer = 0;
    
    let arr = Array.from({length: n}).fill(n).map((num, idx) => num - idx);
    return n % 2 ? arr.reduce((arr, num) => num % 2 ? arr + num : arr, 0) : arr.reduce((arr, num) => num % 2 === 0 ? arr + (num ** 2) : arr, 0);
        
//     if(n % 2 === 0) {
//      for(let i = n; i > 0; i--) {
//       if(i % 2 === 0) {
//           answer += (i ** 2);
//       }  
//     }   
//     } else {
//         for(let i = n; i > 0; i--) {
//       if(i % 2 !== 0) {
//           answer += i;
//       }  
//     } 
//     }
    
//     return answer;
}