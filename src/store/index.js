import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  // Allows to modify state
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value){
      state.user = value
    }, 
    setMessage(state, value) {
      state.message = value
    }
  },
  // commit actions
  actions: {
async fetchUsers(context){
  const res = await axios.get(`${bedURL}users`);
  const {results, err} = await res.data;
  if (results) {
    context.commit('setUsers', results)
  }else {
    context.commit('setUsers', results)
  }
}
  },
  modules: {
  }
})
