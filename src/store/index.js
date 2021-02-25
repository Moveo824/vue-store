import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    setCart: (state, product) => {
      state.cart.push(product)
    },
    removeItem: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    getProducts({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
      .then((products) => {
        commit('setProducts', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    add_To_Cart({commit}, product) {
      commit('setCart', product)
    },
    delete_From_Cart({commit}, index) {
      commit('removeItem', index)
    }
  },
  getters: {
    products(state) {
      return state.products
    },
    cart(state) {
      return state.cart
    }
  }
})
