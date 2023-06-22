<template>
  <form @submit.prevent="submission">
    <input type="text" name="title" v-model="title">
    <button>Добавить</button>
  </form>
</template>

<script>
export default {
  name: 'TodoItemAdd',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    submission() {
      const newTodo = {
        id: Date.now(),
        title: this.title,
        completed: false
      }

      this.$emit('todo-add', newTodo);
      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    margin-bottom: 20px;
  }
</style>