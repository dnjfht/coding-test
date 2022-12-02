function solution(hp) {
    var maxNumber = Math.floor(hp / 5);
    var middleNumber = Math.floor((hp - (5 * maxNumber)) / 3);
    var minNumber = Math.floor((hp - ((5 * maxNumber) + (3 * middleNumber))) / 1);
    
    return maxNumber + middleNumber + minNumber;
    
}
