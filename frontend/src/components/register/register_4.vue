<template>
    <div>
        <div class="register_hello4">이제 드윗과 함께<br />여러분의 꿈을 설계해 보세요!</div>
        <form>
            <div class="register_allCheck">
                <input type="checkbox" />
                <label>모두 동의</label>
            </div>
            <div class="register_checkList">
                <input type="checkbox" class="register_checkEssential" />
                <label>서비스 이용 약관 (필수)</label><br />
                <input type="checkbox" class="register_checkEssential" />
                <label>개인정보 수집 및 이용 (필수)</label><br />
                <input type="checkbox" class="register_checkEssential" />
                <label>만 14세 이상 (필수)</label><br />
                <input type="checkbox" />
                <label>위치정보 수집 및 이용 (선택)</label><br />
                <input type="checkbox" />
                <label>마케팅 정보 수신 동의 (선택)</label><br />
            </div>
            <input type="submit" value="동의하고 시작하기" />
            {{ user }}
        </form>
    </div>
</template>

<script>
export default {
    name: "register_4",
    props: {
        user: {
            type: Object,
            require: "true",
        },
    },
};
</script>

<style scoped></style>
