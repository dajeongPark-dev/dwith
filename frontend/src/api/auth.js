import http from "./http";

export async function requestLogin(inputData) {
    console.log("보내는 정보")
    console.log(inputData);

    return http.post("/login", inputData);
}

export async function requestRegister(userInfo) {
    console.log("보내는 정보")
    console.log(userInfo);

    return http.post("/register", userInfo);
}