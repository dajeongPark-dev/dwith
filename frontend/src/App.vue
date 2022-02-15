<template>
    <div id="app">
        <router-view />
        <!-- 하단 네비게이션 바(로그인 창, 회원가입 창일 때 안보임) -->
        <Nav v-if="isLogin" />
    </div>
</template>
<script>
import Nav from "@/components/NavBar.vue";
export default {
    data() {
        return {
            isLogin: false,
        };
    },
    created() {
        console.log("App created");
    },
    mounted() {
        // $.initialize();
        console.log("App mounted");
    },
    components: {
        Nav,
    },
};
</script>
