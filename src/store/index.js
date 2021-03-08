import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    deliveries: []
  },

  getters: {
    getDeliveries: (state) => {
      return state.deliveries
    }
  },

  mutations: {
    addDeliveries (state, deliveries) {
      state.deliveries = deliveries
    }
  }
})

export default store
