<template>
    <!-- 1페이지 -->
    <div>
        <!-- 인사글 -->
        <div class="register-hello">반가워요 :)<br />프로필을 작성해주세요.</div>
        <!-- 프로필 사진 설정(text) -->
        <div class="register-profile"><img src="../../../public/img/star.png" /></div>
        <!-- 정보 입력 -->
        <div class="register-input1">
            <!-- 아이디 입력 창(text) -->
            <div class="row">
                <label class="col-3">이메일</label>
                <input class="col-9" type="email" v-model="userEmail" placeholder="이메일" />
            </div>
            <!-- 비밀번호&비밀번호 확인 입력 창 -->
            <div class="row">
                <label class="col-3">비밀번호</label>
                <input class="col-4 mr-4" type="password" v-model="userPassword" placeholder="비밀번호" />
                <input class="col-4" type="password" v-model="rePassword" placeholder="재입력" />
            </div>
            <!-- 닉네임 입력 창(text) -->
            <div class="row">
                <label class="col-3">닉네임</label>
                <input class="col-9" type="text" v-model="userNickname" placeholder="닉네임" />
            </div>
            <!-- 생년월일 입력 창 -->
            <div class="row">
                <label class="col-3">생년월일</label>
                <select class="col-3 mr-4" v-model="userBirth.year">
                    <option v-for="year in date.years" :key="year">
                        {{ year }}
                    </option>
                </select>
                <select class="col-2 mr-4" v-model="userBirth.month">
                    <option v-for="month in date.months" :key="month">
                        {{ month }}
                    </option>
                </select>
                <select class="col-2" v-model="userBirth.day">
                    <option v-for="day in date.days" :key="day">
                        {{ day }}
                    </option>
                </select>
            </div>
            <!-- 성별 입력 창(radio) -->
            <div class="row">
                <label class="col-3">성별</label>
                <input type="radio" id="inputGenderMale" name="gender" value="male" v-model="userGender" />
                <label class="col-4 mr-4" for="inputGenderMale">남성</label>
                <input type="radio" id="inputGenderFemale" name="gender" value="female" v-model="userGender" />
                <label class="col-4" for="inputGenderFemale">여성</label>
            </div>
            <!-- 직업 입력 창(select) -->
            <div class="row">
                <label class="col-3">직업</label>
                <select class="col-9" v-model="userJob">
                    <option v-for="job in jobs" :key="job">
                        {{ job }}
                    </option>
                </select>
            </div>
        </div>
        <!-- 다음 페이지 버튼(링크?) -->
        <div class="row">
            <div class="register-step col-5 text-center" @click="nextStep">다음</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: {
                years: [
                    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
                    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
                ],
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            jobs: ["직업을 선택해주세요", "직업1", "직업2", "직업3", "직업4", "직업5"],

            // 입력 정보
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
            userJob: "직업을 선택해주세요",
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
            else if (this.userJob === "직업을 선택해주세요") alert("직업 입력 필요");
            // 모든 정보 올바르게 입력 시 vuex에 정보 저장 후 다음 단계로 이동
            else {
                this.$store.state.auth.registerInfo.email = this.userEmail;
                this.$store.state.auth.registerInfo.password = this.userPassword;
                this.$store.state.auth.registerInfo.username = this.userNickname;
                this.$store.state.auth.registerInfo.birth = this.userBirth;
                this.$store.state.auth.registerInfo.gender = this.userGender;
                this.$store.state.auth.registerInfo.job = this.userJob;
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
        this.userEmail = this.$store.state.auth.registerInfo.email;
        this.userPassword = this.$store.state.auth.registerInfo.password;
        this.userNickname = this.$store.state.auth.registerInfo.username;
        this.userBirth = this.$store.state.auth.registerInfo.birth;
        this.userGender = this.$store.state.auth.registerInfo.gender;
        this.userJob = this.$store.state.auth.registerInfo.job;
    },
};
</script>
