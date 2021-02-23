<template>
  <header class="sticky-top">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="col-4">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/noticia"
                >Noticias</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/benchs"
                >Benchs</router-link
              >
            </li>
            <li  v-if="!isLogged" class="nav-item">
              <router-link  class="nav-link active" to="/auth">Login</router-link>
            </li>
            <li  v-if="isLogged" class="nav-item">
              <a  class="nav-link active" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <router-link class="navbar-brand" to="/">
          <img
            src="../assets/logo/linear-withe.png"
            class="d-none d-xl-block w-50"
            alt="logo-lineal-blanco"
          />
          <img
            src="../assets/logo/min-white.png"
            class="d-xl-none w-50"
            alt="logo-min-blanco"
          />
        </router-link>
      </div>
    </nav>
    <!-- FIN NAVBAR -->
  </header>
</template>
<script>
export default {
  computed: {
        isLogged() {
            return this.$store.getters.isLogged;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    }
}
</script>
 
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
/* TAREA: evitar colision con bootstrap sin usar el important */
nav a.router-link-exact-active {
  color: #42b983 !important;
}

header .bg-dark {
    background-color: black !important;
    color: white !important;
}

header .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
}
</style>