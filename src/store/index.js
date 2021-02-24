
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gpus: [],
    user: {
      token: null,
      userId: null
    }
  },
  mutations: {
    /* cargar tabla  */
    setGpus(state, payload) {
      state.gpus = payload.data;
    },
    /* agregar elemento a tabla */
    addGpu(state, payload) {
      state.gpus.push(payload.gpu);
    },
    /* editar elemento tabla  */
    editGpu(state, payload) {
      state.gpus = state.gpus.map((gpu) => { return gpu.id == payload.gpu.id ? payload.gpu : gpu; });
    },
    /* eliminar elemento tabla  */
    deleteGpu(state, payload) {
      state.gpus = state.gpus.filter(gpu => gpu.id != payload.gpuID);

    },
    /* Login --> state  */
    setUser(state, payload) {
      state.user = {
        token: payload.token,
        userId: payload.userId
      }
    },
    /* Logout --> state */
    clearUser(state) {
      state.user.token = null;
      state.user.userId = null;
    },
  },
  getters: {
    /* getters tabla Gpus */
    allGpus(state) {
      return state.gpus;
    },
    getSearchGpu: (state) => (El) => {
      let dataFiltrada = state.gpus;
      dataFiltrada = (El.GPU_Name === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.GPU_Name.indexOf(`${El.GPU_Name}`) !== -1);
      dataFiltrada = (El.TEST_Date === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.TEST_Date.indexOf(`${El.TEST_Date}`) !== -1);
      dataFiltrada = (El.G3D_MarkMin === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G3D_Mark >= El.G3D_MarkMin);
      dataFiltrada = (El.G3D_MarkMax === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G3D_Mark <= El.G3D_MarkMax);
      dataFiltrada = (El.G2D_MarkMin === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G2D_Mark >= El.G2D_MarkMin);
      dataFiltrada = (El.G2D_MarkMax === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G2D_Mark <= El.G2D_MarkMax);
      return dataFiltrada;
    },
    /*getters login/logout  */
    getToken(state) {
      return state.user.token;
    },
    isLogged(state) {
      return !!state.user.token;
    }
    
  },
  actions: {
    /* Llamado a las api Tabla y llama a la mutation para cargar el state*/
    fetchGpus({ commit }) {
      fetch("https://5fcbef5e51f70e00161f21d1.mockapi.io/gups")
        .then((res) => res.json())
        .then((data) => {
          commit("setGpus", { data }); 
        }
        );
    },
    /* Post a firebase con email y pass del nuevo usuario */
    signUp({commit}, payload) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTB0fKQnvOpVstth1WRHE8HcxhpSZ0MjI', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      })
      .then(res => res.json())
      .then(data => commit('setUser', {
        token: data.idToken,
        userId: data.localId
      }))
    },
    login(context, payload) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTB0fKQnvOpVstth1WRHE8HcxhpSZ0MjI', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        })
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('token', data.idToken);
        localStorage.setItem('userId', data.localId);
        context.commit('setUser', {
          token: data.idToken,
          userId: data.localId
        })
      })
    },
    /* Logout - limpiar logalStorage y llamar a mutation */
    logout({ commit }) {
      commit('clearUser');
      localStorage.setItem('token', null);
      localStorage.setItem('userId', null);
    }
  },
})
