function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
      // 비트 wise OR 연산자
      // 두 개의 숫자를 비트 단위로 비교하여,
      // 비트가 적어도 하나가 1일 경우 결과 비트가 1이 됨. 그렇지 않으면 결과 비트는 0이 됨.
      const binaryNumber = (arr1[i] | arr2[i]).toString(2);
      // 숫자의 경우 앞에 0이 올 경우 없는 취급되므로 n자리만큼 0으로 채워주기. ex) n : 6, 1100 => 001100
      const setDigit = String(binaryNumber).padStart(n, 0);
      const str = setDigit.replace(/[1]/g, "#").replace(/[0]/g, " ");
      answer.push(str); 
    }
    
    return answer;
}