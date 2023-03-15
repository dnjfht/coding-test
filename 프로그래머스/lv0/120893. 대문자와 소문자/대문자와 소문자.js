function solution(my_string) {
    var answer = '';
    
    // for (var i of my_string){
    //  answer += (i == i.toUpperCase()) ? i.toLowerCase() : i.toUpperCase();   
    // }
    // return answer;
    
 
  for( let i = 0; i <= my_string.length -1; i++) {
    if(my_string[i] === my_string[i].toUpperCase()) {
      answer += my_string[i].toLowerCase();
    } else if(my_string[i] !== my_string[i].toUpperCase()) {
      answer += my_string[i].toUpperCase();
    }
  }
  return answer;
}