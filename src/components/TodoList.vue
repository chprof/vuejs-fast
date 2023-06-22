<template>
  <div class="todo-list">
    <ul>
      <TodoListItem
        v-for="(item, i) of list"
        :key="i"
        :todo="item"
        :index="i+1"
        @todo-remove="remove"
        @todo-completed="complete"
      />
    </ul>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: {
    list: {
      required: false
    }
  },
  methods: {
    remove(id) {
      this.$emit('todo-remove', id);
    },
    complete(id) {
      this.$emit('todo-completed', id);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
  }
</style>