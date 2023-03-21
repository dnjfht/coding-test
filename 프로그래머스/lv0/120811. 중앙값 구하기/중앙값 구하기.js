function solution(array) {
    let answer = 0;
    answer = array.sort((a,b) => a-b)[Math.floor(array.length / 2)]
    return answer;
    
    // sort 이용 => 오름차순
    // 배열의 길이를 2로 나눈 후 Math.floor로 소숫점을 내림해주면 중간 index가 나옴.
    // 이런 문제는 입출력에 대입을 많이 해봐야 할 것 같음.
}