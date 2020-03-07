import Vue from 'vue'
import Vuex from 'vuex'


import { 
  INCREMENT,
  DECREMENT,
  ADDSTUDENT,
  INCREMENTCOUNT,
  UPDATEINFO,
  AUPDATEINFO,
  UPDATENAME,
 } from "./mutations-types";

// 1.安装插件: 底层会执行插件的install方法
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    [UPDATENAME](state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + 'yyy'
    },
    fullName2(state, getters) {
      return getters.fullName + 'lll'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit(UPDATENAME, 'wangwu')
      }, 1000)
    }
  }
}

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    // 方法 名字官方建议全部大写
    [INCREMENT](state) {
      state.counter++
    },
    [DECREMENT](state) {
      state.counter--
    },
    // 1.普通提交方式
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    // 2.特殊提交方式
    [INCREMENTCOUNT](state, payload) {
      state.counter += payload.count
    },
    [ADDSTUDENT](state, stu) {
      state.students.push(stu)
    },
    [UPDATEINFO](state) {
      state.info.name = 'lili'

      // 若属性没有初始化, 则数据不会响应式更新
      // state.info['address'] = '洛杉矶'
      // 类似数组响应式规则, 可以用set方法
      // Vue.set(state.info, 'address', '洛杉矶')

      // 直接delete做不到响应式
      // delete state.info.age
      // 可以用Vue的delete方法
      // Vue.delete(state.info, 'age')

      // mutations里面的方法必须是同步的
      //异步的操作vue.js.devtools不能很好的跟踪
      // 错误示范: 不能在mutations里面进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'lili'
      // }, 1000)

    }
  },
  actions: {
    // context: 上下文 
    // 在这里可以理解成 store
    // [AUPDATEINFO](context, payload) {
    //   setTimeout(() => {
    //     context.commit(UPDATEINFO)
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000)
    // }

    [AUPDATEINFO](context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFO)
          console.log(payload);
          resolve('11111')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    // 第二个参数默认是getters
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age)
      // }

      return age => {
        state.students.filter(s => s.age > age)
      }
    } 
  },
  modules:{
    a: moduleA
  }
})

// 3.导出store对象共享
export default store

// ES6语法: 对象的解构

const obj = {
  name: 'kiki',
  age: 18,
  height: 168,
  address: 'beijing'
}

// 顺序可以任意调换
const {age, name, height} = obj;
console.log(age, name, height);