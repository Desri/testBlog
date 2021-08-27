<template>
  <div class="sidebar">
    <div class="mb-4 sticky-top">
      <div class="heading">
          <label>Artikel Popular</label>
          <a href="#"><p>Lihat lainnya <i class="fas fa-chevron-right"></i></p></a>
      </div>
      <div class="listArtikel">
          <div class="boxArtikel" v-for="data in artikelPopular">
            <div class="descArtikel float-left">
              <a :href="`/read/${data.slug}`">
                <h3 class="mt-0">{{data.title}}</h3>
              </a>
              <p class="mb-0">{{data.short_desc}}</p>
            </div>
            <div class="thumbArtkel float-right">
              <img :src="data.img_url" :alt="data.title">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'artikelPopular',
    ],
    data () {
      return {
      
      }
    },
    computed: {
    
    },
    async mounted() {
      
    },
    methods: {

    }
  }
</script>

<style>

</style>
