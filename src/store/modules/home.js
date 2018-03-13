const state = {
  // {1: [article, article]}
  articles: {},
  total: 1,
  current: 1
}

const mutations = {
  setHomeData: (state, data) => {
    state.articles = Object.assign(state.articles, data.articles)
    state.total = data.total || state.total
    state.current = data.current || state.current
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
