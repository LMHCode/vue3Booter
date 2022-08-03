import { defineStore } from 'pinia'

const storeUser = defineStore('user', {
  state: () => ({
    username: 'nicoz',
    age: 10
  }),
  getters: {},
  actions: {},
  // 开启持久化
  persist: {
    enabled: true, // 启用
    strategies: [
      // storage 可选localStorage或sessionStorage
      // paths 给指定数据持久化
      { key: 'user', storage: localStorage, paths: [] }
    ]
  }
})

export default storeUser
