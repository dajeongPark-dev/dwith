import Vue from "vue";
import Vuex from "vuex";
import autoLogin from "./modules/autoLogin";
import user from "./modules/user";

// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: user,
        autoLogin: autoLogin,
    },
    // 새로고침시 변수가 초기화되는 것을 방지
    // plugins: [createPersistedState({ paths: ["user", "autoLogin"] })],
});
