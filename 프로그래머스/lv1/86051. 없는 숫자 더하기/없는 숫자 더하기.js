function solution(numbers) {
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return numArr.filter((num)=> !numbers.includes(num)).reduce((sum, num)=> sum+=num, 0);
}