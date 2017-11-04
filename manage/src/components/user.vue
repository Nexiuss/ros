<template>
  <div class="basetable" v-loading="loading"
       element-loading-text="拼命加载中">
    <!-- <div class="selectMenu">
      <el-button type="primary" @click="add()">新增</el-button>
    </div> -->
    <div class="tableMain">
      <el-table :data="tableData3" style="width: 100%">
          <el-table-column label="员工 ID" prop="id" width="120">
          </el-table-column>
          <el-table-column label="用户名" prop="user_name" width="160">
          </el-table-column>
          <el-table-column label="密码" prop="password" width="160">
          </el-table-column>
          <el-table-column label="员工权限" prop="status">
          </el-table-column>
          <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="small"
              @click="handleEdit3(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete3(scope.$index, scope.row)">删除
            </el-button>
          </template>
          </el-table-column>
      </el-table>
    </div>
    <!-- <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper"
                     :total="1000">
      </el-pagination>
    </div> -->
    <el-dialog title="修改员工信息" :visible.sync="dialogFormVisible">
      <el-form :model="form3">
        <el-form-item label="员工ID" :label-width="formLabelWidth">
          <el-input v-model="form3.id" auto-complete="off" :disabled='true'></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form3.user_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工密码" :label-width="formLabelWidth">
          <el-input v-model="form3.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工权限" :label-width="formLabelWidth">
          <el-select v-model="form3.status" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel3()">取 消</el-button>
        <el-button type="primary" @click="update3()">确 定</el-button>
      </div>
    </el-dialog>
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
        loading: true,
        tableData3: [],
        dialogFormVisible: false,
        formLabelWidth: '80px',
        form3: {},
        currentPage3: 1,
        currentIndex: ''
      }
    },
    created () {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    },
    mounted: function(){
      var self = this;
      http.post({
        url: 'find'
      }).then(res => {
        self.tableData3 = res.data.data;
      })
    },
    methods: {
      // add3 () {
      //   this.form = {
      //     date: '',
      //     name: '',
      //     region: '',
      //     address: ''
      //   }
      //   this.dialogFormVisible = true
      // },
      update3 () {
        // this.tableData3.push(this.form3)
        var id = this.form3.id;
        var user_name= this.form3.user_name;
        var password= this.form3.password;
        var status= this.form3.status;
        console.log(this.form3)
        http.post({
          url: 'userUpdate',
          params: {
            id:id,
            user_name:user_name,
            password:password,
            status:status
          }
        }).then(res => {
        	console.log(res)
        })
        this.dialogFormVisible = false
      },
      handleEdit3 (index, row) {
        this.form3 = this.tableData3[index]
        this.currentIndex = index
        this.dialogFormVisible = true
      },
      handleDelete3 (index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          http.post({
            url: 'userDel',
            params: {
              id:this.tableData3[index].id
            }
          }).then(res => {console.log(res)})
          this.tableData3.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      cancel3 () {
        this.dialogFormVisible = false
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>