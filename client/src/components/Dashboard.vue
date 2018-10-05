<template>
  <div class="container">
    <div class="row">
    <div class="col-sm">1 of 4</div>
    <div class="col-sm">2 of 4</div>
    <div class="col-sm">3 of 4</div>
    <div class="col-sm">4 of 4</div>
  </div>
  </div>
</template>

<script>
export default{
  name: 'Dashboard',
  data(){
    return{
      email: 'some guy',
      name: 'William Thompson',
      friends: 'Friends'
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 10vh;
  }
</style>
