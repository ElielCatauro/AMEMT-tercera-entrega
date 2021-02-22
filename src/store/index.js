
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gpus: [],
  },
  mutations: {
    setGpus(state, payload) {
      state.gpus = payload.data;
    },
    addGpu(state, payload) {
      state.gpus.push(payload.gpu);
    },
    editGpu(state, payload) {
      state.gpus = state.gpus.map((gpu) => { return gpu.id == payload.gpu.id ? payload.gpu : gpu; });

    },
    deleteGpu(state, payload) {
      state.gpus = state.gpus.filter(gpu => gpu.id != payload.gpuID);

    },
  },
  actions: {
    fetchGpus({ commit }) {
      fetch("https://5fcbef5e51f70e00161f21d1.mockapi.io/gups")
        .then((res) => res.json())
        .then((data) => {
          commit("setGpus", { data });

        }
        );
    },
  },
  getters: {
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
    }
 
  }
})
