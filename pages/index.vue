<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="boxConsultant">
          <div class="alert" role="alert">
            <span>
              BINGUNG? TANYA DOKTER!
              <a href="#">MULAI KONSULTASI</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <Headline :listArtikelHeadline="fetchedArtikelHeadline"/>
        <ListArtikel :listArtikel="fetchedListArtikel"/>
      </div>
      <div class="col-lg-4">
        <Sidebar :artikelPopular="fetchedListArtikelPopular"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Headline from '~/components/home/ListArtikelHeadline';
  import ListArtikel from '~/components/home/ListArtikel';
  export default {
    components: {
      Headline,
      ListArtikel
    },
    data () {
      return {
        
      }
    },
    computed: {
      ...mapGetters({
        fetchedListArtikel: 'artikel/listArtikel',
        fetchedListArtikelPopular: 'artikel/listArtikelPopular',
        fetchedArtikelHeadline: 'artikel/listArtikelHeadline'
      }),
    },
    async mounted() {
      await this.$store.dispatch('artikel/GET_ARTIKEL');
      await this.$store.dispatch('artikel/GET_ARTIKEL_POPULAR');
      await this.$store.dispatch('artikel/GET_ARTIKEL_HEADLINE');
    },
  }
</script>
