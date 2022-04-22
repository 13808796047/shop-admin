import { setItem, getItem } from './../utils/storage'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IUserInfo } from '@/api/types/common'
import { USER } from '@/utils/constants'
const state = {
  counter: 1,
  isCollapse: false,
  user: getItem<IUserInfo>(USER)
}
// 类型
export type State = typeof state
// 定义 injection key
export const key :InjectionKey<Store<State>> = Symbol('store')
const store = createStore<State>({
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 1,
      isCollapse: false,
      user: JSON.parse(window.localStorage.getItem('user') || 'null')
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    toggleMenu (state) {
      state.isCollapse = !state.isCollapse
    },
    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)
    }
  }
})
export default store
// 定义自已的`useStore`组合式函数
export const useStore = () => baseUseStore(key)
