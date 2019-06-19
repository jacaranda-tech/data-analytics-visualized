import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import shared from './shared'
import databases from './databases'
import tables from './tables'
import queries from './queries'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users: users,
    shared: shared,
    databases: databases,
    tables: tables,
    queries: queries
  }
})
