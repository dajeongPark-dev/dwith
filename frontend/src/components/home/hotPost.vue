<template>
  <div class="hotPost">
    <div class="postTitle">{{ title }}</div>
    <div class="postContent">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "hotPost",
  props: {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scope>
.hotPost {
  width: 100%;
  padding: 20px;
  height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #ffffff29, 0px 2px 4px #0000001a;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  opacity: 1;
}
.postTitle {
  text-align: left;
  font: normal normal bold 16px/28px Noto Sans KR;
  letter-spacing: -0.64px;
  color: #000000;
  opacity: 1;
  margin-bottom: 10px;
}
.postContent {
  height: 100px;
  text-align: left;
  font: normal normal normal 13px/19px Noto Sans KR;
  letter-spacing: -0.52px;
  color: #000000cc;
  opacity: 1;
}
</style>
