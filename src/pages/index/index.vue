<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="10" class="row_list order_list">
      <el-col :span="7">
        <log-lists></log-lists>
      </el-col>
     <el-col :span="17">
				<comment-list></comment-list>
			</el-col>
    </el-row>
  </section>
</template>
<script>
  import { github } from "@/utils/env";
  import logLists from "./component/logLists";  // 日志列表
  import commentList from "./component/commentList";  // 用户评论列表


  export default {
    data() {
      return {
        github:github
      };
    },
    components: {
      logLists,
      commentList
    }
  }
</script>

<style lang="less" scoped>
  .data_section{
    margin: 20px;
    border-radius: 2px;
    .row_list{
      margin-bottom: 20px;
      .row_base{
        padding: 10px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 6px;
        height: 120px;
      }
    }
    .order_list{
      .orderArea{
        width: 100%;
        height: 300px;
        background: #fff !important;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 10px;
        padding-top: 40px;
        overflow: hidden;
      }
      .orderbarArea{
        height: 370px;
      }
    }
    .data_list{
      text-align: center;
      font-size: 14px;
      border-radius: 6px;
      padding: 10px;
      color:#fff;
      height: 80px;
      .leftItem{
        align-items: start;
        justify-content: space-between;
        text-align: left;
      }
      .rightItem{
        width:62px;
        display: flex;
        align-items: center;
        justify-content: center;
        .svg-icon{
          font-size: 30px;
        }
      }
      .number{
        font-size: 22px;
        font-weight: bold;
        .perTitle{
          font-size: 13px;
          margin-left: 5px;
        }
      }
    }
    .pay{
      .leftItem{
        justify-content: space-around;
      }
    }

  }
</style>
