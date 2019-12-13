import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/index/home'
import logList from '@/pages/index/component/logList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'login',component: login},
    {path: '/home',name: 'home',component: home},
  ]
})
