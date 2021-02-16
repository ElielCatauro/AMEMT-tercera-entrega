<template>
  <div id="app" >
    <Header></Header>
    <div class="bg-primary">
      <router-view  />
      </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.bg-dark {
  background-color: black !important;
  color: white !important;
}

.bg-dark-2 {
  background-color: rgba(70, 70, 70) !important;
  color: whitesmoke !important;
}

#app .bg-primary {
  background-color: rgb(48, 48, 48) !important;
  color: rgb(242, 242, 242) !important;
}

.bg-secundary {
  background-color: rgb(100, 100, 100) !important;
  color: black !important;
}

.carousel-item img {
  border-radius: 10px;
}

.card {
  margin: 5px;
  padding: 2px;
  width: 18rem;
}

.card img {
  border-radius: 5px;
}

.card a {
  color: #001c3a;
}

.card .btn .price {
  color: greenyellow;
  float: left;
  margin-right: 5px;
}

.card .btn .addCart {
  float: right;
  margin-left: 2px;
}

.card a:hover {
  color: #003b7b;
}

.table-dark {
  margin: 1rem !important;
  padding: 0.5rem !important;
  border-radius: 0.2rem !important;
}

.show {
  display: block;
  padding-right: 17px;
}

.hide {
  display: none;
}

.cartBtn {
  display: inline-block;
  width: 7rem;
  height: 3rem;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 0 5px 20px;
}
</style>
