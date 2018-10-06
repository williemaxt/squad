<template>
<div>
  <PublicNav/>
<div class="container">
  <div class="row">
    <div class="col">
      <br>
      <br>
      <h1 class="display-4">Squad</h1>
      <p>Where Lifelong Friends Connect</p>
      <div class="alert alert-danger" role="alert" v-show="prompt">
        {{prompt}}
      </div>
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
      <button type="submit" v-on:click="login" class="btn btn-success">Sign In</button>
      <router-link to="/Register"><button type="submit" class="btn btn-outline-light">register</button></router-link>
    </form>
  </div>
  </div>
</div>
</div>
</template>

<script>
// Importing the Authentication service we created
import AuthService from '@/services/AuthService'
import PublicNav from '@/components/navComponents/PublicNav'
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      prompt: null
    }
  },
  methods:{
    async login(){
      console.log('Register button was clicked')
      if(this.email == null || this.password == null){
        this.prompt = 'Please check all fields'
        console.log('the form was not valid')
      } else {
        console.log('the form was valid')
        //establish the function call as a constant
        // await can only be used ina an async function
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        const userEmail = response.data.email

        console.log('response is: '+userEmail) 
        //redirecting to dashboard page
        if (this.email == userEmail){
          this.$router.push({name: 'Dashboard', params:{email: this.email}});
        } else {
          this.prompt = 'Login Failed'
        }
      }
    }
  },
  components:{
    PublicNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row{
    margin-top: 10vh;
  }
  .container{
    color: #fff;
  }
</style>
