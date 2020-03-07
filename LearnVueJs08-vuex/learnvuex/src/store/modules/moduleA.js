import { 
  UPDATENAME,
 } from "../mutations-types";

export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    [UPDATENAME](state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + 'yyy'
    },
    fullName2(state, getters) {
      return getters.fullName + 'lll'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit(UPDATENAME, 'wangwu')
      }, 1000)
    }
  }
}