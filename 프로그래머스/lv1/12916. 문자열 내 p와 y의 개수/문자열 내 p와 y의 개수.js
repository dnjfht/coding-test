function solution(s){
    let answer = true;

    const comp1 = s.split("").map((str)=>str.toLowerCase()).filter((str)=>str === "p").length;
    
    const comp2 = s.split("").map((str)=>str.toLowerCase()).filter((str)=> str === "y").length;
    
    if(comp1 === 0 && comp2 === 0) {
        answer = true;
    } else if(comp1 === comp2) {
        answer = true;
    } else if(comp1 !== comp2) {
        answer = false;
    }

    return answer;
}