import axios from 'axios'
const reply = {
  state: {
    huifu: []
  },
  mutations: {
    gethuifu(state, res) {
      state.huifu = res
    }
  },
  actions: {
    gethuifu({
      commit
    }, id) {
      axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
        console.log(res.data.data.replies)
        commit('gethuifu', res.data.data.replies)
      })
    }
  }
}

export default reply