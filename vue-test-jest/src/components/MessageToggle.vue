<template>
  <div>
    <p>msg: {{ msg }}</p>
    <button id="toggle-message" @click="toggleMessage">Change message</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: null
  }),
  methods: {
    toggleMessage() {
      this.msg = this.msg === "message" ? "toggled message" : "message";
    }
  }
};
</script>
