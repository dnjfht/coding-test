function solution(names) {
    var answer = [];
    // return names.filter((_, idx) => idx % 5 === 0);
    
    // 시간 복잡도 낮추기
    for(let i = 0; i < names.length; i+=5) {
       answer.push(names[i]); 
    }
    return answer;
}