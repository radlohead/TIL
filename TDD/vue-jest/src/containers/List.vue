<template>
  <div>
    <Header />
    <Body />
    <h1>List</h1>
    <ul>
      <li class="lite-item" v-for="item in propsItem" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Body from "@/components/Body";

export default {
  props: {
    propsItem: {
      type: Array
    }
  },
  data() {
    return {
      itemList: ["item1", "item2"],
      posts: []
    };
  },
  created() {
    // this.getPost();
  },
  methods: {
    async getPost() {
      return await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        timeout: 5000
      });
    },
    getPost2() {
      return new Promise(resolve => {
        resolve({ data: true });
      });
    }
  },
  components: {
    Header,
    Body
  }
};
</script>
