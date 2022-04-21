import { createStore } from 'vuex'

const store = createStore({
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})
export default store
