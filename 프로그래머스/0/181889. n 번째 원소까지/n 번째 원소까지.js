function solution(num_list, n) {
    // return num_list.filter((_, idx) => n > idx);
    return num_list.slice(0, n);
}