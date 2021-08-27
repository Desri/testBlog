export default {

  async GET_ARTIKEL({commit}) {
    try {
      const response = await this.$axios.$get('api/list.json')
      commit('SET_LIST_ARTIKEL', response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_ARTIKEL_POPULAR({commit}) {
    try {
      const response = await this.$axios.$get('api/popular.json')
      commit('SET_LIST_ARTIKEL_POPULAR', response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_ARTIKEL_HEADLINE({commit}) {
    try {
      const response = await this.$axios.$get('api/headline.json')
      commit('SET_LIST_ARTIKEL_HEADLINE', response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_DETAIL_ARTIKEL({commit}) {
    try {
      const response = await this.$axios.$get('api/detail.json')
      commit('SET_DETAIL_ARTIKEL', response)
    } catch(error) {
      throw error
    }
  },

  async GET_ARTIKEL_CATEGORY({commit}) {
    try {
      const response = await this.$axios.$get('api/category.json')
      commit('SET_ARTIKEL_CATEGORY', response.data)
    } catch(error) {
      throw error
    }
  },

};