<!--BBS = Bulletin Board System-->

<template>
  <div id="bbs-page">
    <div id="bbs-page-header">
      <span class="header-bbs-name">선택 게시판</span>
      <span class="header-bbs-button">
        <b-button pill variant="light" class="header-bbs-switch"
          >일반형</b-button
        >
        <b-button pill variant="light" class="header-search"
          ><img
            src="@/image/search.png"
            style="float: right; width: 10px; height: 10px"
        /></b-button>
        <b-button pill variant="light" class="header-alert"
          ><img
            src="@/image/notification.png"
            style="float: right; width: 10px; height: 10px"
        /></b-button>
      </span>
    </div>
    <div id="bbs-page-posts">
      <bbsChoice></bbsChoice>
    </div>
    <div style="position: fixed; right: 75px; bottom: 120px">
      <img
        src="@/image/plus-button.png"
        style="float: right; width: 50px; height: 50px"
      />
    </div>
  </div>
</template>

<script>
import bbsChoice from "@/views/BBS_Choice.vue";
//import bbsGeneral from "@/views/BBS_General.vue";

export default {
  components: { bbsChoice },
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
#bbs-page {
  width: inherit;
  height: 1401px;
}
#bbs-page-header {
  position: relative;
  margin: 0px;
  padding: 15px;
  width: inherit;
  height: 100px;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #0000004d;
  display: flex;
  flex-direction: row;
  opacity: 1;
}
.header-bbs-name {
  position: relative;
  margin: 0px;
  top: 21.6%;
  width: 25%;
  height: inherit;
  text-align: left;
  font: normal normal bold 19px/36px Noto Sans KR;
  letter-spacing: -0.76px;
  color: #000000;
  opacity: 1;
}
.header-bbs-button {
  position: relative;
  height: inherit;
  width: 75%;
  display: flex;
  justify-content: flex-end;
}
.header-bbs-switch {
  position: relative;
  top: 21.6%;
  width: auto + 10px;
  height: 33px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #0000004d;
  border-radius: 17px;
  text-align: center;
  letter-spacing: -0.6px;
  color: #00000099;
  opacity: 1;
}
.header-search {
  position: relative;
  top: 21.6%;
  margin: 0px 10px 0px 25px;
  width: fit-content;
  height: 33px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #0000004d;
  border-radius: 17px;
  text-align: center;
  letter-spacing: -0.6px;
  color: #00000099;
  opacity: 1;
}
.header-alert {
  position: relative;
  top: 21.6%;
  margin: 0px 40px 0px 0px;
  width: fit-content;
  height: 33px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #0000004d;
  border-radius: 17px;
  text-align: center;
  letter-spacing: -0.6px;
  color: #00000099;
  opacity: 1;
}
.body-category {
  top: 3px;
}
#bbs-page-posts {
  position: relative;
  width: inherit;
  height: auto;
  background: #00000012 0% 0% no-repeat padding-box;
  opacity: 2;
  border-bottom: 1px black solid;
}
</style>
