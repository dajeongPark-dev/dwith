<template>
  <div>
    <swiper
      class="swiper"
      ref="mySwiper"
      :options="swiperOptions"
      @slideChange="slideChangeTransitionStart"
    >
      <swiper-slide><choicePost></choicePost></swiper-slide>
      <swiper-slide><choicePost></choicePost></swiper-slide>
      <swiper-slide><choicePost></choicePost></swiper-slide>
      <swiper-slide><choicePost></choicePost></swiper-slide>
      <swiper-slide><choicePost></choicePost></swiper-slide>

      <!-- pagination -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->

      <!-- navigation -->
      <!-- <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
      <div class="swiper-button-next swiper-btn-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import choicePost from "@/components/home/choicePost.vue";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "choicePostSwiper",
  components: {
    Swiper,
    SwiperSlide,
    choicePost,
  },
  methods: {
    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
  },
  data() {
    return {
      //스와이퍼 옵션
      swiperOptions: {
        slidesPerView: 1, //한번에 몇개의 슬라이드를 보여줄지
        spaceBetween: 50, //슬라이드 간 간격
        loop: false, //루프 돌건지
        effect: "coverflow", //슬리이드 효과
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 130,
          modifier: 5,
          slideShadows: false,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },

  //참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  //el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
  mounted() {
    //console.log('Current Swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  },
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
