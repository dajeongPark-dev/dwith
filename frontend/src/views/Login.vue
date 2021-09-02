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
      <router-link to="/register">회원가입하러 가기</router-link>
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
      login_auto: true,
    };
  },
  methods: {
    request_login() {
      //로그인 시도, 입력 내용 확인
      console.log("로그인 시도");
      console.log("이메일", this.login_email);
      console.log("비밀번호", this.login_psw);
      console.log("자동 로그인", this.login_auto);
      alert(
        "이메일 : " +
          this.login_email +
          "\n비밀번호 : " +
          this.login_psw +
          "\n자동 로그인 : " +
          this.login_auto
      );

      //로그인 버튼 클릭 시 입력 내용 빈 칸으로 바꿈
      //계정 기억하기 체크 시 이메일 칸 그대로 둠
      this.login_auto ? "" : (this.login_email = "");
      this.login_psw = "";
    },
  },
};
</script>

<style scoped>
.login {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 120px;
}
.login a {
}
.login_logo {
  width: 60px;
  height: 60px;
  margin: 0 auto 100px;

  background-color: plum;
}
.login_inputLogin input:focus {
  outline: none;
}
.login_inputLogin input[type="text"],
input[type="password"] {
  width: 100%;
  margin-bottom: 30px;
  border-style: none;
  border-bottom: 2px solid #c6c6c6;

  padding: 2px 5px;
  text-align: left;
  font: normal normal bold 14px/25px Noto Sans KR;
  letter-spacing: -0.56px;
  color: #000000;
  opacity: 0.6;
}
.login_inputLogin input[type="checkbox"] {
  width: 20px;
  height: 20px;

  background-color: #dbdbdb;
  box-shadow: inset 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
}
/* .login_inputLogin input[type="checkbox"]:checked {
}

.login_inputLogin input[type="checkbox"]:hover {
} */
.login_inputLogin input[type="checkbox"] + label {
  display: inline-block;
  font: normal normal normal 12px/20px Noto Sans KR;
  letter-spacing: -0.48px;
  color: #000000;
  opacity: 0.4;

  margin-left: 10px;
  position: relative;
  top: -5px;
}
.login_inputLogin input[type="submit"] {
  width: 100%;
  height: 50px;
  margin-top: 50px;

  background: transparent linear-gradient(284deg, #0535ff 0%, #c865ff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 29px;
  opacity: 1;
  /* transition: all 0.5s; */

  text-align: center;
  font: normal normal medium 19px/25px Noto Sans KR;
  letter-spacing: -0.76px;
  color: #ffffff;
}
.login_inputLogin input[type="submit"]:active {
  /* background: transparent linear-gradient(284deg, #c865ff 0%, #0535ff 100%) 0%; */
}
.login_line {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font: normal normal bolder 17px/17px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #3b00ff;
  opacity: 1;
  margin: 30px 0px;
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
.login_sns {
  width: 42px;
  height: 42px;
  margin: 0px 10px;
  float: left;
}
.login_sns-wrapper {
  width: 186px;
  height: 42px;
  margin: 0 auto;
}
.login_gotoRegister {
  margin-top: 100px;
  margin-bottom: 60px;
  clear: both;
  text-align: center;
  font: normal normal normal 12px/17px Noto Sans KR;
  letter-spacing: -0.48px;
  opacity: 1;
}
</style>
