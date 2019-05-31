import Vue from 'vue'
import Vuex from 'vuex'
import topics from './modules/topics'
import topic from './modules/topic'
import login from './modules/login'
import reply from './modules/reply'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topics,
    topic,
    login,
    reply
  }
})