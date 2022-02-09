<template>
    <div>
        <!-- 2페이지 -->
        <!-- 인사글 -->
        <div>인사글</div>
        <!-- 관심 직종 입력(radio) -->
        <div>
            관심 직종 :
            <input type="text" v-model="job" />
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
            job: "",
        };
    },
    methods: {
        // 이전 단계로 이동
        previousStep() {
            this.$emit("previousStep");
        },
        // 다음 단계로 이동
        nextStep() {
            // vuex에 정보 저장 후 다음 단계로 이동
            this.$store.state.user.registerInfo.interest.job = this.job;
            this.$emit("nextStep");
        },
    },
    created() {
        console.log("Register_2 created");
    },
    mounted() {
        console.log("Register_2 mounted");

        // 해당 화면 mounted시 vuex에 저장된 값(혹은 default값)을 불러옴
        this.job = this.$store.state.user.registerInfo.interest.job;
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
