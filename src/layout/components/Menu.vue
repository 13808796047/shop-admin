<!--
 * @author: Summer
 * @since: 2022-04-22
 * Menu.vue
-->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    :collapse="isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><home-filled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><goods /></el-icon>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/product/list">
          <el-icon><list /></el-icon>
          <span>商品列表</span>
        </el-menu-item>
        <el-menu-item index="/product/category">
          <el-icon><fold /></el-icon>
          <span>商品分类</span>
        </el-menu-item>
        <el-menu-item index="/product/attr">
          <el-icon><document /></el-icon>
          <span>商品规格</span>
        </el-menu-item>
        <el-menu-item index="/product/replay">
          <el-icon><chat-round /></el-icon>
          <span>商品评论</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">import { computed } from 'vue'

import { useStore } from 'vuex'
const store = useStore()
const isCollapse = computed(() => store.state.isCollapse)
</script>

<style scoped lang="scss">
.el-menu{
    border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
