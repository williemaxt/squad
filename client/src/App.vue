<template>
  <div id="app">
    <!-- As a heading -->
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Squad</span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
  background: #f2f2f2;
}
</style>
