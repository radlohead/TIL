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
      itemList: ["item1", "item2"]
    };
  },
  components: {
    Header,
    Body
  }
};
</script>
