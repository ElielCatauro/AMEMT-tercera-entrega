<template >
    <tr>
          <td >{{id}}</td>
          <td >{{GPU_Name}}</td>
          <td >{{TEST_Date}}</td>
          <td >{{G3D_Mark}}</td>
          <td >{{G2D_Mark}}</td>
          <td class="btn-group">
            
            <button  class="btn btn-secondary" @click="editRow">Modificar</button>
            <button  class="btn btn-secondary"  @click="deleteRow">Eliminar</button>
          </td>
    </tr>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    GPU_Name: {
      type: String,
      required: true,
    },
    TEST_Date: {
      type: String,
      required: false,
    },
    G3D_Mark: {
      type: String,
      required: true,
    }, 
    G2D_Mark: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteRow(){
      this.$emit('delete-row',this.id);
       /* this.$store.commit('deleteRow', {contactId: this.contactId}) */
    },
    editRow(){
       this.$emit('edit-row',this.id);
      /*  this.$store.commit('editRow', {contactId: this.contactId}) */
    }
  },
};
</script>
<style >
    
</style>