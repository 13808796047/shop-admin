<!--
 * @author: Summer
 * @since: 2022-04-22
 * BreadCrumb.vue
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item) in routes"
      :key="item.path"
      :to="{ path: item.path }"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <!-- <el-breadcrumb>
    <el-breadcrumb-item
      v-for="(item) in routes"
      :key="item.path"
    >
      <a>{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb> -->
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
const router = useRouter()
const routes = computed(() => router.currentRoute.value.matched.filter(item => item.meta.title))

</script>

<style scoped lang="scss"></style>
