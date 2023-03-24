function solution(x) {
    let answer = true;
    
    const sum = String(x).split("").map(Number).reduce((sum,num)=> sum += num, 0);
    
    if (x % sum === 0) {
        answer = true;
    } else if (x % sum !== 0) {
        answer = false;
    }
    return answer;
}