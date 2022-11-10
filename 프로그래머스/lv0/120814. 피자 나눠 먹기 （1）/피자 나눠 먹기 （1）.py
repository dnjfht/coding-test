def solution(n):
    import math
    
    if n > 7:
        answer = math.ceil(n / 7)
    else:
        answer = 1
        
    return answer