function solution(s){  
    // let answer="";
    // for(let i=0; i<s.length; i++){
    //   if(s.indexOf(s[i])===i) answer+=s[i];   
    // }
    // return answer;
    
    
    return [...s].filter((c,i)=>s.indexOf(c)==i).join('');
    // indexOf는 s[i] 값이 담긴 가장 첫 번째 index를 반환함.
}