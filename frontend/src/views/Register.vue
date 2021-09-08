<template>
  <div class="register">
    <div class="register_preStep" @click="gotoPreStep"></div>
    <div>
      <register_1
        v-show="registerStep === 1"
        :userInformation="registerInformation.userInformation"
        @firstStepClear="firstStepClear"
      >
      </register_1>
      <register_2
        v-show="registerStep === 2"
        :interestJob="registerInformation.userInterestJob"
        @secondStepClear="secondStepClear"
      >
      </register_2>
      <register_3
        v-show="registerStep === 3"
        :interestJob="registerInformation.userInterestJob"
        :jobTags="registerInformation.userJobTags"
        @thirdStepClear="thirdStepClear"
      >
      </register_3>
      <register_4 v-show="registerStep === 4" :user="registerInformation">
      </register_4>
    </div>
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

      registerInformation: {
        userInformation: {
          userEmail: "",
          userPassword: "",
          userName: "",
          userNickname: "",
          userBirthYear: 2000,
          userBirthMonth: 1,
          userBirthDay: 1,
          userGender: "male",
          userJob: "null",
        },
        userInterestJob: "경영 사무",
        userJobTags: [],
      },
    };
  },
  methods: {
    gotoPreStep() {
      switch (this.registerStep) {
        case 1:
          this.$router.go(-1);
          break;
        case 2:
          console.log(this.userInformation);
          this.registerStep--;
          break;
        case 3:
          console.log(this.userInformation);
          this.registerStep--;
          break;
        case 4:
          console.log(this.userInformation);
          this.registerStep--;
          break;
        default:
          console.log("회원가입 단계 오류");
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    gotoNextStep() {
      switch (this.registerStep) {
        case 1:
          console.log(this.userInformation);
          this.registerStep++;
          break;
        case 2:
          console.log(this.userInformation);
          this.registerStep++;
          break;
        case 3:
          console.log(this.userInformation);
          this.registerStep++;
          break;
        case 4:
          this.$router.replace("/main");
          break;
        default:
          console.log("회원가입 단계 오류");
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    firstStepClear(inputInformation) {
      this.registerInformation.userInformation = inputInformation;
      console.log(this.registerInformation.userInformation);
      this.registerStep++;
    },
    secondStepClear(inputInformation) {
      this.registerInformation.userInterestJob = inputInformation;
      console.log(this.registerInformation.userInterestJob);
      this.registerStep++;
    },
    thirdStepClear(inputInformation) {
      this.registerInformation.userJobTags = inputInformation;
      console.log(this.registerInformation.userJobTags);
      this.registerStep++;
    },
  },
};
</script>

<style scoped></style>
