<template>
  <el-icon class="toggleMenuIcon">
    <component
      :is="iconShow"
    />
  </el-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state.isCollapse)

const iconShow = computed(() => store.state.isCollapse ? 'Fold' : 'Expand')
//  @click="store.commit('toggleMenu')"
</script>
<style lang='scss' scoped>
.toggleMenuIcon {
  cursor: pointer;
}
</style>
