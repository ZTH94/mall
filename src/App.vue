<template>
  <div id="app">
    <router-link :to="{name:'Test'}" tag="li">测试</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    font:12px 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height:100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  ul{
    list-style: none;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  img{
    vertical-align: top;
    border: none;
  }
  .clearfix:after,
  .clearfix:before{
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
  }
</style>
