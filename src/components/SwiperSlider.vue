<template>
  <div>
    <swiper
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <div style="position: relative">
          <img :src="image.url" class="img-fluid carousel-img" />
          <span class="text-carousel text-white h2">
            {{ image.guide }}
          </span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// swiper css
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: require("../assets/img/first.jpg"),
          guide: "愜意的午後時光，陪伴您遊歷茫茫茶海",
        },
        {
          id: 2,
          url: require("../assets/img/second.jpg"),
          guide: "在不同季節，為您挑選最適合的茶",
        },
        {
          id: 3,
          url: require("../assets/img/third.jpg"),
          guide: "餐與茶的互相襯托，提升味覺的體驗",
        },
      ],
      guideLine: [
        { id: 1, messeage: "123" },
        { id: 2, messeage: "123" },
        { id: 3, messeage: "123" },
      ],
    };
  },
};
</script>
