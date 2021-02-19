<template >
  <div>
    <table id="tabla" class="table table-dark bg-primary">
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
        >
         </Row>
      </tbody>
    
    </table>
  </div>
</template>
<script>

import Row from '../components/Row';
import { mapGetters } from "vuex";
export default {
  components: {
    Row
  },
  computed: mapGetters(['allGpus']),

 
}
</script>
<style >
</style>