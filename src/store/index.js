import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gpus:[],
  },
  mutations: {
    setGpus(state,payload){
      state.gpus=payload.data;
    },
  },
  actions: {
    fetchGpus({ commit }) {
      fetch("https://5fcbef5e51f70e00161f21d1.mockapi.io/gups")
        .then((res) => res.json())
        .then((data) => { commit("setGpus",{data});
                          
      }
        );
    },
  },
  getters: {
      allGpus(state){
        return state.gpus;
      }

  /*   favouriteContacts(state) {
      return state.contacts.filter((contact) => contact.isFavorite === true);
    },
    notFavouriteContacts(state) {
      return state.contacts.filter((contact) => contact.isFavorite === false);
    },
    allContacts(state) {
      return state.contacts; 
    }*/
  }
})
