function solution(numbers, n) {
// let answer = 0;
    
//     for(let i = 0; i < numbers.length; i++) {
//         if(answer <= n) {
//             answer += numbers[i];
//         }
//     }
     
//     for (const num of numbers) {
//         answer += num;
//         if (answer > n) {
//             return answer;
//         }
//     }
    
//     return answer;
    
    return numbers.reduce((acc, crt) => {
      return acc > n ?  acc : acc + crt;
    }, 0)
}