<template>
    <div class="login">
        <div class="login_logo">
            <img src="@/image/star.png" style="width: 100%; height: 100%" />
        </div>
        <div>
            <form class="login_inputLogin" @submit.prevent="request_login">
                <!--로그인 버튼 빼고 나머지 좌우 길이 5%씩 줄이기-->
                <input type="text" placeholder="아이디/이메일" v-model="login_email" />
                <input type="password" placeholder="비밀 번호" v-model="login_psw" />
                <input type="checkbox" id="login_auto" v-model="login_auto" />
                <label for="login_auto">계정 기억하기</label>
                <input type="submit" value="로그인 하기" />
            </form>
        </div>
        <div class="login_line">Or</div>
        <!--중간 선에 or 글자 나오게 하기-->
        <div class="login_sns-wrapper">
            <div class="login_sns" style="background: red">
                <img src="@/image/star.png" style="width: 100%; height: 100%" />
            </div>
            <div class="login_sns" style="background: blue">
                <img src="@/image/star.png" style="width: 100%; height: 100%" />
            </div>
            <div class="login_sns" style="background: yellow">
                <img src="@/image/star.png" style="width: 100%; height: 100%" />
            </div>
        </div>
        <div class="login_gotoRegister">
            아직 계정이 없나요?
            <router-link to="/register" style="color: #3b00ff"> 회원가입하러 가기 </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            login_email: "",
            login_psw: "",
            login_auto: false,
        };
    },
    methods: {
        request_login() {
            //로그인 시도, 입력 내용 확인
            console.log("로그인 시도");
            console.log("이메일", this.login_email);
            console.log("비밀번호", this.login_psw);
            console.log("자동 로그인", this.login_auto);
            alert("이메일 : " + this.login_email + "\n비밀번호 : " + this.login_psw + "\n자동 로그인 : " + this.login_auto);

            //로그인 버튼 클릭 시 입력 내용 빈 칸으로 바꿈
            //계정 기억하기 체크 시 이메일 칸 그대로 둠
            this.login_auto ? "" : (this.login_email = "");
            this.login_psw = "";
        },
    },
};
</script>

<style scoped></style>
