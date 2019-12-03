import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tagsList: [],
    tagsNumbers:0,
    articleNumbers:0,
    currentNav:'home',
    isSignIn:0 //0未登录，1admin，2游客
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
    },
    changeIsSignIn(state,n) {
      state.isSignIn = n
    }
  },
  actions: {},
  modules: {},
  getters: {
    tagsList: state => state.tagsList,
    tagsNumbers:state => state.tagsNumbers,
    articleNumbers:state => state.articleNumbers,
    isSignIn: state => state.isSignIn
  }
});
