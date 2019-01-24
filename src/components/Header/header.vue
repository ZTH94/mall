<template>
    <div class="header">
        <div class="head">
            <div class="headonebox">
                <div class="logo"></div>
                <div class="input">
                    <i class="el-icon-search"></i>
                    <input type="text" placeholder="搜索" class="theinput">
                </div>
            </div>
            <div class="news">
                <i class="el-icon-bell"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 50px;
    .head{
        width: 100%;
        display: flex;
        padding:  10px 0;
        border-bottom: 1px solid #ccc;
        .headonebox {
            flex: 4;
            display: flex;
            .logo {
                width: 120px;
                height: 20px;
            }
            .input {
                width: 100%;
                position: relative;
                border:1px solid #dcdfe6;
                 border-radius: 30px;
                .el-icon-search{
                    font-size: 18px;
                    display: inline-block;
                    position: absolute;
                    left: 10px;
                    top: 5px;
                }
                .theinput {
                    -webkit-appearance: none;
                    background-color: #fff;
                    background-image: none;
                   
                    border:none;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    font-size: inherit;
                    height: 30px;
                    line-height: 30px;
                    outline: 0;
                    padding: 0 15px;
                    -webkit-transition: border-color 0.2s
                    cubic-bezier(0.645, 0.045, 0.355, 1);
                    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                    margin-left: 20px;
                    
                }
            }
        }
        .news {
            width: 100%;
            flex: 1;
            text-align: center;
            display: table;
            .el-icon-bell{
                line-height: 30px;
                display: inline-block;
                font-size: 20px;
                vertical-align: middle;
                display: table-cell;
            }
        }  
    }
}
input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 12px;
    /* placeholder位置  */
    text-align: left;
}
</style>