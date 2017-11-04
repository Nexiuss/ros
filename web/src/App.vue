<template>
  <router-view></router-view>
</template>

<script>
export default {
      name: 'app',
      data () {
        return {
          msg: ''
        }
      },
      methods: {
          
      }
    }
  
</script>

<style lang="css">
    #app{
      display: -moz-flex;
      -webkit-flex-flow: column;
      position:relative;
    }
    *a{
      text-decoration:none !important;
    }
    a:hover{
        text-decoration: none !important;
        color:#F01414 !important;
    }
    .background{
        width:100%;
        height:154px;
        position:absolute;
        z-index:-1;
    }
    .header{
        height:196px;
    }
    .header-top{
        margin-top:20px;
    }
    .header-top h1{
        float:left;
        width:80px;
        height:80px;
        margin-left:20px;
        margin-right:20px;
    }
    .header-top h2{
        font-size:20px;
        font-weight:bold !important;
        margin-bottom:10px;
    }
    .header-input{
        margin-top:10px;
        padding-left:20px;
        padding-right:20px;
    }
    
    .header-bottom{
        height:42px;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        margin-top:10px;
    }
    .header-bottom li{
        float:left;
        line-height:42px;
        width:33.3%;
        text-align:center;
    }
    .main{
        width:100%;
        flex:1;
        display:flex;
    }
    .main-left{
        float:left;
        width:25%;
        background:#F3F5F7;
        padding-left:3%;
        padding-right:3%;
    }
    .main-left li{
      border-bottom:1px solid #DADDE0;
      height:70px;
      line-height:70px;
      text-align:center;
    }
    .main-right{
        overflow-y:auto;
        width:75%;
        float:left;
    }
    .main-right h4{
        padding-top:8px;
        padding-bottom:8px;
        padding-left:10px;
        font-size:14px;
        background:#F3F5F7;
        color:#979DA3;
        border-left:3px solid #ccc;
    }
    .main-right .food_hot li{
        height:100px;

    }
    .white{
        width:100%;
        background:#f3f5f7;
        height:25px;
    }
</style>
