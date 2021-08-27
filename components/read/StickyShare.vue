<template>
  <div>
    <div class="share">
      <p>Share: </p>
      <ul>
        <li>
          <a href="#" target="_blank">
            <div class="sosmed-share fb">
              <i class="fab fa-facebook"></i>
            </div>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <div class="sosmed-share tw">
              <i class="fab fa-twitter"></i>
            </div>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <div class="sosmed-share wa">
              <i class="fab fa-whatsapp"></i>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="copyLink()">
            <div class="sosmed-share copy">
              <i class="far fa-clone"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    computed: {
    
    },
    async mounted() {
      
    },
    methods: {
      copyLink(){

      }
    }
  }
</script>