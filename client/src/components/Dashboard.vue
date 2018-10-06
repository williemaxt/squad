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
          <!--Call PostForm component-->
          <PostForm></PostForm>
          <!--Posts-->
          <div class="list-group" id="feed-list">
            <!--Call Feed Component-->
            <Feed></Feed>
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
        <h5 class="card-header">Quick Messages</h5>
        <div class="card-body">
          <ul class="list-group" id="messages-list">
            <!--Call QuickMessages component-->
            <QuickMessages></QuickMessages>
          </ul>
        </div>
      </div>
      <div class="card">
        <h5 class="card-header">Active Friends</h5>
        <div class="card-body">
          <ul class="list-group" id="active-friends-list">
            <!--ActiveFriends component-->
            <ActiveFriends></ActiveFriends>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
//import individual components
import Feed from '@/components/dashComponents/Feed'
import QuickMessages from '@/components/dashComponents/QuickMessages'
import ActiveFriends from '@/components/dashComponents/ActiveFriends'
import PostForm from '@/components/dashComponents/PostForm'
export default{
  name: 'Dashboard',
  data(){
    return{
      email: 'some guy', //pull email from route guard
      name: 'William Thompson',
      friends: 'Friends'
    }
  },
  components:{
    Feed,
    QuickMessages,
    ActiveFriends,
    PostForm
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
  #messages-list{
    max-height: 200px;
    overflow-y: hidden;
  }
  #active-friends-list{
    max-height: 200px;
    overflow-y: hidden;
  }
  #feed-list{
    max-height: 1000px;
    overflow-y: scroll;
  }
</style>
