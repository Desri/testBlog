<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-header mb-2">
      <div class="container">
        <!-- <a class="navbar-brand" href="/">Logo</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click="goTo('Gaya Hidup', 'gaya-hidup')">Gaya Hidup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click="goTo('Diet', 'diet')">Diet</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click="goTo('Seksualitas', 'seksualitas')">Seksualitas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click="goTo('Pengasuhan', 'pengasuhan')">Pengasuhan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click="goTo('Sehat A-Z', 'sehat-a-z')">Sehat A-Z</a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="javascript:void(0)" @click="openModalLogin" class="nav-link">Login</a></li>
          </ul>

        </div>
      </div>
    </nav>
    <modal name="loginForm">
      <client-only>
        <div id="modal-login">
          <login-form></login-form>
        </div>
      </client-only>
    </modal>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import LoginForm from '~/components/modal/LoginForm';
  export default {
    components: {
      LoginForm
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters({
        
      }),
    },
    async mounted() {
      
    },
    methods: {
      goTo(title, url) {
        localStorage.setItem("category", title);
        this.$router.push(`/category/${url}`)
      },
    }
  }
</script>