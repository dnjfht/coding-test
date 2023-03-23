function solution(age) {
    const str = "abcdefghij";
    let answer = '';
    
    let arr = String(age).split("").map(Number);

    for(let i = 0; i < arr.length; i++){
      answer += str[arr[i]]; 
    }
    return answer;
}