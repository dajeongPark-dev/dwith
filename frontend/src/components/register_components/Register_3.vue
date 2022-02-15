<template>
    <!-- 3페이지 -->
    <div class="container">
        <!-- 인사글 -->
        <div class="register-hello">직종과 관련된 키워드 중<br />관심 진로를 선택해 주세요.</div>
        <div class="register-input3">
            <!-- 관심 직종 이름 -->
            <div style="margin-bottom: 10px">
                {{ interest.job }}
            </div>
            <!-- 관심 직종 세부 분야(check) -->
            <div>
                <div class="d-inline-block mr-1 job-tag" v-for="tag in jobTagLists" :key="tag">
                    <input type="checkbox" :id="tag" name="jobList" :value="tag" @change="checkList(tag)" v-model="interest.detailJob" />
                    <label :for="tag">{{ tag }}</label>
                </div>
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
            interest: {
                job: "",
                detailJob: [],
            },
            jobTagLists: [],
        };
    },
    methods: {
        // 이전 단계로 이동
        previousStep() {
            this.$emit("previousStep");
        },
        // 다음 단계로 이동
        nextStep() {
            // 세부 직무를 골랐다면 vuex에 정보 저장 후 다음 단계로 이동
            if (this.interest.detailJob.length > 0) {
                this.$store.state.auth.registerInfo.interest.detailJob = this.interest.detailJob;
                this.$emit("nextStep");
            } else alert("세부 직무 선택 필요");
        },
        // 세부 직무 3개 이상 선택했을 시 선택 취소시킴
        checkList(tag) {
            if (this.interest.detailJob.length > 3) {
                alert("최대 3개까지 선택 가능");
                this.interest.detailJob.pop();
                document.getElementById(tag).checked = false;
            }
        },
    },
    created() {
        console.log("Register_3 created");
    },
    mounted() {
        console.log("Register_3 mounted");

        // 해당 화면 mounted시 vuex에 저장된 값을 불러옴 (세부 직무는 초기화)
        this.interest.job = this.$store.state.auth.registerInfo.interest.job;

        // 해당 interest에 대한 세부 직무 데이터를 서버로부터 불러옴
        this.jobTagLists = this.$store.state.auth.subJobTag[this.interest.job];
        if (this.jobTagLists == null) {
            this.jobTagLists = ["세부 직업1입니다", "세부 직업2", "세부 직업3입니다입니다", "세부 직업4444", "세부 직업5"];
        }
    },
};
</script>
