
<template >
  
    <div  v-cargar:padre="segundos" class="progress">
      <div
        v-cargar="segundos"
        id="processPerc"
        class="progress-bar progress-bar-striped bg-dark"
        role="progressbar"
        style="width: 30%"
        aria-valuenow="85"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
 
</template>
<script>
export default {
  props: {
    segundos: {
      type: Number,
      required: true,
    },
  },
  directives: {
    cargar: {
      bind(elem, binding) {
             let timecarga = 0;
         timecarga = 1000 * parseInt(binding.value);
         if (binding.arg=="padre") {setTimeout(()=>{elem.style.display="none";},timecarga)
             
         } else{
        let count = 0;
     
        elem.style.width = "0%";
        let cargar = () => {
          count += 5;
          elem.style.width = `${count}%`;
          if (count == 100) {
            clearInterval(contar);
          }
        };
        let contar = setInterval(cargar, timecarga / 20);}
      },
    },
  },
};
</script>
<style >
</style>