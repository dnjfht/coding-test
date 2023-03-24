function solution(a, b) {
    var answer = 0;
    
    const minNum = Math.min(a,b);
    const maxNum = Math.max(a,b);
    
    for(let i = minNum; i <= maxNum; i++) {
        if (minNum !== maxNum) {
          answer += i;  
        } else if(minNum === maxNum) {
          answer = minNum;  
        }
    }
    return answer;
}