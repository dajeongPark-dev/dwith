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
    <div>선택한 직업 : {{ userInterestJob }}</div>
  </div>
</template>

<script>
export default {
  name: "register_2",
  data() {
    return {
      userInterestJob: "경영 사무",
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
};
</script>

<style scoped>
.register_hello2 {
  text-align: left;
  font: normal normal bold 24px/35px Noto Sans KR;
  letter-spacing: -0.96px;
  color: #000000;
  opacity: 1;

  margin-bottom: 70px;
}
.register_jobSelector input[type="radio"] {
  display: none;
}
.register_jobSelector input[type="radio"] + label {
  display: inline-block;
  cursor: pointer;
  width: 90px;
  height: 90px;
  margin: 15px 10px;
  float: left;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #bcbcbc;
  border-radius: 45px;
  opacity: 1;

  text-align: center;
  font: normal normal bold 15px/90px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #7b7b7b;
  opacity: 1;
}
.register_jobSelector input[type="radio"]:checked + label {
  border: 2px solid #3b00ff;

  text-align: center;
  font: normal normal bold 15px/90px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #3b00ff;
  opacity: 1;
}

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
