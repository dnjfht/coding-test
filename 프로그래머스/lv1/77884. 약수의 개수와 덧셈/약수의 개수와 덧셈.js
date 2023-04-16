function solution(left, right) {
    let arr = [];
    let divis = [];
    let divisLength = [];
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        arr.push(i);
        for (let j = 1; j <= i; j++) {
            if(i % j === 0) {
                divis.push(i);
            }
        }
        divisLength.push(divis.filter((num)=> num === i).length);
    }
    
    console.log(arr);
    console.log(divisLength);
    
    for ( let x = 0; x < divisLength.length; x++) {
        // divisLength[x] % 2 === 0 ? answer += arr[x] : answer -= arr[x];
        // console.log(answer);
        
        if(divisLength[x] % 2 === 0) {
          answer += arr[x];
        } else if(divisLength[x] % 2 === 1) {
          answer -= arr[x];
        }
    }
    return answer;  
}