<!--
 * @author: Summer
 * @since: 2022-04-22
 * Layout.vue
-->
<template>
  <el-container>
    <el-aside width="200px">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './components/Menu.vue'
</script>

<style scoped lang="scss">
.el-header,.el-footer{
    background-color: #b3c0d1;
}
.el-aside{
   background-color: #304156;
}
.el-main{
    background-color: #b3c0d1;
}
.el-container{
    height: 100vh;
}
</style>
