<!-- 함수에 인자를 전달할때 인자에 $을 붙여서 사용해야 한다. -->
<?php
function page_header($title){
    print $title; // parameter test
}
page_header('parameter test');
?>

<!-- 함수 내부에서 리턴을 하면 해당 값을 출력받을 수 있다. -->
<?php
  function returnValue($val){
    return $val;
  }
  print returnValue('return test');

//   배열을 리턴한다.
  function returnArray(){
    return [1,2,3];
  }
  print implode(', ', returnArray());  // [1, 2, 3]
?>