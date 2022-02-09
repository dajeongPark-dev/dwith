<template>
    <div>
        <!-- 3페이지 -->
        <!-- 인사글 -->
        <div>인사글</div>
        <div>
            <!-- 관심 직종 이름 -->
            <div>관심 직종명 : {{ interest.job }}</div>
            <!-- 관심 직종 세부 분야(check) -->
            <div>관심 직종 세부 분야</div>
        </div>
        <!-- 선택한 분야 -->
        <div>
            선택한 분야 :
            <div v-for="tag in jobTagLists" :key="tag" style="display: inline-block">
                <input type="checkbox" :id="tag" name="jobList" :value="tag" v-model="interest.detailJob" />
                <label :for="tag">{{ tag }}</label>
            </div>
        </div>
        <!-- 이전, 다음 페이지 버튼(링크?) -->
        <div>
            <button @click="previousStep">이전 페이지</button>
            <button @click="nextStep">다음 페이지</button>
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
            jobTagLists: ["a", "b", "c", "d", "e", "f", "g"],
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
                this.$store.state.user.registerInfo.interest.detailJob = this.interest.detailJob;
                this.$emit("nextStep");
            } else alert("세부 직무 선택 필요");
        },
    },
    created() {
        console.log("Register_3 created");
    },
    mounted() {
        console.log("Register_3 mounted");

        // 해당 화면 mounted시 vuex에 저장된 값을 불러옴
        this.interest = this.$store.state.user.registerInfo.interest;

        // 해당 interest에 대한 세부 직무 데이터를 서버로부터 불러옴
    },
};
</script>

<style scoped>
div {
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
}
</style>
