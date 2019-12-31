<template>
  <div>
    <p>FindAll</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: []
  }),
  methods: {
    findAll() {
      return this.users;
    },
    create(users) {
      this.users.push(users);
    },
    destroy() {},
    update() {}
  }
};
</script>