function solution(arr) {
   return arr.filter((num, idx) => arr[idx] !== arr[idx + 1]);
}