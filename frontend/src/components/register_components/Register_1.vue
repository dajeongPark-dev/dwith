<template>
    <!-- 1페이지 -->
    <div>
        <!-- 인사글 -->
        <div>인사글</div>
        <!-- 프로필 사진 설정(text) -->
        <div>프로필 사진 설정</div>
        <!-- 정보 입력 -->
        <div>
            <!-- 아이디 입력 창(text) -->
            <div>
                아이디 입력 :
                <input type="text" v-model="userEmail" />
            </div>
            <!-- 비밀번호&비밀번호 확인 입력 창 -->
            <div>
                비밀번호 입력 :
                <input type="text" v-model="userPassword" />
            </div>
            <div>
                비밀번호 재입력
                <input type="text" v-model="rePassword" />
            </div>
            <!-- 닉네임 입력 창(text) -->
            <div>
                닉네임 입력 :
                <input type="text" v-model="userNickname" />
            </div>
            <!-- 생년월일 입력 창 -->
            <div>
                생년월일 입력 :
                <input type="text" v-model="userBirth.year" />
                <input type="text" v-model="userBirth.month" />
                <input type="text" v-model="userBirth.day" />
            </div>
            <!-- 성별 입력 창(radio) -->
            <div>
                성별 입력 :
                <input type="radio" name="gender" value="male" v-model="userGender" />
                <input type="radio" name="gender" value="female" v-model="userGender" />
            </div>
            <!-- 직업 입력 창(select) -->
            <div>
                직업 입력 :
                <input type="text" v-model="userJob" />
            </div>
        </div>
        <!-- 다음 페이지 버튼(링크?) -->
        <button @click="nextStep">다음 페이지</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userEmail: "",
            userPassword: "",
            rePassword: "",
            userNickname: "",
            userBirth: {
                year: 2022,
                month: 1,
                day: 1,
            },
            userGender: "male",
            userJob: "",
        };
    },
    methods: {
        // 다음 단계로 이동
        nextStep() {
            // 회원가입 입력 정보 체크
            if (this.userEmail.length === 0) alert("이메일 입력 필요");
            else if (this.userPassword.length === 0) alert("비밀번호 입력 필요");
            else if (this.userPassword !== this.rePassword) alert("비밀번호 틀림");
            else if (this.userNickname.length === 0) alert("닉네임 입력 필요");
            else if (this.userJob.length === 0) alert("직업 입력 필요");
            // 모든 정보 올바르게 입력 시 vuex에 정보 저장 후 다음 단계로 이동
            else {
                this.$store.state.user.registerInfo.userEmail = this.userEmail;
                this.$store.state.user.registerInfo.userPassword = this.userPassword;
                this.$store.state.user.registerInfo.userNickname = this.userNickname;
                this.$store.state.user.registerInfo.userBirth = this.userBirth;
                this.$store.state.user.registerInfo.userGender = this.userGender;
                this.$store.state.user.registerInfo.userJob = this.userJob;
                this.$emit("nextStep");
            }
        },
    },
    created() {
        console.log("Register_1 created");
    },
    mounted() {
        console.log("Register_1 mounted");

        // 해당 화면 mounted시 vuex에 저장된 값(혹은 default값)을 불러옴
        this.userEmail = this.$store.state.user.registerInfo.userEmail;
        this.userPassword = this.$store.state.user.registerInfo.userPassword;
        this.userNickname = this.$store.state.user.registerInfo.userNickname;
        this.userBirth = this.$store.state.user.registerInfo.userBirth;
        this.userGender = this.$store.state.user.registerInfo.userGender;
        this.userJob = this.$store.state.user.registerInfo.userJob;
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
