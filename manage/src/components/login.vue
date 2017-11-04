<template>
    <div class="box">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm2.username" placeholder='请输入用户名' auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="psw">
            <el-input type="password" v-model="ruleForm2.psw" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style>
    .box{width: 340px;height: 210px;position:absolute;top:50%;left:50%;margin-top: -180px;
    margin-left: -170px;background-color: #fff;padding:25px;}
    #app{background-color: #09c;}
    .el-form .el-form-item__label{width: 60px !important;}
    .el-form .el-form-item__content{margin-left: 60px !important;}
    .el-form{margin:20px;margin-right: 40px;}
</style>
<script>
  import http from '../utils/httpClient.js'

    export default {
      data () {
        var checkUsername = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('用户名不能为空'))
          } else {
            callback()
          }
        }
        var validatePsw = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'))
          } else {
            // if (this.ruleForm2.checkPass !== '') {
            //   this.$refs.ruleForm2.validateField('checkPass')
            // }
            callback()
          }
        }
        return {
          ruleForm2: {
            username: '',
            psw: ''
          },
          rules2: {
            psw: [
              { validator: validatePsw, trigger: 'blur' }
            ],
            username: [
              { validator: checkUsername, trigger: 'blur' }
            ],
            showLogin: false
          }
        }
      },
      methods: {
        submitForm (ruleForm2) {
          var self = this;
          this.$refs[ruleForm2].validate((valid) => {
            if (valid) {
              http.post({
                  url: "login",
                  params: {
                    user_name: this.ruleForm2.username,
                    password: this.ruleForm2.psw
                  }
              }).then(res => {
                  // self.datagrid = res.data;
                  // console.log(res.data)
                  // console.log(res)

                  if(res.data.status == '1'){
                    document.cookie = 'token='+res.data.token+';path=/;domain=localhost';
                    self.$router.push({path: '/home'});
                  }else{
                    alert('登录 失败！请输入正确的用户名密码！！')
                  }
              })

            } else {
              console.log('error submit!!')
              return false
            }
          })
          // router.push('home')
          // console.log(this.ruleForm2.username, this.ruleForm2.psw)
          // this.$router.push({path: '/home'});
        }
      }
}
</script>