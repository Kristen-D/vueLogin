<template>
  <div class="fillcontain">
      <div class="table_container">
        <el-table v-loading="loading" :data="tableData" style="width: 100%" align='center' size="mini">
          <el-table-column v-if="idFlag" prop="id" label="id" align='center' width="180">

          </el-table-column>
          <el-table-column type="selection" align='center' width="60">

          </el-table-column>
          <el-table-column prop="username" label="用户姓名" align='center' width="80">

          </el-table-column>
          <el-table-column v-if="idFlag" prop="address" label="籍贯" align='center'>

          </el-table-column >
          <el-table-column prop="address" label="籍贯" align='center'>
            <template slot-scope="scope">
              <span style="color:#00d053">{{ scope.row.address }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="投资时间" align='center' sortable width="170">

          </el-table-column>
          <el-table-column  prop="incomePayType" label="收支类型" align='center' width="130">

          </el-table-column>
          <el-table-column  prop="income" label="收入" align='center' sortable width="130">
            <template slot-scope="scope">
              <span style="color:#00d053">+ {{ scope.row.income }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="pay" label="支出" align='center' sortable width="130">

          </el-table-column>
          <el-table-column prop="accoutCash" label="账户现金" sortable align='center' width="130">

          </el-table-column>
          <el-table-column  prop="operation" align='center' label="操作" width="180">
            <template slot-scope='scope'>
              <el-button type="warning" icon='edit' size="mini">编辑</el-button>
              <el-button type="danger" icon='delete' size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { getMoneyIncomePay } from "@/api/money";
  export default {
    name: 'fundList',
    data() {
      return {
        tableData: [],
        loading: true,
        idFlag: false,
        pageTotal:0,
        incomePayData:{
          page:1,
          limit:20,
          name:''
        },
      }
    },
    computed:{
    ...mapGetters(['search'])
    },
    mounted() {
      this.getMoneyList();
    },
    methods: {
      getMoneyList() {
        let para = Object.assign({}, this.incomePayData);
        getMoneyIncomePay(para).then(res =>{
          this.loading = false;
          this.pageTotal = res.data.total;
          this.tableData = res.data.moneyList;
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .table_container{
    padding: 10px;
    background: #fff;
    border-radius: 2px;
  }
  .el-dialog--small{
    width: 600px !important;
  }
  .pagination{
    text-align: left;
    margin-top: 10px;
  }
</style>
