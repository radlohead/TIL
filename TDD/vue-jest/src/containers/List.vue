<template>
  <div>
    <Header />
    <Body />
    <h1>List</h1>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Body from "@/components/Body";

export default {
  data() {
    return {
      itemList: ["item1", "item2"]
    };
  },
  components: {
    Header,
    Body
  }
};
</script>
