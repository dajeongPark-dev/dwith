<template>
  <div>
    <!--헤더 부분 : 로고 인사말, 각종 태그 등등..-->
    <div class="header">
      <div class="logo"><h2>D,with</h2></div>
      <div class="point">point & alert</div>
      <div class="hello">안녕하세요, 드림님</div>
      <div class="writeGomin">고민 작성하러 가기 ></div>
      <div>
        <ul class="myTag">
          <li class="major">디자인</li>
          <li class="sub">UI/UX 디자인</li>
          <li class="sub">브랜딩 디자인</li>
          <li class="sub">브랜딩 디자인</li>
          <li class="sub">브랜딩 디자인</li>
          <li class="moreTag">+</li>
          <!--더하기 글씨 말고 더하기 이미지로 대체해보기-->
        </ul>
      </div>
    </div>
    <div class="section1">
      <form style="width: 90%; margin: auto">
        <input
          class="searchGomin"
          type="text"
          placeholder="(돋보기) 오늘의 고민은 무엇인가요?"
        />
      </form>
      <div class="section1-title">
        최근 고민과 비슷한<br />다양한 고민들을 살펴보세요
      </div>
      <div class="choiceSwiper">
        <choicePostSwiper></choicePostSwiper>
        <div class="skipPost">SKIP</div>
      </div>
    </div>
    <div
      style="
        height: 8px;
        background: #00000012 0% 0% no-repeat padding-box;
        box-shadow: inset 0px 2px 2px #00000020;
        opacity: 1;
      "
    ></div>
    <div class="section2">
      <div class="section2-title">인기게시판</div>
      <div class="hotPostSwiper">
        <div class="postCategory">선택형 게시판</div>
        <div class="showAllPost">전체 보기</div>
        <hotPostSwiper style="clear: both"></hotPostSwiper>
      </div>
      <div class="hotPostSwiper">
        <div class="postCategory">일반형 게시판</div>
        <div class="showAllPost">전체 보기</div>
        <hotPostSwiper style="clear: both"></hotPostSwiper>
      </div>
    </div>
  </div>
</template>

<script>
import choicePostSwiper from "@/components/home/choicePostSwiper.vue";
import hotPostSwiper from "@/components/home/hotPostSwiper.vue";
export default {
  components: { choicePostSwiper, hotPostSwiper },
};
</script>

<style scope>
/* 태그 스타일 */
@import "../css/homeStyle.css";
</style>
