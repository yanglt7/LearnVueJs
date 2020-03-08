import axios from 'axios'

// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 2.发送网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// } 

// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 2.发送网络请求
//   instance(config.baseconfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// } 

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 2.发送网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1) 比如config中的一些信息不符合服务器的要求

    // 2) 每次网络请求时希望在界面显示一个图标

    // 3) 某些网络请求(例如登录(token))需要携带一些特殊信息
    return config
  }, err => {
    // console.log(err);
    
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
    
  })

  // 3.发送网络请求
  return instance(config)
}