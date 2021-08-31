<template>
  <div>
    <div class="login_logo">logo</div>
    <div class="login_inputLogin">
      <form @submit.prevent="request_login">
        <label>아이디/이메일</label>
        <input type="text" id="login_email" v-model="login_email" /><br />
        <label>비밀 번호 </label>
        <input type="password" id="login_psw" v-model="login_psw" /><br />
        <input type="checkbox" id="login_auto" v-model="login_auto" />
        <label>계정 기억하기</label><br />
        <input type="submit" value="로그인 하기" />
      </form>
      <hr />
      <!--중간 선에 or 글자 나오게 하기-->
      <div>
        <div class="login_sns">구글</div>
        <div class="login_sns">페이스북</div>
        <div class="login_sns">카카오톡</div>
      </div>
      <br />
      <div class="gotoRegister">
        <span>아직 계정이 없나요?</span>
        <router-link to="/register">회원가입하러 가기</router-link>
      </div>
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

      //로그인 버튼 클릭 시 입력 내용 빈 칸으로 바꿈
      //계정 기억하기 체크 시 이메일 칸 그대로 둠
      this.login_auto ? "" : (this.login_email = "");
      this.login_psw = "";
    },
  },
};
</script>

<style scoped>
@import "../css/loginStyle.css";
</style>
