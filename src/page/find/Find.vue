<template>
    <div class="find">
        <div class="Latest">{{find}}</div>
        <el-row>
            <el-col :span="24" v-for="info in findinfo" :key="info.id">
                <img :src="info.url" alt="">
                <div class="latestbox">
                    <h4>{{ info.title }}</h4>
                    <p>{{ info.main }}</p>
                    <div>{{ info.community }}</div>
                </div>
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "Find",
  data(){
      return{
          find:'最新推荐',
          findinfo:[
              {url:'../../../static/img/theman.jpg',title:'魅族 16th Plus 静物摄影:橘色炮灰的怒吼--HGUC RGM-79[G]陆战吉姆',
              main:'你的手机就是最好的相机。看魅族 16th Plus 如何将静物美展现的淋漓尽致--HGUC RGM-79[G]陆战吉姆,橘色的炮灰怒吼。',
              community:'魅族社区--tiger2e 26800 阅读'},
              {url:'../../../static/img/theman.jpg',title:'轻奢拍照,魅族 X8 夜景拍摄',
              main:'真的想拍好一张照片，需要不单是器材,还需要用心。用魅族 X8 拍摄夜景,地啊你体验出真的想拍好一张照片',
              community:'魅族社区--tiger2e 26800 阅读'},
              {url:'../../../static/img/theman.jpg',title:'这是魅族 15 的节拍作业,手机摄影可以这么拍!',
              main:'如何拍出一张有质感的照片?摄影大神给你详细解析美图是如何拍出来的。',
              community:'魅族社区--我是魅族之神 6379 阅读'}
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
.el-row>
    .el-col{
        img{
            width: 100%;
            height: 120px;
        }
        .latestbox{
            padding: 10px 10px;
            h4{
                font-size: 15px;
                font-weight: 500;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
            }
            p{
                font-size: 12px;
                color: #999;
                padding: 3px 0;
            }
            div{
                font-size: 12px;
                color: #999;
                padding: 5px 0;
            }
        }
        
    }
</style>