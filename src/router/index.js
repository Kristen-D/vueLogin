import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import {Layout}  from '../layout'; // 页面整体布局
import index from '@/pages/index/index'
import logList from '@/pages/index/component/logLists'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '',component: Layout,redirect: '/index/index',hidden:true},
    {path: '/index',name: 'index',component: index},
  ]
})
