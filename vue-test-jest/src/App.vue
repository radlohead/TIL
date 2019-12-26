<template>
  <div id="app">
    <List :items="itemList" />
  </div>
</template>

<script>
import List from "./components/List";

export default {
  name: "App",
  data() {
    return {
      itemList: ["item 1", "item 2"]
    };
  },
  components: {
    List
  }
};
</script>
