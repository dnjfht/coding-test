function solution(arr) {
//     var answer = [];
    
//     for(let x of arr) {
//       for(let i = 0; i < x; i++){
//           answer.push(x);
//       }
//     }
//     return answer;
    
    return arr.map((num) => new Array(num).fill(num)).flat();
    // return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
    // return arr.reduce((a, c) => a.concat(Array(c).fill(c)), [])
    
}