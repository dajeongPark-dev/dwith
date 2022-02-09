<template>
    <div>
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions" @slideChange="slideChangeTransitionStart">
            <swiper-slide v-for="post in posts" :key="post.index">
                <hotPost :title="post.title" :content="post.content"></hotPost>
            </swiper-slide>

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
import hotPost from "@/components/home/hotPost.vue";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
    name: "hotPostSwiper",
    props: {
        posts: {
            type: Array,
            require: true,
        },
    },
    components: {
        Swiper,
        SwiperSlide,
        hotPost,
    },
    methods: {
        slideChangeTransitionStart() {
            console.log(this.swiper.activeIndex); //현재 index값 얻기
        },
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1.4,
                spaceBetween: 30, //슬라이드 간 간격
                loop: false,
                freeMode: true,
                effect: "slide", //slide, fade, cube, coverflow, flip
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
