<template>
<div class="container">
  <div class="row">
    <div class="col">
      <br>
      <br>
      <h1 class="display-3">Squad</h1>
      <p>Where Lifelong Friends Connect</p>
      <br>
      <form>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-success">Sign In</button>
      <router-link to="/Register"><button type="submit" class="btn btn-dark">register</button></router-link>
    </form>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: 'something',
      password: '123455'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row{
    margin-top: 10vh;
  }
</style>
