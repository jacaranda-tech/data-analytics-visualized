import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'
import database from './database'
import table from './table'
import query from './query'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared,
    database: database,
    table: table,
    query: query
  }
})
