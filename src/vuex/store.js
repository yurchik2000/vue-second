import Vue from 'vue';
import Vuex from 'vuex';

import DataList from '../../db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {            //data
    events: []
  },
  // getters: {    //computed
  //   natureEvent(state) {
  //     return state.events.filter(event => event.category === 'nature')
  //   }
  // },
  actions: {
    fetchProducts(context) {
      // make tha call
      context.commit('setEvents', DataList.events);
    },
    createEvent({ commit }, event) {
      commit('ADD_ITEM', event);
    }
  },

  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    REMOVE_ITEM(state, item) {
      state.events = state.events.filter(event => event.id !== item.id);
    },
    ADD_ITEM(state, item) {
      return state.events.push(item);
    }
  }
});
