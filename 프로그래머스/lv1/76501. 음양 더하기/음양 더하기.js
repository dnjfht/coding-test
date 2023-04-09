function solution(absolutes, signs) {
    
let arr = [];

for(let i=0; i<absolutes.length; i++){
      if(signs[i]===true){
          arr.push(Number(signs[i])* absolutes[i]);
      } else if(signs[i]===false){
          arr.push(((Number(signs[i]))-1)*absolutes[i]);
      }
}
    return arr.reduce((sum,num)=>sum+=num);
    
}