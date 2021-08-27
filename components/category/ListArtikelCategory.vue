<template>
  <div>
    <div class="listArtikel mt-3">
      <div class="boxLabel">
        <label>Terbaru di {{this.title}}</label>
      </div>
      <div class="boxArtikel" v-for="data in listArtikelCategory">
        <div class="descArtikel float-left">
          <a :href="`/read/${data.slug}`">
            <h3 class="mt-0">{{data.title}}</h3>
          </a>
          <p class="mb-0">{{data.short_desc}}</p>
        </div>
        <div class="thumbArtkel float-right">
          <div class="boxCategory">
            <span>{{title}}</span>
          </div>
          <img :src="data.img_url" :alt="data.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'listArtikelCategory',
    ],
    data () {
      return {
        title: ''
      }
    },
    computed: {
    
    },
    async mounted() {
      this.title = localStorage.getItem("category");
    },
    methods: {

    }
  }
</script>