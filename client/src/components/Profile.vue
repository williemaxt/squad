<template>
  <div>
    <UserNav/>
    <div class="container">
      <div class="card">
        <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{name}}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-danger">Edit Profile</a>
        </div>
      </div>
      <!--Card for personal Posts-->
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Your Recent Posts</h5>
          <div class="list-group" id="feed-list">
            <!--Call Profile Feed Component-->
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
              <!--Post Action Buttons-->
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-success">Edit</button>
                <button type="button" class="btn btn-outline-danger">Delete</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/navComponents/UserNav'
export default {
  name: 'Profile',
  data(){
    return{
      name: 'William Thompson'
    }
  },
  components:{
    UserNav
  }
}
</script>

<style scoped>
.container{
  margin-top: 10px;
}
.card{
  margin-bottom: 10px;
}
img{
  width: 200px;
  height: auto;
  margin: 0 auto;
}
</style>
