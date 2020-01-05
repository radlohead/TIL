<template>
  <div id="app">
    <List :propsItem="propsItem" />
  </div>
</template>

<script>
import List from "./containers/List";

export default {
  name: "App",
  data() {
    return {
      propsItem: ["props item1", "props item2"]
    };
  },
  components: {
    List
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
