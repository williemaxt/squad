<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <a class="navbar-brand font-weight-bold" href="#">{{appName}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#/Dashboard">Feed <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Friends</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/Profile">Profile</a>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Messages</a>
      </li>
    </ul>
    <span class="navbar-text">
      <button type="button" class="btn btn-light">Logout</button>
    </span>
  </div>
</nav>
</template>

<script>
export default {
  name: 'UserNav',
  data(){
    return{
      appName: 'Squad',
      userEmail: 'test@gmail.com'
    }
  }
}
</script>

<style scoped>

</style>
