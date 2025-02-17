function solution(num_list) {
//     let odd = "";
//     let even = "";
    
//     num_list.forEach((num) => num % 2 === 0 ? even += num : odd += num);
//     return Number(odd) + Number(even);
    
    const oddStr = Number(num_list.filter((num) => num % 2 === 1).join(""));
    const evenStr = Number(num_list.filter((num) => num % 2 === 0).join(""));
    return oddStr + evenStr;
}