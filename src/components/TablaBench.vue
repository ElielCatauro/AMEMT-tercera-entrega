<template >
  <div>

          <!-- Button FILTROS modal -->
          <button
            class="btn btn-secondary bg-dark"
             @click="showFiltrosModal = true">
            Filtros
          </button>
<!-- Button AGREGAR modal -->
          <button
            class="btn btn-secondary"
            @click="showAddModal = true">
            Agregar
          </button>

    <table id="tabla" class="table table-dark bg-primary"><!-- TABLA -->
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
      <tbody id="cuerpoTabla">
         <Row
          v-for="gpu in allGpus"
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
                                                <label class="input-group-text" for="filGPU_Name"> Contiene</label>
                                                <input id="filGPU_Name">
                                            </div>
                                        </div>
                                        <div class="form-group row justify-content-between">
                                            <p>Fecha</p>
                                            <div>
                                                <label class="input-group-text" for="filTEST_Date"> Contiene</label>
                                                <input id="filTEST_Date">
                                            </div>
                                        </div>

                                        <div class="form-group row justify-content-between">
                                            <p>G3D_Mark</p>
                                            <div>
                                                <label class="input-group-text" for="filG3D_MarkMin">Min</label>
                                                <input id="filG3D_MarkMin">
                                                <label class="input-group-text" for="filG3D_MarkMax">Max</label>
                                                <input id="filG3D_MarkMax">
                                            </div>
                                        </div>
                                        <div class="form-group row justify-content-between">
                                            <p>G2D_Mark</p>
                                            <div>
                                                <label class="input-group-text" for="filG2D_MarkMin">Min</label>
                                                <input id="filG2D_MarkMin">
                                                <label class="input-group-text" for="filG2D_MarkMax">Max</label>
                                                <input id="filG2D_MarkMax">

                                            </div>
                                        </div>
                                    </div>
            </template>
            
            <template v-slot:footer>
              <button id="btnCancelar" class="btn btn-dark" @click="showFiltrosModal = false">Cancelar</button>
              <button id="btnAceptar" class="btn btn-secondary"  @click="showFiltrosModal = false">Aceptar</button>
            </template>
          </Modal>


          <!-- Modal AGREGAR-->
          <Modal v-if="showAddModal">
            <template v-slot:title>Agregando una fila</template>
            <template v-slot:body>
              <div class="form-group row justify-content-between">
                <label for="inp-id">id</label><input id="inp-id" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-GPU_Name">GPU_Name</label
                ><input id="inp-GPU_Name" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-TEST_Date">TEST_Date</label
                ><input id="inp-TEST_Date" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-G3D_Mark">G3D_Mark</label
                ><input id="inp-G3D_Mark" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-G2D_Mark">G2D_Mark</label
                ><input id="inp-G2D_Mark" />
              </div>
            </template>
            <template v-slot:footer>
              <button id="btnCancelar" class="btn btn-dark" @click="showAddModal = false">Cancelar</button>
              <button id="btnAceptar" class="btn btn-secondary"  @click="showAddModal = true">Aceptar</button>
            </template>
          </Modal>
          <!-- MODAL EDITAR -->
          <Modal v-if="showEditModal">
            <template v-slot:title>Modificando Fila</template>
            <template v-slot:body>
              <div class="form-group row justify-content-between">
                <label for="inp-id">id</label><input id="inp-id" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-GPU_Name">GPU_Name</label
                ><input id="inp-GPU_Name" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-TEST_Date">TEST_Date</label
                ><input id="inp-TEST_Date" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-G3D_Mark">G3D_Mark</label
                ><input id="inp-G3D_Mark" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-G2D_Mark">G2D_Mark</label
                ><input id="inp-G2D_Mark" />
              </div>
            </template>
            <template v-slot:footer>
              <button id="btnCancelar" class="btn btn-dark" @click="showEditModal = false">Cancelar</button>
              <button id="btnAceptar" class="btn btn-secondary"  @click="showEditModal = false">Aceptar</button>
            </template>
          </Modal>
          <!-- MODAL ELIMINAR -->
          <Modal v-if="showDeleteModal">
            <template v-slot:title>Eliminando fila, esta seguro?</template>
            <template v-slot:body>
              <div class="form-group row justify-content-between">
                <label for="inp-id">id</label><input id="inp-id" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-GPU_Name">GPU_Name</label
                ><input id="inp-GPU_Name" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-TEST_Date">TEST_Date</label
                ><input id="inp-TEST_Date" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-G3D_Mark">G3D_Mark</label
                ><input id="inp-G3D_Mark" />
              </div>
              <div class="form-group row justify-content-between">
                <label for="inp-G2D_Mark">G2D_Mark</label
                ><input id="inp-G2D_Mark" />
              </div>
            </template>
            <template v-slot:footer>
              <button id="btnCancelar" class="btn btn-dark" @click="showDeleteModal = false">Cancelar</button>
              <button id="btnAceptar" class="btn btn-secondary"  @click="showDeleteModal = false">Aceptar</button>
            </template>
          </Modal>
  </div>
</template>
<script>

import { mapGetters } from "vuex";
import Row from '../components/Row';
import Modal from "../components/Modal";
export default {
    components: {
    Modal,
    Row
  },
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showFiltrosModal: false,
      selectRow:{},
    }
  },

  computed: mapGetters(['allGpus']),
  methods: {
      openDeleteRow(id){
        console.log(this.showDeleteModal);
        this.showDeleteModal=true;
        console.log(this.showDeleteModal);
        this.selectRow= {};
        console.log(id);
        },
      openEditRow(id){
        console.log(id);
        },
  },

 
}
</script>
<style >
</style>