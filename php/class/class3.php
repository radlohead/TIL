<?php
class Entree {
  public $name;
  public $list = array();

  public function __construct($name, $list){
    $this->name = $name;
    $this->list = $list;
  }
  public function getName(){
    return $this->name;
  }
}
$entree = new Entree("꽃등심", [2,3,4]);
print $entree->name; // 꽃등심
print $entree->getName(); // 꽃등심
?>