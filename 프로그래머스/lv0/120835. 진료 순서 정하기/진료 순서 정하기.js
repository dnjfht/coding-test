function solution(emergency) {
    let answer = [];

    let order = [...emergency].sort((a,b) => b-a);
    // [76, 24, 3];
    
    for(let i = 0; i < emergency.length; i++) {
        answer.push(order.indexOf(emergency[i])+1);
    }
    return answer;
}