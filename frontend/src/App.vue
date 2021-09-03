<template>
  <div id="app">
    <router-view :style="loginSuccess ? 'padding-bottom: 100px' : ''" />
    <Nav v-if="loginSuccess" />
    <!--로그인/회원가입시 네비게이션 바 사라짐-->
  </div>
</template>
<script>
import Nav from "./views/nav";
export default {
  name: "App",
  components: { Nav },
  data() {
    return {
      //true(네비게이션 바 보임), false(네비게이션 바 안보임)
      loginSuccess: false,
    };
  },
};
</script>
<style>
/* 태그 스타일 */
@import "./css/homeStyle.css";
@import "./css/loginStyle.css";

/* 반응형 최대크기 */
/* 반응형 = 750px 이상이면 750까지만 보여주고 이하면 크기에 마춰서 작게 보여줌 */
#app {
  margin: 0 auto;
  width: 750px;
  min-height: 100%;
  /* border-left: 1px #d8d8d8 solid;
  border-right: 1px #d8d8d8 solid; */
  position: relative;
  /* text-align: center; */
}
/* 여백제거 + 드래그방지 */
body {
  padding: 0;
  margin: 0;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
/* 반응형 시작 */
@media (max-width: 750px) {
  #app {
    width: 100%;
    border-left: 0;
    border-right: 0;
  }
}
</style>
