function solution(my_string) {
    return my_string.split("").map((str) => Number(str)).filter((str)=> !isNaN(str)).sort((a,b)=>a-b);
}