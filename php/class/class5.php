<?php
class Entree {
    public $name;
    public $ingredients = array();
  
    public function __construct($name, $ingredients){
      if(!is_array($ingredients)){
        throw new Exception('$ingredients가 배열이 아닙니다.');
      }
      $this->name = $name;
      $this->ingredients = $ingredients;
    }
    public function hasIngredient($ingredient){
      return in_array($ingredient, $this->ingredients);
    }
  }
  class ComboMeal extends Entree {
    public function hasIngredient($ingredient){
      foreach($this->ingredients as $entree){
        if($entree->hasIngredient($ingredient)){
          return true;
        }
      }
      return false;
    }
  }
  $soup = new Entree('닭고기 수프', array('닭고기', '물'));
  $sandwich = new Entree('닭고기 샌드위치', array('닭고기', '빵'));
  $combo = new ComboMeal('수프 + 샌드위치', array($soup, $sandwich));
  
  foreach(['닭고기','물','피클'] as $ing){
    if($combo->hasIngredient($ing)){
      print "세트 메뉴에 들어가는 재료: $ing. \n";  // 닭고기 물
    }
  }
?>