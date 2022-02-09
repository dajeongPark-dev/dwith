<template>
    <div id="bottom_nav" class="bottom_nav-show">
        <div class="bottom_nav-box">
            <router-link to="/"><div @click="gotoPage(0)" :class="[isActive === 0 ? 'bottom_nav-box-selected' : 'bottom_nav-box-default']">홈</div></router-link>
        </div>
        <div class="bottom_nav-box">
            <router-link to="/bulletinBoard"><div @click="gotoPage(1)" :class="[isActive === 1 ? 'bottom_nav-box-selected' : 'bottom_nav-box-default']">게시판</div></router-link>
        </div>
        <div class="bottom_nav-box">
            <router-link to="/login"><div @click="gotoPage(2)" :class="[isActive === 2 ? 'bottom_nav-box-selected' : 'bottom_nav-box-default']">채팅</div></router-link>
        </div>
        <div class="bottom_nav-box">
            <router-link to="/register"><div @click="gotoPage(3)" :class="[isActive === 3 ? 'bottom_nav-box-selected' : 'bottom_nav-box-default']">정보</div></router-link>
        </div>
        <div class="bottom_nav-box">
            <router-link to="/myPage"><div @click="gotoPage(4)" :class="[isActive === 4 ? 'bottom_nav-box-selected' : 'bottom_nav-box-default']">마이페이지</div></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //현재 페이지 번호
            isActive: 0,
        };
    },
    methods: {
        //페이지(라우터)클릭시 페이지 번호 변경
        gotoPage(num) {
            this.isActive = num;
        },
    },
    mounted() {
        console.log("NavBar mounted");

        // 현재 링크에 맞게 네비게이션 바 active 상태 변경
        var path = document.location.href.split("/");
        if (path[3].startsWith("bulletinBoard")) this.isActive = 1;
        else if (path[3].startsWith("login")) this.isActive = 2;
        else if (path[3].startsWith("register")) this.isActive = 3;
        else this.isActive = 0;
    },
};
</script>
