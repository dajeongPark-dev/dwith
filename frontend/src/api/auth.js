import http from "./http";

export async function requestLogin(inputData) {
    return http.post("/login", inputData);
}

export async function requestRegister(userInfo) {
    return http.post("/register", userInfo);
}
