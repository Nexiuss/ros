<template>
  <div class="adduser">
    <el-form ref="form" :model="form" label-width="80px" size="small">
      <el-form-item label="用户名">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="员工密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="员工权限">
        <el-select v-model="form.status" placeholder="请选择">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="上传图片">
        <el-upload
        :action="baseUrl"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success='success_img'
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="baseImgPath + dialogImageUrl" alt="">
      </el-dialog>
      </el-form-item> -->
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .el-form{width:70%;margin:20px;}
  .adduser .el-form .el-form-item_label{width:180px;}
  .el-form .el-select {display:block;width:220px;}
</style>
<script>
  import http from '../utils/httpClient.js'
  export default {
    data () {
      return {
        form: {
          user_name: '',
          password: '',
          status: ''
        }
      }
    },
    props: ['model','router'],
    methods: {
      onSubmit () {
        var user_name = this.form.user_name
        var password = this.form.password
        var status = this.form.status
        http.post({
          url: 'register',
          params: {
            user_name: user_name,
            password: password,
            status: status
          }
        }).then(res => {
          console.log(res)
          if(res.data.status == '0'){
            this.$message({
                message: '用户已存在!'
            })
            this.form.user_name = ''
          } else if (res.data.status == '1') {
               this.$message({
                message: '新增成功!'
            })
            this.form = []
          }
        })
      },
      cancel () {
        this.form = []
      }
    }
  }
</script>