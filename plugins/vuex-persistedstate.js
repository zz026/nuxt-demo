import createPersistedState from 'vuex-persistedstate'

export default (context) => {
  createPersistedState({
    // 默认localStorage
    storage: window.sessionStorage,
    reducer(obj) {
      const { count, token } = obj
      return { count, token }
    }
  })(context.store)
}