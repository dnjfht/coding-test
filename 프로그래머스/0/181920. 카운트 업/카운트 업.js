function solution(start_num, end_num) {
    var answer = [];
    // for(let i = start_num; i <= end_num; i++) {
    //     answer.push(i);
    // }
    
    // return answer;
    
    const arr = Array.from({length:end_num - start_num + 1});
    // console.log(arr);
    return arr.map((_, idx) => start_num + idx);
}