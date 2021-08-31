<template>
  <div>
    <div class="register_hello1">반가워요:)<br />프로필을 작성해주세요.</div>
    <form class="register_inputInformation">
      <div style="text-align: center; margin-bottom: 55px">
        <b-avatar
          class="register_profileImage"
          text="??"
          size="115px"
          badge="(+)"
        ></b-avatar>
      </div>
      <label for="inputNickname">닉네임</label>
      <input
        id="inputNickname"
        v-model="form.userNickname"
        type="text"
        placeholder="닉네임을 입력해주세요"
        required
      />
      <label for="inputBirth">생년월일</label>
      <select
        id="inputBirth"
        v-model="form.userYear"
        style="width: 23%; margin-right: 5%"
      >
        <option v-for="year in date.years" :key="year">
          {{ year }}
        </option>
      </select>
      <select v-model="form.userMonth" style="width: 17%; margin-right: 5%">
        <option v-for="month in date.months" :key="month">
          {{ month }}
        </option>
      </select>
      <select v-model="form.userDay" style="width: 17%">
        <option v-for="day in date.days" :key="day">
          {{ day }}
        </option>
      </select>
      <label for="inputGender">성별</label>
      <div class="register_radioGender">
        <input
          type="radio"
          id="inputGenderMale"
          name="gender"
          value="male"
          v-model="form.userGender"
        />
        <label for="inputGenderMale" style="margin-right: 3%">남성</label>
        <input
          type="radio"
          id="inputGenderFemale"
          name="gender"
          value="female"
          v-model="form.userGender"
        />
        <label for="inputGenderFemale">여성</label>
      </div>
      <label for="inputJob">직업</label>
      <select id="inputJob" v-model="form.userJob" style="width: 67%">
        <option :value="null">직업을 선택해 주세요.</option>
        <option v-for="job in jobs" :key="job">
          {{ job }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "register_1",
  data() {
    return {
      form: {
        userNickname: "",
        userYear: 2000,
        userMonth: 1,
        userDay: 1,
        userGender: "male",
        userJob: "null",
      },
      date: {
        years: [
          1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
          1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
          2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
          2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
        ],
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        days: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ],
      },
      jobs: ["AAA", "BBB", "CCC", "DDD"],
    };
  },
};
</script>

<style scoped>
/* 인삿말 스타일 */
.register_hello1 {
  text-align: left;
  font: normal normal bold 24px/35px Noto Sans KR;
  letter-spacing: -0.96px;
  color: #000000;
  opacity: 1;

  margin-bottom: 70px;
}
/* 프로필 이미지 적용란 스타일 */
.register_profileImage {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #bcbcbc;
  opacity: 1;
}
/* 각종 정보 입력 칸 스타일 */
.register_inputInformation > label {
  text-align: left;
  font: normal normal bold 13px/46px Noto Sans KR;
  letter-spacing: -0.52px;
  color: #00000099;
  opacity: 1;
  width: 33%;
  height: 46px;
  margin: 10px 0px 10px 0px;
  float: left;
  clear: left;
}
.register_inputInformation input[type="text"] {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #00000029;
  border: 1px solid #b7b7b7;
  border-radius: 10px;
  opacity: 1;

  font: normal normal bold 15px/46px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #4d4d4d99;

  width: 67%;
  height: 46px;
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  display: inline-block;
}
.register_inputInformation select {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #00000029;
  border: 1px solid #b7b7b7;
  border-radius: 10px;
  opacity: 1;

  font: normal normal bold 15px/46px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #4d4d4d99;

  height: 46px;
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  display: inline-block;
}
.register_radioGender input[type="radio"] {
  display: none;
}
.register_radioGender input[type="radio"] + label {
  display: inline-block;
  cursor: pointer;
  height: 46px;
  width: 32%;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #00000029;
  border: 1px solid #b7b7b7;
  border-radius: 10px;
  opacity: 1;

  text-align: center;
  font: normal normal bold 15px/46px Noto Sans KR;
  letter-spacing: -0.6px;
  color: #4d4d4d99;
  opacity: 1;
}
.register_radioGender input[type="radio"]:checked + label {
  background-color: #333;
  color: #fff;
}
</style>
