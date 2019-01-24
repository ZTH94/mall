<template>
    <div class="news">
        <div class="title">{{thenew}}</div>
        <div class="title-border"></div>
        <el-row>
            <el-col :span="12"><img src="../../../static/images/Chestpack.jpg" alt=""></el-col>
            <el-col :span="12">
                <div class="Recommendbox red">
                    <h4>魅蓝胸包</h4>
                    <p>斜背 侧背随心选择</p>
                    <div class="Recommend-border"></div>
                    <div class="newprice">￥89</div>
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <div class="Recommendbox blue">
                    <h4>魅蓝 休闲旅行双肩包</h4>
                    <p>曲面一体式 多功能隔层</p>
                    <div class="Recommend-border"></div>
                    <div class="newprice">￥169</div>
                </div>
            </el-col>
            <el-col :span="12"><img src="../../../static/images/Travellingbag.jpg" alt=""></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "Commodity",
  data(){
      return{
          thenew:'新品推荐',
          
      }
  }
};
</script>

<style scoped lang="scss">
.news{
    .title{
        text-align: center;
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
            height: 100%;
            .red{
                background: #F76464;
                height: 146.66px;
            }
            .blue{
                background: #897CE0;
                height: 146.66px;
            }
            .Recommendbox{
                padding: 10px 10px;
                h4{
                    font-weight: 200;
                    font-size: 16px;  
                    color: white; 
                }
                p{
                    color:rgba(255,255,255,.7);
                    font-size: 12px;
                    padding: 3px 0;
                }
                .Recommend-border{
                    width: 20px;
                    height: 1px;
                    background: white;
                    margin-top: 5px;
                }
                .newprice{
                    color: white;
                    font-size: 15px;
                    margin-top: 30px;
                }
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>