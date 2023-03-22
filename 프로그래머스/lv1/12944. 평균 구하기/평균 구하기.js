// function solution(arr) {
//     return arr.reduce((sum, num) => sum += num ,0) / arr.length;
// }

function solution(arr) {
    return arr.reduce((sum, num, _, array) => sum + num / array.length ,0);
}
