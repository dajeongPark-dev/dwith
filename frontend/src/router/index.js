import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        // 홈 화면은 "/" 또는 "/main" 으로 접속 가능
        path: "/",
        alias: ["/main"],
        name: "Home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage,
    },
    {
        //게시판 화면
        path: "/bulletinBoard",
        name: "bulletinBoard",
        // route level code-splitting
        // this generates a separate chunk (bulletinBoard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/BulletinBoard.vue"),
    },
    {
        //채팅 화면
        path: "/chatting",
        name: "chatting",
        // route level code-splitting
        // this generates a separate chunk (chatting.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Chatting.vue"),
    },
    {
        //정보 화면
        path: "/information",
        name: "information",
        // route level code-splitting
        // this generates a separate chunk (information.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Information.vue"),
    },
    {
        //내 정보 화면
        path: "/myPage",
        name: "myPage",
        // route level code-splitting
        // this generates a separate chunk (myPage.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/MyPage.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,

    //페이지 이동 시 스크롤을 가장 위로 옮김
    // scrollBehavior() {
    //     return { x: 0, y: 0, behavior: "instant" };
    // },
});

export default router;
