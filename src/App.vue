<template>
  <div id="app">
    <Header></Header>
    <News></News>
    <Commodity></Commodity>
    <Find></Find>
    <Article></Article>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Commodity from './page/commodity/Commodity'
import News from './page/News/news'
import Find from './page/find/Find'
import Article from './page/article/Article'
export default {
  name: 'App',
  components:{
    Header,
    Commodity,
    News,
    Find,
    Article
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
