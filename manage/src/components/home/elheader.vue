<template>
    <div class="header">
      <el-breadcrumb separator="/" style="line-height:none;">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-dropdown @command="handleCommand" menu-align='start' placement="bottom-start">
        <span class="el-dropdown-link">{{name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="top:50px">
          <el-dropdown-item command="home">首页</el-dropdown-item>
          <el-dropdown-item command="singout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>
<style>
    .el-breadcrumb {line-height:4;}
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
    }
    /*.el-menu-item {
      width: 100px;
      padding: 0;
      border:none;
      min-width: 100px;
    }
    .el-menu-item:first-child{
      margin: 0;
    }*/
    .el-dropdown-menu .el-popper{
      top:37px;
    }
</style>

<script type="text/javascript">
  import http from '../../utils/httpClient'
  export default{
    data () {
      return {
        name:'',
      }
    },
    methods: {
      handleCommand (command) {
        if(command == 'home'){
          this.$router.push('/home')
        }else {
          var date = new Date(); 
          date.setTime(date.getTime() - 1); 
          document.cookie = 'token' + "=a; expires=" + date.toUTCString()+';path=/;domain=localhost';
          this.$router.push('/')
        }
        
      }
    },
    mounted: function(){
      var self = this;
      function getCookie(name) { 
          var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
          if(arr=document.cookie.match(reg))
       
              return unescape(arr[2]); 
          else 
              return null; 
      }
      if(getCookie('token') != null){
        var token = getCookie('token');
        http.post({
          url: 'token',
          params: {
            token: token
          }
        }).then(res => {
          self.name = res.data.data.name;
        })
        // $.ajax({
        //   url: common.baseUrl + 'token',
        //   type: 'post',
        //   data: {token: token},
        //   success: function(data){
        //     $('.header .use').find('a')[0].innerHTML = "用户名："+data.data.name;
        //     $('.header .use').find('i').on('click',function(){
        //       var date = new Date(); 
        //         date.setTime(date.getTime() - 1); 
        //         document.cookie = 'token' + "=a; expires=" + date.toUTCString()+';path=/;domain=localhost'; 
        //         $('.header .use').find('a')[0].innerHTML = "用户名：";
        //         setTimeout(function(){
        //           location.reload();
        //         }, 500)
                
        //     });
        //   }//[1].innerHTML = data.name;
        // });
      }else {
        alert('请登陆！！');
        self.$router.push({path: '/'});
      }

    }
  }
</script>