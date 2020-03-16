<?php
class Entree {
  public $name;
  public $ingredients = array();

  public function hasIngredient($ingredient){
    return in_array($ingredient, $this->ingredients);
  }
  public static function getSizes(){
    return array("소", "중","대");
  }
}
$entree = new Entree;
print implode(", ", $entree->getSizes());  // 소, 중, 대

// 정적 메소드는 :: 기호를 통해서 접근할 수 있다.
print array_search("대", Entree::getSizes());  // 2
?>