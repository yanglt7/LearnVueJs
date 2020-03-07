<template>
  <div>
    <h2>{{message}}</h2>

    <!-- 利用父子组件传递 -->
    <!-- <h2>{{counter}}</h2> -->

    <!-- 利用vuex集中状态管理 -->
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(16)}}</h2>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data () {
    return {
      message: 'Hello vuex',
    }
  },
  // props: {
  //   // 利用父子组件传递
  //   counter: Number
  // }
}
</script>

<style>
</style>
