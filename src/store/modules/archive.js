const state = {
  archives: []
}

const mutations = {
  setArchiveData: (state, data) => {
    state.archives = data
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
