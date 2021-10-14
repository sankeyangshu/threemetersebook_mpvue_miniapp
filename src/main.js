/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-10-11 16:18:41
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 15:56:46
 */
import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store'
import './styles/iconfont.css'
import './styles/animate.css' // 引入动画库

Vue.prototype.$store = store; //把store挂载到全局
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
