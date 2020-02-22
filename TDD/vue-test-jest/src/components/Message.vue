<template>
  <div>
    <h1>{{ msg || "default message" }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String
    }
  }
};
</script>
