function solution(arr1, arr2) {
    const sum1 = arr1.reduce((num, sum) => num + sum, 0);
    const sum2 = arr2.reduce((num, sum) => num + sum, 0);
    
    return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    
    // if(arr1.length === arr2.length) {
    //     return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    // } else {
    //     return arr1.length > arr2.length ? 1 : -1;
    // }
}