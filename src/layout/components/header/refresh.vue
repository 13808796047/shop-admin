<template>
  <el-icon
    @click="refreshFn"
    style="cursor: pointer;"
  >
    <refresh />
  </el-icon>
</template>
<script setup lang="ts">
const refreshFn = () => window.location.reload()
</script>
