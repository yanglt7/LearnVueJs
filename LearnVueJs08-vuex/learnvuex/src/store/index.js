import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件: 底层会执行插件的install方法
Vue.use(Vuex)

// 2.创建对象
const state = {
  counter: 1000,
  students: [
    {id: 1, name: 'tom', age: 18, height: 1.88},
    {id: 2, name: 'jerry', age: 21, height: 1.87},
    {id: 3, name: 'james', age: 23, height: 1.83},
    {id: 4, name: 'lily', age: 19, height: 1.68}
  ],
  info: {
    name: 'lihua',
    age: 28,
    hobby: 'basketball'
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a: moduleA
  }
})

// 3.导出store对象共享
export default store

// ES6语法: 对象的解构
// const obj = {
//   name: 'kiki',
//   age: 18,
//   height: 168,
//   address: 'beijing'
// }

// // 顺序可以任意调换
// const {age, name, height} = obj;
// console.log(age, name, height);