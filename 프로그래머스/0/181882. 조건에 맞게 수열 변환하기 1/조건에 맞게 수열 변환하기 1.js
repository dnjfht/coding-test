function solution(arr) {
    // var answer = [];
    return arr.map((num) => num % 2 === 0 && num >= 50 ? num / 2 : num % 2 && num < 50 ? num * 2 : num);
    // return answer;
}