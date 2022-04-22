import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

const state = {
  counter: 1,
  isCollapse: false
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
      isCollapse: false
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})
export default store
// 定义自已的`useStore`组合式函数
export const useStore = () => baseUseStore(key)
