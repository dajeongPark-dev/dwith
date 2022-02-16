<template>
    <div class="login container">
        <!-- 로고 -->
        <div class="login-logo">
            <img src="../../public/img/star.png" />
        </div>
        <div class="login-input-form">
            <!-- 아이디 입력 창(text) -->
            <div>
                <input type="text" v-model="inputEmail" placeholder="아이디/이메일" />
            </div>
            <!-- 비밀번호 입력 창(text) -->
            <div>
                <input type="password" v-model="inputPsw" placeholder="비밀 번호" />
            </div>
            <!-- 자동 로그인(check) -->
            <div>
                <input type="checkbox" disabled v-model="autoLogin" />
                계정 기억하기(기능x)
            </div>
            <!-- 로그인 버튼 -->
            <button @click="requestLogin">로그인 하기</button>
        </div>
        <!-- or선 -->
        <div class="login-line">Or</div>
        <!-- SNS 로그인 버튼 -->
        <div class="row">
            <div class="col-4 text-right login-sns"><img src="../../public/img/star.png" /></div>
            <div class="col-4 text-center login-sns"><img src="../../public/img/star.png" /></div>
            <div class="col-4 text-left login-sns"><img src="../../public/img/star.png" /></div>
        </div>
        <!-- 회원가입 링크 -->
        <div class="login-to-register">
            아직 계정이 없나요?
            <router-link to="/register" style="color: #3b00ff"> 회원가입 </router-link>
        </div>
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

            this.$store.state.user.userInfo.autoLogin = this.autoLogin;
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
