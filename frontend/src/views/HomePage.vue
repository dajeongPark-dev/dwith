<template>
    <div class="container home">
        <!-- 헤더 -->
        <div class="home-header">
            <!-- 로고, 알림 아이콘 -->
            <div class="row">
                <div class="col-8 home-header-logo"><p>D,with</p></div>
                <div class="col-2 text-right"><img src="../../public/img/star.png" /></div>
                <div class="col-2 text-center"><img src="../../public/img/star.png" /></div>
            </div>
            <!-- 인사글, 게시글 작성 링크 -->
            <div class="row" style="margin-top: 40px; margin-bottom: 25px">
                <div class="col-7 home-header-hello">안녕하세요, {{ userInfo.userNickname }}님</div>
                <div class="col-5 home-header-link">고민 작성하러 가기</div>
            </div>
            <!-- 관심 분야 태그(리스트) -->
            <div class="row">
                <ul class="home-header-tag" style="padding: 0px 15px">
                    <li class="major">디자인</li>
                    <li class="sub">UI/UX 디자인</li>
                    <li class="sub">브랜딩 디자인</li>
                    <li class="sub">브랜딩 디자인</li>
                    <!--더하기 글씨 말고 더하기 이미지로 대체해보기-->
                </ul>
            </div>
        </div>

        <!-- 섹션1 -->
        <div class="home-newPost">
            <!-- 검색 링크 -->
            <div class="home-search" @click="searchPost"><span>Icon</span> 검색 창 버튼</div>
            <!-- 인사글 -->
            <div class="home-newPost-hello mb-5">
                최근 고민과 비슷한<br />
                다양한 고민들을 살펴보세요!
            </div>
            <!-- 최근 게시판 슬라이드 -->
            <NewPost></NewPost>
        </div>

        <!-- 섹션2 -->
        <div class="home-hotPost">
            <div class="home-newPost-hello mb-5">인기 게시판</div>
            <!-- 인기 게시판 슬라이드 -->
            <HotPost class="mb-5" title="일반 게시판"></HotPost>
            <!-- 인기 게시판 슬라이드 -->
            <HotPost title="선택 게시판"></HotPost>
        </div>
    </div>
</template>

<script>
import NewPost from "@/components/home_components/NewPost.vue";
import HotPost from "@/components/home_components/HotPost.vue";
export default {
    components: {
        NewPost,
        HotPost,
    },
    data() {
        return {
            userInfo: {
                userIdx: -1,
                userNickname: "닉네임",
            },
        };
    },
    methods: {
        searchPost() {
            console.log("고민 검색");
        },
    },
    created() {
        console.log("HomePage created");

        // 유저 idx를 가지지 않은 상태(로그인 안된 상태)라면 로그인 페이지로 이동
        this.$store.dispatch("checkLogin");
    },
    mounted() {
        console.log("HomePage mounted");
        this.userInfo.userIdx = this.$store.state.auth.userInfo.userIdx;
        this.userInfo.userNickname = this.$store.state.auth.userInfo.userNickname;
    },
};
</script>
