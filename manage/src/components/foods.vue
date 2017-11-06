<template>
  <div class="basetable" v-loading="loading"
       element-loading-text="拼命加载中">
    <!-- <div class="selectMenu">
      <el-button type="primary" @click="add()">新增</el-button>
    </div> -->
    <div class="tableMain">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="菜品名称">
                <span>{{ props.row.food_name }}</span>
                </el-form-item>
                <el-form-item label="菜品 ID">
                <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="菜品标签">
                <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="菜品价格">
                <span>{{ props.row.price }}</span>
                </el-form-item>
                <el-form-item label="菜品分类">
                <span>{{ props.row.attr }}</span>
                </el-form-item>
                <el-form-item label="菜品销量">
                <span>{{ props.row.sales }}</span>
                </el-form-item>
                <el-form-item label="菜品描述">
                <span>{{ props.row.description }}</span>
                </el-form-item>
            </el-form>
          </template>
          </el-table-column>
          <el-table-column label="菜品 ID" prop="id" width="70">
          </el-table-column>
          <el-table-column label="菜品名称" prop="food_name" width="120">
          </el-table-column>
          <el-table-column label="菜品价格" prop="price" width="100">
          </el-table-column>
          <el-table-column label="菜品描述" prop="description">
          </el-table-column>
          <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
          </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="currentIndex" :page-size="pagesize" :page-sizes="[10, 20, 50, 100]" layout="total,sizes,prev,pager,next,jumper"
                     :total="total">
      </el-pagination>
    </div>
    <el-dialog title="修改菜品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="菜品ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" auto-complete="off" :disabled='true'></el-input>
        </el-form-item>
        <el-form-item label="菜品名称" :label-width="formLabelWidth">
          <el-input v-model="form.food_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜品介绍" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜品价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" tauto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜品销量" :label-width="formLabelWidth">
          <el-input v-model="form.sales" tauto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜品标签" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="hot" value="hot"></el-option>
            <el-option label="combo" value="combo"></el-option>
            <el-option label="drink" value="drink"></el-option>
            <el-option label="jardiniere" value="jardiniere"></el-option>
            <el-option label="seafood" value="seafood"></el-option>
            <el-option label="soup" value="soup"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜品分类" :label-width="formLabelWidth">
          <el-select v-model="form.attr" placeholder="请选择">
            <el-option label="蔬菜" value="蔬菜"></el-option>
            <el-option label="海鲜" value="海鲜"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
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
        tableData: [],
        dialogFormVisible: false,
        formLabelWidth: '80px',
        form: {},
        currentIndex: 1,
        pagesize: 10
      }
    },
    created () {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    },
    methods: {
      update () {
        // this.tableData.push(this.form)
        var id = this.form.id;
        var food_name= this.form.food_name;
        var price= this.form.price;
        var type= this.form.type;
        var attr= this.form.attr;
        var sales= this.form.sales;
        var description= this.form.description;
         
        console.log(this.form)
        http.post({
          url: 'foodsUpdate',
          params: {
            id:id,
            food_name:food_name,
            price:price,
            type:type,
            description:description,
            sales:sales,
            attr:attr
          }
        }).then(res => {
           console.log(res)
        })
        this.dialogFormVisible = false
      },
      handleEdit (index, row) {
        this.form = this.tableData[index]
        this.currentIndex = index
        this.dialogFormVisible = true
      },
      handleDelete (index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          http.post({
            url: 'foodsDel',
            params: {
              id:this.tableData[index].id
            }
          }).then(res => {console.log(res)})
          this.tableData.splice(index, 1)
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
      cancel () {
        this.dialogFormVisible = false
      },
      handleSizeChange (size) {
        this.pagesize = size
        // console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (currentIndex) {
        this.currentIndex = currentIndex
        // console.log(`当前页: ${val}`)
      }
    },
    mounted: function(){
      var self = this;
      http.post({
        url: 'foodsFind'
      }).then(res => {
        self.tableData = res.data.data
        self.total = res.data.data.length
        
        // console.log(self.tableData)
      })
    }
  }
</script>