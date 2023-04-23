function solution(price, money, count) {

    let sum = 0;

    for (let i = price; i <= price * count; i+=price ){
        sum+=i;
    }
    
    if(sum > money) {
        return sum - money
    } else if(sum <= money) {
        return 0;
    };
}