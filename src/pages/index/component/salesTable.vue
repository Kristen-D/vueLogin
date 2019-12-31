<template>
  <div class="salesTable">
    <el-table>
      <el-table-column>

      </el-table-column>
      <el-table-column>

      </el-table-column>
      <el-table-column class-name="salesStatus"
                       prop="status"
                       label="STATUS">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1" class="saleBgcolor">SALE</span>
          <span v-if="scope.row.status === 2" class="taxBgcolor">TAX</span>
          <span v-if="scope.row.status === 3" class="extenedBgcolor">EXTENDED</span>
          <span v-if="scope.row.status === 4" class="likeBgcolor">LIKE</span>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import userImg from "@/assets/img/avatar-3.png";
  export default {
    data() {
      return {
        tableData: [],
        userImg: userImg
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
