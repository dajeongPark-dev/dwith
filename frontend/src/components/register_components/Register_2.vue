<template>
    <!-- 2페이지 -->
    <div class="container">
        <!-- 인사글 -->
        <div class="register-hello">관심 직종을 선택해 주세요.</div>
        <!-- 관심 직종 입력(radio) -->
        <div class="row register-input2">
            <div class="col-4 col-md-3 text-center" v-for="job in jobList" :key="job">
                <input type="radio" :id="job" name="jobList" :value="job" v-model="interestJob" />
                <label :for="job">{{ job }}</label>
            </div>
        </div>
        <!-- 이전, 다음 페이지 버튼(링크?) -->
        <div class="row">
            <div class="register-step col-5 mr-1 text-right" @click="previousStep">이전</div>
            <div class="register-step col-5 text-left" @click="nextStep">다음</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            interestJob: "",
            jobList: ["흥미1", "흥미2", "흥미3", "흥미4", "흥미5", "흥미6", "흥미7", "흥미8", "흥미9", "흥미10", "기타"],
        };
    },
    methods: {
        // 이전 단계로 이동
        previousStep() {
            this.$emit("previousStep");
        },
        // 다음 단계로 이동
        nextStep() {
            if (this.interestJob.length === 0) alert("직업 선택 필요");
            else {
                // vuex에 정보 저장 후 다음 단계로 이동
                this.$store.state.user.registerInfo.interest.job = this.interestJob;
                this.$emit("nextStep");
            }
        },
    },
    created() {
        console.log("Register_2 created");
    },
    mounted() {
        console.log("Register_2 mounted");

        // 해당 화면 mounted시 vuex에 저장된 값(혹은 default값)을 불러옴
        this.interestJob = this.$store.state.user.registerInfo.interest.job;
    },
};
</script>
