import Api from '@/services/Api'

//exporting this object that has a register method
export default {
  register(credentials){
    return Api().post('register', credentials)
  }
}

// an example of how to call this method from another file
/*
AuthService.register({
  email: 'testing@gmail.com',
  password '123456789'
})
*/
