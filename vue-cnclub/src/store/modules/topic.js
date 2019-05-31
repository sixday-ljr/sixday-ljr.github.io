import axios from 'axios'
const topic = {
  state: {
    all: null
  },
  mutations: {
    getTopic(state, topic) {
      state.all = topic
    }
  },
  actions: {
    getTopic({
      commit
    }, id) {
      axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
        commit("getTopic", res.data.data)
      })
    }
  }
}
export default topic