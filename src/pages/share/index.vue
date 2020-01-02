<template>
  <div class="shareContainer" ref="shareContainer">
    donglt
    <el-row>

    </el-row>
  </div>
</template>

<script>
  import * as mutils from '@/utils/mUtils'
  import { HengShare } from "./components";

  export default {
    name: 'index',
    data(){
      return {
        wxModal:{
          show:false,
          width:"358px",
          height:"358px",
        }
      }
    },
    components: {
      HengShare
    },
    mounted(){
      debugger;
      mutils.setContentHeight(this,this.$refs.shareContainer,210);
    },
    methods: {
      shareToQQ(){
        this.shareConfig('qq')
      }
    }
  }
</script>


<style lang="less" scoped>
  .shareContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    .el-row:first-child{
      margin-bottom: 20px;
    }
    .el-row{
      height:210px;
      .el-col{
        height:100%;
        .shareArea{
          height: 100%;
          width:100%;
        }
      }
    }
  }
</style>
