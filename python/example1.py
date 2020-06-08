# -*- coding: utf-8 -*-
import datetime


# date ------------------------------
now = datetime.datetime.now()

print(now)  # 2020-06-07 22:54:03.920109

print(
    '{}년 {}월 {}일 {}시 {}분 {}초'.format(
        now.year,
        now.month,
        now.day,
        now.hour,
        now.minute,
        now.second
    )  # 2020년 6월 7일 22시 56분 6초
)


# 조건문 ------------------------------
if now.hour < 12:
    print('오전입니다.')
elif now.hour > 12:
    print('오후입니다.')
else:
    print('정오입니다.')


# list ------------------------------
list_a = [1, 2, 3]

list_a.append(4)
print(list_a)  # [1, 2, 3, 4]

list_a.insert(0, 10)
print(list_a)  # [10, 1, 2, 3, 4]

list_a.extend([4, 5, 6])
print(list_a)  # [10, 1, 2, 3, 4, 4, 5, 6]


# dictionary ------------------------------
dictionary = {}

print(dictionary)

dictionary['name'] = 'minho'
dictionary['head'] = 'min'
dictionary['body'] = 'ho'

print(dictionary)  # {'name': 'minho', 'head': 'min', 'body': 'ho'}

dictionary = {
    'name': 'minho',
    'type': 'front'
}
print(dictionary)  # {'name': 'minho', 'type': 'front'}

del dictionary['name']
del dictionary['type']

print(dictionary)  # {}


# range ------------------------------
print(list(range(5)))  # [0, 1, 2, 3, 4]


# min, max, sum ------------------------------
numbers = [10, 20, 30]
print(min(numbers))  # 10
print(max(numbers))  # 30
print(sum(numbers))  # 60


# reversed ------------------------------
numbers = [10, 20, 30]
numbers_reversed = reversed(numbers)

for i in numbers_reversed:
    print(i)  # 30 20 10


# enumerate ------------------------------
ex_list = ['요소A', '요소B', '요소C']

print(list(enumerate(ex_list)))  # [(0, '요소A'), (1, '요소B'), (2, '요소C')]

for i, value in enumerate(ex_list):
    print(i, value)  # 0 요소A  1 요소B  2 요소C


# 괄호로 문자열 연결하기 ------------------------------
test = (
    '괄호로 '
    '문자열 '
    '연결하기'
)
print(test)  # 괄호로 문자열 연결하기


# join ------------------------------
print("".join(['1', '2', '3']))  # 123
print("..".join(['1', '2', '3']))  # 1..2..3
