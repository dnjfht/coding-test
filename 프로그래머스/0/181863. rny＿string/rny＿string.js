function solution(rny_string) {
//     var answer = '';
    
//     for(let x of rny_string){
//         answer += x === "m" ? "rn" : x;
//     }
    
    // for(let i = 0; i < rny_string.length; i++) {
    //     if(rny_string[i] === "m") {
    //         answer += "rn";
    //     } else {
    //         answer += rny_string[i];
    //     }
    // }
    // return answer;
    
    return rny_string.split("").map((e) => e === "m" ? "rn" : e).join("");
    
    
}