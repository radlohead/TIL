<template>
  <div>
    <p>콜백 함수 테스트</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFetchUser: null,
      isCallback: null
    };
  },
  methods: {
    fetchUser(callbackState) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.isFetchUser = true;
          this.isCallback = callbackState;
          resolve(true);
        }, 100);
      });
    }
  }
};
</script>