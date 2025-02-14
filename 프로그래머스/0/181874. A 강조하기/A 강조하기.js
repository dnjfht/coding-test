function solution(myString) {
//     var answer = '';
    
//     for(let x of myString){
//       answer += x === "a" ? "A" : x.toLowerCase();
//     }
//     return answer;
    
    return [...myString].map((a) => a === "a" ? "A" : a === "A" ? "A" : a.toLowerCase()).join("");
}