const state = {
  tags: []
}

const mutations = {
  setTagData: (state, data) => {
    state.tags = data
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
