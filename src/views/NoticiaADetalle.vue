<template>
  <div class="bg-primary">
    <div class="row justify-content-center">
      <!-- noticia -->
      <div class="col-12 col-xl-7 justify-content-center">
        <div class="col-11 col-xl-10  justify-content-center">
          <!-- titulo noticia -->
          <h1 class="d-none d-xl-block">{{ noticia.title }}</h1>
          <h4 class="d-xl-none">{{ noticia.title }}</h4>

          <!--principio carrusel  -->
          <Carrusel :imagenes="noticia.image_url">
          </Carrusel>
        <!-- final carrusel -->

          <p  v-for="noticia in noticia.description" :key="noticia" >{{ noticia }}</p>
        </div>
        <!-- Fuente del articulo -->
        <div class="col-12">
          <h6>
            Fuente :<a :href="noticia.url">{{ noticia.source }}</a>
          </h6>
        </div>
      </div>
      <!-- fin de noticia -->

      <!-- otras noticias  -->
      <div class="col-12 col-xl-3 justify-content-center">
        <!-- otras noticias del mismo tema -->
        <div class="row justify-content-center">
          <div class="col-10 justify-content-center">
            <h4 class="d-none d-xl-block">Otras noticias</h4>
            <h6 class="d-xl-none">Otras noticias</h6>
          </div>
        </div>

        <div class="row justify-content-center">
          <!-- contenedor de tarjetas -->
          <NoticiasList></NoticiasList>
        </div>
        <!-- fin contentedor de tarjetas -->
      </div>

      <!-- fin de otras noticias  -->
    </div>
  </div>
  <!-- FIN CUERPO -->
</template>

<script>
import NoticiasList from "../components/NoticiasList";
import Carrusel from "../components/Carrusel";
export default {
  components: {
    NoticiasList,
    Carrusel,
  },
  data() {
    return {
      noticia: {},
    };
  },
  mounted() {
    const noticiaId = this.$route.params.id;
    this.getNoticia(noticiaId);
  },
  methods: {
    async getNoticia(id) {
      this.noticia = await fetch(
       /*  `https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=TwGoUbP9PrtZLKxqdTniPOCZGHPec5mxNSIMxLkI` */
        `https://5fcbef5e51f70e00161f21d1.mockapi.io/noticias/${id}`
      ).then((resp) => resp.json());
      console.log(this.noticia);
      console.log(this.noticia.description[0]);
    },
  },
  watch: {
    $route(to) {
      const id = to.params.id;
      this.getNoticia(id);
    },
  },
};
</script>
<style>
ul li {
  list-style-type: none;
}
</style>