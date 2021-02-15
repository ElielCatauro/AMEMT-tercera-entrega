<template >
    <div class="col-12 col-xl-11 justify-content-center">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                               <div class="carousel-inner justify-content-center">
                                <div class="carousel-item  active justify-content-center "  >
                                    <img src="../assets/logo/min-white.png" class="d-block justify-content-center" alt="..." style="width: 25rem">
                                </div>
                                <div v-for="url in imagenes" class="carousel-item " :key="url" ><!-- vfor -->
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

</style>