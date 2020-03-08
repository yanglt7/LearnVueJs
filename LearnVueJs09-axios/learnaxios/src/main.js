import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 1.axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   // method: get,
// }).then(res => {
//   console.log(res);
// })

// get方法对应的参数拼接是params
// post方法对应的参数拼接是data

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);  
// })

// 2.axios处理并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
// })])
// .then(results => {
//   console.log(results);
// })

// 3.全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
// })])
// .then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))  

// 数组解构
// const names = ['lili', 'tom', 'andy']
// const [name1, name2, name3] = names

// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);  
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 2
//   }
// }).then(res => {
//   console.log(res);
// })

// 5.封装request模块
import {request} from './network/request'

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
  
// }, err => {
//   console.log(err);
  
// })

// request({
//   baseConfig: {

//   },
//   success: function(res) {

//   },
//   failure: function(err) {

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
  
}).catch(err => {
  // console.log(err);
  
})