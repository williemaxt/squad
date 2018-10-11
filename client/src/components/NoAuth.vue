<template>
  <div class="container">
    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-6 col-md-4"></div>
  <div class="col-6 col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{message}}</p>
        <a href="#/" class="btn btn-success">Click Here To Login</a>
      </div>
    </div>
  </div>
  <div class="col-6 col-md-4"></div>
</div>
  </div>
</template>

<script>
export default {
  name: 'NoAuth',
  data(){
    return{
      title: 'Not Authorized',
      message: 'Please Login To Use Squad'
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 35vh;
  }
</style>
