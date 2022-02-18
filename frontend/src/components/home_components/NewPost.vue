<template>
    <div class="home-newPost-card">
        <swiper ref="mySwiper" :options="swiperOptions" @slideChange="slideChangeTransitionStart">
            <swiper-slide v-for="post in posts" :key="post.idx">
                <div class="newPost">
                    <h3 style="font-weight: 800; margin-bottom: 15px">{{ post.title }}</h3>
                    <div>
                        <div class="newPostContent" style="height: 80px; margin-bottom: 5px">{{ post.content }}</div>
                        <ul class="postTag" style="height: 25px; margin-bottom: 10px">
                            <li v-for="tag in post.hashTag" :key="tag">#{{ tag }}</li>
                        </ul>
                    </div>
                    <div class="row postAnswer">
                        <b-button variant="light" class="col-5">한다</b-button>
                        <div class="col-2"></div>
                        <b-button variant="light" class="col-5">안한다</b-button>
                    </div>
                </div>
                <h5 class="text-center pt-3">SKIP</h5>
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
import "swiper/css/swiper.css";
export default {
    data() {
        return {
            //스와이퍼 옵션
            swiperOptions: {
                slidesPerView: 1, //한번에 몇개의 슬라이드를 보여줄지
                spaceBetween: 50, //슬라이드 간 간격
                loop: false, //루프 돌건지
                effect: "coverflow", //슬리이드 효과(slide, fade, cube, coverflow, flip)
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
            posts: [
                // content의 길이 제한 60으로 두기
                {
                    idx: 1,
                    title: "컴공 복전",
                    content: "시각 디자인과 학생인데, 개발을 배우기 위해 컴공으로 복전을 신청하는게 좋을까요?시각 디자인과 학생인데, 개발을 배우기 위해",
                    hashTag: ["UIUX", "프론트엔드", "복수전공"],
                },
                { idx: 2, title: "제목2", content: "글2", hashTag: ["태그2-1", "태그2-2", "태그2-3"] },
                { idx: 3, title: "제목3", content: "글3", hashTag: ["태그3-1", "태그3-2", "태그3-3"] },
                { idx: 4, title: "제목4", content: "글4", hashTag: ["태그4-1", "태그4-2", "태그4-3"] },
            ],
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {
        slideChangeTransitionStart() {
            console.log(this.swiper.activeIndex + 1 + "번째 최근 게시물"); //현재 index값 얻기
        },
    },
    created() {
        console.log("NewPost created");
    },
    mounted() {
        console.log("NewPost mounted");
    },
};
</script>
