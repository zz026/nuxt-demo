const state = () => ({
  count: 0,
  token: '',
})

const mutations = {
  SET_Count (state, value) {
    state.count = state.count + value
  },
  SET_Token (state, value) {
    state.token = value
  }
}

const actions = {
  // nuxtServerInit({ commit }, { req }) {
  //   console.log('req', req.session)
  //   // if (req.session && req.session.userid) {
  //   //   console.log("用户已经登录");
  //   //   commit("SET_USER", req.session.userid);
  //   // }
  // },
  SET_Count_ACTION ({ commit }, val) {
    commit('SET_Count', val)
  },
  SET_Token_ACTION ({ commit }, val) {
    commit('SET_Token', val)
  },
  
}

export default {
  state,
  mutations,
  actions
}