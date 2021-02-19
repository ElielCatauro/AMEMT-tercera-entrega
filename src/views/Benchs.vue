<template >
    <div class="bg-primary">
        <div class="row justify-content-center ">
            <div class="col-12 col-xl-7 justify-content-center ">
                <div class=" col-11 col-xl-10 justify-content-center">
                    <h1 class="col-12 col-xl-10">GPUS BENCHSMARKS </h1>
                    <h4 class="col-11 col-xl-10 d-none d-md-block">Aca podras ver una alta gama de placas graficas con
                        sus
                        respectivos
                        puntajes en PassMark</h4>

                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-secondary bg-dark " data-toggle="modal"
                        data-target="#exampleModal">
                        Filtros
                    </button>

                    <!-- Modal de filtros-->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog bg-primary">
                            <div class="modal-content bg-primary">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Filtros </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- filtros -->
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

                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-secondary" id="filBTN" data-dismiss="modal">Filtrar</button>
                                    <button class="btn btn-secondary" id="btnLimpia"
                                        data-dismiss="modal">Limpiar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-secondary" id="addBTN" data-toggle="modal"
                        data-target="#modalDelModAdd">Agregar</button>

                   <TablaBench></TablaBench>

                    <!-- Modal -->
                    <div class="modal fade " id="modalDelModAdd" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog bg-primary">
                            <div class="modal-content bg-primary">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="tituloModal"></h5><!-- aca va el titulo -->


                                </div>
                                <div class="modal-body">

                                    <div id="processBar" class="d-none">

                                        <div class="progress">
                                            <div id="processPerc" class="progress-bar progress-bar-striped bg-dark"
                                                role="progressbar" style="width: 0%" aria-valuenow="85"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                    <div id='inputs' class=" col-12 col-xl-12 justify-content-center ">
                                        <!-- aca van los inputs  -->


                                    </div>
                                    <div id="inputsBtns" class="modal-footer btn-group">
                                        <!--  aca los botones -->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div> <!-- fin de noticia -->

        </div>

    </div>
    <!-- FIN CUERPO -->

</template>
<script>

import TablaBench from '../components/TablaBench'
export default {
  name: 'Benchs',
  components: {
    TablaBench
  },  
  mounted() {
    this.$store.dispatch('fetchGpus')}
}
</script>
<style >
    
</style>