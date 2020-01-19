<template>
  <div>
    <div>
      <input type="text" ref="inputText" class="inputText" />
      <ul class="todo-wrap">
        <li v-for="(item, index) in todoList" :key="index">
          {{ item }}
          <span class="delete-btn" @click="handleClickRemoveTodo(index)">삭제</span>
        </li>
      </ul>
      <button @click="handleClickAddTodo">todo click</button>
    </div>
    <ul class="list">
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
      list: [1, 2, 3],
      todoList: []
    };
  },
  created() {},
  methods: {
    handleClickRemoveTodo(index) {
      this.todoList.splice(index, 1);
    },
    handleClickAddTodo() {
      this.todoList.push(this.$refs.inputText.value);
    },
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
