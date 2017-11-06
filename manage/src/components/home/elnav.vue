<template>
  <div class="nav">
    <el-row class="tac" >
        <el-col :span="24">
        <el-menu
          default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="border-right:none"
          router="true">
         <!--  <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </template>
          </el-submenu> -->
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/home/order">
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/home/food">
            <i class="el-icon-menu"></i>
            <span slot="title">菜品管理</span>
          </el-menu-item>
          <el-menu-item index="/home/user">
            <i class="el-icon-setting"></i>
            <span slot="title">员工管理</span>
          </el-menu-item>
          <el-menu-item index="/home/addfood">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">添加菜品</span>
          </el-menu-item>
          <el-menu-item index="/home/adduser">
            <i class="el-icon-circle-plus-outline"></i>
            <span slot="title">新增员工</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .el-menu-item:first-child{
    margin-left: -28px;
  }
  .el-menu-item{
    padding:0 82px;
    margin:10px 0;
    font-size: 16px;
  }
</style>

<script>
  export default {
    props: ['router'],
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>