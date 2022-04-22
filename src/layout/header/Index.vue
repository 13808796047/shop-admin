<!--
 * @author: Summer
 * @since: 2022-04-22
 * Index.vue
-->
<template>
  <el-row
    :gutter="20"
    align="middle"
  >
    <el-col :span="1">
      <ToggleSidebar />
    </el-col>
    <el-col :span="11">
      <BreadCrumb />
    </el-col>
    <el-col :span="1">
      <FullScreen />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import BreadCrumb from './BreadCrumb.vue'
import ToggleSidebar from './ToggleSidebar.vue'
import FullScreen from './FullScreen.vue'

</script>

<style scoped lang="scss"></style>
