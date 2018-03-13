const state = {
  categories: []
}

const mutations = {
  setCategotyData: (state, data) => {
    state.categories = data
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
