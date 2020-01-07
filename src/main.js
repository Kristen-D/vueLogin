// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import ElementUI from 'element-ui';
import('element-ui/lib/theme-chalk/index.css')
import i18n from '@/lang';

import './components/iconSvg' // iconSvg
import '@/permission' // permission control

import '@/mockjs'; // mock数据
// 分享功能集合
import { shareConfig } from './utils/share';
Vue.prototype.shareConfig = shareConfig;

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,  // 便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  render: h => h(App),
}).$mount('#app')
