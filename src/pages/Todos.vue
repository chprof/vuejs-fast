<template>
  <div>
    <div class="header">
      <h2>Todo list</h2>
      <router-link to="/">Home</router-link>
    </div>
    <TodoItemAdd @todo-add="add" />
    <div class="select-wrap">
      <Select @todo-filter="filter" />
    </div>
    <Loader v-if="loading" />
    <TodoList
      v-else-if="todos.length"
      :list="todosFiltered.length ? todosFiltered : todos"
      @todo-remove="remove"
      @todo-completed="completed"
    />
    <div v-else>Todos is empty</div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import TodoItemAdd from '@/components/TodoItemAdd';
import Loader from '@/components/Loader';
import Select from '@/components/Select';
export default {
  name: 'TodosPage',
  components: {
    TodoList,
    TodoItemAdd,
    Loader,
    Select,
  },
  data() {
    return {
      loading: true,
      todos: [
        {
          id: 1, title: 'Купить хлеб', completed: false,
        },
        {
          id: 2, title: 'Изучить vue', completed: false,
        },
        {
          id: 3, title: 'Созвониться с командой', completed: false,
        }
      ],
      todosFiltered: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json
          this.loading = false
        }, 1000);
      })
  },
  methods: {
    add(todo) {
      this.todos.push(todo);
    },
    remove(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    completed(id) {
      const todo = this.todos.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    },
    filter(status) {
      const filters = {
        'all': this.todos,
        'completed': this.todos.filter(todo => todo.completed),
        'un-completed': this.todos.filter(todo => !todo.completed),
      }

      this.todosFiltered = filters[status];
    }
  }
}
</script>

<style scoped>
  .header {
    margin: 0 0 20px;
  }
  .select-wrap {
    margin-bottom: 20px;
  }
</style>