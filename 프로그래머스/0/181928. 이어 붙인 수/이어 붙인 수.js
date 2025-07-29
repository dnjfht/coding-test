function solution(arr) {
    // let even = "";
    // let odd = "";
    
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] % 2) {
    //         odd += arr[i]
    //     } else {
    //         even += arr[i]
    //     }
    // }
    
    // arr.forEach((num) => num % 2 ? odd += num : even += num);
    // return Number(even) + Number(odd);
    
    const {evens, odds} = arr.reduce(({evens, odds}, num) => {
        if(num % 2) {
            odds += num;
        } else {
            evens += num;
        }
        return {odds, evens};
    }, {evens: "", odds: ""});
    return Number(evens) + Number(odds);
}