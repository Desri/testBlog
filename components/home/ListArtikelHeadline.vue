<template>
  <div>
    <div id="carouselMaster" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(data, index) in listArtikelHeadline" :key="data.id" class="carousel-item" :class="{ 'active': index === 0 }">
          <div class="box-img">
            <a rel="preload" :href="`/read/${data.slug}`">
              <img class="d-block w-100" :src="data.img_url" :alt="data.title">
              <div class="box-caption">
                <h1>{{data.title}}</h1>
                <div class="caption-info">
                  <div class="caption-date">
                    <client-only>
                      <i class="far fa-calendar-alt"></i> {{data.publish_date}}
                    </client-only>
                  </div>
                  <div class="caption-seperator">|</div>
                  <div class="caption-comment">
                    {{data.category}}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselMaster" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselMaster" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'listArtikelHeadline',
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