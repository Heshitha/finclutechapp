import { createStore } from 'vuex'

export default createStore({
  state: {
    userdata:{}
  },
  getters: {
    getUserData(state){
      return state.userdata;
    }
  },
  mutations: {
    setUserData(state, payload){
      state.userdata = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
