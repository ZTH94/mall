<template>
  <div id="app">
    <Header></Header>
    <News></News>
    <Commodity></Commodity>
  </div>
</template>

<script>
import Header from './components/Header/header'
import Commodity from './page/Commodity/commodity'
import News from './page/News/news'
export default {
  name: 'App',
  components:{
    Header,
    Commodity,
    News
  }
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
