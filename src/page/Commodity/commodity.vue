<template>
    <div class="commodity">
        <div class="title">{{themusic}}</div>
        <div class="title-border"></div>
        <el-row>
            <el-col :span="12" v-for="the in list" :key="the.id">
                <img :src="the.url">
                <div class="comname">{{ the.name }}</div>
                <p class="cominfo">{{ the.info }}</p>
                <p class="comprice">{{ the.price }}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "Commodity",
  data(){
      return{
          themusic:'影音娱乐',
          list:[
              {name:'魅蓝蓝牙音频接收器',info:'独立音频芯片音质媲美有线',price:'￥89',url:'../../../static/img/test.png'},
              {name:'魅蓝 EP52 蓝牙耳机',info:'轻盈悦耳 动无拘束',price:'￥229',url:'../../../static/images/test.png'},
              {name:'魅族 EP51 蓝牙运动耳机',info:'臻享音质 自在运动',price:'￥129',url:'../../../static/img/test.png'},
              {name:'魅族 LIVE 四单元动铁耳机',info:'享12期免息',price:'￥1099',url:'../../../static/img/test.png'}
          ]
      }
  }
};
</script>

<style scoped lang="scss">
.commodity{
    background: #f4f4f4;
    text-align: center;
    .title{
        font-size: 18px;
        padding: 10px;
        font-weight: 700;
    }
    .title-border{
        margin: 0 auto;
        width: 20px;
        height: 2px;
        background: skyblue;
        margin-bottom: 6px; 
    }
    .el-row{
        .el-col{       
            background: white;        
            border: 2px solid #f4f4f4;
            img{
            width: 100%;
            height: 100%;
            }
            .comname{
                font-size: 15px;         
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
                padding: 4px 0;
            }
            .cominfo{
                font-size: 12px;
                color: #999;
                padding: 2px 0;
            }
            .comprice{
                color: #c00;
                font-size: 14px;
                padding: 7px 0;
            }    
        }
    }
}



</style>