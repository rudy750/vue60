import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test},
    {path: '/google', beforeEnter(to, from, next){
      window.location = "http://google.com"
    }}
  ]
})
