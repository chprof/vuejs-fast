<template>
  <li class="todo-list__item">
    <label :class="{done: todo.completed}">
      <input type="checkbox" @change="$emit('todo-completed', todo.id)">
      <strong>{{ index }}</strong> 
      <strong>{{ toUppercase(todo.title) }}</strong> 
    </label>
    <button @click="$emit('todo-remove', todo.id)"></button>
  </li>
</template>
<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    toUppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    text-align: left;
  }
  label {
    display: flex;
    align-items: flex-start;
  }
  input {
  }

  strong {
    margin-left: 8px;
  }
  button {
    position: relative;
    padding: 10px;
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 1;
  }
  button:before {
    content: 'x';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    border-radius: 50%;
    font-size: 15px;
    line-height: 20px;
  }
  .done {
    text-decoration: line-through;
  }
</style>