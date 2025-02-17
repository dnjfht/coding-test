function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter((num) => Math.min(...arr) !== num); 
}