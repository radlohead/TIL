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

$drink = new Entree('우유 한 잔', '우유');  // Uncaught Exception: $ingredients가 배열이 아닙니다.
$drink->hasIngredient('우유');

$drink = new Entree('우유 한 잔', ['우유']);
print $drink->hasIngredient('우유');  // 1

try {
    $drink = new Entree('우유 한 잔', '우유');
    print $drink->hasIngredient('우유');  
  }catch(Exception $err){
    print "음료를 준비할 수 없습니다. ". $err->getMessage();  // 음료를 준비할 수 없습니다. $ingredients가 배열이 아닙니다.
  }
?>