<template>
  <div class="register">
    <div class="register_preStep" @click="gotoPreStep">&#60;</div>
    <div style="min-height: 500px">
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
      this.registerStep == 1 ? "" : this.registerStep--;
    },
    gotoNextStep() {
      this.registerStep == 4 ? "" : this.registerStep++;
    },
  },
};
</script>

<style scoped>
.register {
  padding-left: 5%;
  padding-right: 5%;
}
.register_preStep {
  width: 10%;
  margin-top: 57px;
  margin-bottom: 35px;
  font: normal normal bold 36px/40px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #00000066;
  opacity: 1;
}
.register_nextStep {
  position: absolute;
  width: 20%;
  left: 40%;
  bottom: 30px;
  text-align: center;
  font: normal normal bold 19px/25px Noto Sans KR;
  letter-spacing: -0.76px;
  color: #000000;
  opacity: 1;
  border: 1px solid black;
}
</style>
