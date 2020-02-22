<template>
  <div>
    <p>Spy test</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    findOne(id) {
      return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.data);
    }
  }
};
</script>
