<template>
  <select name="filter" v-model="option" @change="select">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="un-completed">Un completed</option>
  </select>
</template>

<script>
export default {
  name: 'ComponentSelect',
  data() {
    return {
      option: 'all'
    }
  },
  methods: {
    select() {
      this.$emit('todo-filter', this.option)
    }
  }
}
</script>