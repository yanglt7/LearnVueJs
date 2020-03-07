<template>
  <div id="app">
    <h2>{{message}}</h2>    

    <!-- 利用父子组件传递 -->
    <!-- <h2>{{counter}}</h2>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
    <hello-vuex :counter='counter'></hello-vuex> -->

    <!-- 利用vuex集中状态管理 -->
    <h2>-----------App内容: mudules中的内容--------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>-----------App内容: info对象的内容是否是响应式--------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-----------App内容--------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+1</button>
    <button @click="subtraction">-1</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------App内容: getters相关信息--------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(16)}}</h2>

    <h2>-----------Vuex内容--------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import { 
  INCREMENT,
  DECREMENT,
  ADDSTUDENT,
  INCREMENTCOUNT,
  UPDATEINFO,
  AUPDATEINFO,
  UPDATENAME
 } from "./store/mutations-types";

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data () {
    return {
      message: 'Hello World',
      // counter: 0
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit(DECREMENT)
    },
    addCount(count) {
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提封交装
      this.$store.commit({
        type: INCREMENTCOUNT,
        // count: count
        count
      })
    },
    addStudent() {
      const stu = {id: 5, name: 'andy', age: 33, height: 1.77}
      this.$store.commit(ADDSTUDENT, stu)
    },
    updateInfo() {
      // this.$store.commit(UPDATEINFO)
      // this.$store.dispatch(AUPDATEINFO, {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store
      .dispatch(AUPDATEINFO, '我是携带的信息')
      .then(res => {
        console.log('里面完成了提交');
        console.log(res);
      })
    },
    updateName() {
      this.$store.commit(UPDATENAME, 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
  // computed: {
  //   more20stu() {
  //     return this.$store.state.students.filter(s => s.age > 20)
  //   }
  // }
}
</script>

<style>
</style>
