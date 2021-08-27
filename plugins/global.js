import Vue from 'vue'

Vue.mixin({

  data () {
    return {
      
    }
  },
  async mounted() {
    
  },

  methods: {
    openModalLogin(){
      this.$modal.show('loginForm')
    },
  }
})
