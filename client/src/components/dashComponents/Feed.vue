<template>
<div>
  <button v-on:click="load" name="button">Load Posts(Development)</button>
  <a href="#" v-for="post in posts" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{email}}</h5>
      <small class="text-muted">3 days ago {{globalUser}}</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
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
      globalUser: globalEmail.globalEmail,
      posts:[]
    }
  },
  methods: {
    updateUser(){
      this.globalUser = 'newone@gmail.com'
      alert(globalEmail.globalEmail)
    },
    async load(){
        const posts = await AuthService.getPosts({
          email: 'test@gmail.com', // TODO: use variable in production
        })

        console.log(JSON.stringify(posts.data));

        this.posts = JSON.stringify(posts.data)
      }
  }
}
</script>

<style scoped>

</style>
