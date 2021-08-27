<template>
  <div>
    <div class="modal-content">
      <div class="modal-body">
        <form>
          <div class="form-group">
            <input
              v-model="form.username"
              type="text"
              placeholder="Username"
              required
            >
          </div>
          <div class="form-group">
            <input
              v-model="form.password"
              :type="passwordVisible ? 'text' : 'password'"
              placeholder="Password"
              required
            >
            <div @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
              <span v-if="passwordVisible"><i class="fa fa-eye" aria-hidden="true"></i></span>
              <span v-else><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
            </div>
          </div>
          <div class="boxSubmit">
            <button block variant="primary" @click="onSubmit">Submit</button>
          </div>
        </form>
        <div class="forgot">
          <p>
            <NuxtLink to="/#">Forgot Password?</NuxtLink>
          </p>
        </div>
        <div class="login-sosmed">
          <div class="box-sosmed fb-login">
            Facebook
          </div>
          <div class="box-sosmed google-login">
            Google
          </div>
        </div>
        <div class="text-register">
          <p>
            Don't have an account? <NuxtLink to="/#">Register</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        passwordVisible: false,
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        
      }),

      togglePasswordVisibility () {
        this.passwordVisible = !this.passwordVisible
      },
      
      async onSubmit() {
        
      },

    }
  }
</script>