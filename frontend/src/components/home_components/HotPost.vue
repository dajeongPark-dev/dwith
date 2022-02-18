<template>
    <div class="home-hotPost-card">
        <div class="row mb-2">
            <div class="hotPost-hello col-6">{{ title }}</div>
            <div class="hotPost-detail col-6">전체보기</div>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions" @slideChange="slideChangeTransitionStart">
            <swiper-slide v-for="post in posts" :key="post.idx">
                <div class="hotPost">
                    <h4 style="font-weight: 800; margin-bottom: 15px">{{ post.title }}</h4>
                    <div>
                        <div class="hotPostContent" style="margin-bottom: 5px">{{ post.content }}</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import "swiper/css/swiper.css";
export default {
    props: {
        title: {
            type: String,
            require: true,
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
            posts: [
                {
                    idx: 1,
                    title: "컴공 복전",
                    content: "UI UX 디자이너를 꿈꾸는 학생입니다...",
                },
                { idx: 2, title: "제목2", content: "글2" },
                { idx: 3, title: "제목3", content: "글3" },
                { idx: 4, title: "제목4", content: "글4" },
            ],
        };
    },
    //참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {
        slideChangeTransitionStart() {
            console.log(this.swiper.activeIndex); //현재 index값 얻기
        },
    },
    created() {
        console.log("HotPost created");
    },
    mounted() {
        console.log("HotPost mounted");
    },
};
</script>
