<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <!-- {{ store.state.user?.nickname|| 'nobody' }} -->
      xxxxxx
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-space>
            <el-icon class="el-icon--right">
              <avatar />
            </el-icon>
            <span>个人中心</span>
          </el-space>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-space>
            <el-icon class="el-icon--right">
              <back />
            </el-icon>
            <span @click="handleLogout">退出登录</span>
          </el-space>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { logout } from '@/api/common'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const handleLogout = async () => {
  await ElMessageBox.confirm('请确认是否要退出登录')
  const res = await logout()
  ElMessage.success(res.msg)
  store.commit('user/setUserInfo', null)
  router.push({ path: '/login' })
}

</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
