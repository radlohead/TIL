<?php 
$list['corn'] = '노랑';
$list['beet'] = '빨강';
$list['carrot'] = '주황';
foreach($list as $key){
    echo "$key ";  //노랑 빨강 주황
} 
?>

<?php 
$list[0] = 'A';
$list[1] = 'B';
$list[2] = 'C';
print count($list); // 3
for($index = 0, $listLength = count($list); $index < $listLength; $index++){
  print $list[$index]; // ABC
}
?>

<!-- in_array는 배열내의 값을 찾는 메소드이다.
해당 값이 존재할 경우 1을 반환하고 해당 값이 존재하지 않을 경우 아무것도 반환하지 않는다. -->
<?php 
$list['A'] = 'AA';
$list['B'] = 'BB';
$list['C'] = 'CC';

if(in_array('AA', $list)){
  print '이 조건은 참이다.';
}
if(in_array(2, $list)){
  print '이 조건은 거짓이므로 출력되지 않는다.';
}

// array_search는 배열내의 해당 값이 존재할 경우 해당 키를 반환
print array_search('AA', $list); // A

// unset은 배열의 특정 원소를 제거하는 메소드입니다.
unset($list['A']);
foreach($list as $key){
  print "$key "; // BB CC
}

// implode는 배열의 구분자를 넣을수가 있음
print implode(',', $list);  // BB, CC
?>

<!-- sort는 배열 값을 정렬 -->
<?php
$list = array('커피빈','스타벅스','메가커피');
sort($list);
print implode(', ', $list);  // 메가커피, 스타벅스, 커피빈

$list = array(5, 1, 3);
sort($list);
print implode(', ', $list);  // 1, 3, 5
?>

<!-- 다차원 배열 -->
<?php
$list = [[3,4,5]];
print $list[0][1];  // 4
?>