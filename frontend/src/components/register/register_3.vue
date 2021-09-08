<template>
  <div>
    <div class="register_hello3">
      직종과 관련된 키워드 중<br />관심 진로를 선택해 주세요.
    </div>
    <div style="width: calc(100% + 10px)">
      <div class="register_selectedJob">{{ interestJob }}</div>
      <div
        class="register_jobTag"
        v-for="tag in jobTagLists"
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
    <div class="register_nextStep" @click="gotoNextStep">다음</div>
  </div>
</template>

<script>
export default {
  name: "register_3",
  props: {
    interestJob: {
      type: String,
      require: "true",
    },
    jobTags: {
      type: Array,
      require: "true",
    },
  },
  data() {
    return {
      userJobTags: this.jobTags,
      jobTagLists: [
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
    gotoNextStep() {
      this.$emit("thirdStepClear", this.userJobTags);
    },
  },
};
</script>

<style scoped></style>
