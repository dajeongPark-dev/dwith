<template>
  <div class="register">
    <div class="register_preStep" @click="gotoPreStep"></div>
    <div style="min-height: 600px">
      <register_1 v-if="registerStep === 1"></register_1>
      <register_2 v-if="registerStep === 2"></register_2>
      <register_3 v-if="registerStep === 3"></register_3>
      <register_4 v-if="registerStep === 4"></register_4>
    </div>
    <div class="register_nextStep" @click="gotoNextStep">다음</div>
  </div>
</template>

<script>
import register_1 from "@/components/register/register_1.vue";
import register_2 from "@/components/register/register_2.vue";
import register_3 from "@/components/register/register_3.vue";
import register_4 from "@/components/register/register_4.vue";

export default {
  components: { register_1, register_2, register_3, register_4 },
  data() {
    return {
      registerStep: 1,
    };
  },
  methods: {
    gotoPreStep() {
      this.registerStep == 1 ? this.$router.go(-1) : this.registerStep--;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    gotoNextStep() {
      this.registerStep == 4
        ? this.$router.replace("/main")
        : this.registerStep++;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  },
};
</script>

<style scoped>
.register {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 57px;

  scroll-behavior: auto;
}
.register_preStep {
  width: 12px;
  height: 20px;
  margin-bottom: 35px;
  background: #00000066 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
}
.register_nextStep {
  width: 20%;
  margin: 100px auto 50px;
  clear: both;
  text-align: center;
  font: normal normal bold 20px/25px Noto Sans KR;
  letter-spacing: -0.76px;
  color: #000000;
  opacity: 1;
  cursor: pointer;
}
/* .register_nextStep:active {
  color: #3b00ff;
} */
</style>
