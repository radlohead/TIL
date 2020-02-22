<template>
  <ul>
    <li :key="item" v-for="item in items">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
};
</script>
