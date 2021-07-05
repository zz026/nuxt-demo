export const state = () => ({
  userInfo: {
    name: '安安'
  }
})


export const mutations = {
  SET_UserInfo: (state, value) => state.userInfo = value
}

export const actions = {
  SET_UserInfo_ACTION ({ commit }, val) {
    commit('SET_UserInfo', val)
  }
}

export default {
  state,
  mutations,
  actions
}