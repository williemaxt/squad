import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import NoAuth from '@/components/NoAuth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: true,
      beforeEnter: (to, from , next) => {
        if (to.params.email){
          console.log(to.params.email+' From route')
          next()
        } else {
          next({name: 'NoAuth'})
        }
        }
      },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/NoAuth',
      name: 'NoAuth',
      component: NoAuth
    }
  ]
})
