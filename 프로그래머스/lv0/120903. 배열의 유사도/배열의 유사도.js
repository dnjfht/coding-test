function solution(s1, s2) {
    var answer = 0;
    
    for (let i = 0; i <= s1.length - 1; i++) {
      for (let j = 0; j <= s2.length - 1; j++) {
          if(s1[i] === s2[j]) {
              answer += 1;
          }
      }  
    }
    return answer;
}