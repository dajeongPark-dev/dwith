<template>
    <div id="app">
        <!-- <router-view :style="loginSuccess ? 'padding-bottom: 100px' : ''" />
        <Nav v-if="loginSuccess" /> -->
        <!--로그인/회원가입시 네비게이션 바 사라짐-->

        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <router-view />
        <!-- 하단 네비게이션 바(로그인 창, 회원가입 창일 때 안보임) -->
        <Nav />
    </div>
</template>
<script>
import Nav from "@/components/NavBar.vue";
export default {
    mounted() {
        // $.initialize();
    },
    components: {
        Nav,
    },
};
</script>
<style>
/* 태그 스타일 */
@import "./css/homeStyle.css";
@import "./css/loginStyle.css";

#app {
    padding-bottom: 100px;
}

/* 반응형 최대크기 */
/* 반응형 = 750px 이상이면 750까지만 보여주고 이하면 크기에 마춰서 작게 보여줌 */
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    margin: 0 auto;
    width: 750px;
    min-height: 100%;
    border-left: 1px #d8d8d8 solid;
    border-right: 1px #d8d8d8 solid;
    position: relative;
    text-align: center;
} */
/* 여백제거 + 드래그방지 */
/* body {
    padding: 0;
    margin: 0;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
} */
/* 반응형 시작 */
/* @media (max-width: 750px) {
    #app {
        width: 100%;
        border-left: 0;
        border-right: 0;
    }
} */
</style>
