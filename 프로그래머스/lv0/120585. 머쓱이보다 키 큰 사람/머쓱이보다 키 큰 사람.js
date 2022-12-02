function solution(array, height) {
    var answer = [];
    for (let i = 0; i< array.length; i++){
        if(array[i] > height) {
            answer.push(i);
        }
    }
    return answer.length;
}