<template>
  <div>
    <div class="register_hello2">관심 직종을 선택해 주세요.</div>
    <div class="register_jobSelectorWrapper">
      <div
        class="register_jobSelector"
        v-for="job in jobList"
        :key="job"
        style="display: inline-block"
      >
        <input
          type="radio"
          :id="job"
          name="jobList"
          :value="job"
          v-model="userInterestJob"
        />
        <label :for="job">{{ job }}</label>
      </div>
    </div>
    <div class="register_nextStep" @click="gotoNextStep">다음</div>
  </div>
</template>

<script>
export default {
  name: "register_2",
  props: {
    interestJob: {
      type: String,
      require: "true",
    },
  },
  data() {
    return {
      userInterestJob: this.interestJob,
      jobList: [
        "경영 사무",
        "IT.SW",
        "마케팅",
        "영업",
        "서비스",
        "자영업",
        "건설업",
        "무직",
        "기타",
      ],
    };
  },
  methods: {
    gotoNextStep() {
      this.$emit("secondStepClear", this.userInterestJob);
    },
  },
};
</script>

<style scoped>
/* 화면 크기에 따라서 직업 배열 다르게 (2칸<400px<3칸<500px<4칸<650px<5칸)*/
@media (max-width: 350px) {
  .register_jobSelectorWrapper {
    width: 220px;
    margin: 0 auto;
  }
}
@media (min-width: 350px) and (max-width: 500px) {
  .register_jobSelectorWrapper {
    width: 330px;
    margin: 0 auto;
  }
}
@media (min-width: 500px) and (max-width: 650px) {
  .register_jobSelectorWrapper {
    width: 440px;
    margin: 0 auto;
  }
}
@media (min-width: 650px) {
  .register_jobSelectorWrapper {
    width: 550px;
    margin: 0 auto;
  }
}
</style>
