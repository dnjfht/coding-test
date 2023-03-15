function solution(price) {
    var answer = 0;
    
    if(price < 100000) {
        answer = Math.floor(price - (price * 0));
    } else if (price >= 100000 && price < 300000){
        answer = Math.floor(price - (price * 0.05));
    } else if (price >= 300000 && price < 500000) {
        answer = Math.floor(price - (price * 0.1));
    } else if (price >= 500000 && price <= 1000000) {
        answer = Math.floor(price - (price * 0.2));
    }
    
    return answer;
}