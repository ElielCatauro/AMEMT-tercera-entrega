<template >
  <div>
    <div class="bg-primary">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="row justify-content-center">
            <div class="">
              <img src="../assets/logo/min-white2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal>
      <template v-slot:title>{{ submitButtonText }}</template>

      <template v-slot:body>
      
         <form @submit.prevent="submitForm">
          <div class="form-group row justify-content-between">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="email" />
          </div>
          <div class="form-group row justify-content-between">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
          </div>

          <div class="row justify-content-between">
            <button class="btn btn-secondary bg-dark" type="submit">
              {{ submitButtonText }}
            </button>
            <button class="btn btn-dark bg-dark" @click="toggleLogin">
              {{ toggleModeButtonText }}
            </button>
            <button class="btn btn-secondary" @click="goHome">
              go Home
            </button> 
          </div>
        </form> 
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "../components/Modal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      email: "",
      password: "",
      isLogin: true,
    };
  },
  computed: {
    submitButtonText() {
      if (this.isLogin) {
        return "Log in";
      } else {
        return "Sign up";
      }
    },
    toggleModeButtonText() {
      if (this.isLogin) {
        return "Sign up instead";
      } else {
        return "Log in instead";
      }
    },
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
    async submitForm() {
      if (this.isLogin) {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      } else {
        await this.$store.dispatch("signUp", {
          email: this.email,
          password: this.password,
        });
      }
     
    },
    toggleLogin() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>
<style >
</style>