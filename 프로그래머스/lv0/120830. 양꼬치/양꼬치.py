def solution(n, k):
    food_price = 12000 * n
    
    if n >= 10:
        juice_price = 2000 * (k - n // 10)
    else:
        juice_price = 2000 * k
        
    answer = food_price + juice_price
    return answer