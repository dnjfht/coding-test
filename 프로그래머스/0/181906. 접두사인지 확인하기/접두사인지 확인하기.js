function solution(my_string, is_prefix) {
    // var answer = 0;
    // return answer;
    
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}