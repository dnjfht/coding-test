function solution(myString, pat) {
//     let newStr = "";
    
//     for(let x of myString) {
//       newStr += x === "A" ? "B" : "A";
//     }
    
//     return newStr.includes(pat) ? 1 : 0;
    
    
    return myString.split("").map((a) => a === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0;  return answer;
}