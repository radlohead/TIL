<template>
  <div id="app">
    <MessageToggle />
    <List :items="itemList" />
  </div>
</template>

<script>
import MessageToggle from "@/components/MessageToggle.vue";
import List from "./components/List";

export default {
  name: "App",
  data() {
    return {
      itemList: ["item 1", "item 2"]
    };
  },
  components: {
    MessageToggle,
    List
  }
};
</script>
