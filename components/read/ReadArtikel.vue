<template>
  <div>
    <div class="artikel-detail">
      <h1 class="mt-4 mb-3">
        {{data.title}}
      </h1>
      <div class="headingReadArtikel">
        <div class="box-author">
          <div class="media">
            <div class="media-aside align-self-center">
              <img src="https://secure.gravatar.com/avatar/75720a2d644fb1a6719a49b559412be0?s=48&d=mm&r=g" alt="Avatar" />
            </div>
            <div class="media-body">
              <p class="lead">Author : <span>{{data.autor}}</span></p>
              <span class="text-muted">{{data.publish_date}}</span>
            </div>  
          </div>
        </div>
      </div>
      <hr>
      <div class="content-detail">
        <div class="sticky-share">
          <sticky-share></sticky-share>
        </div>
        <div class="master-image mb-3">
          <img :src="data.img_url" :alt="data.title" />
          <center><span>Ini adalah caption image</span></center>
        </div>
        <p v-html="data.content"></p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import StickyShare from '~/components/read/StickyShare';
  export default {
    components: {
      StickyShare
    },
    props: [
      'data',
    ],
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
  }
</script>
