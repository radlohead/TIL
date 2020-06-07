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
