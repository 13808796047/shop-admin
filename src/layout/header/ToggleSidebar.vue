
<!--
 * @author: Summer
 * @since: 2022-04-22
 * ToggleSidebar.vue
-->
<template>
  <div>
    <el-icon @click="toggleMenu">
      <fold v-show="!isCollapse" />
      <expand v-show="isCollapse" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const isCollapse = computed(() => store.state.isCollapse)
console.log(isCollapse.value)

const toggleMenu = () => {
  store.commit('setIsCollapse', !isCollapse.value)
}
</script>

<style scoped lang="scss"></style>
