function solution(n) {
    return parseInt(String(n).split("").map((num)=>Number(num)).sort((a,b)=>b-a).join(""));
    // 숫자를 배열에 담아주기 위한 과정 => String을 사용하여 문자열로 변환 => split을 사용하여 숫자를 분리시켜 배열에 담아줌.
    // => map()을 통하여 숫자로 형 변환을 해주면 됨(Number 메소드 사용) 
}
