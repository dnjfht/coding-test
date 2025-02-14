function solution(my_string, alp) {
//     var answer = '';
    
//     for(let x of my_string) {
//       answer += x.includes(alp) ? alp.toUpperCase() : x;
//     }
//     return answer;
    
  return my_string.split("").map((a) => a.includes(alp) ? alp.toUpperCase() : a).join("");
}