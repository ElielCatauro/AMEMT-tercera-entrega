<template >
  <div>
    <!-- Button FILTROS modal -->
    <button class="btn btn-secondary bg-dark" @click="showFiltrosModal = true">
      Filtros
    </button>
    <!-- Button AGREGAR modal -->
    <button class="btn btn-secondary" @click="openAddRow">Agregar</button>
      
    

    <table id="tabla" class="table table-dark bg-primary">
      <!-- TABLA -->
      <thead>
        <tr>
          <th>id</th>
          <th>GPU_Name</th>
          <th>TEST_Date</th>
          <th>G3D_Mark</th>
          <th>G2D_Mark</th>
          <th>Modificar/Eliminar</th>
        </tr>
      </thead>
      <tbody >
        <Row
          v-for="gpu in returnTable"
          :key="gpu.id"
          :id="gpu.id"
          :GPU_Name="gpu.GPU_Name"
          :TEST_Date="gpu.TEST_Date"
          :G3D_Mark="gpu.G3D_Mark"
          :G2D_Mark="gpu.G2D_Mark"
          @delete-row="openDeleteRow"
          @edit-row="openEditRow"
        >
        </Row>
      </tbody>
    </table>
    <!-- Modal de filtros-->
    <Modal v-if="showFiltrosModal">
      <template v-slot:title>Filtros</template>

      <template v-slot:body>
        <div class="col-11" id="filtroscont">
          <div class="form-group row justify-content-between">
            <p>Nombre</p>
            <div>
              <label class="input-group-text" for="filGPU_Name">
                Contiene</label
              >
              <input id="filGPU_Name" v-model="selectSearch.GPU_Name" />
            </div>
          </div>
          <div class="form-group row justify-content-between">
            <p>Fecha</p>
            <div>
              <label class="input-group-text" for="filTEST_Date">
                Contiene</label
              >
              <input id="filTEST_Date" v-model="selectSearch.TEST_Date" />
            </div>
          </div>

          <div class="form-group row justify-content-between">
            <p>G3D_Mark</p>
            <div>
              <label class="input-group-text" for="filG3D_MarkMin">Min</label>
              <input id="filG3D_MarkMin" v-model="selectSearch.G3D_MarkMin" />
              <label class="input-group-text" for="filG3D_MarkMax">Max</label>
              <input id="filG3D_MarkMax" v-model="selectSearch.G3D_MarkMax" />
            </div>
          </div>
          <div class="form-group row justify-content-between">
            <p>G2D_Mark</p>
            <div>
              <label class="input-group-text" for="filG2D_MarkMin">Min</label>
              <input id="filG2D_MarkMin" v-model="selectSearch.G2D_MarkMin" />
              <label class="input-group-text" for="filG2D_MarkMax">Max</label>
              <input id="filG2D_MarkMax" v-model="selectSearch.G2D_MarkMax" />
            </div>
          </div>
        </div>
      </template>

      <template v-slot:footer>
        <button
          id="btnCancelar"
          class="btn btn-dark"
          @click="showFiltrosModal = false"
        >
          Cancelar
        </button>
        <button class="btn btn-dark"  @click="{showFiltrosModal = false;inSearch=false;selectSearch={}; }" >
          Limpiar filtros
        </button>
        <button
          id="btnAceptar"
          class="btn btn-secondary"
          @click="showFiltrosModal = false;inSearch=true; "
        >
          Filtrar
        </button>
        
      </template>
    </Modal>

    <!-- Modal AGREGAR-->
    <Modal v-if="showAddModal">
      <template v-slot:title>Agregando una fila</template>

      <template v-slot:body>
        <div class="form-group row justify-content-between">
          <label for="inp-id">id</label
          ><input id="inp-id" v-model="selectRow.id" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-GPU_Name">GPU_Name</label
          ><input id="inp-GPU_Name" v-model="selectRow.GPU_Name" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-TEST_Date">TEST_Date</label
          ><input id="inp-TEST_Date" v-model="selectRow.TEST_Date" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-G3D_Mark">G3D_Mark</label
          ><input id="inp-G3D_Mark" v-model="selectRow.G3D_Mark" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-G2D_Mark">G2D_Mark</label
          ><input id="inp-G2D_Mark" v-model="selectRow.G2D_Mark" />
        </div>
      </template>

      <template v-slot:footer>
        <button
          id="btnCancelar"
          class="btn btn-dark"
          @click="showAddModal = false"
        >
          Cancelar
        </button>
        <button id="btnAceptar" class="btn btn-secondary" @click="addGpu">
          Aceptar
        </button>
      </template>
    </Modal>

    <!-- MODAL EDITAR -->
    <Modal v-if="showEditModal">
      <template v-slot:title>Modificando Fila</template>

      <template v-slot:body>
        <div class="form-group row justify-content-between">
          <label for="inp-GPU_Name">GPU_Name</label
          ><input id="inp-GPU_Name" v-model="selectRow.GPU_Name" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-TEST_Date">TEST_Date</label
          ><input id="inp-TEST_Date" v-model="selectRow.TEST_Date" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-G3D_Mark">G3D_Mark</label
          ><input id="inp-G3D_Mark" v-model="selectRow.G3D_Mark" />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-G2D_Mark">G2D_Mark</label
          ><input id="inp-G2D_Mark" v-model="selectRow.G2D_Mark" />
        </div>
      </template>

      <template v-slot:footer>
        <button
          id="btnCancelar"
          class="btn btn-dark"
          @click="showEditModal = false"
        >
          Cancelar
        </button>
        <button id="btnAceptar" class="btn btn-secondary" @click="editGpu">
          Aceptar
        </button>
      </template>
    </Modal>

    <!-- MODAL ELIMINAR -->
    <Modal v-if="showDeleteModal" :gpu="selectRow">
      <template v-slot:title>Eliminando fila, esta seguro?</template>

      <template v-slot:body>
        <div class="form-group row justify-content-between">
          <label for="inp-id">ID</label
          ><input id="inp-id" :value="selectRow.id" disabled />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-GPU_Name">GPU_Name</label
          ><input id="inp-GPU_Name" :value="selectRow.GPU_Name" disabled />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-TEST_Date">TEST_Date</label
          ><input id="inp-TEST_Date" :value="selectRow.TEST_Date" disabled />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-G3D_Mark">G3D_Mark</label
          ><input id="inp-G3D_Mark" :value="selectRow.G3D_Mark" disabled />
        </div>
        <div class="form-group row justify-content-between">
          <label for="inp-G2D_Mark">G2D_Mark</label
          ><input id="inp-G2D_Mark" :value="selectRow.G2D_Mark" disabled />
        </div>
      </template>

      <template v-slot:footer>
        <button
          id="btnCancelar"
          class="btn btn-dark"
          @click="showDeleteModal = false"
        >
          Cancelar
        </button>
        <button id="btnAceptar" class="btn btn-secondary" @click="deleteGpu">
          Aceptar
        </button>
      </template>
    </Modal>
    <!-- PROGRESS BAR -->
    <Modal v-if="showProgress">
      <template v-slot:title>Espere</template>

      <template v-slot:body>
        <ProgressBar :segundos="tiempoBarra"></ProgressBar>
      </template>
      <template v-slot:footer>
        <h4>aplicando cambios</h4>
      </template>
    </Modal>
  </div>
</template>
<script>
/* import { mapGetters } from "vuex"; */
import Row from "../components/Row";
import Modal from "../components/Modal";
import ProgressBar from "../components/ProgressBar";

export default {
  components: {
    Modal,
    Row,
    ProgressBar,
  },
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showFiltrosModal: false,
      selectRow: {},

      selectSearch: {},
      inSearch:false,

      showProgress: false,
      tiempoBarra: 2,
    };
  },

  computed: {
    allGpusEl(){return this.$store.getters.allGpus; },
    searchGpus(){return this.$store.getters.getSearchGpu(this.selectSearch); },
    returnTable(){return this.inSearch ? this.searchGpus  : this.allGpusEl },
    }
    ,
  
  methods: {
    
    showBarrita() {
      console.log("mostrando barrita");
      this.showProgress = true;
      setTimeout(()=>{this.showProgress = false}, (this.tiempoBarra * 1000));
    },
    openAddRow() {
      this.showAddModal = true;
      this.selectRow = {};
    },
    openDeleteRow(id) {
      this.showDeleteModal = true;
      this.selectRow = { ...this.allGpusEl.filter((gpu) => gpu.id === id)[0] };
    },
    openEditRow(id) {
      this.showEditModal = true;
      this.selectRow = { ...this.allGpusEl.filter((gpu) => gpu.id === id)[0] };
    },
    deleteGpu() {
      this.$store.commit("deleteGpu", { gpuID: this.selectRow.id });
      this.showDeleteModal = false;
      this.showBarrita();
    },
    editGpu() {
      this.$store.commit("editGpu", { gpu: this.selectRow });
      this.showEditModal = false;
      this.showBarrita();
    },
    addGpu() {
      this.$store.commit("addGpu", { gpu: this.selectRow });
      this.showAddModal = false;
      this.showBarrita();
    },
  },
};
</script>
<style >
</style>