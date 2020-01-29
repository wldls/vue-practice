import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: []
  },
  getters:{
    fetchedAsk(state){
      return state.asks;
    }
  },
  mutations,
  // {
  //   SET_NEWS(state, news){
  //     state.news = news;
  //   },
  //   SET_ASKS(state, asks){
  //     state.asks = asks;
  //   },
  //   SET_JOBS(state, jobs){
  //     state.jobs = jobs;
  //   }
  // },
  actions
  // {
  //   FETCH_NEWS({ commit }){
  //     fetchNewsList()
  //       .then(res => {
  //         commit('SET_NEWS', res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })

  //   },
  //   FETCH_ASKS({ commit }){
  //     fetchAskList()
  //       .then(res => {
  //         commit('SET_ASKS', res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   },
  //   FETCH_JOBS({ commit }){
  //     fetchJobsList()
  //       .then(res => {
  //         commit('SET_JOBS', res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   }
  // }
})