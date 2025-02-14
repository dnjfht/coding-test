function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((num, sum) => num + sum, 0) :
    num_list.reduce((num, sum) => num * sum);
}