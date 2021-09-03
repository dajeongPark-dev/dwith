<template>
  <div>
    <div class="register_hello3">
      직종과 관련된 키워드 중<br />관심 진로를 선택해 주세요.
    </div>
    <div style="width: calc(100% + 10px)">
      <div class="register_selectedJob">{{ userInterestJob }}</div>
      <div
        class="register_jobTag"
        v-for="tag in jobTags"
        :key="tag"
        style="display: inline-block"
      >
        <input
          type="checkbox"
          :id="tag"
          name="jobList"
          :value="tag"
          v-model="userJobTags"
        />
        <label :for="tag">{{ tag }}</label>
      </div>
    </div>
    <div>
      <ul class="selectedTags">
        <li v-for="tag in userJobTags" :key="tag">
          {{ tag }}
          <span class="register_deleteTag" @click="deleteTag(tag)">X</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "register_3",
  data() {
    return {
      userInterestJob: "IT.SW",
      userJobTags: [],
      jobTags: [
        "웹프로그래머",
        "응용프로그래머",
        "시스템프로그래머",
        "DBA 데이터베이스",
        "네트워크.서버.보안",
        "게임",
        "웹마케팅",
        "동영상제작.편집",
        "QA.테스터.검증",
        "웹기획.PM",
      ],
    };
  },
  methods: {
    deleteTag(tag) {
      this.userJobTags = this.userJobTags.filter((element) => element !== tag);
    },
  },
};
</script>

<style scoped>
.register_hello3 {
  text-align: left;
  font: normal normal bold 24px/35px Noto Sans KR;
  letter-spacing: -0.96px;
  color: #000000;
  opacity: 1;

  margin-bottom: 70px;
}
.register_selectedJob {
  margin-bottom: 10px;
  text-align: left;
  font: normal normal bold 13px/36px Noto Sans KR;
  letter-spacing: -0.52px;
  color: #00000099;
  opacity: 1;
}
.register_jobTag input[type="checkbox"] {
  display: none;
}
.register_jobTag input[type="checkbox"] + label {
  display: inline-block;
  cursor: pointer;
  height: 32px;
  margin: 0px 5px 6px 0px;
  padding: 5px 8px;
  float: left;

  border: 1px solid #000000;
  border-radius: 21px;
  opacity: 0.4;

  text-align: center;
  font: normal normal bold 13px/22px Noto Sans KR;
  letter-spacing: -0.56px;
  color: #000000;
  opacity: 0.4;
}
.register_jobTag input[type="checkbox"]:checked + label {
  border: 1px solid #3b00ff;
  border-radius: 21px;
  opacity: 1;

  text-align: center;
  font: normal normal bold 13px/22px Noto Sans KR;
  letter-spacing: -0.56px;
  color: #3b00ff;
  opacity: 1;
}
.selectedTags {
  padding: 15px 0px 0px 3px;
  margin-top: 150px;
  margin-bottom: -60px;
  list-style-type: none;
  clear: both;
  overflow: hidden;
}
.selectedTags li {
  list-style-type: none;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 5px #00000073;
  border-radius: 22px;
  opacity: 1;

  float: left;
  display: block;
  padding: 8px 12px;
  margin: 0px 6px 8px 0px;

  text-align: left;
  font: normal normal bold 14px/20px Noto Sans KR;
  letter-spacing: -0.56px;
  color: #000000;
  opacity: 1;
}
.register_deleteTag {
  margin-left: 10px;
  cursor: pointer;

  color: #919191;
  opacity: 1;
}
</style>
