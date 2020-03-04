<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/messages'>消息</router-link>
    <router-view></router-view>
    <!-- <h2>{{message}}</h2> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'hello',
      path: '/home/news',
    }
  },
  created () {
    console.log('home created');
    // document.title = 'Home';
  },
  destroyed () {
    console.log('home destroyed');
  },
  // 这两个函数(activated/deactivated)只有该组件使用了keep-alive时才生效
  activated () {
    // console.log('activated');
    this.$router.push(this.path);
  },
  deactivated () {
    console.log('deactivated');
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  },
  // mounted () {
  //   console.log('mounted');
  // },
  // updated () {
  //   console.log('updated');
  // }
}
</script>

<style> 
</style>
