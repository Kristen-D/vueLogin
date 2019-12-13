<template>
  <div class="logContainer">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <a :href="github" target="_blank">
          <icon-svg icon-class="iconGithub" />
        </a>
        <span>项目更新日志：</span>
      </div>
      <div class="logArea el-scrollbar">
        <div class="item" v-for="(item,index) in logsData" :key="index">
          <p class="timeArea">
            <span class="title">日期：</span>
            <span class="title time">{{item.createTime}}</span>
          </p>
          <div class="logContent">
            <p class="title">更新内容：</p>
            <ul class="logUl">
              <li v-for="(citem,cindex) in item.data" :key="cindex">{{citem}}</li>
            </ul>
          </div>
        </div>
      </div>

    </el-card>
  </div>
</template>
<script>
  import { github } from "@/utils/env";
  import logsData from "@/assets/datas/logs.json";

  export default {
    name:'logList',
    data() {
      return {
        logsData:logsData.data,
        github:github
      };
    }
  }
</script>

<style  lang="less" scoped>
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
