import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tagsList: [],
    tagsNumbers:0,
    articleNumbers:0,
    currentNav:'home'
  },
  mutations: {
    setTagsList(state,tagsList) {
      state.tagsList = tagsList;
    },
    setTagsNumbers(state,numbers) {
      state.tagsNumbers = numbers;
    },
    setArticleNumbers(state,numbers) {
      state.articleNumbers = numbers;
    }
  },
  actions: {},
  modules: {},
  getters: {
    tagsList: state => state.tagsList,
    tagsNumbers:state => state.tagsNumbers,
    articleNumbers:state => state.articleNumbers
  }
});
