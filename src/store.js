import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import GSignInButton from 'vue-google-signin-button'



// import {firebaseMutations} from 'vuexfire'
// var VuexFire = require('vuexfire')
// import {db} from './firebase-db'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

var self = this

var items = {
  strict: false,
  state: {
    isLoggedIn: false, //!!localStorage.getItem(“token”)
    googleUser: {
      profile: null,
    },
  },
  mutations: {
    // ...firebaseMutations,

    logIn: function (state, googleUser) {
      state.googleUser.profile = googleUser
      state.isLoggedIn = true
    },

    logOut: function (state) {
      state.isLoggedIn = false
      state.googleUser.profile = null
    },


  },
  getters: {
  
    isLoggedIn: state => state.isLoggedIn,
    googleUser: state => state.googleUser
    
    },  
  
  actions: {
    // setItemsRef: VuexFire.firebaseAction(({ bindFirebaseRef }, ref) => {
    //   return new Promise((resolve, reject) => {
    //     bindFirebaseRef('items', ref, {readyCallback: function(){        
    //       resolve()
    //     }})
    //   })      
    // }),

    // updateItem: ({ dispatch, commit }, payload) =>{
    //   return new Promise((resolve, reject) =>  {
    //     db.ref('scrape/edited/results/'+payload.refItem).update(payload.data)
    //     .then(response => {
    //         return resolve()
    //     }, error => {
    //       return reject(error)
    //     })
    //   })
    // },
  },
}

export default new Vuex.Store({
  modules: { items },
})