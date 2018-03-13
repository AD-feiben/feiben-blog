const state = {
  articles: {}
}

const mutations = {
  setDetailData: (state, data) => {
    state.articles = Object.assign(state.articles, data)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
