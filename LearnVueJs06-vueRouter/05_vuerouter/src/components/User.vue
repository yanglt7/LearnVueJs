<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面内容, 嘿嘿嘿</p>
    <h3>{{userId}}</h3>
    <h3>{{$route.params.userId}}</h3>
    <button @click='btnClick'>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  created () {
    console.log('User created');
    // document.title = 'User';
  },
  destroyed () {
    console.log('User destroyed');
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  methods: {
    btnClick() {
      // console.log('btnClick');
      // console.log(this.$router);
      // console.log(this.$route);
    }
  },
}
</script>

<style> 
</style>
