function solution(n) {
    let sum = 0;
    
    let m = String(n);
    for(let i = 0; i <= m.length -1; i++){
       sum += Number(m[i]);
    }
    
    return sum;
}