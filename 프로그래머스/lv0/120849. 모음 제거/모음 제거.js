function solution(my_string) {
    const vowel = "aeiou";

    let newString = my_string.split("").filter((str)=> !vowel.includes(str)).join("");
    return newString;
    
    // 문자열 vowel을 포함하지 않는 아이템 str만 모두 문자열로 합쳐줌.
}