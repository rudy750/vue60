// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import Test from './components/Test'
import Users from './components/Users'
import router from './router'

Vue.config.productionTip = false
Vue.use(vueResource)
// const router = new VueRouter ({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//
//   ]
// })
/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
      <li><router-link to="/fpl-moving">FPL Moving</router-link></li>
    </ul>
    <router-view></router-view>
    </div>
  `
}).$mount("#app")
