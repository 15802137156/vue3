import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '刘帅帅',
    list: [
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '敲代码',
        complete: false
      }
    ]
  },
  mutations: {
    // 第一个参数state，第二个是需要修改的值
    setName(state, payload) {
      state.name = payload
    },
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clearTodo(state, payload) {
      state.list = payload
    },
  },
  actions: {
    // 第一个参数store，第二个是修改的值
    asyncSetName(store, params) {
      setTimeout(() => {
        store.commit('setName', params)
      }, 2000)
    }
  },
  modules: {
  }
})
