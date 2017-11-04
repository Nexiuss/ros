<template>
    <div class="home">
        <el-container style="height: 100%">
           <el-aside width="16.6%" style="background-color:#545c64"><home-elnav></home-elnav></el-aside>
           <el-container style="height: 100%">
                <el-header><home-header></home-header></el-header>
                <router-view/>
           </el-container>
        </el-container>
    </div>
</template>

<script>
import './home.css'
import elnav from './elnav.vue'
import elheader from './elheader.vue'

export default {
  components: {
    'home-elnav': elnav,
    'home-header': elheader
  }
}
</script>