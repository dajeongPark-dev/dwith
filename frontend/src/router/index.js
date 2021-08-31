import Vue from "vue";
import VueRouter from "vue-router";

//각종 화면 리스트
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import BulletinBoard from "../views/BulletinBoard.vue";
import Chatting from "../views/Chatting.vue";
import Information from "../views/Information.vue";
import MyPage from "../views/MyPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    //로그인 화면
    path: "/login",
    name: "login",
    component: Login,
    // component: () =>
    //   import(
    //     /* webpackChunkName: "login" */ "../views/Login.vue"
    //   ),
  },
  {
    //회원가입 화면
    path: "/register",
    name: "register",
    component: Register,
    // component: () =>
    //   import(
    //     /* webpackChunkName: "register" */ "../views/Register.vue"
    //   ),
  },
  {
    //홈 화면
    path: "/",
    name: "home",
    component: Home,
  },
  {
    //게시판 화면
    path: "/bulletinBoard",
    name: "bulletinBoard",
    component: BulletinBoard,
    // route level code-splitting
    // this generates a separate chunk (bulletinBoard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(
    //     /* webpackChunkName: "bulletinBoard" */ "../views/BulletinBoard.vue"
    //   ),
  },
  {
    //채팅 화면
    path: "/chatting",
    name: "chatting",
    component: Chatting,
    // route level code-splitting
    // this generates a separate chunk (chatting.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "chatting" */ "../views/Chatting.vue"),
  },
  {
    //정보 화면
    path: "/information",
    name: "information",
    component: Information,
    // route level code-splitting
    // this generates a separate chunk (information.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "information" */ "../views/Information.vue"),
  },
  {
    //내 정보 화면
    path: "/myPage",
    name: "myPage",
    component: MyPage,
    // route level code-splitting
    // this generates a separate chunk (myPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "myPage" */ "../views/MyPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
