<template>
  <div class="page-home">
    <div class="container">
      <h2>Home page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non velit nulla quae eius rem corporis beatae, ut quo architecto sit unde ea culpa alias nihil sapiente fugit adipisci repellat voluptatibus nostrum aliquid ab vel harum assumenda? Quis quos dolores autem neque. Doloribus eum, ducimus nesciunt ipsa sunt eaque cum.</p>
      <router-link to="/todos">Список задач</router-link>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
