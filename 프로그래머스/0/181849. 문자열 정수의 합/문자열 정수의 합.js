function solution(num_str) {
    var answer;
    answer = [...num_str].map((str) => Number(str)).reduce((sum, num) => sum += num, 0);
    return answer;
}