const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // 표준 입력(일반적으로 키보드 입력)
    output: process.stdout // 표준 출력(일반적으로 콘솔 화면)
});

let input = [];
let str1;
let str2;

rl.on('line', function (line) {
    // 'line' 이벤트는 사용자가 콘솔에 한 줄을 입력하고 Enter 키를 눌렀을 때 발생
    input = line.split(' ');
    // 전달받은 line 문자열을 공백(' ')을 기준으로 분리하여 배열로 만들고, 그 배열을 전역 변수 input에 할당
}).on('close', function () {
    // 'close' 이벤트는 더 이상 입력할 내용이 없어서 입력 스트림이 닫힐 때 발생
    // 일반적으로 사용자가 Ctrl+D(유닉스/리눅스) 또는 Ctrl+Z (Windows)를 눌러 입력을 끝내거나, 입력할 파일이 끝났을 때 발생
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2);
});