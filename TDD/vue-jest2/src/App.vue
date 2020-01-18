<template>
  <div id="app">
    <h1>TDD</h1>
    <List />
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  name: "App",
  data() {
    return {
      title: "TDD.."
    };
  },
  components: {
    List
  }
};
</script>
