function solution(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let multiply = arr.reduce((acc, num) => acc * num, 1)
    return multiply < sum ** 2 ? 1 : 0;
}