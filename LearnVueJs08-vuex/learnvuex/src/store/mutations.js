import { 
  INCREMENT,
  DECREMENT,
  ADDSTUDENT,
  INCREMENTCOUNT,
  UPDATEINFO,
 } from "./mutations-types";

export default {
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
  [INCREMENTCOUNT](state, payload) 
  {
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
}