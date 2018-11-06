<template>
<div>
  <a href="#" v-for="post in postsList" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{post.title}}</h5>
      <small class="text-muted">3 days ago {{post.user}}</small>
    </div>
    <p class="mb-1">{{post.body}}</p>
    <small class="text-muted">{{post.timestamp}}</small>
  </a>
</div>
</template>

<script>
import AuthService from '@/services/AuthService'
import globalEmail from '@/variables.js'
export default {
  props: ['email'], // accepting the email prop
  name: 'Feed',
  data(){
    return{
      //data goes here
      postsList:[] // list where data will be pushed
    }
  },
  methods: {
    //methods go here
  },
  async mounted(){
    const posts = await AuthService.getPosts({
      email: 'test@gmail.com', // TODO: use variable in production
    })
    //puting our response data into a variable
    var info = posts.data;
    //loop index
    var i = 0;
    //looping through the info variable
    for(var id in info){
      //pushing the information into our array
      this.postsList.push({
      id: info[i].id,
      user: info[i].user,
      title: info[i].title, // select title from the data
      body:info[i].body,
      timestamp: info[i].timestamp });
      //incrementing our loop index by one 
      i += 1;
    }
  }
}
</script>

<style scoped>

</style>
