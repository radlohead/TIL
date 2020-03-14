<template>
  <div>
    <CreateListComponent1>create list component1</CreateListComponent1>
    <CreateListComponent2>create list component2</CreateListComponent2>
  </div>
</template>

<script>
import ListComponent from "./ListComponent";
import CreateListComponent from "./hoc/CreateListComponent";

export default {
  name: "UserList",
  components: {
    CreateListComponent1: CreateListComponent(ListComponent),
    CreateListComponent2: CreateListComponent(ListComponent)
  }
};
</script>