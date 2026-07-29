def solution(my_string, overwrite_string, s):
    length = len(overwrite_string)
    front = my_string[:s]
    middle = overwrite_string
    back = my_string[s+length:]
    
    answer = front + middle + back
    return answer