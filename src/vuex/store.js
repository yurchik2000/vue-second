import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


// import DataList from '../../db.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {            //data
    events: [],
    loading: true,
    perPage: 5,
    page: 1,
  },  
  actions: {    
    createEvent({commit}, event) {
      commit('ADD_ITEM', event)      
    },    
    GET_FROM_API({commit}){            
      return axios 
      //.get('http://localhost:3000/events')
      .get('http://localhost:3000/events?_limit=' + this.state.perPage + '&_page=' + this.state.page)      
      .then (response => {
        this.loading = true
        commit("SET_TO_STATE", response.data)
        return response.data
        })
      .catch((error) => {
        console.log(error)
        return error
       })
       .finally(() => {        
        this.loading = false
        commit("SET_LOADING", this.loading)
        return this.loading
        }        
       )
    },
    GET_ALL_FROM_API({commit}){            
      return axios 
      .get('http://localhost:3000/events')      
      .then (response => {
        this.loading = true
        commit("SET_TO_STATE", response.data)
        return response.data
        })
      .catch((error) => {
        console.log(error)
        return error
       })
       .finally(() => {        
        this.loading = false
        commit("SET_LOADING", this.loading)
        return this.loading
        }        
       )
    }
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setPage(state, page){
      state.page = page;
    },
    REMOVE_ITEM(state, item) {
      state.events = state.events.filter(event => event.id !== item.id)
    },
    ADD_ITEM (state, item) {
      // можна перевірити чи Item  з таким ID вже є в списку      
      return state.events.push(item)      
    },
    SET_TO_STATE: (state, events) => {
      state.events = events      
    },
    SET_LOADING: (state, loading) =>{
      state.loading = loading
    },
    REPLACE_EVENT (state, item) {
      console.log(item)
      state.item = item
    },
    MOVE_TO_NEXT_PAGE (state, page){
      state.page = page + 1      
    },
    MOVE_TO_PREV_PAGE (state, page){
      state.page = page - 1      
    }        
  },

})
