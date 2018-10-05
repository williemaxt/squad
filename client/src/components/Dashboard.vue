<template>
  <div class="container-fluid">
    <div class="row">
      <!--Main Card-->
    <div class="col-sm-8">
      <!--Navigation Buttons-->
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success">Feed</button>
        <button type="button" class="btn btn-outline-success">Profile</button>
      </div>
      <div class="card">
        <h5 class="card-header">Feed</h5>
        <div class="card-body">
          <!--Card content goes here-->

          <!--Form for posts-->
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Write a Post" aria-label="Write a Post" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
            </div>
          </div>
          <!--Posts-->
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--Smaller Card-->
    <div class="col-sm-4">
      <!--Navigation Buttons-->
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success">Friends</button>
        <button type="button" class="btn btn-outline-success">Add</button>
      </div>
      <div class="card">
        <h5 class="card-header">Messages</h5>
        <div class="card-body">
          <!--Card Content goes here-->
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge badge-success badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span class="badge badge-success badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge badge-success badge-pill">1</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge badge-success badge-pill">3</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="card">
        <h5 class="card-header">Active Friends</h5>
        <div class="card-body">
          <!--Card Content goes here-->
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
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
  .container-fluid{
    margin-top: 5vh;
    max-width: 1600px;
  }
  .col-sm-8{
    margin-bottom: 10px;
  }
  .col-sm-4{
    margin-bottom: 10px;
  }
  .card{
    margin-bottom: 10px;
  }
  .btn-group{
    margin-bottom: 10px;
  }
</style>
