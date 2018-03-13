import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import detail from './modules/detail'
import category from './modules/category'
import tag from './modules/tag'
import archive from './modules/archive'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail,
    category,
    tag,
    archive
  }
})
