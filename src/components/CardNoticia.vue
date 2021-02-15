<template>
  <div class="card bg-secundary mb-3 mt-2" style="width: 18rem">
    
     <!-- <img :src="noticia.urlToImage" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ noticia.title }}</h5>
            <p class="card-text">{{ noticia.description }}</p>
            <a @click.prevent="goToDetails" class="btn btn-primary">Go to details</a>
        </div> -->

    <a @click.prevent="goToDetails" class="btn ">
      <img :src="noticia.image_url[0]" class="card-img-top" alt="" />
      <div class="card-body">
        <p class="card-text">{{ noticia.title }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    noticia: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: "Noticia", params: { id: this.noticia.uuid } });
    },
  },
};
</script>
<styles>
</style>