function solution(array, height) {
    let result = [];
    
    for (let i = 0; i <= array.length-1; i++) {
        if(array[i] > height){
            result.push(array[i]);
        }
    }
    
    return result.length;
}