<!--
 * new page
 * @author: Summer
 * @since: 2022-04-21
 * index.vue
-->
<template>
  <div class="container">
    首页
    <img
      src="@/assets/logo.png"
      alt=""
      class="src"
    >
    <button @click="add">
      点击
    </button>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/common'
import type { IAuthorization } from '@/api/types/common'
import User from '@/api/user'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const authorization = ref<IAuthorization['token']>('')
onMounted(() => {
  login().then(data => {
    authorization.value = data.token
  })
})
console.log(User)

const store = useStore()
console.log(store.state.counter)
const add = () => {
//   store.commit.increment
}
</script>

<style scoped></style>
