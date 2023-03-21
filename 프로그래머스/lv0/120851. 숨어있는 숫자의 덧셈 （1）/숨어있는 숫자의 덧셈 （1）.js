function solution(my_string) {
    // let answer = 0;
    // my_string.split("").map((str) => !isNaN(str) ? answer += Number(str) : 0);
    // return answer;
    
    // !Number.inNaN(str)를 사용하면 에러가 뜨고 !isNaN(str)를 쓰면 에러가 뜨지 않아 무슨 차이인지 고민을 해봄.
    // Number.isNaN() : 엄격한 버전. 강제로 매개변수를 숫자로 변환하지 않고, 주어진 값의 유형이 Number이냐 아니냐로 판단
    // isNaN() : 인수가 Number 형이 아닌 경우, 그 값은 먼저 숫자로 형 변환 후, NaN인지 판별
    // 삼항연산자를 쓰기 전 str은 모두 string type으로 되어 있기 때문에 isNaN()를 사용해야 함.
    
    return my_string.split("").reduce((sum, num) => {
        if(!isNaN(num)){
            sum += Number(num);
        }
        return sum;
    },0)
}