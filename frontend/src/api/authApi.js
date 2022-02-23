import http from "./http";

export async function checkLogin() {
    return http.post("/logincheck");
}

export async function requestLogin(inputData) {
    return http.post("/login", inputData);
}

export async function requestLogout(userIdx) {
    return http.post("/logout", userIdx);
}

export async function requestRegister(userInfo) {
    return http.post("/register", userInfo);
}
