function solution(start, end) {
    // var answer = [];
    // return answer;
    
    return Array.from({length: start - end +1}, (_, idx) => start - idx);
}