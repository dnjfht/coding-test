def solution(money):
    answer = []
    cup = money // 5500
    change = money % 5500
    answer.append(cup)
    answer.append(change)
    return answer