function solution(s) {
    return s.toLowerCase().split(" ").map((str)=>str.charAt(0).toUpperCase() + str.substring(1)).join(" ");
}