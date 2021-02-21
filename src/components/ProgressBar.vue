
<template >
  <div>
    <div v-cargar:padre="segundos" class="progress">
      <div
        v-cargar="segundos"
        id="processPerc"
        class="progress-bar progress-bar-striped bg-dark "
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{ segundos | toHMS | toUpperCase }}</div>
    </div>
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
  filters: {
    toHMS(value) {
        if (value < 60)
            return `${value} segundos`
        else   
            if (value > 3600) 
                {return `${(value/3600).toFixed(2)} horas`}
            else 
            return  `${(value/60).toFixed(2)} minutos`
    },
    toUpperCase(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
  },
  directives: {
    cargar: {
      bind(elem, binding) {
        let timecarga = 0;
        timecarga = 1000 * parseInt(binding.value);
        if (binding.arg == "padre") {
          setTimeout(() => {
            elem.style.display = "none";
          }, timecarga);
        } else {
          let count = 0;

          elem.style.width = "0%";
          let cargar = () => {
            count += 5;
            elem.style.width = `${count}%`;

            if (count == 100) {
              clearInterval(contar);
            }
          };
          let contar = setInterval(cargar, timecarga / 20);
        }
      },
    },
  },
};
</script>
<style >
#processPerc {
    text-align:center;}
</style>