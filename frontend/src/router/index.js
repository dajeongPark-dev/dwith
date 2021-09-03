import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    //로그인 화면
    path: "/main",
    name: "main",
    component: () => import("../views/Home.vue"),
  },
  {
    //회원가입 화면
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    //홈 화면
    path: "/",
    name: "login",
    component: Login,
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
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "instant" };
  },
});

export default router;
