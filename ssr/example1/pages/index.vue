<template>
  <h1>Hello world!</h1>
</template>

<script>
import axios from "axios";

export default {
  created() {
    console.log(111);
    this.init();
  },
  methods: {
    async init() {
      const response = await axios({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET"
      });

      console.log(22, response);
    }
  }
};
</script>
