<template>
    <div>
        <!-- 4페이지 -->
        <!-- 인사글 -->
        <div>인사글</div>
        <div>
            <!-- 모두 동의 체크 -->
            <div>
                모두 동의
                <input type="checkbox" v-model="conditionAll" @click="selectAll" />
            </div>
            <!-- 이용 약관(check) -->
            <div>
                <div>
                    약관1
                    <input type="checkbox" v-model="condition1" />
                </div>
                <div>
                    약관2
                    <input type="checkbox" v-model="condition2" />
                </div>
            </div>
            <!-- 회원가입 완료 버튼 -->
            <div>
                <button @click="previousStep">이전 페이지</button>
                <button @click="requestRegister">회원가입 완료</button>
            </div>
            {{ conditionAll }}
            {{ condition1 }}
            {{ condition2 }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            conditionAll: false,
            condition1: false,
            condition2: false,
        };
    },
    methods: {
        // 전체 체크 하기
        selectAll() {
            this.condition1 = !this.conditionAll;
            this.condition2 = !this.conditionAll;
        },
        // 이전 단계로 이동
        previousStep() {
            this.$emit("previousStep");
        },
        // 회원가입 요청
        requestRegister() {
            // 약관 모두 동의 시 서버로 회원가입 요청
            if (this.condition1 && this.condition2) {
                console.log("회원가입 요청");
                console.log(this.$store.state.user.userInfo);

                this.$store.dispatch("requestRegister", this.$store.state.user.userInfo);
            } else alert("약관 동의 필요");
        },
    },
    created() {
        console.log("Register_4 created");
    },
    mounted() {
        console.log("Register_4 mounted");
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
