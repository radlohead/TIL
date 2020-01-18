<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import fetch from "node-fetch";
import axios from "axios";

export default {
  data() {
    return {
      list: [1, 2, 3]
    };
  },
  created() {},
  methods: {
    async fetchPost(postNum) {
      const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postNum}`
      );
      const post = await postResponse.json();
      return post;
    },
    async fetchPost2(postNum) {
      const postResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postNum}`
      );
      if (postResponse.status !== 200) {
        console.error("fetchPost2 status error");
        return;
      }
      return postResponse.data;
    },
    fetchPost3(isState) {
      return new Promise((resolve, reject) => {
        return resolve(isState);
      });
    }
  }
};
</script>
