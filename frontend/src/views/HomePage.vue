<template>
    <div>
        <!-- 헤더 -->
        <div>
            <!-- 로고, 알림 아이콘 -->
            <div>
                <div>로고</div>
                <div>알림</div>
            </div>
            <!-- 인사글, 게시글 작성 링크 -->
            <div>
                <div>{{ userInfo.userNickname }}</div>
                <div>게시글 작성 링크</div>
            </div>
            <!-- 관심 분야 태그(리스트) -->
            <div>관심 분야 태그 리스트</div>
            <!-- 검색 링크 -->
            <div>검색 창 버튼</div>
        </div>

        <!-- 섹션1 -->
        <div>
            <!-- 인사글 -->
            <div>인사글</div>
            <!-- 최근 게시판 슬라이드 -->
            <div>게시판 슬라이드</div>
        </div>

        <!-- 섹션2 -->
        <div>
            <!-- 인사글 -->
            <div>인사글</div>
            <!-- 인기 게시판 슬라이드 -->
            <div>게시판 슬라이드</div>
            <!-- 인기 게시판 슬라이드 -->
            <div>게시판 슬라이드</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                userIdx: null,
                userNickname: "",
            },
        };
    },
    methods: {},
    created() {
        console.log("HomePage created");
    },
    mounted() {
        console.log("HomePage mounted");
        // 유저 idx를 가지지 않은 상태(로그인 안된 상태)라면 로그인 페이지로 이동
        if (this.$store.state.user.userIdx === null) {
            console.log("로그인 필요 -> 로그인 페이지로 이동");
            alert("로그인 필요");
            location.href = "./login";
        }
    },
};
</script>
<style scoped>
div {
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
}
</style>
