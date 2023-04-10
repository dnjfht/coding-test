function solution(n) {
    var answer = '';
    
    if(n % 2 === 0) {
        answer += "수박".repeat(n/2);
    } else if(n % 2 !== 0) {
        answer += "수박".repeat((n+1)/2);
        answer = answer.slice(0, -1);
    }
    return answer;
}