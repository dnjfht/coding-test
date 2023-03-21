function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        answer += my_string[i].repeat(n);
        // string의 repeat 메소드.
        // 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환.
    }
    return answer;
}