<template >
    <div class="col-12 col-xl-11 justify-content-center">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                               <div class="carousel-inner justify-content-center"><!-- contenedor de imagenes -->
                                    <!-- vfor de imagenes-->
                                  <div v-for="(url,index) in imagenes" :key="url" class="carousel-item" :class="index == 0 ? 'active' : ''" >
                                       <img :src="url" class="d-block w-100" alt="...">
                                  </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                                       
</div>



</template>

<script>
export default {
  props: {
    imagenes: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>
<styles>
  #carouselExampleIndicators {text-align:center;}
</style>