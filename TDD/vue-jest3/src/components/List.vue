<template>
  <div>
    <input type="text" ref="inputText" class="inputText" />
    <button class="add-btn" @click="handleClickAddTodo">click</button>
    <ul class="todo-wrap">
      <li v-for="(item, index) in todoList" :key="index">
        {{ item }}
        <button @click="handleClickRemoveTodo(index)">
          삭제
        </button>
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
    handleClickAddTodo() {
      this.todoList.push(this.$refs.inputText.value);
    },
    handleClickRemoveTodo(index) {
      this.todoList.splice(index, 1);
    }
  }
};
</script>
