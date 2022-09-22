<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="z-0"
  >
    <swiper-slide
      ><img
        src="https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1663870484/slider_pkgvjc.png"
        alt="image-slider"
        class="w-full h-full"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1663870484/slider_pkgvjc.png"
        alt="image-slider"
        class="w-full h-full"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
