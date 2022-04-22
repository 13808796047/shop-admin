<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="default"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.username"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.password"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <!-- <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="captcha"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item> -->
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { login } from '@/api/common'
import { IELForm, IFormRule } from '@/types/element-plus'
import { useStore } from '@/store'
// import { stringify } from 'json5'
const user = reactive({
  username: 'admin',
  password: '900602'
  // imgcode: ''
})
const router = useRouter()
const loading = ref(false)
// InstanceType 关键字用于获取实例类型，
const form = ref<IELForm|null>(null)
const store = useStore()
const rules = ref<IFormRule>({
  username: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
})
// const captcha = ref('')
// 1. 处理验证码

// onMounted(() => {
//   loadCaptcha()
// })

// const loadCaptcha = async () => {
//   // 获取后台返回的二进制文件
//   const data = await getCaptcha()
//   // 将二进制转换为
//   captcha.value = URL.createObjectURL(data)
// }

// 2. 登录

const handleSubmit = async () => {
  // 2.1 表单校验
  const valida = await form.value?.validate()

  if (!valida) {
    return
  }
  loading.value = true
  const data = await login(user).finally(() => { loading.value = false })
  console.log(data)

  store.commit('setUser', data.token)
  router.replace({
    name: 'home'
  })
//   try {
//     const data = await login(user).finally(() => { loading.value = false })
//     store.commit('user/setUserInfo', { ...data.user_info, token: data.token })
//     let path: null | string = null
//     const redirect = router.currentRoute.value.query.redirect
//     if (redirect && typeof redirect === 'string') {
//       path = redirect
//     } else {
//       path = '/'
//     }
//     router.replace({ path })
//   } catch (error) {
//   }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    .imgcode {
      height: 32px;
      flex: 1;
    }
  }
}
</style>
