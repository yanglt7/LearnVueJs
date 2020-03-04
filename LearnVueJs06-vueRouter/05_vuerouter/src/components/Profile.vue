<template>
  <div>
    <h2>我是档案</h2>
    <p>我是档案内容, 哈哈哈</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.height}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  created () {
    console.log('Profile created');
  },
  destroyed () {
    console.log('Profile destroyed');
  }
}
</script>

<style> 
</style>
