<template>
  <div id="switchButton" class="post-show">
    <router-link to="/"
      ><b-button
        variant="light"
        @click="gotoPage(false)"
        :class="[isActive === 0 ? 'button-selected' : 'post-box-default']"
      >
        {{ bbsName }}
      </b-button></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      //현재 페이지 번호
      isActive: false,
      bbsName: "일반형",
    };
  },
  methods: {
    //페이지(라우터)클릭시 페이지 번호 변경
    gotoPage(state) {
      this.isActive = state;
    },
  },
};
</script>
