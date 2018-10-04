<template>
  <div class="container">
    <div class="row">
    <div class="col">
      <div class="card">
  <h5 class="card-header">{{name}}</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-7">
      <div class="card">
  <h5 class="card-header">Posts</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <h5 class="card-header">{{friends}}</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
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
