<template>
  <footer class="text-center bg-dark-2 sticky-bot">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Sobre nosotros</h3>
          <p>
            Este proyecto nace atraves de el nuestra formacion en el mundo de la
            tecnologia, durante este proceso de aprendisaje quermos tambien
            darte informacion sobre el mundo geek y que vos tambien puedas
            formar parte de esta linda comunidad.
          </p>
        </div>
        <div class="col-md-4">
          <h3>Redes</h3>
          <ul class="list-inline">
            <li class="list-inline-item">
              <router-link target="_blank" class="nav-link" to="/comingSoon">
                <img src="../assets/icons/facebook.svg" alt="Facebook" />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link target="_blank" class="nav-link" to="/comingSoon">
                <img src="../assets/icons/twitter.svg" alt="Twitter" />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link target="_blank" class="nav-link" to="/comingSoon">
                <img src="../assets/icons/instagram.svg" alt="Instagram" />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link target="_blank" class="nav-link" to="/comingSoon">
                <img src="../assets/icons/slack.svg" alt="Slack" />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link target="_blank" class="nav-link" to="/comingSoon">
                <img src="../assets/icons/mail.svg" alt="Email" />
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <p class="float-right">
            <a href="#"
              ><img
                src="../assets/icons/arrow-up-circle.svg"
                alt="volver-al-inicio"
              />Voler al Inicio</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
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

footer .bg-dark {
  background-color: black !important;
  color: white !important;
}
</style>