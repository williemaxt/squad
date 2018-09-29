<template>
  <div class="container">
    <br>
    <br>
    <h1 class="display-4">Create Account</h1>
    <div class="alert alert-danger" role="alert" v-show="prompt">
      {{prompt}}
    </div>
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" v-model="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" v-model="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        I read the privacy statement
      </label>
    </div>
  </div>
  <button type="submit" v-on:click="register" class="btn btn-success">Create Account</button>
  <router-link to="/"><button type="submit" class="btn btn-dark">Sign In</button></router-link>
</form>
  </div>
</template>

<script>
// Importing the Authentication service we created
import AuthService from '@/services/AuthService'
export default {
  name: 'Register',
  data () {
    return {
      email: null,
      password: null,
      prompt: null
    }
},
methods: {
  async register(){
    console.log('Register button was clicked')
    if(this.email == null || this.password == null){
      this.prompt = 'Please check all fields'
      console.log('the form was not valid')
    } else {
      console.log('the form was valid')
      //establish the function call as a constant
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
}
</script>

<style scoped>
  .container{
    margin-top: 10vh;
  }
</style>
