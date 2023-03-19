function solution(slice, n) {
    let result = n % slice === 0 ? n / slice : Math.ceil(n / slice);
    return result;
}