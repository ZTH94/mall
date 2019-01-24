<template>
  <div id="app">
    <router-view/>
    <footer-index></footer-index>
  </div>
</template>

<script>
	import footerIndex from "./components/footer/Footer"
export default {
  name: 'App',
	components:{footerIndex}
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
