<template>
  <div id="home-page">
    <div id="home-page-header">
      <div class="header-logo">d,with</div>
      <div class="header-point">Point</div>
      <div class="header-alert">종</div>
      <div class="header-hello">안녕하세요, 드림님</div>
      <div class="header-gotoGomin">고민 작성하러 가기 ></div>
      <div class="header-tag">태그1</div>
    </div>
    <div id="home-page-cardView">
      <div class="body-search">오늘의 고민은 무엇인가요?</div>
      <div class="body-sayGomin">
        최근 고민과 비슷한<br />다양한 고민들을 살펴보세요!
      </div>
      <slideVote class="body-slideVote"></slideVote>
    </div>
    <div id="home-page-empty"></div>
    <div id="home-page-posts">
      <div class="body-hotPost">인기 게시판</div>
      <div v-for="card in cards" :key="card.title">
        <div class="body-hotPost1">
          <postCard></postCard>
        </div>
      </div>
      <div class="body-hotPost2"></div>
    </div>
  </div>
</template>

<script>
import slideVote from "@/components/HomePageVote.vue";
import postCard from "@/components/hotPost.vue";
export default {
  components: { slideVote, postCard },
  data() {
    return {
      cards: [
        { title: "post1", content: "contents1" },
        { title: "post4", content: "contents2" },
        { title: "post3", content: "contents4" },
      ],
    };
  },
};
</script>

<style scoped>
#home-page {
  width: inherit;
  height: 812px;
}
#home-page-header {
  position: relative;
  width: inherit;
  height: 250px;
  background: #00000012 0% 0% no-repeat padding-box;
  opacity: 1;
}
.header-logo {
  position: absolute;
  top: 21.6%;
  left: 4.8%;
  width: 19.7%;
  height: 7.6%;
  border: 1px black solid;
}
.header-point {
  position: absolute;
  top: 21.6%;
  left: 68.5%;
  width: 17%;
  height: 11.2%;
  border: 1px black solid;
}
.header-alert {
  position: absolute;
  top: 22.4%;
  left: 89.8%;
  width: 5%;
  height: 9.2%;
  border: 1px black solid;
}
.header-hello {
  position: absolute;
  top: 44%;
  left: 4.8%;
  /* width: 38%; */
  width: fit-content;
  height: 10%;
  text-align: left;
  font: normal normal bold 19px/36px Noto Sans KR;
  letter-spacing: -0.76px;
  color: #000000;
  opacity: 1;
}
.header-gotoGomin {
  position: absolute;
  top: 46%;
  right: 4.8%;
  /* left: 62.4%; */
  /* width: 31.5%; */
  width: fit-content;
  height: 8%;
  text-align: right;
  font: normal normal medium 14px/36px Noto Sans KR;
  letter-spacing: -0.56px;
  color: #3b00ff;
  opacity: 1;
}
.header-tag {
  position: absolute;
  top: 63.6%;
  left: 4.8%;
  width: 90.4%;
  height: 10.8%;
  border: 1px black solid;
}
#home-page-cardView {
  position: relative;
  width: inherit;
  height: 425px;
  background: white 0% 0% no-repeat padding-box;
  opacity: 1;
}
.body-search {
  position: absolute;
  top: -6.1%;
  left: 4.8%;
  width: 90.1%;
  height: 11.7%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border: 1px solid #3b00ff;
  border-radius: 29px;
  opacity: 1;
}
.body-sayGomin {
  position: absolute;
  top: 12.22%;
  left: 4.8%;
  width: 72.2%;
  height: 16.47%;
  text-align: left;
  font: normal normal medium 24px/35px Noto Sans KR;
  letter-spacing: -0.96px;
  color: #000000;
  opacity: 1;
  border: 1px black solid;
}
.body-slideVote {
  position: absolute;
  top: 35.8%;
  left: 0%;
}
#home-page-empty {
  position: relative;
  width: inherit;
  height: 8px;
  background: #5a5a5a12 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 2px 2px #00000099;
  opacity: 1;
}
#home-page-posts {
  position: relative;
  width: inherit;
  height: 500px;
  background: white 0% 0% no-repeat padding-box;
  opacity: 2;
  border-bottom: 1px black solid;
}
</style>
