// 기존에 내가 작성했던 코드

// function solution(cipher, code) {
//     let answer = "";
    
//     for (let i = code-1; i < cipher.length; i+=code){
//        answer += cipher[i];
//     }
//     return answer;
// }


// 고차함수를 사용한 괜찮은 코드가 하나 더 있는 것 같아 가져왔다...
// filter의 콜백함수의 인자로는 value, index, array가 들어갈 수 있음. value는 사용 안하고 index만 사용할시 value 자리에 _를 넣어주면 됨.
// code 자릿수는 index + 1이므로 (index + 1) % code === 0인 조건을 filter를 통해서 찾아내면 됨.
// 찾게 되면 join()을 이용해 배열을 문자열로 합쳐주기

function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}
