<template>
    <div class="register">
        <Register_1 v-if="registerStep === 1" @nextStep="nextStep"> </Register_1>

        <Register_2 v-else-if="registerStep === 2" @previousStep="previousStep" @nextStep="nextStep"> </Register_2>

        <Register_3 v-else-if="registerStep === 3" @previousStep="previousStep" @nextStep="nextStep"> </Register_3>

        <Register_4 v-else-if="registerStep === 4" @previousStep="previousStep"> </Register_4>
    </div>
</template>

<script>
import Register_1 from "@/components/register_components/Register_1.vue";
import Register_2 from "@/components/register_components/Register_2.vue";
import Register_3 from "@/components/register_components/Register_3.vue";
import Register_4 from "@/components/register_components/Register_4.vue";
export default {
    components: { Register_1, Register_2, Register_3, Register_4 },
    data() {
        return {
            registerStep: 1,
        };
    },
    methods: {
        // 이전 단계로 이동
        previousStep() {
            console.log("회원가입 이전 단계");
            this.registerStep -= 1;
        },
        // 다음 단계로 이동
        nextStep() {
            console.log("회원가입 다음 단계");
            this.registerStep += 1;
        },
    },
    created() {
        console.log("RegisterPage created");
        this.$store.state.user.registerInfo = {
            userEmail: "",
            userPassword: "",
            userNickname: "",
            userBirth: {
                year: 2022,
                month: 1,
                day: 1,
            },
            userGender: "male",
            userJob: "직업을 선택해주세요",
            interest: {
                job: "",
                detailJob: [],
            },
        };
    },
    mounted() {
        console.log("RegisterPage mounted");
    },
};
</script>
