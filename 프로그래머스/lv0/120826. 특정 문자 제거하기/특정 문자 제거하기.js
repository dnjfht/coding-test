// function solution(my_string, letter) {
    // const answer = my_string.split(letter).join('')
    // letter을 뺀 나머지를 answer에 모두 삽입
    // return answer;
// }

function solution(my_string, letter) {
    let ans = [];
    
    for(let i = 0; i < my_string.length; i++) {  
        if(my_string[i] != letter ) {
            // my_string[i]가 letter 아닐 때 ans 빈 배열에 추가
            ans.push(my_string[i]);
        }
    }
    return ans.join("");
    // ans 배열을 string으로
    
    // var a = ['바람', '비', '불'];
    // var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
    // var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
    // var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
    // var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입
}