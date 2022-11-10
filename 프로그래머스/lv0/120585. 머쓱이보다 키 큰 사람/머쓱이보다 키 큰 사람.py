def solution(array, height):
    tall = 0
    for a in range(len(array)):
        if array[a] > height:
            tall += 1
        
    return tall
