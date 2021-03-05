import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registered: false,
    username: String,
    password: String,
    förnamn: String,
    efternamn: String,
    intressen: String,
    ålder: Number,
    antalSök: 0,
    result: null,
  },
  mutations: {
    increment(state) {
      state.antalSök++;
      console.log(state.antalSök);
    },
  },
  modules: {},
});
