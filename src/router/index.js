import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bulletinBoard",
    name: "bulletinBoard",
    // route level code-splitting
    // this generates a separate chunk (bulletinBoard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bulletinBoard" */ "../views/BulletinBoard.vue"),
  },
  {
    path: "/chatting",
    name: "chatting",
    // route level code-splitting
    // this generates a separate chunk (chatting.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "chatting" */ "../views/Chatting.vue"),
  },
  {
    path: "/information",
    name: "information",
    // route level code-splitting
    // this generates a separate chunk (information.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "information" */ "../views/Information.vue"),
  },
  {
    path: "/myPage",
    name: "myPage",
    // route level code-splitting
    // this generates a separate chunk (myPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "myPage" */ "../views/MyPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;