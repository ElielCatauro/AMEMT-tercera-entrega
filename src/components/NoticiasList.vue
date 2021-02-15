<template>
  <div class="d-flex flex-wrap justify-content-around">
    <CardNoticia
      v-for="noticia in noticiasArr"
      :key="noticia.uuid"
      :noticia="noticia"
    >
    </CardNoticia>
  </div>
</template>
<script>
import CardNoticia from "./CardNoticia";
export default {
  components: {
    CardNoticia,
  },
  data() {
    return {
      noticiasArr: [],
    
    };
  },
  mounted() {
    this.getNoticiasArr();
  },
  methods: {
    getNoticiasArr() {
      /*   fetch('https://newsapi.org/v2/everything?q=gaming&language=es&apiKey=8e4f57f3b3e646e8813acd0437f41ff1')
                .then(resp => resp.json())
                .then(data => {
                    this.noticiasArr = data.articles;                             
                }) */

   /*    fetch(
        "https://api.thenewsapi.com/v1/news/all?api_token=TwGoUbP9PrtZLKxqdTniPOCZGHPec5mxNSIMxLkI&language=es&search=gamer"
      )
        .then((resp) => resp.json())
        .then((data) => {
          this.noticiasArr = data.data;
        }); */
      fetch(
        "https://5fcbef5e51f70e00161f21d1.mockapi.io/noticias"
      )
        .then((resp) => resp.json())
        .then((data) => {
          this.noticiasArr = data;
        console.log(data);
        });
    },
  },
};
</script>
<style lang="">
</style>