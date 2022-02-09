<template>
    <div>
        <!-- 로고 -->
        <div>로고</div>
        <div>
            <!-- 아이디 입력 창(text) -->
            <div>
                아이디 입력
                <input type="text" v-model="inputEmail" />
            </div>
            <!-- 비밀번호 입력 창(text) -->
            <div>
                비밀번호 입력
                <input type="text" v-model="inputPsw" />
            </div>
            <!-- 자동 로그인(check) -->
            <div>
                자동 로그인 체크
                <input type="checkbox" v-model="autoLogin" />
            </div>
            <!-- 로그인 버튼 -->
            <button @click="requestLogin">로그인</button>
        </div>
        <!-- or선 -->
        <div class="login_line">Or</div>
        <!-- SNS 로그인 버튼 -->
        <div>
            <div>구글</div>
            <div>카카오톡</div>
            <div>페이스북</div>
        </div>
        <!-- 회원가입 링크 -->
        <div><router-link to="/register" style="color: #3b00ff">회원가입하러 가기</router-link></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputEmail: "",
            inputPsw: "",
            autoLogin: false,
        };
    },
    methods: {
        // 로그인 시도
        requestLogin() {
            console.log("로그인 요청");
            console.log("입력 아이디 : " + this.inputEmail);
            console.log("입력 비밀번호 : " + this.inputPsw);
            console.log("자동 로그인 여부 : " + this.autoLogin);

            this.$store.dispatch("requestLogin", { username: this.inputEmail, password: this.inputPsw });
        },
    },
    created() {
        console.log("LoginPage created");
    },
    mounted() {
        console.log("LoginPage mounted");

        // userIdx를 가진 상태(로그인 된 상태)라면 메인 페이지로 이동
        if (this.$store.state.user.userInfo.userIdx !== null) {
            console.log("로그인 되어있음 -> 메인 페이지로 이동");
            alert("로그인 되어 있음");
            location.href = "./main";
        }
    },
};
</script>

<style scoped>
div {
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
}
.login_line {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    font: normal normal bolder 17px/17px Noto Sans KR;
    letter-spacing: -0.6px;
    color: #3b00ff;
    opacity: 1;
    /* margin: 30px 0px; */
}
.login_line::before {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 10px 0px 0px;
}
.login_line::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 0px 0px 10px;
}
</style>
