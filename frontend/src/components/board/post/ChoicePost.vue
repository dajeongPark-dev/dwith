<template>
  <div class="choiceCard">
    <div class="post_header">
      <div class="post_header_contents">🧑</div>
      <div class="post_header_contents">김고민</div>
      <div class="post_header_contents">디자인 | 시간디자인과 4학년</div>
    </div>
    <div class="content">
      <hr class="line" />
      <h3 style="font-weight: bold; text-align: left">
        디자이너도 개발 공부를 해야 할까요
      </h3>
      <div
        class="post_body"
        style="height: 90px; margin-top: 15px; text-align: left"
      >
        <div class="article">
          UI UX 디자이너를 꿈꾸는 학생입니다. 취직을 위해 프론트 개발 관련
          언어를 공부해야 할까요?
        </div>
        <ul class="postTag">
          <li># 취준 이야기</li>
          <li># 프론트엔드</li>
          <li># 복수전공</li>
        </ul>
      </div>
      <div class="postAnswerBtn">
        <form style="display: inline-block">
          <b-button pill variant="light" class="choices">해야 한다</b-button>
          <span style="width: 50px"></span>
          <b-button pill variant="light" class="choices"
            >안해도 괜찮다</b-button
          >
        </form>
      </div>
    </div>
    <hr class="line" />
    <div class="post_footer">
      <span class="countings">😀 132 ✉ 11 😍 7</span>
      <span class="bookmark"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "choiceCard",
};
</script>

<style scope>
.choiceCard {
  width: 338px;
  padding: 20px;
  height: 336px;
  margin: 20px 0px 20px 0px;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: inset 0px -3px 6px #00000029;
  /*mix-blend-mode: multiply;*/
  /* border: 1px black solid; */
  border-radius: 10px;
  opacity: 1;
  font: normal normal normal 15px/19px Noto Sans KR;
  letter-spacing: -0.52px;
  color: #000000cc;
  opacity: 1;
}
.choices {
  position: relative;
  width: 148px;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #0000004d;
  border-radius: 10px;
  text-align: center;
  letter-spacing: -0.6px;
  color: #00000099;
  opacity: 1;
}
.line {
  width: 295px;
  border-bottom: 0px;
  text-align: left;
  margin-left: 0px;
}
.postTag {
  float: left;
  list-style-type: none;
  padding: 0px;
}
.postTag > li {
  font-size: 11px;
  float: left;
  display: block;
}
.postAnswerBtn {
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
}
.post_header {
  position: relative;
}
.post_header_contents {
  display: inline-block;
}
.post_footer {
  position: relative;
  bottom: 10px;
  text-align: left;
}
</style>
