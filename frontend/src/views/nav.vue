<template>
    <div id="nav" class="nav-show">
        <div class="nav-box">
            <router-link to="/"><div @click="gotoPage(0)" :class="[isActive === 0 ? 'nav-box-selected' : 'nav-box-default']">홈</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/bulletinBoard"><div @click="gotoPage(1)" :class="[isActive === 1 ? 'nav-box-selected' : 'nav-box-default']">게시판</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/chatting"><div @click="gotoPage(2)" :class="[isActive === 2 ? 'nav-box-selected' : 'nav-box-default']">채팅</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/information"><div @click="gotoPage(3)" :class="[isActive === 3 ? 'nav-box-selected' : 'nav-box-default']">정보</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/myPage"><div @click="gotoPage(4)" :class="[isActive === 4 ? 'nav-box-selected' : 'nav-box-default']">마이페이지</div></router-link>
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
};
</script>

// 스타일 적용
<style scoped>
/* 네비게이션 바 */
#nav {
    transition: all 0.3s linear;
    width: 750px;
    height: 83px;
    position: fixed;
    border-top: 1px #d8d8d8 solid;
    margin: 0 auto;
    z-index: 50;
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0px 0px 9px #00000029;
    opacity: 1;
}
/* 이후 스크롤 내리거나 올릴때 네비게이션 바 보이게 하려면 필요 */
.nav-show {
    bottom: 0;
    transition: all 0.3s linear;
}
/* 이후 스크롤 가만히 둘 때 네비게이션 바 사라지게 하려면 필요 */
.nav-hide {
    bottom: -80px;
    transition: all 0.3s linear;
}
/* 네이게이션 바 영역(20%씩 5개) */
.nav-box {
    width: 20%;
    float: left;
}
/* 네비게이션 바 모양 */
.nav-box div {
    width: 50px;
    height: 50px;
    margin: 10px;
    display: inline-block;
    line-height: 50px;
    border-radius: 10%;
    border: 1px black solid;
    cursor: pointer;
    font-weight: bold;
}
/* 네비게이션 바 평소 상태 */
.nav-box-default {
    transition: all 0.1s linear;
    font: normal normal normal 10px/13px Noto Sans KR;
    letter-spacing: 0px;
    color: #3c3c4399;
    opacity: 1;
}
/* 네비게이션 바 선택된 상태 */
.nav-box-selected {
    transition: all 0.1s linear;
    text-align: center;
    font: normal normal normal 10px/13px Noto Sans KR;
    letter-spacing: 0px;
    color: #3b00ff;
    opacity: 1;
}
/* 반응형 = 750px 이상이면 750까지만 보여주고 이하면 크기에 마춰서 작게 보여줌 */
@media (max-width: 750px) {
    #nav {
        width: 100%;
    }
}
</style>
