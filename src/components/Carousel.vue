<template>
    <q-carousel class="shadow-2 rounded-borders"
      arrows
      animated
      v-model="slide"
      height="400px"
      infinite
    >
      <q-carousel-slide name="first" img-src="../assets/carouselsite1.jpg">
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-5ebcd51d-c856-4036-9239-41c3a805e7c7.jpg">
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-5d684f3a-4ada-4075-9e37-7f5787ca013d.jpg">
      </q-carousel-slide>
    </q-carousel>
</template>
<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>
