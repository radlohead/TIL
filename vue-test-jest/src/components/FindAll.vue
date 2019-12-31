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
      this.users = users;
    },
    destroy(id) {
      this.users.splice(this.users.findIndex(item => item.id === id), 1);
    },
    update(id, newId) {
      this.users[this.users.findIndex(item => item.id)] = newId;
    }
  }
};
</script>