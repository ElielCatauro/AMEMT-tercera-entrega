<template >
  <div class="bg-primary">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-7 justify-content-center">
        <div class="col-11 col-xl-10 justify-content-center">
          <h1 class="col-12 col-xl-10">GPUS BENCHSMARKS</h1>
          <h4 class="col-11 col-xl-10 d-none d-md-block">
            Aca podras ver una alta gama de placas graficas con sus respectivos
            puntajes en PassMark
          </h4>

          <TablaBench></TablaBench>
        </div>
      </div>
      <!-- fin de noticia -->
    </div>
  </div>
  <!-- FIN CUERPO -->
</template>
<script>
import TablaBench from "../components/TablaBench";

export default {
  name: "Benchs",
   components: {
    TablaBench,
  },
  mounted() {
    this.$store.dispatch("fetchGpus");
  },
};
</script>
<style >
</style>