function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    num_list.reduce((_,crt,idx) => (idx + 1) % 2 === 1 ? oddSum += crt : evenSum += crt, 0);
    return oddSum > evenSum ? oddSum : evenSum;
}