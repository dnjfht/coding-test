function solution(array) {
    var answer = [];

    answer.push(Math.max(...array),array.indexOf(Math.max(...array)));
    
    return answer;
}