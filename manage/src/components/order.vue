<template>
  <div class="order">
    <el-table :data="tableData2" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="桌号">
                <span>{{ props.row.t_id }}</span>
              </el-form-item>
              <el-form-item label="订单 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
             <!--  <el-form-item label="订单总价">
                <span>{{ props.row.total }}</span>
              </el-form-item> -->
              <el-form-item label="订单状态">
                <span v-if='props.row.status == "true"'>未支付</span>
                <span v-else>已支付</span>
              </el-form-item>
              <el-form-item label="订单详情">
                <span>{{ props.row.data }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单 ID" prop="id" width="180">
        </el-table-column>
        <el-table-column label="桌号" prop="t_id" width="180">
        </el-table-column>
        <!-- <el-table-column label="订单总价" prop="total">
        </el-table-column> -->
        <el-table-column label="订单状态" prop="status">
        </el-table-column>
        <!-- <el-table-column label="操作" width="160">
            <template slot-scope="scope">
              <el-button size="small" @click="dialogFormVisible = true">编辑</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </template>
        </el-table-column> -->
    </el-table>
    <router-view/>
  </div>
</template>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .el-table__header {
    line-height: 30px !important;
    text-align:;
  }

  .el-table .cell {
    text-align: center;
  }
  .el-form .el-form-item__label{
    width: 80px !important;
  }
</style>
<script>
  import http from '../utils/httpClient.js'
  export default {
    data () {
      return {
        // tableData2: [{
        //   id: '12987122',
        //   t_id: '10',
        //   total: '230',
        //   status: '已支付'
        // }, {
        //   id: '12987122',
        //   t_id: '10',
        //   total: '230',
        //   status: '已支付'
        // }, {
        //   id: '12987122',
        //   t_id: '10',
        //   total: '230',
        //   status: '已支付'
        // }],
        tableData2:[],
        dialogFormVisible: false
      }
    },
    mounted: function(){
      var self = this;
      http.post({
        url: 'orderAll'
      }).then(res => {
        self.tableData2 = res.data.data.data;
      })
    }
  }
</script>