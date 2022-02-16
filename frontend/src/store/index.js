import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth,
        user: user,
    },
    // 새로고침시 변수가 초기화되는 것을 방지
    plugins: [createPersistedState({ paths: [user] })],
});
