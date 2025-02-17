function solution(a, b) {
    // let ab = Number("" + a + b);
    // let ba = Number("" + b + a);
    
    let ab = Number(`${a}${b}`);
    let ba = Number(`${b}${a}`) ;
    return ab > ba ? ab : ba;
}