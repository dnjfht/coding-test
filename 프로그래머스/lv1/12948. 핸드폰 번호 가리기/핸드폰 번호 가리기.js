function solution(phone_number) {
    var answer = '';
    
    
    const changeNumber = phone_number.substring(0,phone_number.length-4);
    const sliceNumber = phone_number.slice(-4);
    
    for (let i = 0; i < changeNumber.length; i++) {
       const change = changeNumber[i] = "*"
       answer += change;
    }
    
    answer += sliceNumber;
    return answer;
    
}