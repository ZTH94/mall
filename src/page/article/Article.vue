<template>
    <div class="find">
        <div class="Latest">{{article}}</div>
        <el-row v-for="article in articleinfo" :key="article.id">
            <el-col :span="8"><img :src="article.url"></el-col>
            <el-col :span="16">
                <div>{{ article.title }}</div>
                <p>{{ article.suffix }}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "Article",
  data(){
      return{
          article:'精选文章',
          articleinfo:[
              {url:'../../../static/img/article1.jpg',title:'三招入门五招精通——摄影达人速成笔记(六)',suffix:'快科技 8697 阅读'},
              {url:'../../../static/img/article2.jpg',title:'喵记：难得一见的纯笔记 APP',suffix:'魅族社区 2497 阅读'},
              {url:'../../../static/img/article3.jpg',title:'【Care 小学堂】Flyme 手机管家｜为安全护航',suffix:'魅族社区 7597 阅读'},
          ]
      }
  }
};
</script>

<style scoped lang="scss">
.Latest{
    font-size: 15px;
    font-weight: 600;
    padding: 5px 5px;
}
.el-row{
    padding: 10px 10px;
    height: 80px;
    .el-col{
        padding: 0 10px;
        img{
            width: 100%;
            height: 70px;
            padding:  3px 0;
        }
        div{
            font-size: 14px;
            font-weight: 500;
        }
        p{
            font-size: 10px;
            color: #999;
            padding: 3px 0;
        }
    }
}
</style>