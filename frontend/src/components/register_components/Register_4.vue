<template>
    <div>
        <!-- 인사글 -->
        <div class="register-hello">이제 드윗과 함께<br />여러분의 꿈을 설계해 보세요!</div>
        <div class="register-input4">
            <!-- 모두 동의 체크 -->
            <div class="register-input4-bg select-all" style="padding: 15px 18px">
                <input type="checkbox" name="conditionAll" @change="selectAll($event)" />
                <label>모두 동의</label>
            </div>
            <!-- 이용 약관(check) -->
            <div class="register-input4-bg select-each" style="padding: 10px 20px 10px 20px">
                <div>
                    <input type="checkbox" id="require1" name="conditionCheck" @change="checkCondition($event)" />
                    <label>서비스 이용 약관 (필수)</label>
                </div>
                <div>
                    <input type="checkbox" id="require2" name="conditionCheck" @change="checkCondition($event)" />
                    <label>개인정보 수집 및 이용(필수)</label>
                </div>
                <div>
                    <input type="checkbox" id="require3" name="conditionCheck" @change="checkCondition($event)" />
                    <label>만 14세 이상(필수)</label>
                </div>
                <div>
                    <input type="checkbox" name="conditionCheck" @change="checkCondition($event)" />
                    <label>위치정보 수집 및 이용(선택)</label>
                </div>
                <div>
                    <input type="checkbox" name="conditionCheck" @change="checkCondition($event)" />
                    <label>마케팅 정보 수신 동의(선택)</label>
                </div>
            </div>
        </div>
        <!-- 회원가입 완료 버튼 -->
        <button class="register-finish" @click="requestRegister">동의 하고 시작하기</button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        // 이전 단계로 이동
        previousStep() {
            this.$emit("previousStep");
        },
        // 회원가입 요청
        requestRegister() {
            // 약관 모두 동의 시 서버로 회원가입 요청
            var require1 = document.getElementById("require1").checked;
            var require2 = document.getElementById("require2").checked;
            var require3 = document.getElementById("require3").checked;
            if (require1 && require2 && require3) {
                console.log("회원가입 요청");
                this.$store.dispatch("requestRegister", this.$store.state.auth.userInfo);
            } else alert("약관 동의 필요");
        },
        // 전체 체크 하기
        selectAll(e) {
            const checkboxes = document.getElementsByName("conditionCheck");
            checkboxes.forEach((checkbox) => {
                checkbox.checked = e.target.checked;
            });
        },
        // 약관 동의 체크시 전체 체크 확인
        checkCondition(e) {
            const selectall = document.querySelector('input[name="conditionAll"]');
            if (e.target.checked === false) {
                selectall.checked = false;
            }
        },
    },
    created() {
        console.log("Register_4 created");
    },
    mounted() {
        console.log("Register_4 mounted");
    },
};
</script>
