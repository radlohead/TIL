<template>
  <div>
    <Message :msg="msg" />
    <button id="toggle-message" @click="toggleMessage">Change message</button>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";

export default {
  data: () => ({
    msg: null
  }),
  methods: {
    toggleMessage() {
      this.msg = this.msg === "message" ? "toggled message" : "message";
    }
  },
  components: {
    Message
  }
};
</script>
