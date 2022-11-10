def solution(num_list):
    # answer = num_list[::-1]
    
    answer = list(reversed(num_list))
    # reverse() 내장함수는 주어진 시퀀스 (리스트, 튜플 등)에 대해 순서가 뒤집어진
    # iterator 객체의 형태로 반환하기 때문에 내장함수 list()를 이용해서 리스트 자료형으로 변환

    return answer