<?php
class Entree {
  public $name;
  public $ingredients = array();

  public function hasIngredient($ingredient){
    return in_array($ingredient, $this->ingredients);
  }
}
$soup = new Entree;
$soup->name = "닭고기 수프";
$soup->ingredients = array("닭고기","물");

$sandwich = new Entree;
$sandwich->name = "닭고기 샌드위치";
$sandwich->ingredients = array("닭고기", "빵");

// ->를 이용하면 클래스내의 속성에 접근할 수 있다.
foreach(["닭고기","레몬","빵","물"] as $ing){
  if($soup->hasIngredient($ing)){
    print "$ing \n";  // 닭고기 물
  }
  if($sandwich->hasIngredient($ing)){
    print "$ing \n";  // 닭고기 빵
  }
}
?>