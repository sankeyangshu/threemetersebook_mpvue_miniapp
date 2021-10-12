/*
 * @Description: vuex 入口文件
 * @Author: 王振
 * @Date: 2021-10-12 16:21:59
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-12 16:28:44
 */

import Vue from 'vue'
import Vuex from 'vuex'
import audio from './modules/audio'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    audio
  }
})

export default store
