<template>
  <div class="fillcontain">
      <div class="contain">
          <div class="table_container">
              <el-table  v-loading="loading"
                         border
                         stripe
                         highlight-current-row
                         header-cell-class-name="table-header-class"
                         :data="tableData"
                         size="mini"
                         style="width:100%">
                <el-table-column label="序号">
                  <template slot-scope="scope">
                    <span>{{scope.$index+(paginations.pageIndex - 1) * paginations.pageSize + 1}} </span>
                  </template>
                </el-table-column>
                <el-table-column property="username"
                                 label="用户姓名">

                </el-table-column>
                <el-table-column property="email"
                                 label="邮箱地址">

                </el-table-column>
                <el-table-column property="address"
                                 label="注册地址">

                </el-table-column>
                <el-table-column property="region"
                                 label="地区">

                </el-table-column>
                <el-table-column property="isp"
                                 label="网络">

                </el-table-column>
                <el-table-column property="ip"
                                 label="IP地址">

                </el-table-column>
                <el-table-column property="createTime"
                                 label="注册时间">

                </el-table-column>
                <el-table-column property="updateTime"
                                 label="登录时间">

                </el-table-column>

              </el-table>
            <el-row>
              <el-col :span="24">
                <div class="pagination">
                  <el-pagination :page-sizes="paginations.pageSizes"
                                 :page-size="paginations.pageSize"
                                 :layout="paginations.layout"
                                 :total="paginations.total"
                                 :current-page='paginations.pageIndex'
                                 @current-change='handleCurrentChange'
                                 @size-change='handleSizeChange'>
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </div>
      </div>
  </div>
</template>

<script>
  import { getUserList} from '@/api/user'

  export default {
    name: 'userList',
    data() {
      return {
        tableData: [],
        loading: true,
        paginations: {
          total: 0,
          pageIndex: 1,
          pageSize: 20,
          pageSizes: [5,10,15,20],
          layout: "total, sizes, prev, pager, next, jumper"   // 翻页属性
        }
      }
    },
    mounted() {
      this.getUserList();
    },
    methods: {
      getUserList() {
        let para = {
          limit : this.paginations.pageSize,
          page: this.paginations.pageIndex
        }
        getUserList(para).then(res => {
          this.loading = false;
          this.paginations.total = res.data.total;
          this.tableData = res.data.userList;
        })
      },
      // 每页多少条切换
      handleSizeChange(pageSize) {
        this.paginations.pageSize = pageSize;
        this.getUserList();
      },
      // 上下分页
      handleCurrentChange(page) {
        this.paginations.pageIndex = page;
        this.getUserList();
      }
    }
  }
</script>

<style lang="less" scoped>
  .fillcontain{
    padding-bottom: 0;
  }
  .contain{
    background: #fff;
    padding: 10px;
    margin-bottom: 20px;
  }
  .pagination{
    padding: 10px 20px;
    text-align: right;
  }
</style>
