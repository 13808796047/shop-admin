<template>
  <el-row
    class="operation"
    justify="space-between"
  >
    <el-space size="large">
      <ToggleMenu />
      <Refresh />
      <BreadCrumb />
    </el-space>

    <el-space
      size="large"
    >
      <Search />
      <FullScreen />
      <Message />
      <User />
    </el-space>
  </el-row>
  <!-- <el-row class="tabView">
    <TagView />
  </el-row> -->
</template>

<script setup lang="ts">
import { ToggleMenu, Refresh, BreadCrumb, FullScreen, Search, Message, User } from './index'
// import TagView from './tagViews/index.vue'
</script>
<style lang='scss' scoped>
.operation {
  height: 60px;
}
.tabView {
  height: 40px;
}
</style>
