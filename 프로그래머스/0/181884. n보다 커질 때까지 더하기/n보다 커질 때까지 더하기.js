function solution(numbers, n) {
    // var answer = 0;
    // return answer;
    return numbers.reduce((arr, num) => arr <= n ? arr + num : arr, 0);
    
}