<template>
  <div>
    <div class="row">
      <div class="col-lg-8">
        <ListArtikelCategory :listArtikelCategory="fetchedArtikelCategory"/>
      </div>
      <div class="col-lg-4">
        <Sidebar :artikelPopular="fetchedListArtikelPopular"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ListArtikelCategory from '~/components/category/ListArtikelCategory';
  export default {
    components: {
      ListArtikelCategory
    },
    head() {
      return {
        titleTemplate: 'Category | %s',
        meta: [
          { property : 'og:type', content: `Article` },
          { hid : 'og:title', name: 'og:title', content: 'Category' },
          { property : "og:description", content: 'Meta Description Category' },
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
        fetchedArtikelCategory: 'artikel/artikelCategory',
        fetchedListArtikelPopular: 'artikel/listArtikelPopular'
      }),
    },
    async mounted() {
      await this.$store.dispatch('artikel/GET_ARTIKEL_CATEGORY');
      await this.$store.dispatch('artikel/GET_ARTIKEL_POPULAR');
    },
  }
</script>
