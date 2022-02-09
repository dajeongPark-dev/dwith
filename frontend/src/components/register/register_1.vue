<template>
    <div>
        <div class="register_hello1">반가워요:)<br />프로필을 작성해주세요.</div>
        <form class="register_inputInformation" @submit.prevent="sbm">
            <div style="text-align: center; margin-bottom: 55px">
                <b-avatar class="register_profileImage" size="115px" badge badge-offset="-12px" button :src="require('@/image/star.png')" @click="changeProfileImage">
                    <template #badge>
                        <img src="@/image/star.png" width="40" height="40" style="border: 1px black solid; border-radius: 20px" />
                    </template>
                </b-avatar>
            </div>
            <label>이메일</label>
            <input v-model="inputInformation.userEmail" type="email" placeholder="이메일을 입력해주세요" required />
            <label>비밀번호</label>
            <input v-model="inputInformation.userPassword" type="password" placeholder="비밀번호를 입력해주세요" required />
            <label>비밀번호 재입력</label>
            <input value="" type="password" placeholder="비밀번호를 다시 입력해주세요" required />
            <label>이름</label>
            <input v-model="inputInformation.userName" type="text" placeholder="이름 입력해주세요" required />
            <label>닉네임</label>
            <input v-model="inputInformation.userNickname" type="text" placeholder="닉네임을 입력해주세요" required />
            <label>생년월일</label>
            <select v-model="inputInformation.userBirthYear" style="width: 23%; margin-right: 5%">
                <option v-for="year in date.years" :key="year">
                    {{ year }}
                </option>
            </select>
            <select v-model="inputInformation.userBirthMonth" style="width: 17%; margin-right: 5%">
                <option v-for="month in date.months" :key="month">
                    {{ month }}
                </option>
            </select>
            <select v-model="inputInformation.userBirthDay" style="width: 17%">
                <option v-for="day in date.days" :key="day">
                    {{ day }}
                </option>
            </select>
            <label>성별</label>
            <div class="register_radioGender">
                <input type="radio" id="inputGenderMale" name="gender" value="male" v-model="inputInformation.userGender" />
                <label for="inputGenderMale" style="margin-right: 3%">남성</label>
                <input type="radio" id="inputGenderFemale" name="gender" value="female" v-model="inputInformation.userGender" />
                <label for="inputGenderFemale">여성</label>
            </div>
            <label>직업</label>
            <select v-model="inputInformation.userJob" style="width: 67%">
                <option value="null">직업을 선택해 주세요.</option>
                <option v-for="job in jobs" :key="job">
                    {{ job }}
                </option>
            </select>
            <div class="register_nextStep" @click="gotoNextStep">다음</div>
        </form>
    </div>
</template>

<script>
export default {
    name: "register_1",
    props: {
        userInformation: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {
            inputInformation: {
                userEmail: this.userInformation.userEmail,
                userPassword: this.userInformation.userPassword,
                userName: this.userInformation.userName,
                userNickname: this.userInformation.userNickname,
                userBirthYear: this.userInformation.userBirthYear,
                userBirthMonth: this.userInformation.userBirthMonth,
                userBirthDay: this.userInformation.userBirthDay,
                userGender: this.userInformation.userGender,
                userJob: this.userInformation.userJob,
            },
            date: {
                years: [
                    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
                    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
                ],
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            jobs: ["AAA", "BBB", "CCC", "DDD", "EEE"],
        };
    },
    methods: {
        changeProfileImage() {
            alert("사진 변경");
        },
        gotoNextStep() {
            this.$emit("firstStepClear", this.inputInformation);
        },
    },
};
</script>

<style scoped></style>
