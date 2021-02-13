<template>
  <div class="bg-primary">
    <div class="row justify-content-center">
      <!-- noticia -->
      <div class="col-12 col-xl-7 justify-content-center">
        <div class="col-11 col-xl-10 justify-content-center">
          <!-- titulo noticia -->
          <h1 class="d-none d-xl-block">{{ noticia.title }}</h1>
          <h3 class="d-none d-xl-block">{{ noticia.snippet }}</h3>
          <h4 class="d-xl-none">{{ noticia.title }}</h4>

          <!--principio carrusel  -->
          <div class="col-12 col-xl-11 justify-content-center">
            <img :src="noticia.image_url" class="d-block w-100" alt="" />
          </div>
         <!--  <div class="col-12 col-xl-11 justify-content-center">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class=""
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                  class=""
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                  class=""
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                  class=""
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img
                    src="assets/imagenes/imagen0.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/imagenes/imagen1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/imagenes/imagen2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item active">
                  <img
                    src="assets/imagenes/imagen3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/imagenes/imagen4.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div> -->
          <!-- final carrusel -->

          <p>{{ noticia.description }}</p>
        </div>
        <!-- Fuente del articulo -->
        <div class="col">
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
export default {
  components: {
    NoticiasList,
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
        `https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=TwGoUbP9PrtZLKxqdTniPOCZGHPec5mxNSIMxLkI`
      ).then((resp) => resp.json());
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