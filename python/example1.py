# -*- coding: utf-8 -*-
import datetime

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
