function solution(s) {
    // 처음에 실패한 코드 =>
    // return s.length === 4 && !isNaN(s) ? true : s.length === 6 && !isNaN(s) ? true : false; 
    // isNaN을 사용시 숫자 뒤에 붙은 e를 지수 취급할 수 있음(error의 이유)
    
    if(s.length === 4 || s.length === 6) {
        return s.split("").every(c => !isNaN(c));
        // every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트. Boolean 값을 반환.
    } else {
        return false;
    }

    
    
}