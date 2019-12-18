import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import {Layout}  from '../layout'; // 页面整体布局
import index from '@/pages/index/index'
import logList from '@/pages/index/component/logLists'

Vue.use(Router)

//默认不需要权限的页面
export const constantRouterMap = [
  { path: '',component: Layout,redirect: '/index/index',hidden:true},
  {
    path: '/index',
    name: 'index',
    component:Layout,
    meta:{
      title:'首页',
      icon: 'icondashboard',
    },
    noDropdown:true,
    children:[
      {
        path:'index',
        meta:{
          title:'首页',
          icon:'icondashboard',
          routerType:'leftmenu'
        },
        component: () => import('@/pages/index/index'),
      }
    ]
  }
]

export default new Router({
  mode:'history', // 默认为'hash'模式
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {path:'/userManager',name: 'userManage',component:Layout},
  {path:'/share',name: 'share',component:Layout},
  {path:'/infoManage',name: 'infoManage',component:Layout},
  {path:'/infoModify',name: 'infoModify',component:Layout},
  {path:'/fundManage',name: 'fundManage',component:Layout},
  {path:'/fundData',name: 'fundData',component:Layout},
  {path:'/typePosition',name: 'typePosition',component:Layout},
  {path:'/permission',name: 'permission',component:Layout},
  { path: '*', redirect: '/404', hidden: true }
]



