// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBAatidmAdbzZIHIJZI7Ug_WJmLcvcDVnA',
      authDomain: 'data-analytics-visualized.firebaseapp.com',
      databaseURL: 'https://data-analytics-visualized.firebaseio.com',
      projectId: 'data-analytics-visualized',
      storageBucket: 'data-analytics-visualized.appspot.com',
      messagingSenderId: '340437126817',
      appId: '1:340437126817:web:a5f65f37c6e3bb91'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
