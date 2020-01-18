<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3]
    };
  }
};
</script>
