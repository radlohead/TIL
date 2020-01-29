<template>
  <div>
    <h2>List</h2>
    <input type="text" ref="inputText" class="inputText" />
    <button class="add-btn" @click="handleClickAddBtn">add</button>
    <ul>
      <li class="todo-list" v-for="(item, index) in todoList" :key="index">
        {{ item }}
        <button @click="handleClickRemoveTodo(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    handleClickAddBtn() {
      this.todoList.push(this.$refs.inputText.value);
    },
    handleClickRemoveTodo(index) {
      this.todoList.splice(index, 1);
    }
  }
};
</script>
