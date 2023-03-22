function solution(s) {
    let answer = "";

    let arrayNum = s.split(" ").map(Number);
    answer += Math.min(...arrayNum);
    answer += " ";
    answer += Math.max(...arrayNum);
    return answer;
}