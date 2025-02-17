function solution(num_list, n) {
  //  let bigIdxArr = [];
  //  let smallIdxArr = [];
    
  //  for(let i = 0; i < num_list.length; i++) i < n ? smallIdxArr.push(num_list[i]) : bigIdxArr.push(num_list[i]);
  //  return [...bigIdxArr, ...smallIdxArr];
    
  //  return [...num_list.slice(n), ...num_list.slice(0,n)];
    
    num_list.push(...num_list.splice(0, n));
    return num_list;
}