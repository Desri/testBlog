<template>
  <section id="detailPage">
    <div class="container-detail">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <client-only>
            <read-artikel :data="fetchedDetailArtikel"></read-artikel>
          </client-only>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
          <Sidebar :artikelPopular="fetchedListArtikelPopular"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ReadArtikel from '~/components/read/ReadArtikel';
  export default {
    components: {
      ReadArtikel
    },
    head() {
      return {
        titleTemplate: 'Detail | %s',
        meta: [
          { property : 'og:type', content: `Article` },
          { hid : 'og:title', name: 'og:title', content: 'Detail' },
          { property : "og:description", content: 'Meta Description Detail' },
          { property : "og:image", content: '' },
          { property : "og:image:width", content : "300" },
          { property : "og:image:height", content : "300" },
        ]
      }
    },
    data () {
      return {
        
      }
    },
    computed: {
      ...mapGetters({
        fetchedDetailArtikel: 'artikel/detailArtikel',
        fetchedListArtikelPopular: 'artikel/listArtikelPopular',
      }),
    },
    async mounted() {
      await this.$store.dispatch('artikel/GET_DETAIL_ARTIKEL');
      await this.$store.dispatch('artikel/GET_ARTIKEL_POPULAR');
    },
  }
</script>
